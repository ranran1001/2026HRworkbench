(() => {
  const entry = document.querySelector('#open-hr-functions');
  const dialog = document.querySelector('#task-dialog');
  const content = document.querySelector('#dialog-content');
  let catalog;
  let returnView = 'home';

  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  const getFunctions = async () => {
    if (catalog) return catalog;
    const response = await fetch('assets/hr-functions-catalog.json');
    if (!response.ok) throw new Error('函数目录暂时无法读取，请刷新页面再试。');
    catalog = await response.json();
    return catalog;
  };
  const findFunction = (name) => catalog.functions.find((item) => item.name === name);

  function itemDetail(item, expanded = false) {
    return `<div class="function-detail ${expanded ? 'is-open' : ''}" ${expanded ? '' : 'hidden'}>
      <div class="function-formula-label">HR 示例公式</div>
      <div class="function-formula"><code>${esc(item.formula)}</code><button class="outline-button function-copy" type="button" data-copy="${esc(item.name)}">复制公式</button></div>
      <details class="function-edit"><summary>怎么改成我自己的表格</summary><p>${esc(item.guide)}</p></details>
    </div>`;
  }
  function topCard(item, index) {
    return `<article class="function-card function-top-card"><div class="function-card-heading"><span class="function-rank">${String(index + 1).padStart(2, '0')}</span><div><strong>${esc(item.name)}</strong><p>${esc(item.description)}</p></div></div>${itemDetail(item, true)}</article>`;
  }
  function listCard(item) {
    return `<article class="function-card function-list-card" data-function-card="${esc(item.name)}"><button class="function-list-toggle" type="button" data-function-toggle="${esc(item.name)}" aria-expanded="false"><span><strong>${esc(item.name)}</strong><small>${esc(item.description)}</small></span><span class="function-toggle-label">查看公式＋</span></button>${itemDetail(item)}</article>`;
  }
  function renderHome() {
    returnView = 'home';
    const top = catalog.topOrder.map(findFunction).filter(Boolean);
    content.innerHTML = `<div class="dialog-kicker">HR EXCEL FUNCTIONS · 精选公式</div><h2 class="dialog-title">HR 常用 Excel 公式</h2>
      <p class="function-intro">按招聘、员工信息、考勤和薪酬等日常工作场景筛选。每个示例都能复制；“怎么改”会标出示例里的字段和需要替换的位置。</p>
      <div class="function-top-list">${top.map(topCard).join('')}</div>
      <div class="function-library-footer"><span>精选 ${top.length} 个高频公式</span><button class="primary-button" type="button" data-view-all>更多……查看全部 ${catalog.count} 个函数 <span>→</span></button></div>`;
  }
  function renderAll(query = '') {
    returnView = 'all';
    const q = query.trim().toLocaleLowerCase();
    const filtered = catalog.functions.filter((item) => !q || item.name.toLowerCase().includes(q) || item.description.toLocaleLowerCase().includes(q));
    content.innerHTML = `<div class="dialog-kicker">HR EXCEL FUNCTIONS · 函数目录</div><h2 class="dialog-title">全部 ${catalog.count} 个精选函数</h2>
      <p class="function-intro">按函数英文名称排序，可搜索名称或用途；点函数名称展开公式示例、复制按钮和逐项修改说明。</p>
      <div class="function-library-toolbar"><input id="function-search" type="search" placeholder="搜索函数名称或用途，例如：日期、统计、查找" value="${esc(query)}" /><button class="outline-button" type="button" data-view-home>回到前十</button></div>
      <div class="function-list" id="function-list">${filtered.map(listCard).join('') || '<p class="function-empty">没有找到相关函数，试试其他关键词。</p>'}</div>
      <p class="function-result-count">当前显示 ${filtered.length} 个函数 · 来源索引及 HR 公式案例已筛选整理</p>`;
    const search = content.querySelector('#function-search');
    search.addEventListener('input', () => {
      const start = search.selectionStart;
      const value = search.value;
      const list = content.querySelector('#function-list');
      const matches = catalog.functions.filter((item) => !value.trim() || item.name.toLowerCase().includes(value.trim().toLowerCase()) || item.description.toLocaleLowerCase().includes(value.trim()));
      list.innerHTML = matches.map(listCard).join('') || '<p class="function-empty">没有找到相关函数，试试其他关键词。</p>';
      content.querySelector('.function-result-count').textContent = `当前显示 ${matches.length} 个函数 · 来源索引及 HR 公式案例已筛选整理`;
      search.focus(); search.setSelectionRange(start, start);
    });
  }
  async function copyFormula(button, item) {
    const original = button.textContent;
    try {
      await navigator.clipboard.writeText(item.formula);
      button.textContent = '已复制 ✓';
    } catch {
      const field = document.createElement('textarea');
      field.value = item.formula; field.setAttribute('readonly', '');
      field.style.position = 'fixed'; field.style.opacity = '0';
      document.body.append(field); field.select();
      const copied = document.execCommand('copy'); field.remove();
      if (copied) button.textContent = '已复制 ✓';
      else {
        const range = document.createRange();
        const code = button.closest('.function-formula').querySelector('code');
        range.selectNodeContents(code);
        const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range);
        button.textContent = '已选中，请复制';
      }
    }
    window.setTimeout(() => { if (button.isConnected) button.textContent = original; }, 2200);
  }
  async function open() {
    dialog.classList.add('functions-dialog');
    try {
      await getFunctions();
      renderHome();
    } catch (error) {
      content.innerHTML = `<div class="dialog-kicker">HR EXCEL FUNCTIONS</div><h2 class="dialog-title">暂时打不开函数目录</h2><p>${esc(error.message)}</p>`;
    }
    if (!dialog.open) dialog.showModal();
  }
  entry.addEventListener('click', open);
  entry.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); }
  });
  content.addEventListener('click', (event) => {
    if (event.target.closest('[data-view-all]')) { renderAll(); return; }
    if (event.target.closest('[data-view-home]')) { renderHome(); return; }
    const copyButton = event.target.closest('[data-copy]');
    if (copyButton) { copyFormula(copyButton, findFunction(copyButton.dataset.copy)); return; }
    const toggle = event.target.closest('[data-function-toggle]');
    if (toggle) {
      const card = toggle.closest('[data-function-card]');
      const details = card.querySelector('.function-detail');
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      details.hidden = expanded;
      toggle.querySelector('.function-toggle-label').textContent = expanded ? '查看公式＋' : '收起公式−';
    }
  });
  dialog.addEventListener('close', () => dialog.classList.remove('functions-dialog'));
})();

const modules = [
  { id: "org", number: "01", icon: "⌘", name: "组织与岗位", description: "组织、编制、岗位和职责", tasks: ["梳理组织架构", "制作岗位说明书", "跟进编制与用人需求"] },
  { id: "recruit", number: "02", icon: "◎", name: "招聘与人才获取", description: "需求、筛选、面试和录用", tasks: ["发布招聘需求", "安排面试", "整理候选人信息"] },
  { id: "onboard", number: "03", icon: "↗", name: "入职档案与合同", description: "入职、档案、合同和试用期", tasks: ["我要办入职", "检查档案完整性", "合同到期提醒", "办理合同续签", "跟进试用期转正"] },
  { id: "attendance", number: "04", icon: "◷", name: "考勤与假勤", description: "考勤、请假、加班和前置数据", tasks: ["处理考勤异常", "核对请假记录", "整理薪资前置数据"] },
  { id: "reward", number: "05", icon: "◇", name: "薪酬福利", description: "薪酬、社保、公积金和福利", tasks: ["核对薪酬数据", "办理社保公积金事项", "发放员工福利"] },
  { id: "talent", number: "06", icon: "✦", name: "绩效培训与发展", description: "绩效、培训和人才成长", tasks: ["组织培训", "跟进绩效周期", "整理培训反馈"] },
  { id: "relation", number: "07", icon: "⊙", name: "员工关系与合规", description: "咨询、离职、争议和风险", tasks: ["处理员工咨询", "办理员工离职", "整理争议处理材料"] },
  { id: "data", number: "08", icon: "▥", name: "HR数据与运营", description: "数据、系统、报表和留痕", tasks: ["制作HR月报", "维护人员数据", "查找流程和模板"] },
];

const onboardingDetail = {
  kicker: "TASK 03 · 入职档案与合同",
  title: "我要办入职",
  intro: "从入职前准备到试用期跟进，把每个责任人、截止时间和留痕点串起来。公开版使用示例字段，不放真实员工信息。",
  sections: [
    ["入职前 1—2 天", ["确认入职日期、部门、岗位、直属上级和入职引导人", "准备工位、办公用品、考勤/门禁和必要系统权限", "发送报到通知与材料清单，向部门确认首周安排"]],
    ["入职当天", ["核验必要材料并登记缺失项", "完成合同及相关文件签署，建立档案和花名册基础记录", "完成公司介绍、部门交接、岗位说明和系统使用引导"]],
    ["入职后跟进", ["设置第 7 天、第 1 个月和转正前提醒", "记录工作适应、问题反馈、辅导动作和下一步", "转正前收集员工小结、直属上级评价、部门意见并归档"]],
    ["责任人", ["HR：发起、提醒、复核和归档；部门/直属上级：岗位导入与评价；行政/IT：条件准备；员工：提交材料并反馈"]],
    ["模块内 AI 辅助", ["可让 AI 根据岗位和入职日期生成待办清单、缺失项提醒和沟通草稿；涉及劳动合同、工资、社保、假勤或解除终止时，只能辅助整理，必须按所在地最新政策和公司制度复核。"]],
  ],
};

const taskDetails = {
  "检查档案完整性": {
    kicker: "TASK 03 · 档案管理",
    title: "检查档案完整性",
    intro: "快速确认某名员工缺哪些材料、谁来补、是否已经核验和归档。",
    sections: [
      ["检查顺序", ["先核对员工主记录：姓名、工号、部门、岗位和入职日期", "再检查入职、劳动关系、在职过程、离职归档四类材料", "对缺失项标记负责人、截止时间和补交状态"]],
      ["不要这样做", ["不把身份证、电话、住址、薪资等真实信息放入公开演示数据", "不把所有材料都默认成每名员工必交，岗位和法律要求不同要单独标注"]],
      ["模块内 AI 辅助", ["可根据岗位和员工状态生成缺失项清单、催办消息和归档目录；涉及材料必要性时要求 AI 标注依据并由 HR 复核。"]],
    ],
  },
  "合同到期提醒": {
    kicker: "TASK 03 · 合同台账",
    title: "合同到期提醒",
    intro: "把合同开始日、结束日、提醒窗口和责任人放在同一条记录里，避免只记得日期却没人处理。",
    sections: [
      ["需要录入", ["员工/工号、部门、岗位、合同编号、合同类型", "合同开始日、结束日或期限、提醒提前天数", "当前状态、责任人、处理记录和证据链接"]],
      ["提醒逻辑", ["正常 → 预提醒 → 待处理 → 临近到期 → 已到期", "提醒只负责把事项推到 HR 面前，不自动判断是否续签或终止"]],
      ["模块内 AI 辅助", ["可根据即将到期清单生成部门征询、员工沟通和内部跟进草稿；合同期限、通知期限和法律后果必须按最新政策复核。"]],
    ],
  },
  "办理合同续签": {
    kicker: "TASK 03 · 合同续签",
    title: "办理合同续签",
    intro: "将部门意见、员工意向、HR 复核、审批、签署和归档串成一条可追踪记录。",
    sections: [
      ["标准路径", ["核对合同信息和员工状态 → 征询部门意见 → 征询员工意向 → 形成审批记录 → 签署/送达 → 更新台账和档案"]],
      ["关键留痕", ["保留通知、意见、协商、审批、签收和合同文件状态；不要只记录最终的“续签/不续签”结果"]],
      ["风险提示", ["资料中的续签提前天数和逾期后果存在不同口径，工作台将其设为可配置项，不把旧资料中的固定期限直接当成通用规则。"]],
    ],
  },
};

const STORAGE_KEY = "hr-workbench-demo-v06";
const defaultWorkState = {
  archive: { employee: "员工001", department: "市场部", entry: true, identity: true, education: false, contract: true, training: false },
  contract: { employee: "员工002", endDate: "2026-10-20", days: 30 },
  queue: { archive: { text: "待补充", className: "status-warn" }, contract: { text: "待处理", className: "status-info" } },
};

function loadWorkState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...defaultWorkState, ...saved, archive: { ...defaultWorkState.archive, ...saved.archive }, contract: { ...defaultWorkState.contract, ...saved.contract }, queue: { ...defaultWorkState.queue, ...saved.queue } } : structuredClone(defaultWorkState);
  } catch (error) {
    return structuredClone(defaultWorkState);
  }
}

let workState = loadWorkState();

function saveWorkState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(workState));
}

function csvEscape(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function exportDemoCsv() {
  const headers = ["tool", "employee", "department", "endDate", "reminderDays", "entry", "identity", "education", "contract", "training", "status"];
  const rows = [
    ["archive", workState.archive.employee, workState.archive.department, "", "", workState.archive.entry, workState.archive.identity, workState.archive.education, workState.archive.contract, workState.archive.training, workState.queue.archive.text],
    ["contract", workState.contract.employee, "", workState.contract.endDate, workState.contract.days, "", "", "", "", "", workState.queue.contract.text],
  ];
  const csv = `\ufeff${headers.join(",")}\n${rows.map((row) => row.map(csvEscape).join(",")).join("\n")}\n`;
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  link.download = "hr-workbench-demo-data.csv";
  link.click();
  URL.revokeObjectURL(link.href);
}

function parseCsvLine(line) {
  const cells = []; let cell = ""; let quoted = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"' && line[i + 1] === '"' && quoted) { cell += '"'; i += 1; }
    else if (char === '"') quoted = !quoted;
    else if (char === "," && !quoted) { cells.push(cell); cell = ""; }
    else cell += char;
  }
  cells.push(cell);
  return cells;
}

function importDemoCsv(file) {
  const reader = new FileReader();
  reader.onload = () => {
    const lines = String(reader.result).replace(/^\ufeff/, "").trim().split(/\r?\n/).filter(Boolean);
    if (lines.length < 2) return;
    const headers = parseCsvLine(lines[0]);
    lines.slice(1).forEach((line) => {
      const values = parseCsvLine(line); const row = Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""]));
      if (row.tool === "archive") workState.archive = { employee: row.employee || "员工001", department: row.department || "市场部", entry: row.entry === "true", identity: row.identity === "true", education: row.education === "true", contract: row.contract === "true", training: row.training === "true" };
      if (row.tool === "contract") workState.contract = { employee: row.employee || "员工002", endDate: row.endDate || "2026-10-20", days: Number(row.reminderDays) || 30 };
    });
    saveWorkState(); applyQueueState();
    dialogContent.innerHTML = `<div class="dialog-kicker">DATA IN</div><h2 class="dialog-title">CSV 已导入</h2><p>示例数据已更新并保存在当前浏览器。打开档案检查或合同提醒工具即可继续处理。</p>`;
    dialog.showModal();
  };
  reader.readAsText(file, "utf-8");
}

function exportDemoXlsx() {
  if (!window.XLSX) {
    dialogContent.innerHTML = `<div class="dialog-kicker">XLSX</div><h2 class="dialog-title">Excel组件尚未加载</h2><p>当前页面暂时无法生成 Excel，请先联网刷新页面，或使用下载模板功能。</p>`;
    dialog.showModal();
    return;
  }
  const archiveRows = [["员工编号", "员工姓名", "部门", "岗位", "入职日期", "入职登记", "身份证明", "学历/资格材料", "劳动合同", "培训/试用期记录"], ["DEMO-001", workState.archive.employee, workState.archive.department, "", "", workState.archive.entry ? "√" : "✗", workState.archive.identity ? "√" : "✗", workState.archive.education ? "√" : "✗", workState.archive.contract ? "√" : "✗", workState.archive.training ? "√" : "✗"]];
  const contractRows = [["员工编号", "员工姓名", "部门", "岗位", "合同开始日期", "合同结束日期", "提前提醒天数", "处理备注"], ["DEMO-002", workState.contract.employee, "", "", "", workState.contract.endDate, workState.contract.days, ""]];
  const book = window.XLSX.utils.book_new();
  window.XLSX.utils.book_append_sheet(book, window.XLSX.utils.aoa_to_sheet(archiveRows), "档案完整性");
  window.XLSX.utils.book_append_sheet(book, window.XLSX.utils.aoa_to_sheet(contractRows), "合同到期提醒");
  window.XLSX.writeFile(book, "HR工作台当前数据.xlsx");
}

function importDemoXlsx(file) {
  if (!window.XLSX) {
    dialogContent.innerHTML = `<div class="dialog-kicker">XLSX</div><h2 class="dialog-title">Excel组件尚未加载</h2><p>当前页面暂时无法解析 Excel，请先联网刷新页面，或将 Excel 另存为 CSV 后上传。</p>`;
    dialog.showModal();
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const book = window.XLSX.read(reader.result, { type: "array", cellDates: true });
      book.SheetNames.forEach((sheetName) => {
        const rows = window.XLSX.utils.sheet_to_json(book.Sheets[sheetName], { defval: "" });
        if (!rows.length) return;
        const row = rows[0];
        if (sheetName.includes("档案") || Object.prototype.hasOwnProperty.call(row, "学历/资格材料")) {
          workState.archive = { employee: row["员工姓名"] || "员工001", department: row["部门"] || "市场部", entry: row["入职登记"] === "√", identity: row["身份证明"] === "√", education: row["学历/资格材料"] === "√", contract: row["劳动合同"] === "√", training: row["培训/试用期记录"] === "√" };
        }
        if (sheetName.includes("合同") || Object.prototype.hasOwnProperty.call(row, "合同结束日期")) {
          const date = row["合同结束日期"] instanceof Date ? row["合同结束日期"].toISOString().slice(0, 10) : String(row["合同结束日期"] || "2026-10-20").slice(0, 10);
          workState.contract = { employee: row["员工姓名"] || "员工002", endDate: date, days: Number(row["提前提醒天数"]) || 30 };
        }
      });
      saveWorkState(); applyQueueState();
      dialogContent.innerHTML = `<div class="dialog-kicker">DATA IN</div><h2 class="dialog-title">Excel 已导入</h2><p>档案和合同示例数据已更新并保存在当前浏览器。打开对应任务即可继续处理。</p>`;
    } catch (error) {
      dialogContent.innerHTML = `<div class="dialog-kicker">DATA IN</div><h2 class="dialog-title">Excel 导入失败</h2><p>请确认上传的是工作台模板或另存为 CSV 的表格。错误：${error.message}</p>`;
    }
    dialog.showModal();
  };
  reader.readAsArrayBuffer(file);
}

function applyQueueState() {
  document.querySelectorAll(".queue-row[data-queue-id]").forEach((row) => {
    const state = workState.queue[row.dataset.queueId];
    const badge = row.querySelector(".status");
    if (!state || !badge) return;
    badge.textContent = state.text;
    badge.className = `status ${state.className}`;
  });
}

function renderInteractiveTool(title) {
  if (title === "检查档案完整性") {
    const a = workState.archive;
    return `<div class="dialog-kicker">TASK TOOL · 档案检查</div><h2 class="dialog-title">检查档案完整性</h2><p>填写一名员工的示例资料状态，系统会生成缺失项和下一步处理建议。数据会保存在当前浏览器。</p><form id="archive-check-form" class="mini-tool-form"><label>员工姓名<input name="employee" value="${a.employee}" required /></label><label>部门<input name="department" value="${a.department}" required /></label><fieldset><legend>材料状态</legend><label class="check-row"><input type="checkbox" name="entry" ${a.entry ? "checked" : ""} /> 入职登记</label><label class="check-row"><input type="checkbox" name="identity" ${a.identity ? "checked" : ""} /> 身份证明</label><label class="check-row"><input type="checkbox" name="education" ${a.education ? "checked" : ""} /> 学历/资格材料</label><label class="check-row"><input type="checkbox" name="contract" ${a.contract ? "checked" : ""} /> 劳动合同</label><label class="check-row"><input type="checkbox" name="training" ${a.training ? "checked" : ""} /> 培训/试用期记录</label></fieldset><button class="primary-button" type="submit">保存并生成结果 <span>→</span></button></form><div id="archive-result" class="tool-result" hidden></div>`;
  }
  if (title === "合同到期提醒") {
    const c = workState.contract;
    return `<div class="dialog-kicker">TASK TOOL · 合同台账</div><h2 class="dialog-title">合同到期提醒</h2><p>根据合同结束日期和提醒提前天数，生成提醒状态。数据会保存在当前浏览器。</p><form id="contract-reminder-form" class="mini-tool-form"><label>员工姓名<input name="employee" value="${c.employee}" required /></label><label>合同结束日期<input name="endDate" type="date" value="${c.endDate}" required /></label><label>提前提醒天数<input name="days" type="number" value="${c.days}" min="0" required /></label><button class="primary-button" type="submit">保存并计算状态 <span>→</span></button></form><div id="contract-result" class="tool-result" hidden></div>`;
  }
  return "";
}

function bindInteractiveTool(title) {
  if (title === "检查档案完整性") {
    document.querySelector("#archive-check-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const labels = { entry: "入职登记", identity: "身份证明", education: "学历/资格材料", contract: "劳动合同", training: "培训/试用期记录" };
      const missing = Object.entries(labels).filter(([key]) => !form.get(key)).map(([, label]) => label);
      const name = form.get("employee");
      workState.archive = { employee: name, department: form.get("department"), ...Object.fromEntries(Object.keys(labels).map((key) => [key, Boolean(form.get(key))])) };
      workState.queue.archive = { text: missing.length ? "待补充" : "待核验", className: missing.length ? "status-warn" : "status-info" };
      saveWorkState(); applyQueueState();
      const result = document.querySelector("#archive-result");
      result.hidden = false;
      result.innerHTML = missing.length ? `<strong>${name}：发现 ${missing.length} 项待补充</strong><p>${missing.join("、")}</p><small>建议：指定责任人和截止时间后再标记为已归档。</small>` : `<strong>${name}：当前清单已齐全</strong><p>仍需要由 HR 完成原件核验、归档位置登记和最后更新时间记录。</p>`;
    });
  }
  if (title === "合同到期提醒") {
    document.querySelector("#contract-reminder-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const end = new Date(`${form.get("endDate")}T00:00:00`);
      const today = new Date(); today.setHours(0, 0, 0, 0);
      const remaining = Math.ceil((end - today) / 86400000);
      const days = Number(form.get("days"));
      const status = remaining < 0 ? "已到期" : remaining <= days ? "进入提醒窗口" : "暂未到提醒窗口";
      const queueStatus = remaining < 0 ? { text: "已到期", className: "status-warn" } : remaining <= days ? { text: "待处理", className: "status-info" } : { text: "未到窗口", className: "status-soft" };
      workState.contract = { employee: form.get("employee"), endDate: form.get("endDate"), days };
      workState.queue.contract = queueStatus;
      saveWorkState(); applyQueueState();
      const result = document.querySelector("#contract-result");
      result.hidden = false;
      result.innerHTML = `<strong>${form.get("employee")}：${status}</strong><p>合同结束日：${form.get("endDate")} · 剩余 ${remaining} 天 · 提前 ${days} 天提醒</p><small>下一步：核对合同台账、部门意见和员工意向；不要仅凭公式自动决定续签或终止。</small>`;
    });
  }
}

const moduleGrid = document.querySelector("#module-grid");
const taskList = document.querySelector("#task-list");
const taskCount = document.querySelector("#task-count");
const emptyState = document.querySelector("#empty-state");
const searchInput = document.querySelector("#global-search");
const dialog = document.querySelector("#task-dialog");
const dialogContent = document.querySelector("#dialog-content");

function hydrateTemplateLinks() {
  if (!window.HR_XLSX_TEMPLATES) return;
  const prefix = "data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,";
  const archiveLink = document.querySelector("#archive-template-link");
  const contractLink = document.querySelector("#contract-template-link");
  if (archiveLink) archiveLink.href = prefix + window.HR_XLSX_TEMPLATES.archive;
  if (contractLink) contractLink.href = prefix + window.HR_XLSX_TEMPLATES.contract;
}

hydrateTemplateLinks();

const allTasks = modules.flatMap((module) => module.tasks.map((title) => ({
  title,
  moduleId: module.id,
  moduleName: module.name,
  description: module.description,
})));

function renderModules() {
  moduleGrid.innerHTML = modules.map((module) => `
    <article class="module-card" data-module="${module.id}">
      <div class="module-number"><span>${module.number}</span><span>→</span></div>
      <div class="module-icon">${module.icon}</div>
      <h3>${module.name}</h3>
      <p>${module.description}</p>
    </article>
  `).join("");
  moduleGrid.querySelectorAll(".module-card").forEach((card) => card.addEventListener("click", () => {
    document.querySelectorAll(".module-card").forEach((item) => item.classList.remove("is-selected"));
    card.classList.add("is-selected");
    renderTasks("", card.dataset.module);
    document.querySelector("#task-panel").scrollIntoView({ behavior: "smooth", block: "center" });
  }));
}

function renderTasks(query = "", moduleId = "") {
  const normalized = query.trim().toLowerCase();
  const tasks = allTasks.filter((task) => {
    const matchesQuery = !normalized || `${task.title} ${task.moduleName} ${task.description}`.toLowerCase().includes(normalized);
    return matchesQuery && (!moduleId || task.moduleId === moduleId);
  });
  taskCount.textContent = `${tasks.length} 个任务`;
  taskList.innerHTML = tasks.map((task) => `
    <button class="task-item" data-task-title="${task.title}">
      <span class="task-main"><span class="task-title">${task.title}</span><span class="task-meta">${task.moduleName} · ${task.description}</span></span>
      <span class="task-arrow">→</span>
    </button>
  `).join("");
  emptyState.hidden = tasks.length > 0;
  taskList.querySelectorAll(".task-item").forEach((item) => item.addEventListener("click", () => openTask(item.dataset.taskTitle)));
}

function openTask(title) {
  if (title === "我要办入职" || title === "onboarding") {
    dialogContent.innerHTML = `<div class="dialog-kicker">${onboardingDetail.kicker}</div><h2 class="dialog-title">${onboardingDetail.title}</h2><p>${onboardingDetail.intro}</p>${onboardingDetail.sections.map(([heading, items]) => `<div class="dialog-section"><h4>${heading}</h4><ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul></div>`).join("")}<button class="primary-button" style="margin-top:22px" onclick="document.querySelector('#task-dialog').close()">先记下这个流程 <span>✓</span></button>`;
    dialog.showModal();
    return;
  }
  const interactiveTool = renderInteractiveTool(title);
  if (interactiveTool) {
    dialogContent.innerHTML = `${interactiveTool}<button class="outline-button" style="margin-top:16px" onclick="document.querySelector('#task-dialog').close()">关闭工具</button>`;
    dialog.showModal();
    bindInteractiveTool(title);
    return;
  }
  if (taskDetails[title]) {
    const detail = taskDetails[title];
    dialogContent.innerHTML = `<div class="dialog-kicker">${detail.kicker}</div><h2 class="dialog-title">${detail.title}</h2><p>${detail.intro}</p>${detail.sections.map(([heading, items]) => `<div class="dialog-section"><h4>${heading}</h4><ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul></div>`).join("")}<button class="primary-button" style="margin-top:22px" onclick="document.querySelector('#task-dialog').close()">先记下这个流程 <span>✓</span></button>`;
    dialog.showModal();
    return;
  }
  const task = allTasks.find((item) => item.title === title);
  if (!task) return;
  dialogContent.innerHTML = `<div class="dialog-kicker">${task.moduleName}</div><h2 class="dialog-title">${task.title}</h2><p>${task.description}。这个任务将在后续资料深读后补充完整流程、模板、风险提示和AI辅助卡片。</p><div class="dialog-section"><h4>当前状态</h4><ul><li>模块入口已建立</li><li>资料索引已建立，正文待按优先级深读</li><li>公开版先展示任务结构，不公开原始课程资料</li></ul></div>`;
  dialog.showModal();
}

renderModules();
renderTasks();
applyQueueState();

searchInput.addEventListener("input", (event) => {
  document.querySelectorAll(".module-card").forEach((item) => item.classList.remove("is-selected"));
  renderTasks(event.target.value);
});

document.querySelectorAll("[data-search]").forEach((button) => button.addEventListener("click", () => {
  searchInput.value = button.dataset.search;
  searchInput.dispatchEvent(new Event("input"));
  document.querySelector("#task-panel").scrollIntoView({ behavior: "smooth", block: "center" });
}));

document.querySelectorAll(".nav-item, .outline-button").forEach((button) => button.addEventListener("click", () => {
  const target = button.dataset.target;
  if (target) document.querySelector(`#${target}`).scrollIntoView({ behavior: "smooth", block: "start" });
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("is-active", item.dataset.target === target));
}));

document.querySelector("#show-all").addEventListener("click", () => {
  searchInput.value = "";
  renderTasks();
  document.querySelector("#task-panel").scrollIntoView({ behavior: "smooth", block: "center" });
});
document.querySelector("#reset-demo-data").addEventListener("click", () => {
  workState = structuredClone(defaultWorkState);
  saveWorkState();
  applyQueueState();
  dialogContent.innerHTML = `<div class="dialog-kicker">DEMO DATA</div><h2 class="dialog-title">示例数据已重置</h2><p>工作台已恢复为初始脱敏示例。真实员工信息不会被写入这个公开版网页。</p>`;
  dialog.showModal();
});
document.querySelector("#export-demo-csv").addEventListener("click", exportDemoCsv);
document.querySelector("#import-demo-csv").addEventListener("change", (event) => { if (event.target.files[0]) importDemoCsv(event.target.files[0]); });
document.querySelector("#export-demo-xlsx").addEventListener("click", exportDemoXlsx);
document.querySelector("#import-demo-xlsx").addEventListener("change", (event) => { if (event.target.files[0]) importDemoXlsx(event.target.files[0]); });
document.querySelector("[data-task='onboarding']").addEventListener("click", () => openTask("onboarding"));
document.querySelectorAll(".queue-row[data-task-title]").forEach((row) => row.addEventListener("click", () => openTask(row.dataset.taskTitle)));
document.querySelector("#dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); searchInput.focus(); }
});


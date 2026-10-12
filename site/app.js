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
  archiveRows: [
    { id: "DEMO-001", name: "员工001", department: "市场部", position: "市场专员", entryDate: "2026-10-01", entry: true, identity: true, education: false, contract: true, training: false },
    { id: "DEMO-002", name: "员工002", department: "技术部", position: "IT专员", entryDate: "2026-09-15", entry: true, identity: true, education: true, contract: true, training: true },
    { id: "DEMO-003", name: "员工003", department: "综合部", position: "HR专员", entryDate: "2026-10-08", entry: true, identity: false, education: true, contract: false, training: true },
  ],
  contractRows: [
    { id: "DEMO-001", name: "员工001", department: "市场部", position: "市场专员", startDate: "2026-10-01", endDate: "2027-10-01", days: 30, note: "" },
    { id: "DEMO-002", name: "员工002", department: "技术部", position: "IT专员", startDate: "2026-09-15", endDate: "2028-04-01", days: 60, note: "" },
    { id: "DEMO-003", name: "员工003", department: "综合部", position: "HR专员", startDate: "2026-10-08", endDate: "2026-11-15", days: 30, note: "待补充合同扫描件" },
  ],
  backups: [],
  queue: { archive: { text: "待补充", className: "status-warn" }, contract: { text: "待处理", className: "status-info" } },
};

function loadWorkState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...defaultWorkState, ...saved, archive: { ...defaultWorkState.archive, ...saved.archive }, contract: { ...defaultWorkState.contract, ...saved.contract }, archiveRows: saved.archiveRows || structuredClone(defaultWorkState.archiveRows), contractRows: saved.contractRows || structuredClone(defaultWorkState.contractRows), backups: saved.backups || [], queue: { ...defaultWorkState.queue, ...saved.queue } } : structuredClone(defaultWorkState);
  } catch (error) {
    return structuredClone(defaultWorkState);
  }
}

let workState = loadWorkState();

function saveWorkState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(workState));
}

function createWorkStateBackup(reason) {
  const snapshot = { archive: structuredClone(workState.archive), contract: structuredClone(workState.contract), archiveRows: structuredClone(workState.archiveRows), contractRows: structuredClone(workState.contractRows), queue: structuredClone(workState.queue), reason, createdAt: new Date().toLocaleString("zh-CN") };
  workState.backups = [snapshot, ...(workState.backups || [])].slice(0, 5);
}

function restoreBackup(index = 0) {
  const backup = workState.backups?.[index];
  if (!backup) return;
  const backups = workState.backups.filter((_, itemIndex) => itemIndex !== index);
  workState = { ...workState, archive: backup.archive, contract: backup.contract, archiveRows: backup.archiveRows, contractRows: backup.contractRows, queue: backup.queue, backups };
  saveWorkState();
  applyQueueState();
  openLedgerTool();
}

function rollbackLastBackup() {
  restoreBackup(0);
}

function openBackupManager() {
  const backups = workState.backups || [];
  dialogContent.innerHTML = `<div class="dialog-kicker">LEDGER · VERSION HISTORY</div><h2 class="dialog-title">备份与恢复</h2><p>每次导入、新增、编辑和归档前都会保存一个快照。选择某个版本恢复后，该版本会从备份列表中移除。</p><div class="backup-list">${backups.map((backup, index) => `<div class="backup-item"><div><strong>${safeCell(backup.reason || "未命名变更")}</strong><small>${safeCell(backup.createdAt || "")}</small></div><button class="outline-button" data-restore-backup="${index}">恢复此版本</button></div>`).join("") || `<div class="ledger-empty">当前还没有可恢复的备份</div>`}</div><div class="ledger-actions"><button class="primary-button" id="backup-close">返回台账 <span>→</span></button></div>`;
  document.querySelectorAll("[data-restore-backup]").forEach((button) => button.addEventListener("click", () => restoreBackup(Number(button.dataset.restoreBackup))));
  document.querySelector("#backup-close").addEventListener("click", openLedgerTool);
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
  const archiveRows = [["员工编号", "员工姓名", "部门", "岗位", "入职日期", "入职登记", "身份证明", "学历/资格材料", "劳动合同", "培训/试用期记录"], ...workState.archiveRows.map((row) => [row.id, row.name, row.department, row.position, row.entryDate, row.entry ? "√" : "✗", row.identity ? "√" : "✗", row.education ? "√" : "✗", row.contract ? "√" : "✗", row.training ? "√" : "✗"])];
  const contractRows = [["员工编号", "员工姓名", "部门", "岗位", "合同开始日期", "合同结束日期", "提前提醒天数", "处理备注"], ...workState.contractRows.map((row) => [row.id, row.name, row.department, row.position, row.startDate, row.endDate, row.days, row.note || ""])];
  const book = window.XLSX.utils.book_new();
  window.XLSX.utils.book_append_sheet(book, window.XLSX.utils.aoa_to_sheet(archiveRows), "档案完整性");
  window.XLSX.utils.book_append_sheet(book, window.XLSX.utils.aoa_to_sheet(contractRows), "合同到期提醒");
  window.XLSX.writeFile(book, "HR工作台当前数据.xlsx");
}

function dateCellToIso(value) {
  if (value instanceof Date && !Number.isNaN(value.getTime())) return value.toISOString().slice(0, 10);
  const text = String(value ?? "").trim();
  if (!text) return "";
  const normalized = text.replace(/[./年]/g, "-").replace("月", "-").replace("日", "");
  const parsed = new Date(normalized);
  return Number.isNaN(parsed.getTime()) ? "" : parsed.toISOString().slice(0, 10);
}

function checkRows(rows, type) {
  const errors = [];
  const seen = new Set();
  rows.forEach((row, index) => {
    const excelRow = index + 2;
    if (!row.id) errors.push(`第 ${excelRow} 行：缺少员工编号`);
    if (!row.name) errors.push(`第 ${excelRow} 行：缺少员工姓名`);
    if (row.id && seen.has(row.id)) errors.push(`第 ${excelRow} 行：员工编号 ${row.id} 重复`);
    if (row.id) seen.add(row.id);
    if (type === "archive" && row.entryDate && !dateCellToIso(row.entryDate)) errors.push(`第 ${excelRow} 行：入职日期格式无法识别`);
    if (type === "contract") {
      if (!row.endDate || !dateCellToIso(row.endDate)) errors.push(`第 ${excelRow} 行：合同结束日期为空或格式错误`);
      if (row.days === "" || Number.isNaN(Number(row.days)) || Number(row.days) < 0) errors.push(`第 ${excelRow} 行：提前提醒天数必须是 0 或更大的数字`);
    }
  });
  return errors;
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
      const imported = { archiveRows: null, contractRows: null };
      const errors = [];
      book.SheetNames.forEach((sheetName) => {
        const rows = window.XLSX.utils.sheet_to_json(book.Sheets[sheetName], { defval: "" });
        if (!rows.length) return;
        const row = rows[0];
        if (sheetName.includes("档案") || Object.prototype.hasOwnProperty.call(row, "学历/资格材料")) {
          imported.archiveRows = rows.filter((item) => item["员工编号"] || item["员工姓名"]).map((item) => ({ id: String(item["员工编号"] || "").trim(), name: String(item["员工姓名"] || "").trim(), department: String(item["部门"] || "").trim(), position: String(item["岗位"] || "").trim(), entryDate: dateCellToIso(item["入职日期"]), entry: item["入职登记"] === "√", identity: item["身份证明"] === "√", education: item["学历/资格材料"] === "√", contract: item["劳动合同"] === "√", training: item["培训/试用期记录"] === "√" }));
          errors.push(...checkRows(imported.archiveRows, "archive"));
        }
        if (sheetName.includes("合同") || Object.prototype.hasOwnProperty.call(row, "合同结束日期")) {
          imported.contractRows = rows.filter((item) => item["员工编号"] || item["员工姓名"]).map((item) => ({ id: String(item["员工编号"] || "").trim(), name: String(item["员工姓名"] || "").trim(), department: String(item["部门"] || "").trim(), position: String(item["岗位"] || "").trim(), startDate: dateCellToIso(item["合同开始日期"]), endDate: dateCellToIso(item["合同结束日期"]), days: Number(item["提前提醒天数"]), note: String(item["处理备注"] || "").trim() }));
          errors.push(...checkRows(imported.contractRows, "contract"));
        }
      });
      if (errors.length) throw new Error(errors.slice(0, 8).join("；") + (errors.length > 8 ? `；另有 ${errors.length - 8} 条错误` : ""));
      createWorkStateBackup("Excel 导入");
      if (imported.archiveRows) workState.archiveRows = imported.archiveRows;
      if (imported.contractRows) workState.contractRows = imported.contractRows;
      if (workState.archiveRows[0]) workState.archive = { employee: workState.archiveRows[0].name, department: workState.archiveRows[0].department, entry: workState.archiveRows[0].entry, identity: workState.archiveRows[0].identity, education: workState.archiveRows[0].education, contract: workState.archiveRows[0].contract, training: workState.archiveRows[0].training };
      if (workState.contractRows[0]) workState.contract = { employee: workState.contractRows[0].name, endDate: workState.contractRows[0].endDate, days: workState.contractRows[0].days };
      saveWorkState(); applyQueueState();
      dialogContent.innerHTML = `<div class="dialog-kicker">DATA IN</div><h2 class="dialog-title">Excel 已导入</h2><p>已读取 ${workState.archiveRows.length} 条档案记录、${workState.contractRows.length} 条合同记录，并完成基础字段检查。</p><button class="primary-button" type="button" onclick="openLedgerTool()">查看员工台账 <span>→</span></button>`;
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

function contractStatus(row) {
  const end = new Date(`${row.endDate}T00:00:00`);
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const remaining = Math.ceil((end - today) / 86400000);
  if (remaining < 0) return { text: "已到期", className: "status-warn", remaining };
  if (remaining <= Number(row.days)) return { text: "进入提醒窗口", className: "status-info", remaining };
  return { text: "暂未到窗口", className: "status-soft", remaining };
}

function archiveStatus(row) {
  const missing = [row.entry, row.identity, row.education, row.contract, row.training].filter((item) => !item).length;
  return missing ? { text: `待补充 ${missing} 项`, className: "status-warn" } : { text: "待核验", className: "status-info" };
}

function safeCell(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}

function getEmployeeLinkSummary() {
  const archiveIds = new Set(workState.archiveRows.map((row) => row.id).filter(Boolean));
  const contractIds = new Set(workState.contractRows.map((row) => row.id).filter(Boolean));
  const allIds = new Set([...archiveIds, ...contractIds]);
  const linked = [...allIds].filter((id) => archiveIds.has(id) && contractIds.has(id));
  const unlinked = [...allIds].filter((id) => !archiveIds.has(id) || !contractIds.has(id));
  return { total: allIds.size, linked: linked.length, unlinked };
}

function restoreEmployee(id) {
  createWorkStateBackup("恢复归档员工");
  workState.archiveRows = workState.archiveRows.map((row) => row.id === id ? { ...row, archived: false } : row);
  workState.contractRows = workState.contractRows.map((row) => row.id === id ? { ...row, archived: false } : row);
  saveWorkState();
  openLedgerTool("", "all", true);
}

function openLedgerTool() {
  const render = (keyword = "", statusFilter = "all", showArchived = false) => {
    const query = keyword.trim().toLowerCase();
    const linkSummary = getEmployeeLinkSummary();
    const archive = workState.archiveRows.filter((row) => {
      const status = archiveStatus(row).text;
      const matchesText = !query || [row.id, row.name, row.department, row.position].join(" ").toLowerCase().includes(query);
      const matchesArchive = showArchived || !row.archived;
      return matchesArchive && matchesText && (statusFilter === "all" || (statusFilter === "pending" && status.includes("待补充")) || (statusFilter === "verify" && status === "待核验"));
    });
    const contracts = workState.contractRows.filter((row) => {
      const status = contractStatus(row);
      const matchesText = !query || [row.id, row.name, row.department, row.position].join(" ").toLowerCase().includes(query);
      const matchesArchive = showArchived || !row.archived;
      return matchesArchive && matchesText && (statusFilter === "all" || (statusFilter === "expired" && status.text === "已到期") || (statusFilter === "window" && status.text === "进入提醒窗口"));
    });
    const archiveRows = archive.map((row) => {
      const status = archiveStatus(row);
      return `<tr class="${row.archived ? "is-archived" : ""}"><td><strong>${safeCell(row.name)}</strong><small>${safeCell(row.id)}</small></td><td>${safeCell(row.department)}<small>${safeCell(row.position)}</small></td><td><span class="status ${status.className}">${status.text}</span>${row.archived ? `<small>已归档</small><div class="table-actions"><button class="table-action" data-restore-id="${safeCell(row.id)}">恢复</button></div>` : `<div class="table-actions"><button class="table-action" data-edit-id="${safeCell(row.id)}">编辑</button><button class="table-action" data-archive-id="${safeCell(row.id)}">归档</button></div>`}</td></tr>`;
    }).join("");
    const contractRows = contracts.map((row) => {
      const status = contractStatus(row);
      return `<tr class="${row.archived ? "is-archived" : ""}"><td><strong>${safeCell(row.name)}</strong><small>${safeCell(row.id)}</small></td><td>${safeCell(row.endDate)}<small>剩余 ${status.remaining} 天</small></td><td><span class="status ${status.className}">${status.text}</span></td></tr>`;
    }).join("");
    dialogContent.innerHTML = `<div class="dialog-kicker">LEDGER · 入职档案与合同</div><h2 class="dialog-title">员工台账</h2><p>先用编号、姓名、部门或岗位定位记录，再根据状态处理。导入错误会按行提示，不会静默覆盖。</p><div class="ledger-link-summary"><strong>员工主记录关联：${linkSummary.linked}/${linkSummary.total}</strong><small>${linkSummary.unlinked.length ? `待关联：${linkSummary.unlinked.slice(0, 5).map((id) => safeCell(id)).join("、")}` : "档案和合同均已按员工编号关联"}</small></div><div class="ledger-toolbar"><input id="ledger-search" placeholder="搜索员工、部门或岗位" value="${safeCell(keyword)}" /><select id="ledger-status"><option value="all" ${statusFilter === "all" ? "selected" : ""}>全部状态</option><option value="pending" ${statusFilter === "pending" ? "selected" : ""}>档案待补充</option><option value="verify" ${statusFilter === "verify" ? "selected" : ""}>档案待核验</option><option value="window" ${statusFilter === "window" ? "selected" : ""}>合同提醒窗口</option><option value="expired" ${statusFilter === "expired" ? "selected" : ""}>合同已到期</option></select><label class="ledger-check"><input id="ledger-show-archived" type="checkbox" ${showArchived ? "checked" : ""} /> 显示已归档</label><button class="outline-button" id="ledger-add">新增员工 <span>＋</span></button><button class="outline-button" id="ledger-backups">备份历史 <span>↶</span></button></div><div class="ledger-section"><div class="ledger-heading"><strong>档案完整性 <span>${archive.length}/${workState.archiveRows.length}</span></strong><small>按员工逐行查看材料状态</small></div><div class="ledger-table-wrap"><table class="ledger-table"><thead><tr><th>员工</th><th>部门/岗位</th><th>材料状态 / 操作</th></tr></thead><tbody>${archiveRows || `<tr><td colspan="3" class="ledger-empty">没有匹配的档案记录</td></tr>`}</tbody></table></div></div><div class="ledger-section"><div class="ledger-heading"><strong>合同到期 <span>${contracts.length}/${workState.contractRows.length}</span></strong><small>根据结束日期和提醒天数计算</small></div><div class="ledger-table-wrap"><table class="ledger-table"><thead><tr><th>员工</th><th>合同结束日</th><th>状态</th></tr></thead><tbody>${contractRows || `<tr><td colspan="3" class="ledger-empty">没有匹配的合同记录</td></tr>`}</tbody></table></div></div><div class="ledger-actions"><button class="outline-button" id="ledger-rollback" ${workState.backups?.length ? "" : "disabled"}>回滚上次变更 <span>↶</span></button><button class="outline-button" id="ledger-export">导出当前 Excel <span>↓</span></button><button class="primary-button" id="ledger-close">完成查看 <span>×</span></button></div>`;
    document.querySelector("#ledger-search").addEventListener("input", (event) => { const value = event.target.value; render(value, document.querySelector("#ledger-status").value, document.querySelector("#ledger-show-archived").checked); const next = document.querySelector("#ledger-search"); next.focus(); next.setSelectionRange(value.length, value.length); });
    document.querySelector("#ledger-status").addEventListener("change", (event) => render(document.querySelector("#ledger-search").value, event.target.value, document.querySelector("#ledger-show-archived").checked));
    document.querySelector("#ledger-show-archived").addEventListener("change", (event) => render(document.querySelector("#ledger-search").value, document.querySelector("#ledger-status").value, event.target.checked));
    document.querySelector("#ledger-add").addEventListener("click", () => openEmployeeForm());
    document.querySelectorAll("[data-edit-id]").forEach((button) => button.addEventListener("click", () => openEmployeeForm(button.dataset.editId)));
    document.querySelectorAll("[data-archive-id]").forEach((button) => button.addEventListener("click", () => archiveEmployee(button.dataset.archiveId)));
    document.querySelectorAll("[data-restore-id]").forEach((button) => button.addEventListener("click", () => restoreEmployee(button.dataset.restoreId)));
    document.querySelector("#ledger-backups").addEventListener("click", openBackupManager);
    document.querySelector("#ledger-rollback").addEventListener("click", rollbackLastBackup);
    document.querySelector("#ledger-export").addEventListener("click", exportDemoXlsx);
    document.querySelector("#ledger-close").addEventListener("click", () => dialog.close());
  };
  render();
  dialog.showModal();
}

function openEmployeeForm(id = "") {
  const archive = workState.archiveRows.find((row) => row.id === id);
  const contract = workState.contractRows.find((row) => row.id === id);
  const editing = Boolean(archive || contract);
  const a = archive || { id: "", name: "", department: "", position: "", entryDate: "", entry: true, identity: false, education: false, contract: false, training: false };
  const c = contract || { startDate: a.entryDate || "", endDate: "", days: 30, note: "" };
  dialogContent.innerHTML = `<div class="dialog-kicker">LEDGER · ${editing ? "编辑员工" : "新增员工"}</div><h2 class="dialog-title">${editing ? "编辑员工记录" : "新增员工记录"}</h2><p>员工编号是档案和合同的关联键，保存前会检查是否重复。</p><form id="employee-form" class="mini-tool-form ledger-form"><div class="form-two-col"><label>员工编号<input name="id" value="${safeCell(a.id)}" required ${editing ? "readonly" : ""} /></label><label>员工姓名<input name="name" value="${safeCell(a.name)}" required /></label></div><div class="form-two-col"><label>部门<input name="department" value="${safeCell(a.department)}" required /></label><label>岗位<input name="position" value="${safeCell(a.position)}" /></label></div><div class="form-two-col"><label>入职日期<input name="entryDate" type="date" value="${safeCell(a.entryDate)}" /></label><label>合同结束日期<input name="endDate" type="date" value="${safeCell(c.endDate)}" required /></label></div><div class="form-two-col"><label>提前提醒天数<input name="days" type="number" min="0" value="${Number(c.days) || 30}" required /></label><label>处理备注<input name="note" value="${safeCell(c.note)}" /></label></div><fieldset><legend>档案材料状态</legend><label class="check-row"><input type="checkbox" name="entry" ${a.entry ? "checked" : ""} /> 入职登记</label><label class="check-row"><input type="checkbox" name="identity" ${a.identity ? "checked" : ""} /> 身份证明</label><label class="check-row"><input type="checkbox" name="education" ${a.education ? "checked" : ""} /> 学历/资格材料</label><label class="check-row"><input type="checkbox" name="contract" ${a.contract ? "checked" : ""} /> 劳动合同</label><label class="check-row"><input type="checkbox" name="training" ${a.training ? "checked" : ""} /> 培训/试用期记录</label></fieldset><div class="ledger-actions"><button class="outline-button" type="button" id="employee-cancel">取消</button><button class="primary-button" type="submit">保存记录 <span>✓</span></button></div></form>`;
  document.querySelector("#employee-cancel").addEventListener("click", openLedgerTool);
  document.querySelector("#employee-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const employeeId = String(form.get("id") || "").trim();
    if (!employeeId || (!editing && workState.archiveRows.some((row) => row.id === employeeId))) {
      dialogContent.insertAdjacentHTML("afterbegin", `<div class="tool-result"><strong>保存失败</strong><p>员工编号不能为空，且不能与现有编号重复。</p></div>`);
      return;
    }
    createWorkStateBackup(editing ? "编辑员工" : "新增员工");
    const archiveRow = { id: employeeId, name: String(form.get("name") || "").trim(), department: String(form.get("department") || "").trim(), position: String(form.get("position") || "").trim(), entryDate: String(form.get("entryDate") || ""), entry: Boolean(form.get("entry")), identity: Boolean(form.get("identity")), education: Boolean(form.get("education")), contract: Boolean(form.get("contract")), training: Boolean(form.get("training")), archived: false };
    const contractRow = { id: employeeId, name: archiveRow.name, department: archiveRow.department, position: archiveRow.position, startDate: archiveRow.entryDate, endDate: String(form.get("endDate") || ""), days: Number(form.get("days")) || 30, note: String(form.get("note") || "").trim(), archived: false };
    if (editing) {
      workState.archiveRows = workState.archiveRows.map((row) => row.id === employeeId ? archiveRow : row);
      workState.contractRows = workState.contractRows.map((row) => row.id === employeeId ? contractRow : row);
    } else {
      workState.archiveRows.push(archiveRow);
      workState.contractRows.push(contractRow);
    }
    workState.archive = { employee: archiveRow.name, department: archiveRow.department, entry: archiveRow.entry, identity: archiveRow.identity, education: archiveRow.education, contract: archiveRow.contract, training: archiveRow.training };
    workState.contract = { employee: contractRow.name, endDate: contractRow.endDate, days: contractRow.days };
    saveWorkState();
    openLedgerTool();
  });
  dialog.showModal();
}

function archiveEmployee(id) {
  createWorkStateBackup("归档员工");
  workState.archiveRows = workState.archiveRows.map((row) => row.id === id ? { ...row, archived: true } : row);
  workState.contractRows = workState.contractRows.map((row) => row.id === id ? { ...row, archived: true } : row);
  saveWorkState();
  openLedgerTool();
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
document.querySelector("#open-ledger").addEventListener("click", openLedgerTool);
document.querySelector("[data-task='onboarding']").addEventListener("click", () => openTask("onboarding"));
document.querySelectorAll(".queue-row[data-task-title]").forEach((row) => row.addEventListener("click", () => openTask(row.dataset.taskTitle)));
document.querySelector("#dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); searchInput.focus(); }
});


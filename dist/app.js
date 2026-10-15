const modules = [
  { id: "org", number: "01", icon: "⌘", name: "组织与岗位", description: "组织、编制、岗位和职责", tasks: ["维护组织架构", "维护岗位说明书", "跟进编制与用人需求", "登记组织岗位变更"] },
  { id: "recruit", number: "02", icon: "◎", name: "招聘与人才获取", description: "需求、筛选、面试和录用", tasks: ["提交招聘需求", "跟进招聘进度", "安排面试", "办理录用与 Offer", "维护人才库"] },
  { id: "onboard", number: "03", icon: "↗", name: "入职档案与合同", description: "入职、档案、合同和试用期", tasks: ["我要办入职", "检查档案完整性", "合同到期提醒", "办理合同续签", "跟进试用期转正"] },
  { id: "attendance", number: "04", icon: "◷", name: "考勤与假勤", description: "考勤、请假、加班和前置数据", tasks: ["处理考勤异常", "核对请假记录", "整理薪资前置数据"] },
  { id: "reward", number: "05", icon: "◇", name: "薪酬、社保、公积金与福利", description: "薪酬变动、社保公积金办理和员工福利", tasks: ["核对薪酬数据", "办理社保公积金事项", "发放员工福利"] },
  { id: "talent", number: "06", icon: "✦", name: "绩效培训与发展", description: "绩效、培训和人才成长", tasks: ["组织培训", "跟进绩效周期", "整理培训反馈"] },
  { id: "relation", number: "07", icon: "⊙", name: "员工关系与合规/离职", description: "咨询、离职交接、争议跟进和风险留痕", tasks: ["处理员工咨询", "办理员工离职", "整理争议处理材料"] },
  { id: "data", number: "08", icon: "▥", name: "HR数据与运营", description: "月报、人员主数据、数据质量和流程模板", tasks: ["制作HR月报", "维护人员数据", "检查人员数据质量", "查找流程和模板"] },
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
  const archiveHeaders=["员工编号", "员工姓名", "部门", "岗位", "入职日期", "入职登记", "身份证明", "学历/资格材料", "劳动合同", "培训/试用期记录"];
  const archiveRows = [["按员工逐行填写材料情况；编号和姓名必填，其他字段按实际情况填写。"],archiveHeaders, ...workState.archiveRows.map((row) => [row.id, row.name, row.department, row.position, row.entryDate, row.entry ? "√" : "✗", row.identity ? "√" : "✗", row.education ? "√" : "✗", row.contract ? "√" : "✗", row.training ? "√" : "✗"])];
  const contractHeaders=["员工编号", "员工姓名", "部门", "岗位", "合同开始日期", "合同结束日期", "提前提醒天数", "处理备注", "距到期天数", "到期状态"];
  const contractRows = [["填F列合同结束日期和G列提前提醒天数；I列=F-TODAY()自动算剩余天数，J列用IF自动标记提醒状态。"],contractHeaders, ...workState.contractRows.map((row) => [row.id, row.name, row.department, row.position, row.startDate ? new Date(`${row.startDate}T00:00:00Z`) : "", row.endDate ? new Date(`${row.endDate}T00:00:00Z`) : "", row.days, row.note || ""])];
  for(let i=0;i<workState.contractRows.length;i++){const n=i+3;contractRows[i+2].push({f:`IF(F${n}="","",F${n}-TODAY())`},{f:`IF(F${n}="","待填写",IF(I${n}<0,"已到期",IF(I${n}<=G${n},"提醒窗口","正常")))`});}
  const book = window.XLSX.utils.book_new();
  for(const [rows,name] of [[archiveRows,"档案完整性"],[contractRows,"合同到期提醒"]]){const sheet=window.XLSX.utils.aoa_to_sheet(rows);sheet["!merges"]=[{s:{r:0,c:0},e:{r:0,c:rows[1].length-1}}];sheet["!rows"]=[{hpt:36}];window.XLSX.utils.book_append_sheet(book,sheet,name);}
  window.XLSX.writeFile(book, "HR工作台当前数据.xlsx");
}

function downloadDemoTemplate(kind) {
  if (!window.XLSX) { alert("Excel 组件尚未加载，请联网刷新后重试。"); return; }
  const schemas = {
    archive: { name: "档案完整性", fields: [["员工编号",true],["员工姓名",true],["部门",false],["岗位",false],["入职日期",false],["入职登记",false],["身份证明",false],["学历/资格材料",false],["劳动合同",false],["培训/试用期记录",false]] },
    contract: { name: "合同到期提醒", fields: [["员工编号",true],["员工姓名",true],["部门",false],["岗位",false],["合同开始日期",false],["合同结束日期",true],["提前提醒天数",true],["处理备注",false]] }
  };
  const schema = schemas[kind]; if (!schema) return;
  const book = window.XLSX.utils.book_new();
  const headers=schema.fields.map(f=>f[0]);
  const computed=kind==="contract"?["距到期天数","到期状态"]:[];
  const rows=Array.from({length:500},(_,i)=>{const n=i+3;if(kind!=="contract")return Array(headers.length).fill("");return [...Array(headers.length).fill(""),{f:`IF(F${n}="","",F${n}-TODAY())`},{f:`IF(F${n}="","待填写",IF(I${n}<0,"已到期",IF(I${n}<=G${n},"提醒窗口","正常")))`}];});
  const instruction=kind==="contract"?"填F列合同结束日期和G列提醒天数；I列=F-TODAY()自动算剩余天数，J列用IF标记到期状态。":`${schema.name}：第一行说明用途，第二行是字段名；每行一条记录。员工编号和姓名必填，其余字段可选。`;
  const sheet=window.XLSX.utils.aoa_to_sheet([[instruction],[...headers,...computed],...rows]);sheet["!merges"]=[{s:{r:0,c:0},e:{r:0,c:headers.length+computed.length-1}}];sheet["!rows"]=[{hpt:40}];
  window.XLSX.utils.book_append_sheet(book, sheet, schema.name);
  const prompt = [`请将我上传的原始 Excel 整理到“${schema.name}”标准模板。仅按明确含义对应字段，不要猜填。`,"保留记录顺序和数量，不编造或删除数据。必填字段没有明确来源时留空并列入异常清单；选填字段无来源时留空。未映射来源列要列出，不得塞入无关字段。请输出字段映射表、未映射字段清单和异常清单，标准表头保持不变。","字段：",...schema.fields.map(([label,required])=>`- ${label}（${required?"必填":"选填"}）`)];
  window.XLSX.utils.book_append_sheet(book, window.XLSX.utils.aoa_to_sheet([["字段映射提示词"],...prompt.map(line=>[line])]), "字段映射提示词");
  window.XLSX.writeFile(book, `${schema.name}-导入模板.xlsx`);
}

function dateCellToIso(value) {
  if (value instanceof Date && !Number.isNaN(value.getTime())) return value.toISOString().slice(0, 10);
  const text = String(value ?? "").trim();
  if (!text) return "";
  const normalized = text.replace(/[./年]/g, "-").replace("月", "-").replace("日", "");
  const parsed = new Date(normalized);
  return Number.isNaN(parsed.getTime()) ? "" : parsed.toISOString().slice(0, 10);
}

function checkRows(rows, type, headerIndex = 1) {
  const errors = [];
  const seen = new Set();
  rows.forEach((row, index) => {
    const excelRow = index + headerIndex + 2;
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
        const matrix=window.XLSX.utils.sheet_to_json(book.Sheets[sheetName],{header:1,defval:""});
        const required=sheetName.includes("合同")?["员工编号","员工姓名","合同结束日期","提前提醒天数"]:["员工编号","员工姓名"];
        const headerIndex=(matrix[1]||[]).includes("员工编号")?1:0;
        const headers=matrix[headerIndex]||[];
        const recognized=sheetName.includes("档案")||sheetName.includes("合同")||headers.includes("员工编号");
        if(!recognized)return;
        const missing=required.filter(name=>!headers.includes(name));
        if(missing.length){errors.push(`${sheetName} 缺少必填字段标题：${missing.join("、")}`);return;}
        const rows = window.XLSX.utils.sheet_to_json(book.Sheets[sheetName], { range: headerIndex, defval: "" });
        if (!rows.length) return;
        const row = rows[0];
        if (sheetName.includes("档案") || Object.prototype.hasOwnProperty.call(row, "学历/资格材料")) {
          imported.archiveRows = rows.filter((item) => item["员工编号"] || item["员工姓名"]).map((item) => ({ id: String(item["员工编号"] || "").trim(), name: String(item["员工姓名"] || "").trim(), department: String(item["部门"] || "").trim(), position: String(item["岗位"] || "").trim(), entryDate: dateCellToIso(item["入职日期"]), entry: item["入职登记"] === "√", identity: item["身份证明"] === "√", education: item["学历/资格材料"] === "√", contract: item["劳动合同"] === "√", training: item["培训/试用期记录"] === "√" }));
          errors.push(...checkRows(imported.archiveRows, "archive", headerIndex));
        }
        if (sheetName.includes("合同") || Object.prototype.hasOwnProperty.call(row, "合同结束日期")) {
          imported.contractRows = rows.filter((item) => item["员工编号"] || item["员工姓名"]).map((item) => ({ id: String(item["员工编号"] || "").trim(), name: String(item["员工姓名"] || "").trim(), department: String(item["部门"] || "").trim(), position: String(item["岗位"] || "").trim(), startDate: dateCellToIso(item["合同开始日期"]), endDate: dateCellToIso(item["合同结束日期"]), days: Number(item["提前提醒天数"]), note: String(item["处理备注"] || "").trim() }));
          errors.push(...checkRows(imported.contractRows, "contract", headerIndex));
        }
      });
      if (!imported.archiveRows && !imported.contractRows) throw new Error("没有识别到档案完整性或合同到期提醒工作表，请使用对应模板后再导入。");
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
  if (title === "资料完整性检查") {
    const labels = { entry: "入职登记", identity: "身份证明", education: "学历/资格材料", contract: "劳动合同", training: "培训/试用期记录" };
    const rows = (workState.archiveRows || []).filter((row) => !row.archived);
    const findings = rows.map((row) => ({ row, missing: Object.entries(labels).filter(([key]) => !row[key]).map(([, label]) => label) }));
    return `<div class="dialog-kicker">常用工具 · 档案台账检查</div><h2 class="dialog-title">资料完整性检查</h2><p>直接读取入职档案与合同台账。这里只核对材料登记状态；“齐全”不代表原件、真实性或制度要求已完成人工核验。</p><div class="ledger-heading"><strong>检查结果 <span>${findings.filter((item) => item.missing.length).length} 条待补充</span></strong><small>数据来自当前浏览器的员工档案记录，修改原台账后重新打开即可刷新。</small></div><div class="ledger-table-wrap"><table class="ledger-table"><thead><tr><th>员工</th><th>缺少项目</th><th>处理</th></tr></thead><tbody>${findings.map(({ row, missing }) => `<tr><td><strong>${safeCell(row.name || row.id)}</strong><small>${safeCell(row.id)} · ${safeCell(row.department)}</small></td><td>${missing.length ? safeCell(missing.join("、")) : "登记项齐全，待人工核验"}</td><td><button class="text-button" data-integrity-record="${safeCell(row.id)}">打开档案 →</button></td></tr>`).join("") || `<tr><td colspan="3" class="ledger-empty">档案台账暂无员工记录</td></tr>`}</tbody></table></div><div class="org-notes"><strong>检查口径</strong><span>必查登记项：入职登记、身份证明、学历/资格材料、劳动合同、培训/试用期记录。仅标记空缺，不自动认定材料是否适用。</span></div>`;
  }
  if (title === "日期与提醒") {
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const rows = [];
    const seenDates = new Set();
    const addDate = (date, type, label, owner, route, status = "", employeeKey = "") => {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(String(date || ""))) return;
      const parsed = new Date(`${date}T00:00:00`);
      if (Number.isNaN(parsed.getTime())) return;
      const uniqueKey = `${type}|${employeeKey || label}|${date}`;
      if (seenDates.has(uniqueKey)) return;
      seenDates.add(uniqueKey);
      const remaining = Math.round((parsed - today) / 86400000);
      rows.push({ date, type, label, owner: owner || "未指定", route, status, remaining });
    };
    for (const row of workState.contractRows || []) if (!row.archived) addDate(row.endDate, "合同到期", `${row.name || row.id} · 合同到期`, row.owner, { kind: "ledger", id: row.id }, "", row.id);
    const onboard = window.getPracticalModuleRecords?.("onboard") || {};
    for (const row of onboard.probation || []) {
      if (row.decision === "已转正") continue;
      addDate(row.probationEnd, "试用期节点", `${row.employee || row.id} · 试用期目标日期`, row.owner, { kind: "module", key: "onboard", tab: "probation", id: row.id }, row.decision);
      addDate(row.nextDate, "试用期跟进", `${row.employee || row.id} · 下一步跟进`, row.owner, { kind: "module", key: "onboard", tab: "probation", id: row.id }, row.hrReview);
    }
    for (const row of onboard.renewal || []) {
      const employeeKey = row.employeeId || row.id;
      addDate(row.contractEnd, "合同到期", `${row.employee || row.id} · 合同到期`, row.owner, { kind: "module", key: "onboard", tab: "renewal", id: row.id }, row.signStatus, employeeKey);
      addDate(row.nextDate, "续签跟进", `${row.employee || row.id} · 下一步续签跟进`, row.owner, { kind: "module", key: "onboard", tab: "renewal", id: row.id }, row.signStatus);
    }
    const talent = window.getPracticalModuleRecords?.("talent") || {};
    for (const row of talent.courses || []) if (!["已完成", "已取消"].includes(row.status)) addDate(row.date, "培训日期", `${row.name || row.id} · 培训安排`, row.owner, { kind: "module", key: "talent", tab: "courses", id: row.id }, row.status);
    window.__hrReminderRows = rows;
    const visible = (days = 30) => rows.filter((row) => row.remaining <= days).sort((a, b) => a.remaining - b.remaining || a.date.localeCompare(b.date));
    const content = (days = 30) => visible(days).map((row) => {
      const when = row.remaining < 0 ? `已逾期 ${Math.abs(row.remaining)} 天` : row.remaining === 0 ? "今天" : `${row.remaining} 天后`;
      return `<tr><td><strong>${safeCell(row.date)}</strong><small>${safeCell(row.type)} · ${when}</small></td><td>${safeCell(row.label)}<small>${safeCell(row.owner)}${row.status ? ` · ${safeCell(row.status)}` : ""}</small></td><td><button class="text-button" data-reminder-route="${safeCell(JSON.stringify(row.route))}">去处理 →</button></td></tr>`;
    }).join("") || `<tr><td colspan="3" class="ledger-empty">这个提醒范围内没有日期事项</td></tr>`;
    return `<div class="dialog-kicker">常用工具 · 模块日期汇总</div><h2 class="dialog-title">日期与提醒</h2><p>从档案合同台账、试用期台账和培训计划读取日期。修改来源台账后重新打开即可更新；提醒只在工作台内显示，不会在网页关闭后推送。</p><label>显示范围<select id="reminder-window"><option value="7">未来 7 天及逾期</option><option value="30" selected>未来 30 天及逾期</option><option value="90">未来 90 天及逾期</option></select></label><div class="ledger-heading"><strong>待跟进节点 <span id="reminder-count">${visible().length}</span></strong><small>日期由对应模块台账提供，业务结论由 HR 核对。</small></div><div class="ledger-table-wrap"><table class="ledger-table"><thead><tr><th>日期 / 状态</th><th>事项 / 责任人</th><th>快捷入口</th></tr></thead><tbody id="reminder-rows">${content()}</tbody></table></div><div class="org-notes"><strong>数据来源</strong><span>03 入职档案与合同：合同到期、试用期目标与跟进日期；06 绩效培训与人才发展：培训计划日期。</span><span>该提醒会在当前网页打开时显示，不是系统日历或短信推送。</span></div>`;
  }
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
  if (title === "资料完整性检查") {
    document.querySelectorAll("[data-integrity-record]").forEach((button) => button.addEventListener("click", () => openLedgerTool("员工档案与合同核对", button.dataset.integrityRecord)));
  }
  if (title === "日期与提醒") {
    const picker = document.querySelector("#reminder-window");
    picker.addEventListener("change", () => {
      const days = Number(picker.value);
      const rows = document.querySelector("#reminder-rows");
      const count = document.querySelector("#reminder-count");
      const all = window.__hrReminderRows || [];
      const visible = all.filter((row) => row.remaining <= days).sort((a, b) => a.remaining - b.remaining || a.date.localeCompare(b.date));
      count.textContent = String(visible.length);
      rows.innerHTML = visible.map((row) => {
        const when = row.remaining < 0 ? `已逾期 ${Math.abs(row.remaining)} 天` : row.remaining === 0 ? "今天" : `${row.remaining} 天后`;
        return `<tr><td><strong>${safeCell(row.date)}</strong><small>${safeCell(row.type)} · ${when}</small></td><td>${safeCell(row.label)}<small>${safeCell(row.owner)}${row.status ? ` · ${safeCell(row.status)}` : ""}</small></td><td><button class="text-button" data-reminder-route="${safeCell(JSON.stringify(row.route))}">去处理 →</button></td></tr>`;
      }).join("") || `<tr><td colspan="3" class="ledger-empty">这个提醒范围内没有日期事项</td></tr>`;
      bindReminderRoutes();
    });
    document.querySelectorAll("[data-reminder-route]").forEach((button) => button.addEventListener("click", () => routeToReminder(button.dataset.reminderRoute)));
  }
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
      const end = new Date(`${form.get("endDate")}T00:00:00Z`);
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

function routeToReminder(rawRoute) {
  let route;
  try { route = JSON.parse(rawRoute); } catch { return; }
  if (route.kind === "ledger") openLedgerTool("员工档案与合同核对", route.id);
  else if (route.kind === "module") window.openPracticalRecord?.(route.key, route.tab, route.id);
}

function bindReminderRoutes() {
  document.querySelectorAll("[data-reminder-route]").forEach((button) => button.addEventListener("click", () => routeToReminder(button.dataset.reminderRoute)));
}

function contractStatus(row) {
  const end = new Date(`${row.endDate}T00:00:00Z`);
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

function openLedgerTool(taskTitle = "员工档案与合同核对", targetRecordId = "") {
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
    dialogContent.innerHTML = `<div class="dialog-kicker">LEDGER · 入职档案与合同</div><h2 class="dialog-title">员工台账</h2><p>先用编号、姓名、部门或岗位定位记录，再根据状态处理。导入错误会按行提示，不会静默覆盖。</p>${window.renderModuleResources?.("onboard") || ""}<div class="ledger-link-summary"><strong>员工主记录关联：${linkSummary.linked}/${linkSummary.total}</strong><small>${linkSummary.unlinked.length ? `待关联：${linkSummary.unlinked.slice(0, 5).map((id) => safeCell(id)).join("、")}` : "档案和合同均已按员工编号关联"}</small></div><div class="ledger-toolbar"><input id="ledger-search" placeholder="搜索员工、部门或岗位" value="${safeCell(keyword)}" /><select id="ledger-status"><option value="all" ${statusFilter === "all" ? "selected" : ""}>全部状态</option><option value="pending" ${statusFilter === "pending" ? "selected" : ""}>档案待补充</option><option value="verify" ${statusFilter === "verify" ? "selected" : ""}>档案待核验</option><option value="window" ${statusFilter === "window" ? "selected" : ""}>合同提醒窗口</option><option value="expired" ${statusFilter === "expired" ? "selected" : ""}>合同已到期</option></select><label class="ledger-check"><input id="ledger-show-archived" type="checkbox" ${showArchived ? "checked" : ""} /> 显示已归档</label><button class="outline-button" id="ledger-add">新增员工 <span>＋</span></button><button class="outline-button" id="ledger-backups">备份历史 <span>↶</span></button></div><div class="ledger-section"><div class="ledger-heading"><strong>档案完整性 <span>${archive.length}/${workState.archiveRows.length}</span></strong><small>按员工逐行查看材料状态</small></div><div class="ledger-table-wrap"><table class="ledger-table"><thead><tr><th>员工</th><th>部门/岗位</th><th>材料状态 / 操作</th></tr></thead><tbody>${archiveRows || `<tr><td colspan="3" class="ledger-empty">没有匹配的档案记录</td></tr>`}</tbody></table></div></div><div class="ledger-section"><div class="ledger-heading"><strong>合同到期 <span>${contracts.length}/${workState.contractRows.length}</span></strong><small>根据结束日期和提醒天数计算</small></div><div class="ledger-table-wrap"><table class="ledger-table"><thead><tr><th>员工</th><th>合同结束日</th><th>状态</th></tr></thead><tbody>${contractRows || `<tr><td colspan="3" class="ledger-empty">没有匹配的合同记录</td></tr>`}</tbody></table></div></div>${renderModuleAIAssist(taskTitle,"onboard")}<div class="ledger-actions"><button class="outline-button" id="ledger-rollback" ${workState.backups?.length ? "" : "disabled"}>回滚上次变更 <span>↶</span></button><button class="primary-button" id="ledger-close">完成查看 <span>×</span></button></div>`;
    bindModuleAIAssist(dialogContent);
    document.querySelector("#ledger-search").addEventListener("input", (event) => { const value = event.target.value; render(value, document.querySelector("#ledger-status").value, document.querySelector("#ledger-show-archived").checked); const next = document.querySelector("#ledger-search"); next.focus(); next.setSelectionRange(value.length, value.length); });
    document.querySelector("#ledger-status").addEventListener("change", (event) => render(document.querySelector("#ledger-search").value, event.target.value, document.querySelector("#ledger-show-archived").checked));
    document.querySelector("#ledger-show-archived").addEventListener("change", (event) => render(document.querySelector("#ledger-search").value, document.querySelector("#ledger-status").value, event.target.checked));
    document.querySelector("#ledger-add").addEventListener("click", () => openEmployeeForm());
    document.querySelectorAll("[data-edit-id]").forEach((button) => button.addEventListener("click", () => openEmployeeForm(button.dataset.editId)));
    document.querySelectorAll("[data-archive-id]").forEach((button) => button.addEventListener("click", () => archiveEmployee(button.dataset.archiveId)));
    document.querySelectorAll("[data-restore-id]").forEach((button) => button.addEventListener("click", () => restoreEmployee(button.dataset.restoreId)));
    document.querySelector("#ledger-backups").addEventListener("click", openBackupManager);
    document.querySelector("#ledger-rollback").addEventListener("click", rollbackLastBackup);
    document.querySelector("#ledger-close").addEventListener("click", () => dialog.close());
  };
  render();
  if (!dialog.open) dialog.showModal();
  if (targetRecordId) [...document.querySelectorAll("[data-edit-id]")].find((button) => button.dataset.editId === targetRecordId)?.click();
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

const RECRUIT_STORAGE_KEY = "hr-workbench-recruit-v01";
const recruitStages = ["待筛选", "初筛通过", "待初试", "初试通过", "待复试", "复试通过", "待录用审批", "待发 Offer", "Offer 待确认", "已接受", "待入职", "已入职", "不合适", "候选人拒绝", "流程暂停"];
const recruitStatusClass = { "待筛选": "status-warn", "待初试": "status-info", "待复试": "status-info", "待录用审批": "status-warn", "待发 Offer": "status-warn", "Offer 待确认": "status-info", "已接受": "status-soft", "待入职": "status-soft", "已入职": "status-ok", "不合适": "status-muted", "候选人拒绝": "status-muted", "流程暂停": "status-muted" };
const defaultRecruitState = {
  demands: [
    { id: "REQ-2026-001", department: "技术部", position: "前端工程师", count: 2, applyDate: "2026-10-08", arrival: "2026-11-15", type: "扩增编制", priority: "高", owner: "HR-小林", salary: "按岗位薪酬带宽复核", reason: "补充产品研发团队", duties: "负责前端页面开发与维护", requirements: "本科 / 相关经验 / 协作能力", approvalStatus: "已批准", status: "招聘中", note: "补充产品研发团队" },
    { id: "REQ-2026-002", department: "市场部", position: "市场专员", count: 1, applyDate: "2026-10-10", arrival: "2026-12-01", type: "离职补充", priority: "普通", owner: "HR-小林", salary: "待 HR 评审", reason: "替补需求", duties: "负责市场活动与客户跟进", requirements: "大专及以上 / 沟通能力", approvalStatus: "待审批", status: "待审批", note: "替补需求" },
  ],
  applications: [
    { id: "APP-001", candidate: "候选人A", demandId: "REQ-2026-001", source: "招聘平台A", contact: "已授权后保存", education: "本科", workYears: "3", availableDate: "2026-11-01", expectedSalary: "待确认", screeningResult: "通过", screeningNote: "岗位经历匹配，待业务复试确认项目深度", interviewResult: "初试通过", assessmentStatus: "未安排", backgroundStatus: "未启动", offerStatus: "未启动", endReason: "", stage: "待复试", owner: "HR-小林", nextDate: "2026-10-14", note: "初试通过，待业务复试" },
    { id: "APP-002", candidate: "候选人B", demandId: "REQ-2026-001", source: "员工推荐", contact: "已授权后保存", education: "本科", workYears: "2", availableDate: "", expectedSalary: "待确认", screeningResult: "待筛选", screeningNote: "简历待初筛", interviewResult: "未面试", assessmentStatus: "未安排", backgroundStatus: "未启动", offerStatus: "未启动", endReason: "", stage: "待筛选", owner: "HR-小林", nextDate: "2026-10-13", note: "简历待初筛" },
    { id: "APP-003", candidate: "候选人C", demandId: "REQ-2026-002", source: "招聘平台B", contact: "已授权后保存", education: "大专", workYears: "4", availableDate: "2026-10-20", expectedSalary: "按审批结果", screeningResult: "通过", screeningNote: "业务面试通过", interviewResult: "复试通过", assessmentStatus: "已完成", backgroundStatus: "已通过", offerStatus: "待发送", endReason: "", stage: "待发 Offer", owner: "HR-小林", nextDate: "2026-10-12", note: "录用审批已通过" },
  ],
  interviews: [
    { id: "INT-001", applicationId: "APP-001", round: "初试", date: "2026-10-10", interviewer: "技术负责人", feedback: "已完成", result: "通过" },
    { id: "INT-002", applicationId: "APP-001", round: "复试", date: "2026-10-14", interviewer: "技术总监", feedback: "待反馈", result: "待评价" },
  ],
  backups: [],
};

function loadRecruitState() {
  try {
    const saved = JSON.parse(localStorage.getItem(RECRUIT_STORAGE_KEY));
    return saved ? { ...structuredClone(defaultRecruitState), ...saved, demands: saved.demands || [], applications: saved.applications || [], interviews: saved.interviews || [], backups: saved.backups || [] } : structuredClone(defaultRecruitState);
  } catch (error) { return structuredClone(defaultRecruitState); }
}

let recruitState = loadRecruitState();

function saveRecruitState() { localStorage.setItem(RECRUIT_STORAGE_KEY, JSON.stringify(recruitState)); }

function createRecruitBackup(reason) {
  const snapshot = { demands: structuredClone(recruitState.demands), applications: structuredClone(recruitState.applications), interviews: structuredClone(recruitState.interviews), reason, createdAt: new Date().toLocaleString("zh-CN") };
  recruitState.backups = [snapshot, ...(recruitState.backups || [])].slice(0, 5);
}

function recruitStats() {
  const active = recruitState.applications.filter((row) => !["不合适", "候选人拒绝", "流程暂停", "已入职"].includes(row.stage));
  const stageCounts = recruitStages.reduce((counts, stage) => ({ ...counts, [stage]: recruitState.applications.filter((row) => row.stage === stage).length }), {});
  const channelCounts = recruitState.applications.reduce((counts, row) => { const source = row.source || "未填写"; counts[source] = (counts[source] || 0) + 1; return counts; }, {});
  return { demands: recruitState.demands.filter((row) => ["招聘中", "待审批"].includes(row.status)).length, overdue: active.filter((row) => row.nextDate && row.nextDate < "2026-10-12").length, pendingInterviews: recruitState.interviews.filter((row) => row.feedback === "待反馈").length, offers: active.filter((row) => row.stage === "待发 Offer" || row.stage === "Offer 待确认").length, hires: recruitState.applications.filter((row) => row.stage === "已入职").length, stageCounts, channelCounts };
}

function recruitImportText(value) { return String(value ?? "").trim(); }

function validateRecruitImport(rows, kind, demandIds, headerIndex = 1) {
  const errors = [];
  const ids = new Set();
  rows.forEach((row, index) => {
    const excelRow = index + headerIndex + 2;
    const id = recruitImportText(row[kind === "demand" ? "需求编号" : "应聘编号"]);
    if (!id) errors.push(`第 ${excelRow} 行：${kind === "demand" ? "需求编号" : "应聘编号"}不能为空`);
    if (id && ids.has(id)) errors.push(`第 ${excelRow} 行：编号 ${id} 重复`);
    if (id) ids.add(id);
    if (kind === "demand") {
      ["部门", "岗位", "负责人"].forEach((field) => { if (!recruitImportText(row[field])) errors.push(`第 ${excelRow} 行：${field}不能为空`); });
      const count = Number(row["需求人数"]);
      if (!Number.isFinite(count) || count < 1) errors.push(`第 ${excelRow} 行：需求人数必须是大于 0 的数字`);
    } else {
      ["候选人", "需求编号", "来源", "负责人"].forEach((field) => { if (!recruitImportText(row[field])) errors.push(`第 ${excelRow} 行：${field}不能为空`); });
      const demandId = recruitImportText(row["需求编号"]);
      if (demandId && !demandIds.has(demandId)) errors.push(`第 ${excelRow} 行：需求编号 ${demandId} 在本次导入的需求台账中不存在`);
    }
  });
  return errors;
}

function showRecruitImportResult(title, message, errors = []) {
  const errorList = errors.length ? `<div class="import-errors"><strong>逐行错误（最多显示 12 条）</strong><ul>${errors.slice(0, 12).map((item) => `<li>${safeCell(item)}</li>`).join("")}</ul>${errors.length > 12 ? `<small>另有 ${errors.length - 12} 条错误</small>` : ""}</div>` : "";
  dialogContent.innerHTML = `<div class="dialog-kicker">DATA IN · 招聘 Excel</div><h2 class="dialog-title">${safeCell(title)}</h2><p>${safeCell(message)}</p>${errorList}<div class="ledger-actions"><button class="primary-button" id="recruit-import-close">返回招聘工作台 <span>→</span></button></div>`;
  document.querySelector("#recruit-import-close").addEventListener("click", () => openRecruitLedger());
  dialog.showModal();
}

function importRecruitXlsx(file) {
  if (!window.XLSX) { showRecruitImportResult("Excel组件尚未加载", "当前页面暂时无法解析招聘 Excel，请刷新页面后重试。", ["Excel 解析组件未加载"]); return; }
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const book = window.XLSX.read(reader.result, { type: "array", cellDates: true });
      const demandSheet = book.SheetNames.find((name) => name.includes("需求"));
      const candidateSheet = book.SheetNames.find((name) => name.includes("漏斗") || name.includes("候选"));
      const interviewSheet = book.SheetNames.find((name) => name.includes("面试"));
      if (!demandSheet && !candidateSheet) throw new Error("没有找到“招聘需求”或“应聘漏斗”工作表");
      const readTable=(name,key)=>{if(!name)return {rows:[],headerIndex:0,headers:[]};const matrix=window.XLSX.utils.sheet_to_json(book.Sheets[name],{header:1,defval:""});const headerIndex=matrix.slice(0,10).findIndex(row=>(row||[]).includes(key));if(headerIndex<0)return {rows:[],headerIndex:0,headers:[]};return {rows:window.XLSX.utils.sheet_to_json(book.Sheets[name],{range:headerIndex,defval:""}),headerIndex,headers:matrix[headerIndex]||[]};};
      const demandTable=readTable(demandSheet,"需求编号"), candidateTable=readTable(candidateSheet,"应聘编号"), interviewTable=readTable(interviewSheet,"面试编号");
      const importedDemands = demandSheet ? demandTable.rows.filter((row) => recruitImportText(row["需求编号"]) || recruitImportText(row["岗位"])) : [];
      const importedCandidates = candidateSheet ? candidateTable.rows.filter((row) => recruitImportText(row["应聘编号"]) || recruitImportText(row["候选人"])) : [];
      if(demandSheet){const missing=["需求编号","部门","岗位","需求人数","负责人"].filter(h=>!demandTable.headers.includes(h));if(missing.length)throw new Error(`招聘需求缺少必填字段标题：${missing.join("、")}`);}
      if(candidateSheet){const missing=["应聘编号","候选人","需求编号","来源","负责人"].filter(h=>!candidateTable.headers.includes(h));if(missing.length)throw new Error(`应聘漏斗缺少必填字段标题：${missing.join("、")}`);}
      const demandIds = new Set(importedDemands.map((row) => recruitImportText(row["需求编号"])).filter(Boolean));
      const errors = [...validateRecruitImport(importedDemands, "demand", demandIds,demandTable.headerIndex), ...validateRecruitImport(importedCandidates, "candidate", demandIds.size ? demandIds : new Set(recruitState.demands.map((row) => row.id)),candidateTable.headerIndex)];
      if (errors.length) { showRecruitImportResult("招聘 Excel 未导入", "发现字段错误，原有招聘数据未改变。请修正后重新上传。", errors); return; }
      const demands = importedDemands.map((row) => ({ id: recruitImportText(row["需求编号"]), department: recruitImportText(row["部门"]), position: recruitImportText(row["岗位"]), count: Number(row["需求人数"]), applyDate: dateCellToIso(row["申请日期"]), arrival: dateCellToIso(row["期望到岗日期"]), type: recruitImportText(row["申请类型"]) || "扩增编制", priority: recruitImportText(row["紧急程度"]) || "普通", salary: recruitImportText(row["薪酬范围"]), owner: recruitImportText(row["负责人"]), approvalStatus: recruitImportText(row["审批状态"]) || "待部门确认", status: recruitImportText(row["招聘状态"]) || "未开始", reason: recruitImportText(row["申请理由"]), duties: recruitImportText(row["岗位职责"]), requirements: recruitImportText(row["任职要求"]), note: recruitImportText(row["备注"]), closedReason: recruitImportText(row["关闭原因"]) }));
      const applications = importedCandidates.map((row) => ({ id: recruitImportText(row["应聘编号"]), candidate: recruitImportText(row["候选人"]), demandId: recruitImportText(row["需求编号"]), source: recruitImportText(row["来源"]), contact: recruitImportText(row["联系方式"]), education: recruitImportText(row["学历"]), workYears: recruitImportText(row["工作年限"]), availableDate: dateCellToIso(row["可到岗日期"]), expectedSalary: recruitImportText(row["期望薪资"]), screeningResult: recruitImportText(row["筛选结果"]) || "待筛选", screeningNote: recruitImportText(row["筛选依据/待确认点"]), interviewResult: recruitImportText(row["面试结论"]) || "未面试", assessmentStatus: recruitImportText(row["测评状态"]) || "未安排", backgroundStatus: recruitImportText(row["背调状态"]) || "未启动", offerStatus: recruitImportText(row["Offer 状态"]) || "未启动", stage: recruitImportText(row["当前阶段"]) || "待筛选", owner: recruitImportText(row["负责人"]), nextDate: dateCellToIso(row["下一步日期"]), endReason: recruitImportText(row["结束原因"]), note: recruitImportText(row["备注"]) }));
      const interviews = interviewSheet ? interviewTable.rows.filter((row) => recruitImportText(row["面试编号"]) || recruitImportText(row["应聘编号"])).map((row) => ({ id: recruitImportText(row["面试编号"]), applicationId: recruitImportText(row["应聘编号"]), round: recruitImportText(row["轮次"]), date: dateCellToIso(row["面试日期"]), interviewer: recruitImportText(row["面试官"]), feedback: recruitImportText(row["反馈状态"]) || "待反馈", result: recruitImportText(row["结论"]) || "待评价" })) : null;
      createRecruitBackup("招聘 Excel 导入");
      if (demands.length) recruitState.demands = demands;
      if (applications.length) recruitState.applications = applications;
      if (interviews) recruitState.interviews = interviews;
      saveRecruitState();
      showRecruitImportResult("招聘 Excel 已导入", `已读取 ${demands.length} 条需求、${applications.length} 条候选人记录${interviews ? `、${interviews.length} 条面试记录` : ""}，并在导入前保留了一个备份。`);
    } catch (error) { showRecruitImportResult("招聘 Excel 导入失败", "原有招聘数据未改变，请确认上传的是本工作簿或按字段字典整理的 Excel。", [error.message]); }
  };
  reader.readAsArrayBuffer(file);
}

function demandNextAction(row) {
  if (row.approvalStatus !== "已批准") return "推进审批";
  if (row.status === "招聘中") return "暂停招聘";
  if (row.status === "暂停") return "恢复招聘";
  if (row.status === "未开始") return "开始招聘";
  return "查看记录";
}

function advanceDemandWorkflow(id, action, returnTab = "demands") {
  const row = recruitState.demands.find((item) => item.id === id);
  if (!row) return;
  createRecruitBackup(`招聘需求${action}`);
  if (action === "推进审批") {
    const approvalSteps = ["待部门确认", "待 HR 评审", "待审批", "已批准"];
    const current = approvalSteps.indexOf(row.approvalStatus || "待部门确认");
    row.approvalStatus = approvalSteps[Math.min(current + 1, approvalSteps.length - 1)];
    if (row.approvalStatus === "已批准") row.status = "未开始";
  } else if (action === "开始招聘") {
    row.status = "招聘中";
  } else if (action === "暂停招聘") {
    row.status = "暂停";
  } else if (action === "恢复招聘") {
    row.status = "招聘中";
  } else if (action === "完成需求") {
    row.status = "已满足";
  } else if (action === "关闭需求") {
    row.status = "已关闭";
    row.closedReason = row.closedReason || "手动关闭，请在编辑中补充原因";
  }
  saveRecruitState();
  openRecruitLedger(returnTab);
}

function openInterviewForm(id = "", returnTab = "interviews") {
  const row = recruitState.interviews.find((item) => item.id === id);
  const editing = Boolean(row);
  const item = row || { id: "", applicationId: recruitState.applications[0]?.id || "", round: "初试", date: "", interviewer: "", dimension: "", feedback: "待反馈", nextRound: "待定", result: "待评价", note: "" };
  dialogContent.innerHTML = `<div class="dialog-kicker">LEDGER · 面试记录</div><h2 class="dialog-title">${editing ? "编辑面试记录" : "新增面试记录"}</h2><p>面试记录要保留评价证据、反馈状态和是否进入下一轮；不要只写“感觉不错”。</p><form id="interview-form" class="mini-tool-form ledger-form"><div class="form-two-col"><label>面试编号<input name="id" value="${safeCell(item.id)}" required ${editing ? "readonly" : ""} /></label><label>关联应聘<select name="applicationId">${recruitState.applications.map((app) => `<option value="${safeCell(app.id)}" ${item.applicationId === app.id ? "selected" : ""}>${safeCell(app.id)} · ${safeCell(app.candidate)}</option>`).join("")}</select></label></div><div class="form-two-col"><label>轮次<select name="round"><option ${item.round === "电话筛选" ? "selected" : ""}>电话筛选</option><option ${item.round === "初试" ? "selected" : ""}>初试</option><option ${item.round === "复试" ? "selected" : ""}>复试</option><option ${item.round === "终试" ? "selected" : ""}>终试</option></select></label><label>面试日期<input name="date" type="date" value="${safeCell(item.date)}" /></label></div><div class="form-two-col"><label>面试官<input name="interviewer" value="${safeCell(item.interviewer)}" required /></label><label>反馈状态<select name="feedback"><option ${item.feedback === "待反馈" ? "selected" : ""}>待反馈</option><option ${item.feedback === "已完成" ? "selected" : ""}>已完成</option></select></label></div><div class="form-two-col"><label>是否进入下一轮<select name="nextRound"><option ${item.nextRound === "是" ? "selected" : ""}>是</option><option ${item.nextRound === "否" ? "selected" : ""}>否</option><option ${item.nextRound === "待定" ? "selected" : ""}>待定</option></select></label><label>结论<select name="result"><option ${item.result === "待评价" ? "selected" : ""}>待评价</option><option ${item.result === "通过" ? "selected" : ""}>通过</option><option ${item.result === "不通过" ? "selected" : ""}>不通过</option><option ${item.result === "保留" ? "selected" : ""}>保留</option></select></label></div><label>评价维度/关键证据<textarea name="dimension" rows="2">${safeCell(item.dimension || "")}</textarea></label><label>评语/待确认点<textarea name="note" rows="2">${safeCell(item.note || "")}</textarea></label><div class="ledger-actions"><button class="outline-button" type="button" id="interview-form-cancel">取消</button><button class="primary-button" type="submit">保存面试记录 <span>✓</span></button></div></form>`;
  document.querySelector("#interview-form-cancel").addEventListener("click", () => openRecruitLedger(returnTab));
  document.querySelector("#interview-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const next = Object.fromEntries(new FormData(event.currentTarget).entries());
    if (!next.id || !next.applicationId || !next.interviewer || (!editing && recruitState.interviews.some((item) => item.id === next.id))) return;
    createRecruitBackup(editing ? "编辑面试记录" : "新增面试记录");
    const index = recruitState.interviews.findIndex((item) => item.id === next.id);
    if (index >= 0) recruitState.interviews[index] = { ...recruitState.interviews[index], ...next }; else recruitState.interviews.push(next);
    saveRecruitState(); openRecruitLedger(returnTab);
  });
  dialog.showModal();
}

function advanceHandoff(id) {
  const row = recruitState.applications.find((item) => item.id === id);
  if (!row) return;
  createRecruitBackup("推进入职交接");
  if (row.stage === "已接受" || row.offerStatus === "已接受") { row.stage = "待入职"; row.note = "Offer 已接受，待完成入职材料和报到安排"; }
  else if (row.stage === "待入职") { row.stage = "已入职"; row.note = "已完成入职交接，请转入 03 入职档案与合同模块"; }
  saveRecruitState(); openRecruitLedger("handoff");
}

function renderRecruitInterviewTable(root, keyword = "") {
  const rows = recruitState.interviews.filter((row) => `${row.id} ${row.applicationId} ${row.interviewer} ${row.round}`.toLowerCase().includes(keyword.toLowerCase()));
  root.innerHTML = `<div class="ledger-heading"><strong>面试记录 <span>${rows.length}/${recruitState.interviews.length}</span></strong><small>记录面试证据、反馈状态和是否进入下一轮</small></div><div class="ledger-toolbar"><input id="recruit-search" placeholder="搜索面试编号、应聘编号、面试官或轮次" value="${safeCell(keyword)}" /></div><div class="ledger-table-wrap"><table class="ledger-table"><thead><tr><th>面试</th><th>候选人</th><th>面试官/日期</th><th>反馈与结论</th></tr></thead><tbody>${rows.map((row) => { const app = recruitState.applications.find((item) => item.id === row.applicationId); return `<tr><td><strong>${safeCell(row.id)}</strong><small>${safeCell(row.round)}</small></td><td>${safeCell(app?.candidate || row.applicationId)}<small>${safeCell(row.applicationId)}</small></td><td>${safeCell(row.interviewer)}<small>${safeCell(row.date)}</small></td><td><span class="status ${row.feedback === "待反馈" ? "status-warn" : "status-ok"}">${safeCell(row.feedback)}</span><small>${safeCell(row.result)} · ${safeCell(row.note || row.dimension || "待补充评语")}</small><div class="table-actions"><button class="table-action" data-interview-edit="${safeCell(row.id)}">编辑</button></div></td></tr>`; }).join("") || `<tr><td colspan="4" class="ledger-empty">没有匹配的面试记录</td></tr>`}</tbody></table></div>`;
}

function renderRecruitHandoffTable(root, keyword = "") {
  const rows = recruitState.applications.filter((row) => ["已接受", "待入职", "已入职"].includes(row.stage) || row.offerStatus === "已接受").filter((row) => `${row.id} ${row.candidate} ${row.demandId} ${row.owner}`.toLowerCase().includes(keyword.toLowerCase()));
  root.innerHTML = `<div class="ledger-heading"><strong>录用与入职交接 <span>${rows.length}</span></strong><small>Offer 接受后转入待入职，入职完成后交接到 03 入职档案与合同模块</small></div><div class="ledger-toolbar"><input id="recruit-search" placeholder="搜索候选人、应聘编号或负责人" value="${safeCell(keyword)}" /></div><div class="ledger-table-wrap"><table class="ledger-table"><thead><tr><th>候选人</th><th>需求/负责人</th><th>Offer</th><th>交接状态/操作</th></tr></thead><tbody>${rows.map((row) => `<tr><td><strong>${safeCell(row.candidate)}</strong><small>${safeCell(row.id)}</small></td><td>${safeCell(row.demandId)}<small>${safeCell(row.owner)}</small></td><td>${safeCell(row.offerStatus || "未启动")}</td><td><span class="status ${row.stage === "已入职" ? "status-ok" : "status-info"}">${safeCell(row.stage)}</span><small>${safeCell(row.note)}</small>${row.stage !== "已入职" ? `<div class="table-actions"><button class="table-action" data-handoff-next="${safeCell(row.id)}">${row.stage === "待入职" ? "标记已入职" : "进入入职交接"}</button><button class="table-action" data-application-edit="${safeCell(row.id)}">编辑</button></div>` : ""}</td></tr>`).join("") || `<tr><td colspan="4" class="ledger-empty">暂无已接受 Offer 或待入职记录</td></tr>`}</tbody></table></div>`;
}

function recruitInsightMarkup(stats) {
  const stages = ["待筛选", "待初试", "待复试", "待发 Offer", "Offer 待确认", "待入职", "已入职"];
  const funnel = stages.map((stage) => `<span>${stage}<strong>${stats.stageCounts[stage] || 0}</strong></span>`).join("");
  const channels = Object.entries(stats.channelCounts).map(([source, count]) => `${safeCell(source)} ${count}`).join(" · ") || "暂无来源数据";
  return `<div class="recruit-insights"><div><small>候选人漏斗</small><div class="funnel-mini">${funnel}</div></div><div><small>渠道记录</small><strong>${channels}</strong></div><div><small>已入职</small><strong>${stats.hires} 人</strong></div></div>`;
}

function openRecruitLedger(initialTab = "applications", taskTitle = "") {
  const tab = ["applications", "demands", "interviews", "handoff"].includes(initialTab) ? initialTab : "applications";
  const stats = recruitStats();
  dialogContent.innerHTML = `<div class="dialog-kicker">LEDGER · 招聘与人才获取</div><h2 class="dialog-title">招聘工作台</h2><p>以招聘需求和应聘记录为主线，持续记录下一步动作；数据保存在当前浏览器，示例数据均为虚构。</p><p class="process-line">需求：提交 → 部门确认 → HR 评审 → 审批 → 岗位建模 → 招聘中</p><p class="process-line">候选人：筛选 → 面试 → 测评（按需）→ 背调授权（按需）→ 录用审批 → Offer → 入职或人才库</p>${window.renderModuleResources?.("recruit") || ""}<div class="metric-grid compact-metrics"><article class="metric-card"><span>进行中需求</span><strong>${stats.demands}</strong><small>含待审批与招聘中</small></article><article class="metric-card"><span>逾期跟进</span><strong>${stats.overdue}</strong><small>需要今天处理</small></article><article class="metric-card"><span>待反馈面试</span><strong>${stats.pendingInterviews}</strong><small>面试官尚未提交</small></article><article class="metric-card metric-card-accent"><span>待发/待确认 Offer</span><strong>${stats.offers}</strong><small>需人工复核</small></article></div><div class="ledger-toolbar recruit-toolbar"><button class="outline-button ${tab === "applications" ? "is-selected" : ""}" data-recruit-tab="applications">候选人漏斗</button><button class="outline-button ${tab === "demands" ? "is-selected" : ""}" data-recruit-tab="demands">招聘需求</button><button class="outline-button" id="recruit-add">新增记录 <span>＋</span></button><label class="file-button">导入招聘 Excel<input id="recruit-import" type="file" accept=".xlsx,.xls" /></label><button class="outline-button" id="recruit-backups">备份历史 <span>↶</span></button></div><div id="recruit-table"></div><div class="ledger-actions"><button class="primary-button" id="recruit-close">完成查看 <span>×</span></button></div>`;
  dialogContent.insertAdjacentHTML("beforeend", renderModuleAIAssist(taskTitle || "招聘与人才获取", "recruit"));
  bindModuleAIAssist(dialogContent);
  document.querySelector(".recruit-toolbar").insertAdjacentHTML("beforebegin", `<div class="recruit-risk-card"><strong>AI 与隐私边界</strong><span>AI 只用于生成筛选摘要、面试问题、跟进提醒和沟通草稿；不自动决定录用，不替代 HR、用人部门或审批人。</span><span>联系方式、背调和测评信息按最小必要原则保存；背调必须先取得候选人授权，Offer 必须完成录用审批后发送。</span></div>`);
  document.querySelector(".recruit-toolbar").insertAdjacentHTML("afterbegin", `<button class="outline-button ${tab === "interviews" ? "is-selected" : ""}" data-recruit-tab="interviews">面试记录</button><button class="outline-button ${tab === "handoff" ? "is-selected" : ""}" data-recruit-tab="handoff">录用交接</button>`);
  function renderRecruitTable(activeTab = tab, keyword = "", stage = "all") {
    const root = document.querySelector("#recruit-table");
    if (activeTab === "interviews") {
      renderRecruitInterviewTable(root, keyword);
      document.querySelector("#recruit-search").addEventListener("input", (event) => renderRecruitTable(activeTab, event.target.value, stage));
      document.querySelectorAll("[data-interview-edit]").forEach((button) => button.addEventListener("click", () => openInterviewForm(button.dataset.interviewEdit, activeTab)));
      return;
    }
    if (activeTab === "handoff") {
      renderRecruitHandoffTable(root, keyword);
      document.querySelector("#recruit-search").addEventListener("input", (event) => renderRecruitTable(activeTab, event.target.value, stage));
      document.querySelectorAll("[data-handoff-next]").forEach((button) => button.addEventListener("click", () => advanceHandoff(button.dataset.handoffNext)));
      document.querySelectorAll("[data-application-edit]").forEach((button) => button.addEventListener("click", () => openRecruitForm("application", button.dataset.applicationEdit, activeTab)));
      return;
    }
    if (activeTab === "demands") {
      const rows = recruitState.demands.filter((row) => `${row.id} ${row.department} ${row.position} ${row.owner}`.toLowerCase().includes(keyword.toLowerCase()));
      root.innerHTML = `<div class="ledger-heading"><strong>招聘需求台账 <span>${rows.length}/${recruitState.demands.length}</span></strong><small>一条需求可对应多个候选人；先完成需求确认和审批，再进入招聘中</small></div><div class="ledger-toolbar"><input id="recruit-search" placeholder="搜索需求、部门、岗位或负责人" value="${safeCell(keyword)}" /><select id="recruit-stage"><option value="all">全部需求状态</option><option>待审批</option><option>招聘中</option><option>暂停</option><option>已满足</option><option>已关闭</option></select></div><div class="ledger-table-wrap"><table class="ledger-table"><thead><tr><th>需求</th><th>岗位/人数</th><th>申请与到岗</th><th>审批/状态</th></tr></thead><tbody>${rows.map((row) => `<tr><td><strong>${safeCell(row.id)}</strong><small>${safeCell(row.department)} · ${safeCell(row.owner)}</small></td><td>${safeCell(row.position)}<small>${row.count} 人 · ${safeCell(row.type || "未填写")} · ${safeCell(row.priority)}优先</small></td><td>${safeCell(row.applyDate || "未填写")}<small>期望 ${safeCell(row.arrival)}</small></td><td><span class="status ${row.status === "招聘中" ? "status-info" : "status-warn"}">${safeCell(row.approvalStatus || "待确认")}</span><small>${safeCell(row.status)}</small><div class="table-actions"><button class="table-action" data-demand-action="${safeCell(row.id)}" data-demand-action-name="${safeCell(demandNextAction(row))}">${safeCell(demandNextAction(row))}</button>${row.approvalStatus === "已批准" && !["已满足", "已关闭"].includes(row.status) ? `<button class="table-action" data-demand-complete="${safeCell(row.id)}">完成</button><button class="table-action" data-demand-close="${safeCell(row.id)}">关闭</button>` : ""}<button class="table-action" data-demand-edit="${safeCell(row.id)}">编辑</button></div></td></tr>`).join("") || `<tr><td colspan="4" class="ledger-empty">没有匹配的招聘需求</td></tr>`}</tbody></table></div>`;
    } else {
      const rows = recruitState.applications.filter((row) => { const textMatch = `${row.id} ${row.candidate} ${row.demandId} ${row.source} ${row.owner}`.toLowerCase().includes(keyword.toLowerCase()); return textMatch && (stage === "all" || row.stage === stage); });
      root.innerHTML = `<div class="ledger-heading"><strong>候选人应聘漏斗 <span>${rows.length}/${recruitState.applications.length}</span></strong><small>每次应聘独立记录，保留下一步动作和截止日期</small></div><div class="ledger-toolbar"><input id="recruit-search" placeholder="搜索候选人、需求、来源或负责人" value="${safeCell(keyword)}" /><select id="recruit-stage"><option value="all">全部阶段</option>${recruitStages.map((item) => `<option ${stage === item ? "selected" : ""}>${item}</option>`).join("")}</select></div><div class="ledger-table-wrap"><table class="ledger-table"><thead><tr><th>候选人/应聘</th><th>需求/来源</th><th>下一步</th><th>阶段/操作</th></tr></thead><tbody>${rows.map((row) => `<tr><td><strong>${safeCell(row.candidate)}</strong><small>${safeCell(row.id)} · ${safeCell(row.owner)}</small></td><td>${safeCell(row.demandId)}<small>${safeCell(row.source)}</small></td><td>${safeCell(row.nextDate)}<small>${safeCell(row.note)}</small></td><td><span class="status ${recruitStatusClass[row.stage] || "status-soft"}">${safeCell(row.stage)}</span><div class="table-actions"><button class="table-action" data-application-next="${safeCell(row.id)}">推进</button><button class="table-action" data-application-edit="${safeCell(row.id)}">编辑</button></div></td></tr>`).join("") || `<tr><td colspan="4" class="ledger-empty">没有匹配的候选人记录</td></tr>`}</tbody></table></div>`;
      root.insertAdjacentHTML("afterbegin", recruitInsightMarkup(stats));
    }
    document.querySelector("#recruit-search").addEventListener("input", (event) => renderRecruitTable(activeTab, event.target.value, document.querySelector("#recruit-stage").value));
    document.querySelector("#recruit-stage").addEventListener("change", (event) => renderRecruitTable(activeTab, document.querySelector("#recruit-search").value, event.target.value));
    document.querySelectorAll("[data-demand-edit]").forEach((button) => button.addEventListener("click", () => openRecruitForm("demand", button.dataset.demandEdit, activeTab)));
    document.querySelectorAll("[data-demand-action]").forEach((button) => button.addEventListener("click", () => advanceDemandWorkflow(button.dataset.demandAction, button.dataset.demandActionName, activeTab)));
    document.querySelectorAll("[data-demand-complete]").forEach((button) => button.addEventListener("click", () => advanceDemandWorkflow(button.dataset.demandComplete, "完成需求", activeTab)));
    document.querySelectorAll("[data-demand-close]").forEach((button) => button.addEventListener("click", () => advanceDemandWorkflow(button.dataset.demandClose, "关闭需求", activeTab)));
    document.querySelectorAll("[data-application-edit]").forEach((button) => button.addEventListener("click", () => openRecruitForm("application", button.dataset.applicationEdit, activeTab)));
    document.querySelectorAll("[data-application-next]").forEach((button) => button.addEventListener("click", () => advanceApplication(button.dataset.applicationNext, activeTab)));
  }
  document.querySelectorAll("[data-recruit-tab]").forEach((button) => button.addEventListener("click", () => openRecruitLedger(button.dataset.recruitTab, taskTitle)));
  document.querySelector("#recruit-add").addEventListener("click", () => { if (tab === "interviews") openInterviewForm("", tab); else if (tab === "handoff") openRecruitForm("application", "", tab); else openRecruitForm(tab === "demands" ? "demand" : "application", "", tab); });
  document.querySelector("#recruit-backups").addEventListener("click", openRecruitBackupManager);
  document.querySelector("#recruit-import").addEventListener("change", (event) => { if (event.target.files[0]) importRecruitXlsx(event.target.files[0]); event.target.value = ""; });
  document.querySelector("#recruit-close").addEventListener("click", () => dialog.close());
  renderRecruitTable(tab);
  dialog.showModal();
}

function openRecruitForm(type, id = "", returnTab = "applications") {
  const row = type === "demand" ? recruitState.demands.find((item) => item.id === id) : recruitState.applications.find((item) => item.id === id);
  const editing = Boolean(row);
  const item = row || (type === "demand" ? { id: "", department: "", position: "", count: 1, applyDate: "", arrival: "", type: "扩增编制", priority: "普通", owner: "", salary: "", reason: "", duties: "", requirements: "", approvalStatus: "待部门确认", status: "待审批", note: "" } : { id: "", candidate: "", demandId: recruitState.demands[0]?.id || "", source: "", contact: "", education: "", workYears: "", availableDate: "", expectedSalary: "", screeningResult: "待筛选", screeningNote: "", interviewResult: "未面试", assessmentStatus: "未安排", backgroundStatus: "未启动", offerStatus: "未启动", endReason: "", stage: "待筛选", owner: "", nextDate: "", note: "" });
  const fields = type === "demand" ? `<div class="form-two-col"><label>需求编号<input name="id" value="${safeCell(item.id)}" required ${editing ? "readonly" : ""} /></label><label>部门<input name="department" value="${safeCell(item.department)}" required /></label></div><div class="form-two-col"><label>岗位<input name="position" value="${safeCell(item.position)}" required /></label><label>需求人数<input name="count" type="number" min="1" value="${Number(item.count) || 1}" required /></label></div><div class="form-two-col"><label>申请日期<input name="applyDate" type="date" value="${safeCell(item.applyDate)}" /></label><label>期望到岗日期<input name="arrival" type="date" value="${safeCell(item.arrival)}" /></label></div><div class="form-two-col"><label>申请类型<select name="type"><option ${item.type === "离职补充" ? "selected" : ""}>离职补充</option><option ${item.type === "短期需求" ? "selected" : ""}>短期需求</option><option ${item.type === "扩增编制" ? "selected" : ""}>扩增编制</option><option ${item.type === "人才储备" ? "selected" : ""}>人才储备</option></select></label><label>紧急程度<select name="priority"><option ${item.priority === "普通" ? "selected" : ""}>普通</option><option ${item.priority === "高" ? "selected" : ""}>高</option><option ${item.priority === "紧急" ? "selected" : ""}>紧急</option></select></label></div><div class="form-two-col"><label>薪酬范围<input name="salary" value="${safeCell(item.salary)}" /></label><label>负责人<input name="owner" value="${safeCell(item.owner)}" required /></label></div><div class="form-two-col"><label>审批状态<select name="approvalStatus"><option ${item.approvalStatus === "待部门确认" ? "selected" : ""}>待部门确认</option><option ${item.approvalStatus === "待HR评审" ? "selected" : ""}>待HR评审</option><option ${item.approvalStatus === "待审批" ? "selected" : ""}>待审批</option><option ${item.approvalStatus === "已批准" ? "selected" : ""}>已批准</option><option ${item.approvalStatus === "需补充" ? "selected" : ""}>需补充</option></select></label><label>招聘状态<select name="status"><option ${item.status === "待审批" ? "selected" : ""}>待审批</option><option ${item.status === "招聘中" ? "selected" : ""}>招聘中</option><option ${item.status === "暂停" ? "selected" : ""}>暂停</option><option ${item.status === "已满足" ? "selected" : ""}>已满足</option><option ${item.status === "已关闭" ? "selected" : ""}>已关闭</option></select></label></div><label>申请理由<input name="reason" value="${safeCell(item.reason)}" /></label><label>岗位职责<textarea name="duties" rows="2">${safeCell(item.duties)}</textarea></label><label>任职要求<textarea name="requirements" rows="2">${safeCell(item.requirements)}</textarea></label><label>备注<input name="note" value="${safeCell(item.note)}" /></label>` : `<div class="form-two-col"><label>应聘编号<input name="id" value="${safeCell(item.id)}" required ${editing ? "readonly" : ""} /></label><label>候选人<input name="candidate" value="${safeCell(item.candidate)}" required /></label></div><div class="form-two-col"><label>关联需求<select name="demandId">${recruitState.demands.map((demand) => `<option value="${safeCell(demand.id)}" ${item.demandId === demand.id ? "selected" : ""}>${safeCell(demand.id)} · ${safeCell(demand.position)}</option>`).join("")}</select></label><label>来源<input name="source" value="${safeCell(item.source)}" required /></label></div><div class="form-two-col"><label>联系方式<input name="contact" value="${safeCell(item.contact)}" placeholder="仅在授权后保存" /></label><label>学历<input name="education" value="${safeCell(item.education)}" /></label></div><div class="form-two-col"><label>工作年限<input name="workYears" value="${safeCell(item.workYears)}" /></label><label>可到岗日期<input name="availableDate" type="date" value="${safeCell(item.availableDate)}" /></label></div><div class="form-two-col"><label>期望薪资<input name="expectedSalary" value="${safeCell(item.expectedSalary)}" /></label><label>筛选结果<select name="screeningResult"><option ${item.screeningResult === "待筛选" ? "selected" : ""}>待筛选</option><option ${item.screeningResult === "通过" ? "selected" : ""}>通过</option><option ${item.screeningResult === "保留" ? "selected" : ""}>保留</option><option ${item.screeningResult === "淘汰" ? "selected" : ""}>淘汰</option></select></label></div><label>筛选依据/待确认点<textarea name="screeningNote" rows="2">${safeCell(item.screeningNote)}</textarea></label><div class="form-two-col"><label>面试结论<select name="interviewResult"><option ${item.interviewResult === "未面试" ? "selected" : ""}>未面试</option><option ${item.interviewResult === "待反馈" ? "selected" : ""}>待反馈</option><option ${item.interviewResult === "初试通过" ? "selected" : ""}>初试通过</option><option ${item.interviewResult === "复试通过" ? "selected" : ""}>复试通过</option><option ${item.interviewResult === "不通过" ? "selected" : ""}>不通过</option></select></label><label>测评状态<select name="assessmentStatus"><option ${item.assessmentStatus === "未安排" ? "selected" : ""}>未安排</option><option ${item.assessmentStatus === "待完成" ? "selected" : ""}>待完成</option><option ${item.assessmentStatus === "已完成" ? "selected" : ""}>已完成</option><option ${item.assessmentStatus === "不适用" ? "selected" : ""}>不适用</option></select></label></div><div class="form-two-col"><label>背调状态<select name="backgroundStatus"><option ${item.backgroundStatus === "未启动" ? "selected" : ""}>未启动</option><option ${item.backgroundStatus === "待授权" ? "selected" : ""}>待授权</option><option ${item.backgroundStatus === "进行中" ? "selected" : ""}>进行中</option><option ${item.backgroundStatus === "已通过" ? "selected" : ""}>已通过</option><option ${item.backgroundStatus === "有风险" ? "selected" : ""}>有风险</option></select></label><label>Offer 状态<select name="offerStatus"><option ${item.offerStatus === "未启动" ? "selected" : ""}>未启动</option><option ${item.offerStatus === "待审批" ? "selected" : ""}>待审批</option><option ${item.offerStatus === "待发送" ? "selected" : ""}>待发送</option><option ${item.offerStatus === "已发送" ? "selected" : ""}>已发送</option><option ${item.offerStatus === "已接受" ? "selected" : ""}>已接受</option><option ${item.offerStatus === "已拒绝" ? "selected" : ""}>已拒绝</option></select></label></div><label>结束原因<input name="endReason" value="${safeCell(item.endReason)}" /></label><div class="form-two-col"><label>当前阶段<select name="stage">${recruitStages.map((stage) => `<option ${item.stage === stage ? "selected" : ""}>${stage}</option>`).join("")}</select></label><label>负责人<input name="owner" value="${safeCell(item.owner)}" required /></label></div><div class="form-two-col"><label>下一步日期<input name="nextDate" type="date" value="${safeCell(item.nextDate)}" /></label><label>备注<input name="note" value="${safeCell(item.note)}" /></label></div>`;
  dialogContent.innerHTML = `<div class="dialog-kicker">LEDGER · ${type === "demand" ? "招聘需求" : "候选人应聘"}</div><h2 class="dialog-title">${editing ? "编辑记录" : "新增记录"}</h2><p>${type === "demand" ? "需求审批通过后才能进入招聘中；人数和到岗日期用于进度跟踪。" : "一条记录代表候选人对某个需求的一次应聘，阶段变化必须保留下一步动作。"}</p><form id="recruit-form" class="mini-tool-form ledger-form">${fields}<div class="ledger-actions"><button class="outline-button" type="button" id="recruit-form-cancel">取消</button><button class="primary-button" type="submit">保存记录 <span>✓</span></button></div></form>`;
  const statusSelect = document.querySelector("[name='status']");
  if (statusSelect) statusSelect.value = item.status;
  document.querySelector("#recruit-form-cancel").addEventListener("click", () => openRecruitLedger(returnTab));
  document.querySelector("#recruit-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const next = Object.fromEntries(form.entries());
    if (type === "demand") { next.count = Number(next.count); if (!next.id || !next.department || !next.position || !next.owner || (!editing && recruitState.demands.some((item) => item.id === next.id))) return; } else if (!next.id || !next.candidate || !next.demandId || !next.source || !next.owner || (!editing && recruitState.applications.some((item) => item.id === next.id))) return;
    createRecruitBackup(editing ? `编辑${type === "demand" ? "招聘需求" : "候选人"}` : `新增${type === "demand" ? "招聘需求" : "候选人"}`);
    const target = type === "demand" ? recruitState.demands : recruitState.applications;
    const index = target.findIndex((item) => item.id === next.id);
    if (index >= 0) target[index] = { ...target[index], ...next }; else target.push(next);
    saveRecruitState(); openRecruitLedger(returnTab);
  });
  dialog.showModal();
}

function advanceApplication(id, returnTab = "applications") {
  const row = recruitState.applications.find((item) => item.id === id); if (!row) return;
  const index = recruitStages.indexOf(row.stage); const nextStage = recruitStages[Math.min(index + 1, recruitStages.length - 1)];
  if (["不合适", "候选人拒绝", "流程暂停", "已入职"].includes(row.stage)) return;
  createRecruitBackup("推进候选人阶段"); row.stage = nextStage; row.note = `已推进至${nextStage}，请补充下一步处理`; saveRecruitState(); openRecruitLedger(returnTab);
}

function openRecruitBackupManager() {
  const backups = recruitState.backups || [];
  dialogContent.innerHTML = `<div class="dialog-kicker">LEDGER · VERSION HISTORY</div><h2 class="dialog-title">招聘备份历史</h2><p>新增、编辑和推进候选人前会保存快照，保留最近 5 个版本。</p><div class="backup-list">${backups.map((backup, index) => `<div class="backup-item"><div><strong>${safeCell(backup.reason)}</strong><small>${safeCell(backup.createdAt)}</small></div><button class="outline-button" data-recruit-restore="${index}">恢复此版本</button></div>`).join("") || `<div class="ledger-empty">当前还没有可恢复的备份</div>`}</div><div class="ledger-actions"><button class="primary-button" id="recruit-backup-close">返回招聘台账 <span>→</span></button></div>`;
  document.querySelectorAll("[data-recruit-restore]").forEach((button) => button.addEventListener("click", () => { const backup = recruitState.backups[Number(button.dataset.recruitRestore)]; if (!backup) return; recruitState.demands = backup.demands; recruitState.applications = backup.applications; recruitState.interviews = backup.interviews; recruitState.backups.splice(Number(button.dataset.recruitRestore), 1); saveRecruitState(); openRecruitLedger(); }));
  document.querySelector("#recruit-backup-close").addEventListener("click", () => openRecruitLedger());
}

function exportRecruitXlsx(template = false) {
  if (!window.XLSX) return;
  const book = window.XLSX.utils.book_new();
  const headers={demand:["需求编号","部门","岗位","需求人数","申请日期","期望到岗日期","申请类型","紧急程度","薪酬范围","负责人","审批状态","招聘状态","申请理由","岗位职责","任职要求","备注","已入职人数","缺口人数"],application:["应聘编号","候选人","需求编号","来源","学历","工作年限","可到岗日期","期望薪资","筛选结果","筛选依据","面试结论","测评状态","背调状态","Offer 状态","当前阶段","负责人","下一步日期","结束原因","备注","距下一步天数","跟进时限"],interview:["面试编号","应聘编号","轮次","面试日期","面试官","评价维度/关键证据","反馈状态","是否进入下一轮","结论","评语"]};
  const excelDate=value=>value?new Date(`${value}T00:00:00Z`):"";
  const demandData=template?[]:recruitState.demands.map(row=>[row.id,row.department,row.position,row.count,excelDate(row.applyDate),excelDate(row.arrival),row.type,row.priority,row.salary,row.owner,row.approvalStatus,row.status,row.reason,row.duties,row.requirements,row.note]);
  const applicationData=template?[]:recruitState.applications.map(row=>[row.id,row.candidate,row.demandId,row.source,row.education,row.workYears,excelDate(row.availableDate),row.expectedSalary,row.screeningResult,row.screeningNote,row.interviewResult,row.assessmentStatus,row.backgroundStatus,row.offerStatus,row.stage,row.owner,excelDate(row.nextDate),row.endReason,row.note]);
  const interviewData=template?[]:recruitState.interviews.map(row=>[row.id,row.applicationId,row.round,excelDate(row.date),row.interviewer,row.dimension,row.feedback,row.nextRound,row.result,row.note]);
  const demandRows=Array.from({length:Math.max(template?500:0,demandData.length)},(_,i)=>{const n=i+3;const row=demandData[i]||Array(16).fill("");return [...row,{f:`IF(A${n}="","",COUNTIFS('应聘漏斗'!$C$3:$C$502,A${n},'应聘漏斗'!$O$3:$O$502,"已入职"))`},{f:`IF(A${n}="","",D${n}-Q${n})`}];});
  const applicationRows=Array.from({length:Math.max(template?500:0,applicationData.length)},(_,i)=>{const n=i+3;const row=applicationData[i]||Array(19).fill("");return [...row,{f:`IF(Q${n}="","",Q${n}-TODAY())`},{f:`IF(Q${n}="","",IF(Q${n}<TODAY(),"逾期",IF(Q${n}=TODAY(),"今日到期","未到期")))`}];});
  const interviewRows=Array.from({length:Math.max(template?500:0,interviewData.length)},(_,i)=>interviewData[i]||Array(10).fill(""));
  const addTable=(name,note,head,rows)=>{const sheet=window.XLSX.utils.aoa_to_sheet([[note],head,...rows]);sheet["!merges"]=[{s:{r:0,c:0},e:{r:0,c:head.length-1}}];sheet["!rows"]=[{hpt:44}];window.XLSX.utils.book_append_sheet(book,sheet,name);};
  addTable("招聘需求","填A-P列。Q列用IF+COUNTIFS按需求编号统计已入职人数，R列用IF计算缺口=需求人数-已入职人数；空白需求行不显示结果。",headers.demand,demandRows);
  addTable("应聘漏斗","填A-S列。T列用IF+TODAY计算距下一步天数；U列用IF标记逾期、今日到期或未到期。",headers.application,applicationRows);
  addTable("面试记录","每行记录一次面试；面试结论、反馈和是否进入下一轮按实际审批记录填写。本表无自动数值公式。",headers.interview,interviewRows);
  const summaryNote="本页自动汇总工作簿数据：B3 COUNTA统计需求数，B4 COUNTA统计候选人记录数，B5 COUNTIF统计待反馈面试，B6 COUNTIF统计待发/已发Offer，B7 COUNTIF统计已入职人数。";
  const summary=window.XLSX.utils.aoa_to_sheet([[summaryNote],["指标","自动计算结果"],["招聘需求数",{f:"COUNTA('招聘需求'!A3:A502)"}],["候选人记录数",{f:"COUNTA('应聘漏斗'!A3:A502)"}],["待反馈面试",{f:'COUNTIF(\'面试记录\'!G3:G502,"待反馈")'}],["待发/已发Offer",{f:'COUNTIF(\'应聘漏斗\'!N3:N502,"待发送")+COUNTIF(\'应聘漏斗\'!N3:N502,"已发送")'}],["已入职人数",{f:'COUNTIF(\'应聘漏斗\'!O3:O502,"已入职")'}]]);
  summary["!merges"]=[{s:{r:0,c:0},e:{r:0,c:1}}];summary["!rows"]=[{hpt:40}];window.XLSX.utils.book_append_sheet(book,summary,"招聘汇总");
  const prompt=["请把原始招聘Excel整理到本工作簿标准表。按字段含义明确对应，不要猜填；保留原始记录顺序和数量，不编造、合并或删除。必填字段无明确来源时留空并列入异常，选填字段无来源时留空；未映射字段单列，不塞入无关字段。输出来源到目标字段映射表、未映射字段清单和异常清单，目标工作表和表头保持不变。", "招聘需求必填：需求编号、部门、岗位、需求人数、负责人。应聘漏斗必填：应聘编号、候选人、需求编号、来源、负责人。面试记录必填：面试编号、应聘编号。"];
  window.XLSX.utils.book_append_sheet(book,window.XLSX.utils.aoa_to_sheet([["字段映射提示词"],...prompt.map(line=>[line])]),"字段映射提示词");
  window.XLSX.writeFile(book, template ? "HR工作台招聘导入模板.xlsx" : "HR工作台招聘台账.xlsx");
}

const moduleGrid = document.querySelector("#module-grid");
const taskList = document.querySelector("#task-list");
const taskCount = document.querySelector("#task-count");
const emptyState = document.querySelector("#empty-state");
const searchInput = document.querySelector("#global-search");
const dialog = document.querySelector("#task-dialog");
const dialogContent = document.querySelector("#dialog-content");

const portfolioSections = [
  { id: "intro", title: "自我介绍", description: "个人简介与工作经历", pages: [3, 4, 5] },
  { id: "results", title: "成果展示", description: "项目案例与模拟样例", pages: Array.from({ length: 10 }, (_, index) => index + 6) },
  { id: "outlook", title: "规划展望", description: "入职后的工作规划", pages: [16, 17] },
  { id: "more", title: "更多……", description: "", pages: [] },
];

function openPortfolioSection(sectionId) {
  const section = portfolioSections.find((item) => item.id === sectionId);
  if (!section) return;
  dialog.classList.add("portfolio-dialog");
  if (section.id === "more") {
    dialogContent.innerHTML = "";
    if (!dialog.open) dialog.showModal();
    return;
  }
  const pageLabel = `${section.pages.length} 页`;
  dialogContent.innerHTML = `<div class="dialog-kicker">PORTFOLIO · ${section.title}</div><div class="portfolio-viewer-heading"><div><h2 class="dialog-title">${section.title}</h2><p>${section.description} · ${pageLabel}</p></div></div><div class="portfolio-page-stack" aria-label="${section.title}页面，可滚动查看">${section.pages.map((page, index) => `<figure class="portfolio-page"><img src="assets/portfolio/pages/page-${String(page).padStart(2, "0")}.png" alt="${section.title}，第 ${index + 1} 页" loading="${index > 1 ? "lazy" : "eager"}" /><figcaption>第 ${index + 1} 页</figcaption></figure>`).join("")}</div>`;
  if (!dialog.open) dialog.showModal();
}

function hydrateTemplateLinks() {
  if (!window.HR_XLSX_TEMPLATES) return;
  const prefix = "data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,";
  const archiveLink = document.querySelector("#archive-template-link");
  const contractLink = document.querySelector("#contract-template-link");
  if (archiveLink) archiveLink.href = prefix + window.HR_XLSX_TEMPLATES.archive;
  if (contractLink) contractLink.href = prefix + window.HR_XLSX_TEMPLATES.contract;
}

hydrateTemplateLinks();
document.querySelector("#archive-template-link")?.addEventListener("click", (event) => { event.preventDefault(); downloadDemoTemplate("archive"); });
document.querySelector("#contract-template-link")?.addEventListener("click", (event) => { event.preventDefault(); downloadDemoTemplate("contract"); });
document.querySelector("#org-template-link")?.addEventListener("click", (event) => { event.preventDefault(); downloadOrgTemplate(); });

const ORG_STORAGE_KEY = "hr-workbench-org-v01";
const orgTabs = {
  departments: { label: "组织架构", title: "部门台账", required: ["id", "name", "status"], fields: [["id", "部门编号", "text"], ["name", "部门名称", "text"], ["parent", "上级部门", "text"], ["leader", "部门负责人", "text"], ["status", "状态", "select", ["筹备中", "生效", "停用"]], ["effectiveDate", "生效日期", "date"], ["endDate", "失效日期", "date"]], columns: ["id", "name", "parent", "leader", "status", "effectiveDate"] },
  positions: { label: "岗位主数据", title: "岗位台账", required: ["id", "name", "department", "status"], fields: [["id", "岗位编号", "text"], ["name", "岗位名称", "text"], ["department", "所属部门", "text"], ["reportsTo", "汇报岗位", "text"], ["level", "职级", "text"], ["status", "状态", "select", ["草拟", "生效", "冻结", "停用"]], ["effectiveDate", "生效日期", "date"], ["endDate", "失效日期", "date"], ["duties", "主要职责", "textarea"], ["qualification", "任职资格", "textarea"], ["location", "工作地点", "text"], ["version", "说明书版本", "text"]], columns: ["id", "name", "department", "reportsTo", "level", "status", "effectiveDate"] },
  headcount: { label: "编制管理", title: "编制与需求台账", required: ["id", "positionId", "department", "position", "planned", "occupied", "recruiting", "frozen", "status"], fields: [["id", "记录编号", "text"], ["positionId", "岗位编号", "text"], ["department", "部门", "text"], ["position", "岗位", "text"], ["planned", "计划编制", "number"], ["occupied", "已占编制", "number"], ["recruiting", "招聘中", "number"], ["frozen", "冻结", "number"], ["status", "申请/编制状态", "select", ["草拟", "待审批", "已批准", "执行中", "需补充", "已完成", "已关闭"]], ["reason", "申请理由/备注", "textarea"], ["owner", "负责人", "text"], ["effectiveDate", "生效日期", "date"]], columns: ["id", "department", "position", "planned", "occupied", "recruiting", "frozen", "status", "owner"] },
  changes: { label: "变更记录", title: "组织岗位变更记录", required: ["id", "type", "target", "status"], fields: [["id", "变更编号", "text"], ["type", "变更类型", "select", ["新增部门", "部门调整", "新增岗位", "岗位调整", "调岗", "职级调整", "岗位冻结", "岗位停用"]], ["target", "部门/岗位编号", "text"], ["summary", "变更摘要", "text"], ["effectiveDate", "生效日期", "date"], ["approver", "审批人/角色", "text"], ["status", "状态", "select", ["草拟", "待审批", "已批准", "已生效", "已撤回"]], ["evidence", "审批/依据记录", "text"]], columns: ["id", "type", "target", "summary", "effectiveDate", "approver", "status"] },
};
const defaultOrgState = {
  departments: [
    { id: "D-001", name: "总经理办公室", parent: "", leader: "负责人甲", status: "生效", effectiveDate: "2026-01-01", endDate: "" },
    { id: "D-002", name: "产品部", parent: "总经理办公室", leader: "负责人乙", status: "生效", effectiveDate: "2026-01-01", endDate: "" },
    { id: "D-003", name: "技术部", parent: "总经理办公室", leader: "负责人丙", status: "生效", effectiveDate: "2026-01-01", endDate: "" },
    { id: "D-004", name: "综合部", parent: "总经理办公室", leader: "负责人丁", status: "生效", effectiveDate: "2026-01-01", endDate: "" },
  ],
  positions: [
    { id: "P-001", name: "产品经理", department: "产品部", reportsTo: "产品负责人", level: "P3", status: "生效", effectiveDate: "2026-01-01", endDate: "", duties: "负责需求分析、产品规划和协同交付", qualification: "相关工作经验；沟通与分析能力", location: "北京", version: "V1.0" },
    { id: "P-002", name: "前端工程师", department: "技术部", reportsTo: "技术负责人", level: "P2", status: "生效", effectiveDate: "2026-01-01", endDate: "", duties: "负责前端功能开发、维护和质量改进", qualification: "相关开发经验；掌握团队技术栈", location: "北京", version: "V1.0" },
    { id: "P-003", name: "HR专员", department: "综合部", reportsTo: "综合部负责人", level: "P1", status: "生效", effectiveDate: "2026-01-01", endDate: "", duties: "按分工处理招聘、入职或员工服务事项", qualification: "人力资源或相关专业；细致可靠", location: "北京", version: "V1.0" },
  ],
  headcount: [
    { id: "HC-001", positionId: "P-001", department: "产品部", position: "产品经理", planned: 3, occupied: 2, recruiting: 0, frozen: 0, status: "执行中", reason: "年度团队配置示例", owner: "HR-小林", effectiveDate: "2026-01-01" },
    { id: "HC-002", positionId: "P-002", department: "技术部", position: "前端工程师", planned: 4, occupied: 2, recruiting: 2, frozen: 0, status: "执行中", reason: "招聘需求 REQ-2026-001；招聘数需与实际进展复核", owner: "HR-小林", effectiveDate: "2026-01-01" },
    { id: "HC-003", positionId: "P-003", department: "综合部", position: "HR专员", planned: 2, occupied: 1, recruiting: 0, frozen: 0, status: "执行中", reason: "年度团队配置示例", owner: "HR-小林", effectiveDate: "2026-01-01" },
  ],
  changes: [{ id: "CH-001", type: "新增岗位", target: "P-002", summary: "新增前端工程师岗位", effectiveDate: "2026-01-01", approver: "按公司授权配置", status: "已生效", evidence: "示例审批记录" }],
  backups: [],
};
let orgState;
try { const savedOrg = JSON.parse(localStorage.getItem(ORG_STORAGE_KEY)); orgState = savedOrg ? { ...structuredClone(defaultOrgState), ...savedOrg, backups: savedOrg.backups || [] } : structuredClone(defaultOrgState); } catch { orgState = structuredClone(defaultOrgState); }
function saveOrgState() { localStorage.setItem(ORG_STORAGE_KEY, JSON.stringify(orgState)); }
function backupOrgState(reason) { const snapshot = { departments: structuredClone(orgState.departments), positions: structuredClone(orgState.positions), headcount: structuredClone(orgState.headcount), changes: structuredClone(orgState.changes), reason, createdAt: new Date().toLocaleString("zh-CN") }; orgState.backups = [snapshot, ...(orgState.backups || [])].slice(0, 5); }
function orgEsc(value) { return safeCell(value ?? ""); }
function orgValidDate(value) { if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false; const date = new Date(`${value}T00:00:00Z`); return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value; }
function orgShortage(row) { return Number(row.planned || 0) - Number(row.occupied || 0) - Number(row.recruiting || 0) - Number(row.frozen || 0); }
function openOrgLedger(tab = "departments", keyword = "", taskTitle = "") {
  const schema = orgTabs[tab] || orgTabs.departments;
  const rows = orgState[tab].filter((row) => !keyword || Object.values(row).join(" ").toLowerCase().includes(keyword.toLowerCase()));
  const issues = orgState.headcount.filter((row) => Number(row.occupied || 0) + Number(row.recruiting || 0) + Number(row.frozen || 0) > Number(row.planned || 0));
  dialogContent.innerHTML = `<div class="dialog-kicker">LEDGER · 01 组织与岗位</div><h2 class="dialog-title">组织与岗位工作台</h2><p>维护组织、岗位、编制和变更记录；审批权限按公司制度配置，示例数据均为虚构。</p><div class="org-metrics"><span><small>生效部门</small><strong>${orgState.departments.filter((r) => r.status === "生效").length}</strong></span><span><small>生效岗位</small><strong>${orgState.positions.filter((r) => r.status === "生效").length}</strong></span><span><small>待审批编制</small><strong>${orgState.headcount.filter((r) => r.status === "待审批").length}</strong></span><span class="${issues.length ? "has-issue" : ""}"><small>超编核对</small><strong>${issues.length}</strong></span></div>${issues.length ? `<div class="recruit-risk-card"><strong>需要复核 ${issues.length} 条编制记录</strong><span>${issues.map((r) => `${orgEsc(r.position)}：已占+招聘中+冻结 ${Number(r.occupied || 0) + Number(r.recruiting || 0) + Number(r.frozen || 0)} / 计划 ${Number(r.planned || 0)}`).join("；")}</span></div>` : ""}<div class="org-tabs">${Object.entries(orgTabs).map(([key, item]) => `<button data-org-tab="${key}" class="${key === tab ? "is-active" : ""}">${item.label}</button>`).join("")}</div><div class="ledger-toolbar"><input id="org-search" placeholder="搜索编号、部门、岗位或负责人" value="${orgEsc(keyword)}" /><button class="outline-button" id="org-add">新增记录 <span>＋</span></button><button class="outline-button" id="org-backups">备份历史 <span>↶</span></button></div><div class="ledger-heading"><strong>${schema.title} <span>${rows.length}/${orgState[tab].length}</span></strong><small>编号作为组织/岗位/编制关联键</small></div><div class="ledger-table-wrap"><table class="ledger-table"><thead><tr>${schema.columns.map((k) => `<th>${schema.fields.find((f) => f[0] === k)?.[1] || k}</th>`).join("")}<th>操作</th></tr></thead><tbody>${rows.map((row) => `<tr>${schema.columns.map((key) => `<td>${key === "planned" ? `${Number(row.planned || 0)}<small>空缺 ${orgShortage(row)}</small>` : orgEsc(row[key])}</td>`).join("")}<td><button class="text-button" data-org-edit="${orgEsc(row.id)}">编辑</button></td></tr>`).join("") || `<tr><td colspan="${schema.columns.length + 1}" class="ledger-empty">没有匹配记录</td></tr>`}</tbody></table></div><div class="org-notes"><strong>流程提示</strong><span>部门提出需求 → HR 核对职责、工作量和编制余额 → 按公司授权审批 → 更新生效台账与历史记录。</span><span>超编提示只做数量校验；计划、已占、招聘中和冻结需由负责人根据当前有效口径核对。</span></div>${window.renderModuleResources?.("org") || ""}<div class="ledger-actions"><button class="outline-button" id="org-import">导入 Excel<input id="org-import-file" type="file" accept=".xlsx,.xls" hidden /></button><button class="primary-button" id="org-close">完成查看 <span>×</span></button></div>`;
  dialogContent.insertAdjacentHTML("beforeend", renderModuleAIAssist(taskTitle || "组织与岗位", "org"));
  bindModuleAIAssist(dialogContent);
  dialog.showModal();
  document.querySelectorAll("[data-org-tab]").forEach((button) => button.addEventListener("click", () => openOrgLedger(button.dataset.orgTab, "", taskTitle)));
  document.querySelector("#org-search").addEventListener("input", (event) => { const value = event.target.value; openOrgLedger(tab, value, taskTitle); const next = document.querySelector("#org-search"); next.focus(); next.setSelectionRange(value.length, value.length); });
  document.querySelector("#org-add").addEventListener("click", () => openOrgForm(tab));
  document.querySelectorAll("[data-org-edit]").forEach((button) => button.addEventListener("click", () => openOrgForm(tab, button.dataset.orgEdit)));
  document.querySelector("#org-backups").addEventListener("click", openOrgBackupManager);
  document.querySelector("#org-close").addEventListener("click", () => dialog.close());
  document.querySelector("#org-import").addEventListener("click", () => document.querySelector("#org-import-file").click());
  document.querySelector("#org-import-file").addEventListener("change", (event) => importOrgXlsx(event.target.files[0]));
}
function openOrgForm(tab, id = "") {
  const schema = orgTabs[tab]; const prior = orgState[tab].find((row) => row.id === id); const record = prior || Object.fromEntries(schema.fields.map(([key]) => [key, ""]));
  dialogContent.innerHTML = `<div class="dialog-kicker">${schema.label}</div><h2 class="dialog-title">${prior ? "编辑" : "新增"}${schema.title}</h2><form id="org-form" class="mini-tool-form ledger-form org-form">${schema.fields.map(([key, label, type, options]) => `<label>${label}${type === "select" ? `<select name="${key}">${options.map((option) => `<option ${record[key] === option ? "selected" : ""}>${option}</option>`).join("")}</select>` : type === "textarea" ? `<textarea name="${key}" rows="3">${orgEsc(record[key])}</textarea>` : `<input name="${key}" type="${type}" value="${orgEsc(record[key])}" ${["id", "name", "planned", "status"].includes(key) ? "required" : ""} ${prior && key === "id" ? "readonly" : ""} />`}</label>`).join("")}<div class="ledger-actions"><button class="outline-button" type="button" id="org-cancel">取消</button><button class="primary-button" type="submit">保存记录 <span>✓</span></button></div></form>`;
  document.querySelector("#org-cancel").addEventListener("click", () => openOrgLedger(tab));
  document.querySelector("#org-form").addEventListener("submit", (event) => { event.preventDefault(); const data = Object.fromEntries(new FormData(event.currentTarget).entries()); if (schema.fields.some((f) => f[2] === "number" && data[f[0]] !== "" && (!Number.isInteger(Number(data[f[0]])) || Number(data[f[0]]) < 0))) { alert("数量须为不小于 0 的整数"); return; } if (schema.fields.some((f) => f[2] === "date" && data[f[0]] && !orgValidDate(data[f[0]]))) { alert("日期无效，请检查后再保存"); return; } if (!prior && orgState[tab].some((r) => r.id === data.id)) { alert("编号重复，请检查后再保存"); return; } if (tab === "headcount" && Number(data.occupied || 0) + Number(data.recruiting || 0) + Number(data.frozen || 0) > Number(data.planned || 0)) { if (!confirm("已占、招聘中和冻结数量超过计划编制，仍要保存并留待复核吗？")) return; } backupOrgState(`${prior ? "编辑" : "新增"}${schema.title}`); if (prior) Object.assign(prior, data); else orgState[tab].push(data); saveOrgState(); openOrgLedger(tab); });
}
function openOrgBackupManager() { dialogContent.innerHTML = `<div class="dialog-kicker">VERSION HISTORY</div><h2 class="dialog-title">组织岗位备份</h2><div class="ledger-section"><div class="ledger-table-wrap"><table class="ledger-table"><thead><tr><th>时间</th><th>变更</th><th>操作</th></tr></thead><tbody>${orgState.backups.map((b, i) => `<tr><td>${orgEsc(b.createdAt)}</td><td>${orgEsc(b.reason)}</td><td><button class="text-button" data-org-restore="${i}">恢复</button></td></tr>`).join("") || `<tr><td colspan="3" class="ledger-empty">暂无备份</td></tr>`}</tbody></table></div></div><div class="ledger-actions"><button class="primary-button" id="org-backup-close">返回台账</button></div>`; document.querySelectorAll("[data-org-restore]").forEach((button) => button.addEventListener("click", () => { const b = orgState.backups[Number(button.dataset.orgRestore)]; orgState = { ...orgState, departments: b.departments, positions: b.positions, headcount: b.headcount, changes: b.changes, backups: orgState.backups.slice(Number(button.dataset.orgRestore) + 1) }; saveOrgState(); openOrgLedger(); })); document.querySelector("#org-backup-close").addEventListener("click", () => openOrgLedger()); }
function showOrgImportResult(message, errors = []) { dialogContent.innerHTML = `<div class="dialog-kicker">EXCEL IMPORT</div><h2 class="dialog-title">${errors.length ? "导入未写入" : "导入完成"}</h2><p>${orgEsc(message)}</p>${errors.length ? `<div class="dialog-section"><h4>请按工作表和行号修正</h4><ul>${errors.slice(0, 30).map((item) => `<li>${orgEsc(item)}</li>`).join("")}</ul></div>` : ""}<div class="ledger-actions"><button class="primary-button" id="org-import-result-close">返回台账 <span>→</span></button></div>`; document.querySelector("#org-import-result-close").addEventListener("click", () => openOrgLedger()); }
function createOrgWorkbook(template = false) {
  if (!window.XLSX) { alert("Excel 组件尚未加载"); return; }
  const book=window.XLSX.utils.book_new();
  for (const [key,schema] of Object.entries(orgTabs).sort(([a],[b]) => a === "headcount" ? -1 : b === "headcount" ? 1 : 0)) {
    const fields=schema.fields.map(f=>f[1]);
    const computed=key==="headcount"?["剩余可用编制","人数核对"]:[];
    const headers=[...fields,...computed];
    const data=template?Array.from({length:key==="headcount"?500:0},()=>schema.fields.map(()=>"")):orgState[key].map(r=>schema.fields.map(([field])=>r[field]??""));
    const rows=data.map((row,i)=>{
      if(key!=="headcount")return row;
      const n=i+3;
      return [...row,{f:`IF(A${n}="","",E${n}-F${n}-G${n}-H${n})`},{f:`IF(A${n}="","",IF(E${n}>=F${n}+G${n}+H${n},"相符","超编待核"))`}];
    });
    const note=key==="headcount"
      ? "编制表：填写原字段，M列自动计算计划-已占-招聘中-冻结的剩余编制；N列用IF核对数量是否超出计划。空记录不显示结果。"
      : `${schema.title}：第一行说明用途，第二行是字段名。每行填写一条记录；必填项不可空，选填项可空。本表无自动数值公式。`;
    const sheet=window.XLSX.utils.aoa_to_sheet([[note],headers,...rows]);
    sheet["!merges"]=[{s:{r:0,c:0},e:{r:0,c:headers.length-1}}];sheet["!rows"]=[{hpt:40}];
    if(key==="headcount")sheet["!cols"]=[...schema.fields.map(()=>({wch:16})),{wch:16},{wch:16}];
    window.XLSX.utils.book_append_sheet(book,sheet,schema.label);
  }
  const dict=[["工作表","字段","必填","类型/选项"]];
  for(const schema of Object.values(orgTabs))for(const [field,label,type,options] of schema.fields)dict.push([schema.label,label,schema.required.includes(field)?"是":"否",[type,...(options||[])].join(" / ")]);
  window.XLSX.utils.book_append_sheet(book,window.XLSX.utils.aoa_to_sheet(dict),"字段字典");
  const prompt=["请把原始Excel整理到组织与岗位标准模板。只按明确含义对应字段，不要猜填。保留所有记录和顺序，不编造、合并或删除数据。", "必填字段没有明确来源时留空并列入异常清单；选填字段无来源时留空；未映射来源列单列出来，不要塞入无关字段。日期、数字和选项无法无损转换时列入异常。输出字段映射表、未映射字段清单、异常清单，标准工作表名与字段名保持不变。", "标准字段：", ...Object.values(orgTabs).flatMap(s=>[`${s.label}：`,...s.fields.map(([field,label,type,options])=>`- ${label}（${s.required.includes(field)?"必填":"选填"}；${type}${options?"；选项："+options.join("、"):""}）`)])];
  window.XLSX.utils.book_append_sheet(book,window.XLSX.utils.aoa_to_sheet([["字段映射提示词"],...prompt.map(line=>[line])]),"字段映射提示词");
  window.XLSX.writeFile(book,`组织与岗位${template?"-导入模板":"工作簿"}.xlsx`);
}function exportOrgXlsx() { createOrgWorkbook(false); }
function downloadOrgTemplate() { createOrgWorkbook(true); }
function importOrgXlsx(file) { if (!file || !window.XLSX) return; const reader = new FileReader(); reader.onload = () => { try { const book = window.XLSX.read(reader.result, { type: "array", cellDates: true }); const candidate = {}; const errors = []; for (const [key, schema] of Object.entries(orgTabs)) { const sheetName = schema.label; if (!book.Sheets[sheetName]) { errors.push(`${sheetName} 工作表缺失；请使用完整的组织与岗位工作簿模板`); continue; } const headerRows = window.XLSX.utils.sheet_to_json(book.Sheets[sheetName], { header: 1, defval: "" }); const score = (row) => schema.required.filter((field) => (row || []).includes(schema.fields.find((f) => f[0] === field)?.[1] || field)).length; const headerIndex = score(headerRows[1]) > score(headerRows[0]) ? 1 : 0; const headerRow = headerRows[headerIndex] || []; const missingRequired = schema.required.filter((field) => !headerRow.includes(schema.fields.find((f) => f[0] === field)?.[1] || field)); if (missingRequired.length) { errors.push(`${sheetName} 缺少必填字段标题：${missingRequired.join("、")}`); continue; } const rows = window.XLSX.utils.sheet_to_json(book.Sheets[sheetName], { range: headerIndex, defval: "" }); const ids = new Set(); candidate[key] = rows.filter((r) => schema.fields.some(([,label]) => String(r[label] ?? "").trim())).map((r, index) => { const row = Object.fromEntries(schema.fields.map(([field, label, type]) => [field, r[label] instanceof Date ? r[label].toISOString().slice(0, 10) : String(r[label] ?? "").trim()])); for (const field of schema.required) if (!row[field]) errors.push(`${sheetName} 第 ${index + 3} 行：${schema.fields.find((f) => f[0] === field)?.[1] || field}不能为空`); if (row.id && ids.has(row.id)) errors.push(`${sheetName} 第 ${index + 3} 行：编号重复 ${row.id}`); ids.add(row.id); for (const [field, label, type, options] of schema.fields) { if (type === "number" && row[field] !== "" && (!Number.isInteger(Number(row[field])) || Number(row[field]) < 0)) errors.push(`${sheetName} 第 ${index + 3} 行：${label}须为不小于 0 的整数`); if (type === "date" && row[field] && !orgValidDate(row[field])) errors.push(`${sheetName} 第 ${index + 3} 行：${label}日期无效，须为 YYYY-MM-DD`); if (type === "select" && row[field] && !options.includes(row[field])) errors.push(`${sheetName} 第 ${index + 3} 行：${label}不在允许选项内`); } return row; }); } if (errors.length && Object.keys(candidate).length !== Object.keys(orgTabs).length) { showOrgImportResult("请修正文件中的错误后重新上传。原台账未发生变化。", errors); return; } const deptNames = new Set(candidate.departments.map((r) => r.name)); const positionIds = new Set(candidate.positions.map((r) => r.id)); candidate.positions.forEach((r, i) => { if (r.department && !deptNames.has(r.department)) errors.push(`岗位主数据 第 ${i + 3} 行：所属部门“${r.department}”不存在于组织架构`); }); candidate.headcount.forEach((r, i) => { if (r.positionId && !positionIds.has(r.positionId)) errors.push(`编制管理 第 ${i + 3} 行：岗位编号“${r.positionId}”不存在于岗位主数据`); }); if (errors.length) { showOrgImportResult("请修正文件中的错误后重新上传。原台账未发生变化。", errors); return; } backupOrgState("导入组织岗位 Excel 前备份"); orgState = { ...orgState, ...candidate }; saveOrgState(); showOrgImportResult("工作簿数据已写入，导入前版本已保存在备份历史。 "); } catch (error) { showOrgImportResult(`读取失败：${error.message}`); } }; reader.readAsArrayBuffer(file); }

const allTasks = modules.flatMap((module) => module.tasks.map((title) => ({
  title,
  moduleId: module.id,
  moduleName: module.name,
  description: module.description,
})));

const moduleAIGuides = {
  org: {name:"组织与岗位", focus:"梳理组织层级、岗位职责、编制变化和审批衔接；检查名称、编号、汇报关系与生效日期是否一致。", output:"按‘发现的问题｜需要补充的信息｜建议处理步骤｜需审批/复核事项’输出。"},
  recruit: {name:"招聘与人才获取", focus:"围绕招聘需求、候选人阶段、面试证据和下一步动作整理信息；不根据个人敏感属性做筛选或录用决定。", output:"按‘需求/候选人｜当前阶段｜已知证据｜待补问题｜下一步动作与负责人｜沟通草稿’输出；结论须对应明确证据。"},
  onboard: {name:"入职档案与合同", focus:"整理入职准备、档案材料状态、合同节点和试用期跟进；区分必须材料与公司自定材料，不推断法律义务。", output:"按‘事项｜责任人｜截止时间｜材料/依据｜当前状态｜待确认问题’输出。"},
  attendance: {name:"考勤与假勤", focus:"核对考勤异常、请假、加班和薪资前置数据；区分原始记录、员工说明、审批结果和待核事项。", output:"按‘人员编号/匿名编号｜日期｜异常或申请｜现有依据｜待核信息｜跟进动作’输出；不自行认定旷工、假期资格或支付结果。"},
  reward: {name:"薪酬、社保、公积金与福利", focus:"整理经审批的薪酬变动、社保公积金办理和福利事项；仅使用用户给出的已核准规则，不推算或猜测税额、缴费金额和工资。", output:"按‘事项｜适用月份/地区｜已确认输入｜缺失输入｜审批/办理状态｜复核人’输出；金额计算口径不明时先列问题。"},
  talent: {name:"绩效培训与发展", focus:"整理绩效周期、培训计划、参与记录和反馈；评价必须引用已提供的目标或行为证据，不虚构评分或给员工排名。", output:"按‘目标/课程｜时间节点｜参与/证据｜待跟进事项｜负责人’输出；区分事实、反馈与建议。"},
  relation: {name:"员工关系与合规/离职", focus:"整理咨询、离职交接或争议事项的事实、沟通记录、证据位置和升级节点；不作法律结论，不推断责任。", output:"按‘已知事实｜尚缺材料｜待办节点｜负责人｜需升级对象｜中性沟通草稿’输出；标清事实与推测。"},
  data: {name:"HR数据与运营", focus:"整理月报口径、人员主数据质量、数据差异和流程模板索引；先核对统计范围、时点、去重规则和来源，不编造指标。", output:"按‘指标/字段｜口径｜来源｜发现的差异｜需补数据｜核对动作’输出；列出可复算的计算步骤。"},
};

const taskAIPurposes = {
  "维护组织架构":"根据现有部门清单检查层级、上级部门、负责人和生效状态，标出重复、断层或缺少依据的记录。",
  "维护岗位说明书":"把岗位职责、任职条件和汇报关系整理成清晰条目；区分原文与建议补充项，不擅自新增任职门槛。",
  "跟进编制与用人需求":"核对计划、已占、招聘中、冻结和空缺人数之间的关系，列出需审批或需与招聘台账核实的差异。",
  "登记组织岗位变更":"整理变更前后内容、生效日期、审批状态、影响岗位/人员和留档事项。",
  "提交招聘需求":"整理部门、岗位、人数、申请理由、职责、任职要求、优先级和审批缺口；不把未批准需求写成已启动。",
  "跟进招聘进度":"按候选人和需求梳理当前阶段、逾期跟进、待反馈和下一步；不对候选人自动打分或作录用决定。",
  "安排面试":"根据岗位职责和已提供的简历事实生成结构化问题，标注每题考察点与证据记录栏，不推断候选人特征。",
  "办理录用与 Offer":"检查审批、Offer 状态、薪酬已核准依据、候选人确认和入职交接缺项；未审批的事项明确标为待办。",
  "维护人才库":"整理人才库字段、来源、授权/保存状态、适配岗位和后续联系日期；不保留无必要的敏感信息。",
  "我要办入职":"按报到日期和岗位生成入职前、当天、入职后责任清单，列明准备人、期限、待确认项和交接节点。",
  "检查档案完整性":"按已确认的材料清单逐项比对现有状态，输出缺项、责任人、期限和需人工判断的材料，不把所有材料默认成必交。",
  "合同到期提醒":"按已确认的合同结束日期与提醒窗口列出到期顺序和责任人；只提示节点，不建议自动续签或终止。",
  "办理合同续签":"依次整理合同核对、部门意见、员工意向、审批、签署和归档状态，指出未完成节点及需复核时限。",
  "跟进试用期转正":"根据入职日、约定试用期节点、自评、主管评价和审批状态整理跟进清单；缺少合同依据时先提出核对问题。",
  "处理考勤异常":"逐条区分打卡记录、排班、员工说明、审批和处理状态，列出差异及需要核实的证据。",
  "核对请假记录":"核对申请日期、假别、审批、销假和考勤记录的对应关系；不自行判断资格或余额。",
  "整理薪资前置数据":"汇总已核验的考勤、请假和加班差异，输出薪资交接前待办；不计算工资、税额或支付结论。",
  "核对薪酬数据":"根据已批准的变动记录检查月份、生效日期、审批依据和待核字段；不自行计算工资或补齐金额。",
  "办理社保公积金事项":"按办理地、事项类型、生效月份、材料状态和回执逐项整理办理清单；政策口径缺失时要求人工核实。",
  "发放员工福利":"整理适用范围、审批、供应商、预算依据、计划日期和发放留痕，标出尚未批准的环节。",
  "组织培训":"按培训目标、对象、时间、讲师、场地、材料和签到反馈生成执行清单。",
  "跟进绩效周期":"按周期阶段、目标设定、自评、主管评价、校准、沟通和归档节点整理负责人及截止日期。",
  "整理培训反馈":"归纳反馈中的具体事实、共性问题和改进建议；不推断反馈者身份，不把个别意见当成整体结论。",
  "处理员工咨询":"把咨询内容整理为事实、待确认制度、答复责任人和反馈期限；生成中性回复草稿，不自行作法律结论。",
  "办理员工离职":"按通知、最后工作日、交接、资产权限、薪资财务、材料归档和审批状态整理闭环清单。",
  "整理争议处理材料":"按时间顺序整理已知事实、原始证据位置、双方说法、缺失材料和升级对象，不认定责任或法律结果。",
  "制作HR月报":"依据给定统计范围和时点核对期初、入职、离职、期末关系，并标出来源与无法复算的指标。",
  "维护人员数据":"检查员工主数据字段完整性、编号关联、重复记录和生效状态；只提出修改建议，不覆盖原始数据。",
  "检查人员数据质量":"将每项规则、异常记录、影响范围、责任人和修正状态对应起来，区分真实问题与待核实项。",
  "查找流程和模板":"根据任务名称、模块、资料类型和版本整理可用资料索引；找不到时明确缺项，不编造文件位置或版本。",
};

function renderModuleAIAssist(taskTitle, moduleId) {
  const task = allTasks.find((item) => item.title === taskTitle);
  const id = moduleAIGuides[moduleId] ? moduleId : task?.moduleId;
  const guide = moduleAIGuides[id];
  if (!guide) return "";
  const purpose = taskAIPurposes[taskTitle] || `围绕“${taskTitle || "模块内工作"}”确认处理目标、责任人、截止时间和待复核事项。`;
  const prompt = `你是${guide.name}工作助理。现在协助处理任务：【${taskTitle || "模块内工作"}】。\n\n本任务目标：${purpose}\n\n模块工作要求：${guide.focus}\n\n请只使用我提供的资料。不要补造员工信息、制度、数据、审批或法律结论；资料缺失、字段对不上或口径不清时，先列出问题并留空。请对个人信息做最小化处理，优先使用员工编号或匿名编号。\n\n请完成当前任务，并按以下格式整理：${guide.output}\n\n我提供的资料：\n[粘贴已脱敏的必要信息]\n\n适用制度/已确认口径（如有）：\n[粘贴公司已确认的规则；没有就写“未提供”，不要自行假设]`;
  return `<details class="module-ai-assist"><summary>模块内 AI 辅助 · ${safeCell(taskTitle || guide.name)}</summary><p>提示词已按本模块和当前任务写好。补入脱敏后的必要信息，复制到 AI 对话中；结果回到本流程核对。</p><textarea class="module-ai-prompt" readonly rows="10" aria-label="${safeCell(taskTitle || guide.name)} AI 提示词">${safeCell(prompt)}</textarea><div class="module-ai-actions"><button class="outline-button" type="button" data-copy-module-prompt>复制提示词</button><small class="module-ai-copy-status" aria-live="polite">不要粘贴身份证号、联系方式、住址或未脱敏薪酬信息。</small></div></details>`;
}

function bindModuleAIAssist(root = dialogContent) {
  root.querySelectorAll("[data-copy-module-prompt]").forEach((button) => button.addEventListener("click", async () => {
    const card = button.closest(".module-ai-assist");
    const field = card?.querySelector(".module-ai-prompt");
    const status = card?.querySelector(".module-ai-copy-status");
    if (!field) return;
    try {
      await navigator.clipboard.writeText(field.value);
      if (status) status.textContent = "已复制；粘贴到 AI 对话后按本任务补充资料。";
    } catch {
      field.focus(); field.select();
      const copied = document.execCommand("copy");
      if (status) status.textContent = copied ? "已复制；粘贴到 AI 对话后按本任务补充资料。" : "复制未成功，请选中上方提示词后手动复制。";
    }
  }));
}

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
  if (window.openPracticalModule?.(title)) return;
  if (title === "维护人员数据") {
    openLedgerTool(title);
    return;
  }
  if (title === "我要办入职") {
    openLedgerTool(title);
    return;
  }
  if (["维护组织架构", "维护岗位说明书", "跟进编制与用人需求", "登记组织岗位变更"].includes(title)) {
    const tab = title === "维护组织架构" ? "departments" : title === "维护岗位说明书" ? "positions" : title === "登记组织岗位变更" ? "changes" : "headcount";
    openOrgLedger(tab, "", title);
    return;
  }
  if (title === "我要办入职" || title === "onboarding") {
    dialogContent.innerHTML = `<div class="dialog-kicker">${onboardingDetail.kicker}</div><h2 class="dialog-title">${onboardingDetail.title}</h2><p>${onboardingDetail.intro}</p>${onboardingDetail.sections.map(([heading, items]) => `<div class="dialog-section"><h4>${heading}</h4><ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul></div>`).join("")}${renderModuleAIAssist(title, "onboard")}<button class="primary-button" style="margin-top:22px" onclick="document.querySelector('#task-dialog').close()">先记下这个流程 <span>✓</span></button>`;
    bindModuleAIAssist(dialogContent);
    dialog.showModal();
    return;
  }
  if (["提交招聘需求", "跟进招聘进度", "安排面试", "办理录用与 Offer", "维护人才库", "发布招聘需求", "整理候选人信息"].includes(title)) {
    openRecruitLedger(title === "提交招聘需求" ? "demands" : "applications", title);
    return;
  }
  const interactiveTool = renderInteractiveTool(title);
  if (interactiveTool) {
    const task = allTasks.find((item) => item.title === title);
    dialogContent.innerHTML = `${interactiveTool}${renderModuleAIAssist(title, task?.moduleId)}<button class="outline-button" style="margin-top:16px" onclick="document.querySelector('#task-dialog').close()">关闭工具</button>`;
    bindModuleAIAssist(dialogContent);
    dialog.showModal();
    bindInteractiveTool(title);
    return;
  }
  if (taskDetails[title]) {
    const detail = taskDetails[title];
    const task = allTasks.find((item) => item.title === title);
    dialogContent.innerHTML = `<div class="dialog-kicker">${detail.kicker}</div><h2 class="dialog-title">${detail.title}</h2><p>${detail.intro}</p>${detail.sections.map(([heading, items]) => `<div class="dialog-section"><h4>${heading}</h4><ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul></div>`).join("")}${renderModuleAIAssist(title, task?.moduleId)}<button class="primary-button" style="margin-top:22px" onclick="document.querySelector('#task-dialog').close()">先记下这个流程 <span>✓</span></button>`;
    bindModuleAIAssist(dialogContent);
    dialog.showModal();
    return;
  }
  const task = allTasks.find((item) => item.title === title);
  if (!task) return;
  dialogContent.innerHTML = `<div class="dialog-kicker">${task.moduleName}</div><h2 class="dialog-title">${task.title}</h2><p>${task.description}</p><div class="dialog-section"><h4>处理起点</h4><ul><li>先确认任务目标、涉及期间和责任人。</li><li>整理现有记录与制度依据，缺失信息留待确认，不自行补全。</li><li>完成后更新对应模块台账，并由负责人复核。</li></ul></div>${renderModuleAIAssist(task.title, task.moduleId)}`;
  bindModuleAIAssist(dialogContent);
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
document.querySelector("#open-ledger")?.addEventListener("click", openLedgerTool);
for (const [selector, title] of [["#open-integrity-check", "资料完整性检查"], ["#open-date-reminders", "日期与提醒"]]) {
  const card = document.querySelector(selector);
  const open = () => openTask(title);
  card?.addEventListener("click", open);
  card?.addEventListener("keydown", (event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); open(); } });
}
document.querySelectorAll("[data-portfolio-section]").forEach((button) => button.addEventListener("click", () => openPortfolioSection(button.dataset.portfolioSection)));
document.querySelector("[data-task='onboarding']").addEventListener("click", () => openTask("onboarding"));
document.querySelectorAll(".queue-row[data-task-title]").forEach((row) => row.addEventListener("click", () => openTask(row.dataset.taskTitle)));
dialog.addEventListener("close", () => dialog.classList.remove("portfolio-dialog"));
document.addEventListener("click", (event) => {
  if (!dialog.open || event.detail === 0) return;
  const bounds = dialog.getBoundingClientRect();
  const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
  if (outside) { event.preventDefault(); event.stopPropagation(); dialog.close(); }
}, true);
document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); searchInput.focus(); }
});

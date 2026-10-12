const modules = [
  { id: "org", number: "01", icon: "⌘", name: "组织与岗位", description: "组织、编制、岗位和职责", tasks: ["梳理组织架构", "制作岗位说明书", "跟进编制与用人需求"] },
  { id: "recruit", number: "02", icon: "◎", name: "招聘与人才获取", description: "需求、筛选、面试和录用", tasks: ["发布招聘需求", "安排面试", "整理候选人信息"] },
  { id: "onboard", number: "03", icon: "↗", name: "入职档案与合同", description: "入职、档案、合同和试用期", tasks: ["我要办入职", "检查入职资料", "跟进试用期转正"] },
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

const moduleGrid = document.querySelector("#module-grid");
const taskList = document.querySelector("#task-list");
const taskCount = document.querySelector("#task-count");
const emptyState = document.querySelector("#empty-state");
const searchInput = document.querySelector("#global-search");
const dialog = document.querySelector("#task-dialog");
const dialogContent = document.querySelector("#dialog-content");

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
  const task = allTasks.find((item) => item.title === title);
  if (!task) return;
  dialogContent.innerHTML = `<div class="dialog-kicker">${task.moduleName}</div><h2 class="dialog-title">${task.title}</h2><p>${task.description}。这个任务将在后续资料深读后补充完整流程、模板、风险提示和AI辅助卡片。</p><div class="dialog-section"><h4>当前状态</h4><ul><li>模块入口已建立</li><li>资料索引已建立，正文待按优先级深读</li><li>公开版先展示任务结构，不公开原始课程资料</li></ul></div>`;
  dialog.showModal();
}

renderModules();
renderTasks();

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
document.querySelector("[data-task='onboarding']").addEventListener("click", () => openTask("onboarding"));
document.querySelector("#dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); searchInput.focus(); }
});


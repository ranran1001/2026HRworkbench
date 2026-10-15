/* Practical ledgers for HR modules 04–08. Data is kept in this browser only. */
(() => {
  const moduleResources = {
    org: [
      { title: "组织与岗位编制表", type: "Excel原表", path: "source-templates/01-组织与岗位-人员编制增减表-原表.xlsx" },
      { title: "定岗定编定员全套表（含岗位说明书）", type: "即课学堂原表 · 4张工作表", path: "module-resources/org/【工具表格】定岗定编定员附表全套(4项).xlsx" },
      { title: "招聘岗位人才画像与招聘环节表", type: "即课学堂原表 · 2张工作表", path: "module-resources/recruit/招聘岗位人才画像.xlsx" },
    ],
    recruit: [
      { title: "招聘需求、面试与入职跟进表", type: "Excel原表", path: "source-templates/02-招聘与人才获取-招聘需求面试入职统计表-原表.xlsx" },
      { title: "常规招聘流程表", type: "Excel流程", path: "招聘流程表.xlsx" },
      { title: "招聘需求评估表", type: "Excel模板", path: "招聘需求评估表.xlsx" },
      { title: "电话面试邀约话术", type: "Excel话术", path: "电话面试邀约话术.xlsx" },
      { title: "招聘岗位人才画像与招聘环节表", type: "即课学堂原表 · 2张工作表", path: "module-resources/recruit/招聘岗位人才画像.xlsx" },
      { title: "结构化面试提纲", type: "Excel模板", path: "HR结构化面试提纲.xlsx" },
      { title: "面试基本流程", type: "Word流程", path: "面试基本流程.docx" },
      { title: "招聘全流程模拟案例", type: "模拟案例", path: "招聘全流程模拟案例.docx" },
      { title: "招聘全流程模拟练习表", type: "Excel练习表", path: "招聘全流程模拟练习表.xlsx" },
    ],
    onboard: [
      { title: "劳动合同到期提醒", type: "Excel原表", path: "source-templates/03-入职档案与合同-劳动合同到期提醒-原表.xlsx" },
      { title: "档案完整性检查模板", type: "Excel模板", path: "HR档案完整性清单模板.xlsx" },
      { title: "合同到期提醒模板", type: "Excel模板", path: "HR合同到期提醒模板.xlsx" },
      { title: "新员工入职流程", type: "Word流程", path: "module-resources/onboard/新员工入职流程.docx" },
      { title: "出入职管理模拟案例", type: "模拟案例", path: "module-resources/onboard/入职管理模拟案例.docx" },
      { title: "入职管理练习表", type: "Excel练习表", path: "module-resources/onboard/入职管理练习表.xlsx" },
      { title: "员工入职登记与动态查询表", type: "即课学堂原表", path: "module-resources/onboard/236入职登记表-可查询.xlsx" },
      { title: "员工试用期管理登记表", type: "即课学堂原表 · 含到期跟踪公式", path: "module-resources/onboard/22员工试用期管理登记表.xlsx" },
      { title: "员工花名册与生日、合同提醒表", type: "即课学堂原表 · 含提醒公式", path: "module-resources/onboard/76员工花名册-生日合同提醒.xlsx" },
    ],
    attendance: [
      { title: "考勤自动统计分析表", type: "Excel原表", path: "source-templates/04-考勤与假勤-考勤自动统计分析-原表.xlsx" },
      { title: "年假剩余天数计算表", type: "Excel公式表", path: "module-resources/attendance/员工年假统计表（自动计算剩余年假）.xlsx" },
      { title: "员工月度请休假登记表", type: "即课学堂原表 · 含汇总公式", path: "module-resources/attendance/员工月度请休假登记表.xlsx" },
      { title: "考勤假期模拟案例", type: "模拟案例", path: "module-resources/attendance/考勤假期模拟案例.docx" },
      { title: "考勤假期练习表", type: "Excel练习表", path: "module-resources/attendance/考勤假期练习表.xlsx" },
    ],
    reward: [
      { title: "工资、社保与个税自动计算表", type: "Excel公式原表", path: "source-templates/05-薪酬社保福利-工资表社保个税自动计算-原表.xlsx" },
      { title: "薪酬核算模拟案例", type: "模拟案例", path: "module-resources/payroll/薪酬核算模拟案例.docx" },
      { title: "薪酬核算练习表", type: "Excel练习表", path: "module-resources/payroll/薪酬核算练习表.xlsx" },
    ],
    talent: [
      { title: "绩效考核与培训记录表", type: "Excel原表", path: "source-templates/06-绩效培训人才发展-绩效考核得分记录表-原表.xlsx" },
      { title: "年度培训计划及预算表", type: "即课学堂原表 · 含自动统计公式", path: "module-resources/training/年度培训计划及预算表.xlsx" },
      { title: "培训实施流程", type: "Word流程", path: "module-resources/training/培训实施流程.docx" },
      { title: "培训效果评估流程", type: "Word流程", path: "module-resources/training/培训效果评估流程.docx" },
      { title: "培训通知", type: "Word模板", path: "module-resources/training/培训通知.docx" },
      { title: "培训签到表", type: "Word模板", path: "module-resources/training/培训签到表.docx" },
      { title: "培训反馈问卷", type: "Word模板", path: "module-resources/training/培训反馈问卷.docx" },
      { title: "培训发展模拟案例", type: "模拟案例", path: "module-resources/training/培训发展模拟案例.docx" },
      { title: "培训发展练习表", type: "Excel练习表", path: "module-resources/training/培训发展练习表.xlsx" },
      { title: "企业文化与员工活动模拟案例", type: "模拟案例", path: "module-resources/training/企业文化与员工活动模拟案例.docx" },
      { title: "企业文化与员工活动模板", type: "Excel多表模板", path: "module-resources/training/企业文化与员工活动模板.xlsx" },
    ],
    relation: [
      { title: "员工离职审批与交接清单", type: "即课学堂原表 · 3张工作表", path: "module-resources/relation/193员工离职申请审批表-含离职交接.xlsx" },
      { title: "员工关系与HRSSC工作指引", type: "Word指引", path: "module-resources/relation/员工关系与HRSSC工作指引.docx" },
      { title: "员工关系日常工作清单", type: "Excel清单", path: "module-resources/relation/员工关系工作清单.xlsx" },
      { title: "员工关怀全生命周期表", type: "Excel模板", path: "module-resources/relation/员工关怀全生命周期.xlsx" },
      { title: "员工关怀落地指引", type: "Word指引", path: "module-resources/relation/员工关怀落地指引.docx" },
      { title: "公司员工关怀体系模板", type: "即课学堂原表 · 3张工作表", path: "module-resources/relation/公司员工关怀体系(草案).xlsx" },
      { title: "员工调岗与薪酬变动流程图", type: "Word流程图", path: "module-resources/relation/员工调岗薪酬变动流程图.docx" },
      { title: "员工离职交接流程", type: "Word流程", path: "module-resources/relation/员工离职交接流程.docx" },
      { title: "员工关系冲突模拟案例", type: "模拟案例", path: "module-resources/relation/员工关系模拟案例.docx" },
      { title: "员工关系练习表", type: "Excel练习表", path: "module-resources/relation/员工关系练习表.xlsx" },
    ],
    data: [
      { title: "HR月报明细与统计系统", type: "Excel公式原表", path: "source-templates/08-HR数据与运营-人事月报明细系统-原表.xlsx" },
      { title: "员工入职到离职全生命周期流程", type: "Excel流程表", path: "module-resources/data/员工全生命周期工作流程.xlsx" },
    ],
  };
  window.renderModuleResources = (moduleKey) => {
    const files = moduleResources[moduleKey] || [];
    if (!files.length) return "";
    return `<details class="module-resource-library"><summary>配套模板下载</summary><p>按模块整理的 Excel 原表、Word 表单与流程资料；如含示例内容请先替换，并核对本单位制度。</p><div class="module-resource-list">${files.map((file) => {
      const path = file.path.startsWith("source-templates/") || file.path.startsWith("module-resources/") || file.path.startsWith("HR档案") || file.path.startsWith("HR合同")
        ? file.path
        : `module-resources/${moduleKey}/${file.path}`;
      return `<a class="module-resource-link" href="assets/${path.split("/").map(encodeURIComponent).join("/")}" download><span><strong>${file.title}</strong><small>${file.type}</small></span><b>下载</b></a>`;
    }).join("")}</div></details>`;
  };
  const moduleDefs = {
    onboard: {
      id:"03",name:"入职档案与合同",note:"此处跟进入职后的转正与合同续签状态。具体通知时限、法律后果和合同处理结论需按当期政策与公司授权人工复核。",
      tasks:{"跟进试用期转正":"probation","办理合同续签":"renewal"},
      tabs:{
        probation:{label:"试用期/转正",title:"试用期跟进与转正台账",fields:[
          ["id","跟进编号","text",true],["employeeId","员工编号","text"],["employee","员工","text",true],["department","部门","text"],["position","岗位","text"],["startDate","入职日期","date",true],["probationEnd","试用期目标日期","date",true],["selfReview","员工自评","select",true,["未启动","待提交","已提交"]],["managerReview","主管评价","select",true,["未启动","待提交","已提交","需补充"]],["hrReview","HR复核","select",true,["待核对","材料待补","已核实"]],["decision","审批结论","select",true,["待审批","待转正","已转正","其他处理需复核"]],["owner","负责人","text"],["nextDate","下一步日期","date"],["note","沟通/材料位置","textarea"]
        ],rows:[{id:"PB-001",employeeId:"DEMO-002",employee:"员工002",department:"技术部",position:"IT专员",startDate:"2026-09-15",probationEnd:"2026-12-14",selfReview:"未启动",managerReview:"未启动",hrReview:"待核对",decision:"待审批",owner:"HR-小林",nextDate:"2026-11-30",note:"虚构示例；转正日期和条件按合同/制度核对"}]},
        renewal:{label:"合同续签",title:"合同续签跟进台账",fields:[
          ["id","续签编号","text",true],["employeeId","员工编号","text"],["employee","员工","text",true],["department","部门","text"],["position","岗位","text"],["contractEnd","当前合同到期日","date",true],["departmentOpinion","部门意见","select",true,["待征询","建议续签","不建议续签","待补充"]],["employeeIntent","员工意向","select",true,["待征询","同意沟通","暂不续签","待确认"]],["approval","审批状态","select",true,["待审批","已批准","未批准","需补充"]],["signStatus","签署状态","select",true,["未启动","准备中","签署中","已签署","未续签待处理"]],["owner","负责人","text"],["nextDate","下次跟进日期","date"],["evidenceRef","记录/文件受控位置","text"],["note","沟通记录/复核说明","textarea"]
        ],rows:[{id:"RN-001",employeeId:"DEMO-001",employee:"员工001",department:"市场部",position:"市场专员",contractEnd:"2027-10-01",departmentOpinion:"待征询",employeeIntent:"待征询",approval:"待审批",signStatus:"未启动",owner:"HR-小林",nextDate:"2027-08-01",evidenceRef:"受控目录/示例",note:"提醒日期不是法定时限，须结合当期合同和公司制度核对"}]}
      }
    },
    attendance: {
      id: "04", name: "考勤与假勤", note: "本模块只做记录、核对与交接。假期资格、加班支付和当地政策由 HR 按现行制度复核。",
      tasks: {
        "处理考勤异常": "exceptions", "核对请假记录": "leave", "整理薪资前置数据": "payroll"
      },
      tabs: {
        exceptions: { label: "考勤异常", title: "考勤异常台账", fields: [
          ["id","异常编号","text",true], ["date","发生日期","date",true], ["employeeId","员工编号","text"], ["employee","员工","text",true], ["department","部门","text"],
          ["issue","异常类型","select",true,["缺卡","迟到","早退","旷工待核实","工时差异","其他"]], ["minutes","差异分钟","number"], ["source","依据/来源","text"],
          ["status","处理状态","select",true,["待核实","待员工反馈","待审批","已更正","已确认","需补材料"]], ["owner","负责人","text"], ["deadline","跟进日期","date"], ["note","处理记录","textarea"]
        ], rows: [
          {id:"AT-001",date:"2026-10-08",employeeId:"DEMO-001",employee:"员工001",department:"市场部",issue:"缺卡",minutes:0,source:"考勤月报示例",status:"待员工反馈",owner:"HR-小林",deadline:"2026-10-13",note:"等待员工补充说明"},
          {id:"AT-002",date:"2026-10-09",employeeId:"DEMO-002",employee:"员工002",department:"技术部",issue:"迟到",minutes:12,source:"打卡记录示例",status:"待核实",owner:"HR-小林",deadline:"2026-10-13",note:"核对排班与打卡设备"}
        ]},
        leave: { label: "请假记录", title: "请假与销假台账", fields: [
          ["id","请假编号","text",true], ["employeeId","员工编号","text"], ["employee","员工","text",true], ["department","部门","text"], ["leaveType","假别","select",true,["年假","事假","病假","婚假","产假/陪产假","其他"]],
          ["startDate","开始日期","date",true], ["endDate","结束日期","date",true], ["days","申请天数","number",true], ["approval","审批状态","select",true,["待审批","已批准","已驳回","已撤回"]],
          ["attendanceStatus","考勤核对","select",true,["待核对","已核对","需补材料"]], ["owner","负责人","text"], ["note","备注/依据位置","textarea"]
        ], rows: [{id:"LV-001",employeeId:"DEMO-001",employee:"员工001",department:"市场部",leaveType:"年假",startDate:"2026-10-16",endDate:"2026-10-16",days:1,approval:"已批准",attendanceStatus:"待核对",owner:"HR-小林",note:"示例记录；年假余额需按制度另行核实"}]},
        overtime: { label: "加班记录", title: "加班申请与记录", fields: [
          ["id","加班编号","text",true], ["employeeId","员工编号","text"], ["employee","员工","text",true], ["department","部门","text"], ["date","加班日期","date",true], ["hours","加班小时","number",true],
          ["preApproval","事前申请","select",true,["待审批","已批准","未申请","不适用"]], ["actualCheck","实际发生核对","select",true,["待核对","已核实","有差异"]], ["treatment","处理方式","select",true,["待确认","调休待安排","已调休","薪资核算待复核","不适用"]], ["owner","负责人","text"], ["note","依据/备注","textarea"]
        ], rows: [{id:"OT-001",employeeId:"DEMO-002",employee:"员工002",department:"技术部",date:"2026-10-10",hours:2,preApproval:"已批准",actualCheck:"待核对",treatment:"薪资核算待复核",owner:"HR-小林",note:"示例；工资/调休处理需按制度与审批复核"}]},
        payroll: { label: "薪资前置", title: "薪资前置核对", fields: [
          ["id","批次编号","text",true], ["period","薪资月份","text",true], ["department","部门","text"], ["headcount","人数","number",true], ["leaveUnpaid","待核实无薪假记录数","number"], ["overtimePending","待核实加班记录数","number"],
          ["attendancePending","待处理考勤数","number"], ["sourceStatus","来源数据状态","select",true,["待收集","已收齐","待复核","已复核"]], ["owner","负责人","text"], ["deadline","交接日期","date"], ["note","差异/交接说明","textarea"]
        ], rows: [{id:"PR-2026-10-A",period:"2026-10",department:"全公司",headcount:3,leaveUnpaid:0,overtimePending:1,attendancePending:2,sourceStatus:"待复核",owner:"HR-小林",deadline:"2026-10-25",note:"只核对考勤前置事项；不录入工资金额"}]}
      }
    },
    reward: {
      id: "05", name: "薪酬、社保、公积金与福利", note: "此处不自动计算工资、个税或法定缴费金额；真实薪酬和个人信息须在有权限的环境中核对。",
      tasks: {"核对薪酬数据":"payroll","办理社保公积金事项":"social","发放员工福利":"benefits"},
      tabs: {
        payroll: {label:"工资变动核对",title:"薪酬变动与审批台账",fields:[
          ["id","记录编号","text",true],["period","薪资月份","text",true],["employeeId","员工编号","text"],["employee","员工","text",true],["department","部门","text"],
          ["changeType","变动类型","select",true,["入转调离","岗位/职级调整","考勤绩效输入","补发/扣回待核","其他"]],["effectiveDate","生效日期","date"],["source","审批依据位置","text"],
          ["status","核对状态","select",true,["待收集","待核对","待审批","已复核","需补材料"]],["owner","负责人","text"],["note","差异说明","textarea"]
        ],rows:[{id:"PY-001",period:"2026-10",employeeId:"DEMO-001",employee:"员工001",department:"市场部",changeType:"岗位/职级调整",effectiveDate:"2026-10-01",source:"审批单示例编号 AP-TEST-001",status:"待核对",owner:"HR-小林",note:"不含工资金额"}]},
        social: {label:"社保公积金办理",title:"社保与公积金事项台账",fields:[
          ["id","事项编号","text",true],["employeeId","员工编号","text"],["employee","员工","text",true],["department","部门","text"],["coverage","办理类别","select",true,["社保","公积金","社保和公积金"]],["item","事项类型","select",true,["新增/开户","增员","减员/封存","基数调整","转移接续","缴费异常","资料补充","其他"]],
          ["location","办理地","text"],["effectiveDate","生效月份","date"],["materials","材料状态","select",true,["待收集","待核验","齐全","需补充"]],["status","办理状态","select",true,["待办理","办理中","已办结","待员工确认","需复核"]],["owner","负责人","text"],["note","回执/依据位置","textarea"]
        ],rows:[{id:"SI-001",employeeId:"DEMO-003",employee:"员工003",department:"综合部",coverage:"社保和公积金",item:"资料补充",location:"北京",effectiveDate:"2026-10-01",materials:"待核验",status:"待办理",owner:"HR-小林",note:"示例事项；办理地与当期规则需人工核验"}]},
        benefits: {label:"福利发放",title:"福利活动与发放台账",fields:[
          ["id","活动编号","text",true],["name","福利/活动名称","text",true],["target","适用范围","text"],["date","计划日期","date"],["eligibleCount","预计人数","number"],
          ["supplier","供应商/渠道","text"],["approval","审批状态","select",true,["待审批","已批准","不适用","需补充"]],["status","发放状态","select",true,["计划中","准备中","发放中","已完成","待复核"]],["owner","负责人","text"],["note","发放记录/备注","textarea"]
        ],rows:[{id:"BF-001",name:"节日关怀活动",target:"全体员工",date:"2026-10-20",eligibleCount:3,supplier:"示例渠道",approval:"待审批",status:"计划中",owner:"HR-小林",note:"虚构数据；预算和适用对象需审批"}]}
      }
    },
    talent: {
      id:"06",name:"绩效培训与人才发展",note:"绩效结果、培训签到和个人发展资料按最小必要原则记录；评分标准和绩效后果由公司制度与审批人确认。",
      tasks:{"组织培训":"courses","跟进绩效周期":"cycles","整理培训反馈":"feedback"},
      tabs:{
        cycles:{label:"绩效周期",title:"绩效周期与节点",fields:[
          ["id","周期编号","text",true],["period","考核周期","text",true],["group","适用范围","text"],["startDate","开始日期","date",true],["endDate","结束日期","date",true],["stage","当前阶段","select",true,["目标设定","过程回顾","自评","主管评价","校准/审批","结果沟通","已归档"]],["owner","负责人","text"],["deadline","当前节点截止","date"],["status","周期状态","select",true,["计划中","进行中","待收尾","已完成"]],["note","节点说明","textarea"]
        ],rows:[{id:"PF-2026-H2",period:"2026下半年",group:"全公司",startDate:"2026-07-01",endDate:"2026-12-31",stage:"过程回顾",owner:"HR-小林",deadline:"2026-10-31",status:"进行中",note:"示例周期"}]},
        courses:{label:"培训计划",title:"培训计划与实施",fields:[
          ["id","培训编号","text",true],["name","课程名称","text",true],["category","培训类型","select",true,["入职","制度/合规","岗位技能","管理能力","安全","其他"]],["target","对象/部门","text"],["trainer","讲师/供应方","text"],["date","计划日期","date",true],["duration","时长小时","number"],["owner","负责人","text"],["status","实施状态","select",true,["待审批","待准备","已排期","进行中","已完成","已取消"]],["note","材料/场地备注","textarea"]
        ],rows:[{id:"TR-001",name:"信息安全与数据保护",category:"制度/合规",target:"全体员工",trainer:"内部讲师",date:"2026-10-22",duration:1,owner:"HR-小林",status:"已排期",note:"虚构培训记录"}]},
        attendance:{label:"培训签到",title:"培训签到与完成记录",fields:[
          ["id","签到编号","text",true],["courseId","培训编号","text",true],["courseName","课程名称","text",true],["employeeId","员工编号","text"],["employee","员工","text",true],["department","部门","text"],["attendance","参加状态","select",true,["待确认","已参加","缺席","请假/补训"]],["completion","完成状态","select",true,["待确认","已完成","未完成","待补训"]],["owner","记录人","text"],["note","补训/证据位置","textarea"]
        ],rows:[{id:"TA-001",courseId:"TR-001",courseName:"信息安全与数据保护",employeeId:"DEMO-001",employee:"员工001",department:"市场部",attendance:"待确认",completion:"待确认",owner:"HR-小林",note:"示例签到"}]},
        feedback:{label:"培训反馈",title:"培训效果反馈",fields:[
          ["id","反馈编号","text",true],["courseId","培训编号","text"],["courseName","课程名称","text",true],["respondent","反馈人编号/匿名码","text"],["submittedDate","提交日期","date"],["rating","评分","number"],["usefulness","可用性","select",true,["待评价","高","中","低"]],["followup","后续动作","text"],["owner","负责人","text"],["status","跟进状态","select",true,["待收集","待分析","待改进","已完成"]],["note","反馈摘要","textarea"]
        ],rows:[{id:"FB-001",courseId:"TR-001",courseName:"信息安全与数据保护",respondent:"匿名样例",submittedDate:"2026-10-22",rating:4,usefulness:"中",followup:"补充真实案例",owner:"HR-小林",status:"待收集",note:"虚构数据"}]}
      }
    },
    relation:{
      id:"07",name:"员工关系与合规/离职",note:"争议和离职事项需及时升级人工处理；本台账只记录节点、责任人和受控证据位置，不存放原始敏感材料或法律结论。",
      tasks:{"处理员工咨询":"consults","办理员工离职":"exits","整理争议处理材料":"cases"},
      tabs:{
        consults:{label:"员工咨询",title:"员工咨询与跟进",fields:[
          ["id","咨询编号","text",true],["date","接收日期","date",true],["employeeId","员工编号","text"],["employee","员工/匿名编号","text",true],["category","咨询类别","select",true,["制度流程","薪酬假勤","发展绩效","劳动关系","其他"]],["summary","问题摘要","textarea",true],["owner","负责人","text"],["dueDate","跟进日期","date"],["status","处理状态","select",true,["待分派","处理中","待反馈","已答复","已结案","需升级"]],["evidenceRef","受控材料位置","text"],["note","跟进记录","textarea"]
        ],rows:[{id:"ER-001",date:"2026-10-10",employeeId:"DEMO-002",employee:"员工002",category:"制度流程",summary:"咨询假勤申请流程（示例）",owner:"HR-小林",dueDate:"2026-10-13",status:"处理中",evidenceRef:"示例路径/不含真实文件",note:"待按公司制度回复"}]},
        exits:{label:"离职与交接",title:"离职办理与交接台账",fields:[
          ["id","离职编号","text",true],["employeeId","员工编号","text"],["employee","员工/匿名编号","text",true],["department","部门","text"],["noticeDate","提出日期","date"],["lastDay","拟最后工作日","date",true],["type","离职类型","select",true,["员工提出","协商","合同到期","其他"]],["handoff","工作交接","select",true,["未启动","进行中","已确认","待补充"]],["assetAccess","资产/权限回收","select",true,["未启动","进行中","已确认","待补充"]],["finance","财务/薪酬交接","select",true,["未启动","进行中","已确认","待复核"]],["documents","材料归档","select",true,["待整理","待复核","已归档","需补充"]],["owner","负责人","text"],["status","整体状态","select",true,["待沟通","办理中","待复核","已完成","需升级"]],["note","受控记录位置/备注","textarea"]
        ],rows:[{id:"EX-001",employeeId:"DEMO-003",employee:"员工003",department:"综合部",noticeDate:"2026-10-09",lastDay:"2026-10-31",type:"员工提出",handoff:"进行中",assetAccess:"未启动",finance:"未启动",documents:"待整理",owner:"HR-小林",status:"办理中",note:"虚构案例；具体手续需人工复核"}]},
        cases:{label:"争议与风险跟进",title:"争议事项与风险跟进",fields:[
          ["id","事项编号","text",true],["date","登记日期","date",true],["employee","员工/匿名编号","text",true],["category","事项类别","select",true,["申诉","争议","工伤待协同","合规疑问","外部来函","其他"]],["severity","紧急程度","select",true,["一般","优先","紧急"]],["summary","事项摘要","textarea",true],["owner","负责人","text"],["nextAction","下一动作","text"],["dueDate","跟进期限","date"],["status","处理状态","select",true,["待评估","处理中","待专业复核","待反馈","已结案","需升级"]],["evidenceRef","受控证据位置","text"],["note","处理留痕","textarea"]
        ],rows:[{id:"RC-001",date:"2026-10-12",employee:"匿名样例",category:"申诉",severity:"优先",summary:"关于工作安排的意见反馈（虚构）",owner:"HR-小林",nextAction:"约定沟通并收集材料",dueDate:"2026-10-14",status:"待评估",evidenceRef:"受控目录/样例",note:"如涉及法律争议，转专业人员复核"}]}
      }
    },
    data:{
      id:"08",name:"HR数据与运营",note:"月报数字由 HR 根据已核验来源汇总；不把示例口径当成公司指标定义。人员主数据沿用员工台账，质量检查与模板索引在本模块维护。",
      tasks:{"制作HR月报":"reports","维护人员数据":"quality","检查人员数据质量":"quality","查找流程和模板":"templates"},
      tabs:{
        reports:{label:"月报指标",title:"HR 月报与指标台账",fields:[
          ["id","记录编号","text",true],["period","月份","text",true],["department","部门/范围","text",true],["opening","期初人数","number",true],["hires","本期入职","number",true],["exits","本期离职","number",true],["closing","期末人数","number",true],["source","来源/截止时点","text"],["owner","负责人","text"],["status","核对状态","select",true,["待汇总","待核对","已核验","已发布"]],["note","口径/说明","textarea"]
        ],rows:[{id:"MR-2026-10-ALL",period:"2026-10",department:"全公司",opening:48,hires:2,exits:1,closing:49,source:"虚构月报数据",owner:"HR-小林",status:"待核对",note:"核对公式：期初+入职-离职=期末"}]},
        quality:{label:"数据质量",title:"人员数据质量核对",fields:[
          ["id","检查编号","text",true],["period","检查月份","text",true],["dataset","数据集","select",true,["员工主表","组织岗位","招聘","入职档案","合同","考勤前置","其他"]],["checkItem","检查项","text",true],["affectedCount","待修正条数","number",true],["source","来源/规则","text"],["owner","负责人","text"],["dueDate","修正期限","date"],["status","检查状态","select",true,["待检查","发现问题","修正中","待复核","已关闭"]],["note","问题摘要/回归记录","textarea"]
        ],rows:[{id:"DQ-001",period:"2026-10",dataset:"员工主表",checkItem:"部门编号与岗位编号是否有效",affectedCount:0,source:"组织岗位主数据",owner:"HR-小林",dueDate:"2026-10-25",status:"待检查",note:"不含真实个人信息"}]},
        templates:{label:"流程模板索引",title:"流程与模板索引",fields:[
          ["id","索引编号","text",true],["name","流程/模板名称","text",true],["module","所属模块","text",true],["type","资料类型","select",true,["流程说明","表单模板","工作簿","制度/政策","操作指引"]],["version","版本/日期","text"],["owner","维护人","text"],["location","受控文件位置","text"],["reviewDate","复核日期","date"],["status","维护状态","select",true,["有效待复核","已复核","待更新","已停用"]],["note","适用范围/备注","textarea"]
        ],rows:[{id:"KB-001",name:"组织与岗位工作簿",module:"01 组织与岗位",type:"工作簿",version:"v0.1",owner:"HR-小林",location:"outputs/组织与岗位工作簿-v0.1.xlsx",reviewDate:"2026-10-12",status:"有效待复核",note:"示例索引；按公司文件权限管理"}]}
      }
    }
  };

  const rootDialog = () => document.querySelector("#task-dialog");
  const content = () => document.querySelector("#dialog-content");
  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
  const storeKey = (key) => `hr-workbench-module-${key}-v1`;
  const clone = (value) => JSON.parse(JSON.stringify(value));
  const excelColumn = (index) => { let n=index+1, out=""; while(n){const r=(n-1)%26;out=String.fromCharCode(65+r)+out;n=Math.floor((n-1)/26);} return out; };
  const validDate = (value) => { if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false; const d = new Date(`${value}T00:00:00Z`); return Number.isFinite(d.getTime()) && d.toISOString().slice(0,10) === value; };
  const load = (key, def) => { try { const saved = JSON.parse(localStorage.getItem(storeKey(key))); return saved ? {...clone(def), ...saved, backups:saved.backups || []} : clone(def); } catch { return clone(def); } };
  const save = (key, state) => localStorage.setItem(storeKey(key), JSON.stringify(state));
  const backup = (state, reason) => { const snap = clone(state); delete snap.backups; snap.reason = reason; snap.createdAt = new Date().toLocaleString("zh-CN"); state.backups = [{...snap}, ...(state.backups || [])].slice(0,5); };
  const fieldControl = (field, value) => {
    const [key,label,type,required,options] = field; const req = required ? "required" : ""; const val = esc(value);
    if (type === "select") return `<label>${esc(label)}<select name="${esc(key)}" ${req}>${(options || []).map((o) => `<option value="${esc(o)}" ${String(value)===o?"selected":""}>${esc(o)}</option>`).join("")}</select></label>`;
    if (type === "textarea") return `<label class="span-two">${esc(label)}<textarea name="${esc(key)}" rows="3" ${req}>${val}</textarea></label>`;
    return `<label>${esc(label)}<input name="${esc(key)}" type="${type}" value="${val}" ${req} ${type === "number" ? `step="1" min="${key === "rating" ? 1 : 0}" ${key === "rating" ? 'max="5"' : ""}` : ""}/></label>`;
  };
  function openBackup(def, state, key) {
    content().innerHTML = `<div class="dialog-kicker">${def.id} · VERSION HISTORY</div><h2 class="dialog-title">${esc(def.name)}备份</h2><p>保存最近 5 次导入、新增和编辑前的数据快照。</p><div class="ledger-section"><div class="ledger-table-wrap"><table class="ledger-table"><thead><tr><th>时间</th><th>变更原因</th><th>恢复</th></tr></thead><tbody>${(state.backups||[]).map((b,i)=>`<tr><td>${esc(b.createdAt)}</td><td>${esc(b.reason)}</td><td><button class="text-button" data-wm-restore="${i}">恢复</button></td></tr>`).join("") || '<tr><td colspan="3">暂无备份</td></tr>'}</tbody></table></div></div><button class="primary-button" id="wm-back-close">返回台账</button>`;
    content().querySelectorAll("[data-wm-restore]").forEach((button) => button.addEventListener("click", () => { const b=state.backups[Number(button.dataset.wmRestore)]; const history=state.backups.slice(Number(button.dataset.wmRestore)+1); def.tabs && Object.keys(def.tabs).forEach((tab)=>{state[tab]=clone(b[tab]);}); state.backups=history; save(key,state); openModule(def,Object.keys(def.tabs)[0]); }));
    content().querySelector("#wm-back-close").addEventListener("click",()=>openModule(def,Object.keys(def.tabs)[0]));
  }
  function makeBook(def,state,template=false) {
    if (!window.XLSX) { alert("Excel 组件尚未加载，请联网刷新后再试。台账录入和本地保存仍可使用。"); return; }
    const book=window.XLSX.utils.book_new();
    if(def.id==="05") {
      const headers=["员工编号","员工姓名","薪资月份","基本工资","津贴","奖金","加班费","其他应发","应发合计","个人社保","个人公积金","个税（人工核定）","其他扣款","扣款合计","实发工资","核对差额"];
      const rows=Array.from({length:500},(_,i)=>{const n=i+3;return ["","","","","","","","",{f:`IF(A${n}=\"\",\"\",SUM(D${n}:H${n}))`},"","","","",{f:`IF(A${n}=\"\",\"\",SUM(J${n}:M${n}))`},{f:`IF(A${n}=\"\",\"\",I${n}-N${n})`},{f:`IF(A${n}=\"\",\"\",I${n}-N${n}-O${n})`}];});
      const instruction='填写A-H列收入项和J-M列扣款项；I列=SUM(D:H)计算应发合计，N列=SUM(J:M)计算扣款合计，O列=I-N计算实发，P列=I-N-O核对差额。IF用于员工编号为空时保持结果空白。税额、社保、公积金按已核定金额填写。';
      const calc=window.XLSX.utils.aoa_to_sheet([[instruction],headers,...rows]);
      calc["!merges"]=[{s:{r:0,c:0},e:{r:0,c:headers.length-1}}];calc["!rows"]=[{hpt:44}];
      calc["!cols"]=[{wch:15},{wch:14},{wch:12},{wch:14},{wch:12},{wch:12},{wch:12},{wch:12},{wch:14},{wch:14},{wch:14},{wch:16},{wch:12},{wch:14},{wch:14},{wch:14}];
      window.XLSX.utils.book_append_sheet(book,calc,"工资计算");
    }
    for(const [key,tab] of Object.entries(def.tabs)) {
      const dueField=tab.fields.find(f=>["deadline","dueDate","nextDate","reviewDate"].includes(f[0]));
      const dueCol=dueField?excelColumn(tab.fields.indexOf(dueField)):"";
      const reportCheck=def.id==="08"&&key==="reports";
      const computedHeaders=dueField?["距跟进日期天数","跟进时限"]:reportCheck?["人数公式核对"]:[];
      const headers=[...tab.fields.map((f)=>f[1]),...computedHeaders];
      const savedRows=(state[key]||[]).map((row)=>tab.fields.map(([field,,type])=>{const value=row[field]??"";if(type!=="date"||!value)return value;if(value instanceof Date)return value;return /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(value)?new Date(`${value}T00:00:00Z`):value;}));
      const rowCount=computedHeaders.length?Math.max(500,template?0:savedRows.length):template?0:savedRows.length;
      const data=Array.from({length:rowCount},(_,i)=>{
        const row=savedRows[i]||tab.fields.map(()=>"");
        const n=i+3;
        if(dueField)return [...row,{f:`IF(${dueCol}${n}="","",${dueCol}${n}-TODAY())`},{f:`IF(${dueCol}${n}="","",IF(${dueCol}${n}<TODAY(),"已逾期",IF(${dueCol}${n}=TODAY(),"今天到期","未到期")))`}];
        if(reportCheck)return [...row,{f:`IF(A${n}="","",IF(D${n}+E${n}-F${n}=G${n},"相符","待核对"))`}];
        return row;
      });
      let instruction=`${tab.title}。第一行是用法和公式说明，第二行是字段名；每行填写一条记录。必填项不可空，选填项可空。`;
      if(dueField)instruction+=`公式：${computedHeaders[0]}列用IF和TODAY计算距${dueField[1]}天数；${computedHeaders[1]}列用IF标记已逾期、今天到期或未到期。`;
      else if(reportCheck)instruction+="公式：L列用IF核对D列期初人数+E列入职人数-F列离职人数是否等于G列期末人数；编号为空时结果留空。";
      else instruction+="公式：本表只记录业务字段，没有需要自动推算的数值。";
      const sheet=window.XLSX.utils.aoa_to_sheet([[instruction],headers,...data]);
      sheet["!merges"]=[{s:{r:0,c:0},e:{r:0,c:Math.max(0,headers.length-1)}}];
      sheet["!rows"]=[{hpt:36}];
      if(computedHeaders.length)sheet["!cols"]=[...tab.fields.map(()=>({wch:16})),{wch:18},{wch:16}];
      window.XLSX.utils.book_append_sheet(book,sheet,tab.label);
    }
    if(def.id==="04") {
      const note='填左侧各业务表后，本页自动汇总待办条数。B3用COUNTIFS统计未更正/未确认考勤异常；B4用COUNTIFS统计已批准但未完成考勤核对的事假；B5用SUMPRODUCT统计事前审批、实际发生核对或处理方式仍未完成的加班记录。';
      const rows=[
        ["待处理考勤异常数",{f:'COUNTIFS(\'考勤异常\'!$A$3:$A$502,"<>",\'考勤异常\'!$I$3:$I$502,"<>已更正",\'考勤异常\'!$I$3:$I$502,"<>已确认")'},"排除已更正和已确认记录"],
        ["已批准事假待核数",{f:'COUNTIFS(\'请假记录\'!$A$3:$A$502,"<>",\'请假记录\'!$E$3:$E$502,"事假",\'请假记录\'!$I$3:$I$502,"已批准",\'请假记录\'!$J$3:$J$502,"<>已核对")'},"已批准且考勤尚未核对"],
        ["未完成加班核对数",{f:'SUMPRODUCT((\'加班记录\'!$A$3:$A$502<>"")*((\'加班记录\'!$G$3:$G$502<>"已批准")+(\'加班记录\'!$H$3:$H$502<>"已核实")+(\'加班记录\'!$I$3:$I$502="待确认")>0))'},"任一核对环节未完成的记录只计一次"]
      ];
      const sheet=window.XLSX.utils.aoa_to_sheet([[note],["核对项","待处理条数","统计口径"],...rows]);sheet["!merges"]=[{s:{r:0,c:0},e:{r:0,c:2}}];sheet["!rows"]=[{hpt:50}];sheet["!cols"]=[{wch:26},{wch:16},{wch:38}];
      window.XLSX.utils.book_append_sheet(book,sheet,"薪资前置汇总");
    }
    if(def.id==="08") {
      const summaryHeaders=["月份","期初人数","本期入职","本期离职","期末人数","人数公式核对"];
      const grouped=new Map();
      if(!template)for(const row of state.reports||[]){const period=row.period||"未填写";const total=grouped.get(period)||{opening:0,hires:0,exits:0,closing:0};for(const field of ["opening","hires","exits","closing"])total[field]+=Number(row[field]||0);grouped.set(period,total);}
      const summaryRows=template?Array.from({length:200},(_,i)=>{const r=i+3;return ["","","","","",{f:`IF(A${r}="","",IF(B${r}+C${r}-D${r}=E${r},"相符","待核对"))`}];}):[...grouped].map(([period,total],i)=>{const r=i+3;return [period,total.opening,total.hires,total.exits,total.closing,{f:`IF(A${r}="","",IF(B${r}+C${r}-D${r}=E${r},"相符","待核对"))`}];});
      const instruction='按月份汇总各部门已核实人数。F列自动用IF核对：期初人数(B)+本期入职(C)-本期离职(D)是否等于期末人数(E)，不相等时显示“待核对”；月份为空时结果也为空。';
      const summary=window.XLSX.utils.aoa_to_sheet([[instruction],summaryHeaders,...summaryRows]);summary["!merges"]=[{s:{r:0,c:0},e:{r:0,c:summaryHeaders.length-1}}];summary["!rows"]=[{hpt:38}];
      window.XLSX.utils.book_append_sheet(book,summary,"月报汇总");
    }
    const dictionary=[["工作表","字段","类型","必填","选项/说明"]];
    for(const tab of Object.values(def.tabs)) for(const f of tab.fields) dictionary.push([tab.label,f[1],f[2],f[3]?"是":"否",f[4]?.join("/ ")||""]);
    window.XLSX.utils.book_append_sheet(book,window.XLSX.utils.aoa_to_sheet(dictionary),"字段字典");
    const prompt=[
      `请把我上传的原始 Excel 整理到“${def.name}”标准导入模板。严格遵循以下要求：`,
      "1. 先读取原工作簿所有工作表、表头和数据行，保留原始文件，不覆盖它。逐个标准字段寻找含义完全对应的来源列；不能只凭相似字面猜测。",
      "2. 一行原始记录对应一行标准记录，保留记录顺序和数量。不得编造、推断或补齐原表没有的信息，不得自行合并或删除记录。",
      "3. 必填字段必须有明确来源。若找不到来源或值为空，不要猜填，请在异常清单标记工作表、行号、字段和原因。选填字段找不到来源或原值为空时，保持空白。",
      "4. 不匹配的来源列不要丢弃；列入‘未映射字段’清单并注明来源表头。不要把备注或其他字段塞进不相关的标准字段。",
      "5. 输出标准字段名和工作表名必须与目标模板完全一致。日期、数字、枚举值按字段字典要求整理；无法无损转换时列入异常清单，不要擅自改值。",
      "6. 请同时给出字段映射表（来源工作表/来源列/目标工作表/目标字段/对应依据），以及异常清单和未映射字段清单。确认必填字段和记录数量后，再输出可导入的新工作簿。",
      "目标字段及必填标记：",
      ...Object.values(def.tabs).flatMap(t=>[`${t.label}：`,...t.fields.map(f=>`- ${f[1]}（${f[3]?"必填":"选填"}；${f[2]}${f[4]?"；可选值："+f[4].join("、"):""}）`)]),
      "请先列映射和异常，不要在未说明的情况下把原始数据直接改写。"
    ];
    window.XLSX.utils.book_append_sheet(book,window.XLSX.utils.aoa_to_sheet([["字段映射提示词"],...prompt.map(line=>[line])]),"字段映射提示词");
    window.XLSX.writeFile(book,`${def.name}${template?"-导入模板":"-台账导出"}.xlsx`);
  }
  function importBook(def,state,key,file) {
    if(!file||!window.XLSX)return;
    const reader=new FileReader(); reader.onload=()=>{
      try {
        const book=window.XLSX.read(reader.result,{type:"array",cellDates:true}); const candidate={}; const errors=[];
        for(const [tabKey,tab] of Object.entries(def.tabs)) {
          if(!book.Sheets[tab.label]){errors.push(`${tab.label} 工作表缺失`);continue;}
          const rawHeaders=window.XLSX.utils.sheet_to_json(book.Sheets[tab.label],{header:1,defval:""});
          const score=row=>tab.fields.filter(f=>f[3]&&(row||[]).includes(f[1])).length;
          const headerIndex=score(rawHeaders[1])>score(rawHeaders[0])?1:0;
          const headerRow=rawHeaders[headerIndex]||[];
          const missingHeaders=tab.fields.filter((f)=>f[3]).map((f)=>f[1]).filter((label)=>!headerRow.includes(label));
          if(missingHeaders.length){errors.push(`${tab.label} 缺少字段标题：${missingHeaders.join("、")}`);continue;}
          const rows=window.XLSX.utils.sheet_to_json(book.Sheets[tab.label],{range:headerIndex,defval:""}); const seen=new Set();
          candidate[tabKey]=rows.filter((r)=>tab.fields.some((f)=>String(r[f[1]]??"").trim())).map((r,index)=>{
            const row={}; for(const f of tab.fields){const [field,label,type]=f; const value=r[label]; row[field]=type==="date"&&value instanceof Date?value.toISOString().slice(0,10):String(value??"").trim();}
            const excelRow=index+headerIndex+2;
            for(const f of tab.fields){const [field,label,type,required,options]=f; const v=row[field]; if(required&&!v) errors.push(`${tab.label} 第 ${excelRow} 行：${label}不能为空`); if(field==="id"&&v&&seen.has(v)) errors.push(`${tab.label} 第 ${excelRow} 行：编号重复 ${v}`); if(field==="id")seen.add(v); if(type==="number"&&v!==""&&(!Number.isInteger(Number(v))||Number(v)<0))errors.push(`${tab.label} 第 ${excelRow} 行：${label}须为非负整数`); if(field==="rating"&&v!==""&&(Number(v)<1||Number(v)>5))errors.push(`${tab.label} 第 ${excelRow} 行：评分须为 1 至 5 的整数`); if(type==="date"&&v&&!validDate(v))errors.push(`${tab.label} 第 ${excelRow} 行：${label}日期无效`); if(type==="select"&&v&&options&&!options.includes(v))errors.push(`${tab.label} 第 ${excelRow} 行：${label}不在允许选项内`); }
            if(row.startDate&&row.endDate&&row.startDate>row.endDate)errors.push(`${tab.label} 第 ${excelRow} 行：开始日期不能晚于结束日期`);
            return row;
          });
        }
        if(errors.length||Object.keys(candidate).length!==Object.keys(def.tabs).length){showResult(def,errors.length?errors:["工作簿缺少必要工作表"],true);return;}
        const optionalMissing=Object.entries(def.tabs).flatMap(([tabKey,tab])=>{const raw=window.XLSX.utils.sheet_to_json(book.Sheets[tab.label],{header:1,defval:""});const score=row=>tab.fields.filter(f=>f[3]&&(row||[]).includes(f[1])).length;const index=score(raw[1])>score(raw[0])?1:0;const headers=raw[index]||[];return tab.fields.filter(f=>!f[3]&&!headers.includes(f[1])).map(f=>`${tab.label}：${f[1]}（按空白处理）`);});
        backup(state,"导入前备份"); for(const tabKey of Object.keys(def.tabs))state[tabKey]=candidate[tabKey]; save(key,state); showResult(def,["导入完成：数据已写入，导入前版本已备份。",...(optionalMissing.length?[`以下选填列未提供，已按空白导入：${optionalMissing.join("、")}`]:[])],false);
      } catch(error){showResult(def,[`文件读取失败：${error.message}`],true);}
    }; reader.readAsArrayBuffer(file);
  }
  function showResult(def,lines,isError){
    content().innerHTML=`<div class="dialog-kicker">${def.id} · EXCEL</div><h2 class="dialog-title">${isError?"导入未写入":"导入完成"}</h2><p>${isError?"请修正文件后重试，当前台账未更改。":"导入文件已通过字段检查。"}</p><div class="dialog-section"><ul>${lines.slice(0,40).map((x)=>`<li>${esc(x)}</li>`).join("")}</ul></div><button class="primary-button" id="wm-result-close">返回台账</button>`;
    content().querySelector("#wm-result-close").addEventListener("click",()=>openModule(def,Object.keys(def.tabs)[0]));
  }
  function openForm(def,state,key,tabKey,id=""){
    const tab=def.tabs[tabKey]; const prior=(state[tabKey]||[]).find((r)=>r.id===id); const record=prior||{};
    content().innerHTML=`<div class="dialog-kicker">${def.id} · ${esc(tab.label)}</div><h2 class="dialog-title">${prior?"编辑":"新增"}${esc(tab.title)}</h2><p>保存前会校验必填字段、日期和数量；记录保存在当前浏览器。</p><form id="wm-form" class="mini-tool-form ledger-form org-form">${tab.fields.map((f)=>fieldControl(f,record[f[0]])).join("")}<div class="ledger-actions"><button class="outline-button" type="button" id="wm-cancel">取消</button><button class="primary-button" type="submit">保存记录 ✓</button></div></form>`;
    content().querySelector("#wm-cancel").addEventListener("click",()=>openModule(def,tabKey));
    content().querySelector("#wm-form").addEventListener("submit",(event)=>{
      event.preventDefault(); const data=Object.fromEntries(new FormData(event.currentTarget).entries());
      for(const f of tab.fields){const [field,label,type,required]=f;if(required&&!String(data[field]||"").trim()){alert(`${label}不能为空`);return;}if(type==="number"&&data[field]!==""&&(!Number.isInteger(Number(data[field]))||Number(data[field])<0)){alert(`${label}须为非负整数`);return;}if(field==="rating"&&data[field]!==""&&(Number(data[field])<1||Number(data[field])>5)){alert("评分须为 1 至 5 的整数");return;}if(type==="date"&&data[field]&&!validDate(data[field])){alert(`${label}日期无效`);return;}}
      if(!prior&&(state[tabKey]||[]).some((r)=>r.id===data.id)){alert("编号重复，请检查后重试");return;}
      backup(state,prior?`编辑：${tab.title}`:`新增：${tab.title}`); if(prior)Object.assign(prior,data);else state[tabKey].push(data); save(key,state); openModule(def,tabKey);
    });
  }
  function refreshAttendancePayroll(def,state,key){
    const now=new Date(); const period=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}`;
    const people=new Set(); for(const tab of ["exceptions","leave","overtime"])for(const row of state[tab]||[])if(row.employeeId)people.add(row.employeeId);
    const attendancePending=(state.exceptions||[]).filter((r)=>!["已更正","已确认"].includes(r.status)).length;
    const leaveUnpaid=(state.leave||[]).filter((r)=>r.leaveType==="事假"&&r.approval==="已批准"&&r.attendanceStatus!=="已核对").length;
    const overtimePending=(state.overtime||[]).filter((r)=>r.preApproval!=="已批准"||r.actualCheck!=="已核实"||r.treatment==="待确认").length;
    backup(state,"重算薪资前置汇总前备份");
    const id=`SUM-${period}`; let row=(state.payroll||[]).find((r)=>r.id===id);
    const values={id,period,department:"本模块涉及记录",headcount:people.size,leaveUnpaid,overtimePending,attendancePending,sourceStatus:"待复核",owner:"",deadline:"",note:"系统按当前考勤/请假/加班台账统计；本人数不是全公司员工总人数，需补齐范围后人工复核"};
    if(row)Object.assign(row,values);else state.payroll.push(values);save(key,state);openModule(def,"payroll");
  }
  function openModule(def,activeTab,keyword="",taskTitle=""){
    const key=Object.keys(moduleDefs).find((k)=>moduleDefs[k]===def); const state=load(key,Object.fromEntries(Object.entries(def.tabs).map(([k,t])=>[k,t.rows])));
    const [tabKey,tab]=def.tabs[activeTab]? [activeTab,def.tabs[activeTab]]:[Object.keys(def.tabs)[0],def.tabs[Object.keys(def.tabs)[0]]];
    const rows=(state[tabKey]||[]).filter((row)=>!keyword||Object.values(row).join(" ").toLowerCase().includes(keyword.toLowerCase()));
    const statusField=tab.fields.find((f)=>["status","approval","attendanceStatus","sourceStatus","handoff","completion"].includes(f[0]));
    const displayFields=tab.fields.slice(0,6); if(statusField&&!displayFields.some((f)=>f[0]===statusField[0]))displayFields.push(statusField);
    const activeCount=Object.values(def.tabs).reduce((n,t)=>n+(state[Object.keys(def.tabs).find((k)=>def.tabs[k]===t)]||[]).length,0);
    const pending=Object.values(def.tabs).reduce((n,t)=>{const k=Object.keys(def.tabs).find((x)=>def.tabs[x]===t);return n+(state[k]||[]).filter((r)=>Object.values(r).some((v)=>["待核实","待审批","待收集","处理中","待复核","待检查","发现问题","计划中","待分派","办理中"].includes(v))).length;},0);
    const reportIssues=tabKey==="reports"?rows.filter((r)=>Number(r.opening||0)+Number(r.hires||0)-Number(r.exits||0)!==Number(r.closing||0)).length:0;
    const reportTotals=tabKey==="reports"?rows.reduce((a,r)=>{for(const field of ["opening","hires","exits","closing"])a[field]+=Number(r[field]||0);return a;},{opening:0,hires:0,exits:0,closing:0}):null;
    const metricMarkup=key==="data"&&tabKey==="reports"?`<span><small>本页部门明细</small><strong>${rows.length}</strong></span><span><small>期初 / 期末人数</small><strong>${reportTotals.opening} / ${reportTotals.closing}</strong></span><span><small>本期入职 / 离职</small><strong>${reportTotals.hires} / ${reportTotals.exits}</strong></span><span class="${reportIssues?"has-issue":""}"><small>公式待核对</small><strong>${reportIssues}</strong></span>`:`<span><small>本页记录</small><strong>${rows.length}/${(state[tabKey]||[]).length}</strong></span><span><small>全部记录</small><strong>${activeCount}</strong></span><span><small>待跟进条目</small><strong>${pending}</strong></span><span class="${reportIssues?"has-issue":""}"><small>${reportIssues?"月报公式差异":"数据范围"}</small><strong>${reportIssues||"本机"}</strong></span>`;

    content().innerHTML=`<div class="dialog-kicker">LEDGER · ${def.id} ${esc(def.name)}</div><h2 class="dialog-title">${esc(def.name)}工作台</h2><p>${esc(def.note)}</p>${window.renderModuleResources?.(key) || ""}<div class="org-metrics">${metricMarkup}</div><div class="org-tabs">${Object.entries(def.tabs).map(([k,t])=>`<button data-wm-tab="${k}" class="${k===tabKey?"is-active":""}">${esc(t.label)}</button>`).join("")}</div><div class="ledger-toolbar"><input id="wm-search" placeholder="搜索编号、员工、部门或状态" value="${esc(keyword)}"/><button class="outline-button" id="wm-add">新增记录 ＋</button><button class="outline-button" id="wm-backups">备份历史 ↶</button>${key==="attendance"&&tabKey==="payroll"?'<button class="outline-button" id="wm-attendance-rollup">从台账重算核对数</button>':""}</div><div class="ledger-heading"><strong>${esc(tab.title)} <span>${rows.length}/${(state[tabKey]||[]).length}</span></strong><small>先核对来源和责任人，再更新状态</small></div><div class="ledger-table-wrap"><table class="ledger-table"><thead><tr>${displayFields.map((f)=>`<th>${esc(f[1])}</th>`).join("")}<th>操作</th></tr></thead><tbody>${rows.map((r)=>`<tr>${displayFields.map((f)=>`<td>${esc(r[f[0]])}</td>`).join("")}<td><button class="text-button" data-wm-edit="${esc(r.id)}">编辑</button></td></tr>`).join("")||`<tr><td colspan="${displayFields.length+1}" class="ledger-empty">暂无匹配记录</td></tr>`}</tbody></table></div>${reportIssues?`<div class="recruit-risk-card"><strong>有 ${reportIssues} 条人数变动公式待核实</strong><span>期初人数 + 本期入职 − 本期离职应等于期末人数；先核实统计时点与数据来源。</span></div>`:""}${window.renderModuleAIAssist(taskTitle||tab.title,key)}<div class="org-notes"><strong>工作提示</strong><span>台账只记录工作状态和受控资料位置，不在公开演示中保存真实敏感附件。</span></div><div class="ledger-actions"><label class="file-button">导入 Excel<input id="wm-import" type="file" accept=".xlsx,.xls" hidden/></label><button class="primary-button" id="wm-close">完成查看 ×</button></div>`;
    window.bindModuleAIAssist(content());
    const dialog=rootDialog(); if(!dialog.open)dialog.showModal();
    content().querySelectorAll("[data-wm-tab]").forEach((b)=>b.addEventListener("click",()=>openModule(def,b.dataset.wmTab,"",taskTitle)));
    content().querySelector("#wm-search").addEventListener("input",(e)=>{const value=e.target.value;openModule(def,tabKey,value,taskTitle);const next=content().querySelector("#wm-search");next.focus();next.setSelectionRange(value.length,value.length);});
    content().querySelector("#wm-add").addEventListener("click",()=>openForm(def,state,key,tabKey));
    content().querySelectorAll("[data-wm-edit]").forEach((b)=>b.addEventListener("click",()=>openForm(def,state,key,tabKey,b.dataset.wmEdit)));
    content().querySelector("#wm-backups").addEventListener("click",()=>openBackup(def,state,key));
    if(key==="attendance"&&tabKey==="payroll")content().querySelector("#wm-attendance-rollup").addEventListener("click",()=>refreshAttendancePayroll(def,state,key));
    content().querySelector("#wm-import").addEventListener("change",(e)=>{if(e.target.files[0])importBook(def,state,key,e.target.files[0]);e.target.value="";});
    content().querySelector("#wm-close").addEventListener("click",()=>dialog.close());
  }
  window.openPracticalModule=(taskTitle)=>{
    for(const [key,def] of Object.entries(moduleDefs)){const tab=def.tasks[taskTitle];if(tab){openModule(def,tab,"",taskTitle);return true;}}
    return false;
  };
})();

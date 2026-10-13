# HR Workbench 浏览器点测固定配置

## 目的

浏览器点测不依赖某一个聊天帖子的临时状态。项目统一使用：

- 测试浏览器 Profile：`C:\Users\30105\Documents\Codex\2026-10-10\new-chat\.chrome-debug-profile`
- 用户 Chrome 原始 Profile：`C:\Users\30105\AppData\Local\Google\Chrome\User Data\Default`
- 项目配置：`agent-browser.json`
- 点测脚本：`scripts\browser-test.ps1`

## 新帖子直接使用

在项目根目录执行：

```powershell
.\workbench-site\scripts\browser-test.ps1 -Action open
.\workbench-site\scripts\browser-test.ps1 -Action snapshot
.\workbench-site\scripts\browser-test.ps1 -Action recruit
.\workbench-site\scripts\browser-test.ps1 -Action employee-ledger
.\workbench-site\scripts\browser-test.ps1 -Action org
.\workbench-site\scripts\browser-test.ps1 -Action org-positions
.\workbench-site\scripts\browser-test.ps1 -Action org-headcount
.\workbench-site\scripts\browser-test.ps1 -Action org-changes
.\workbench-site\scripts\browser-test.ps1 -Action import-org
.\workbench-site\scripts\browser-test.ps1 -Action export-org
.\workbench-site\scripts\browser-test.ps1 -Action org-mobile
```

组织岗位模块的工作表名必须和模板一致：组织架构、岗位主数据、编制管理、变更记录。需要在不启动本地服务器时点测，可先打开本地文件：

```powershell
.\workbench-site\scripts\browser-test.ps1 -Action open -Url "file:///C:/Users/30105/Documents/Codex/2026-10-10/new-chat/workbench-site/index.html"
```

如果当前沙箱报“Socket directory 不可写”，需要让浏览器点测命令以浏览器权限运行；这属于 Codex 运行环境限制，不是项目代码问题。脚本已经固定了正确的 `LOCALAPPDATA`、Profile、代理绕过和会话命名，不需要重新猜路径。

## 点测范围

招聘模块至少验证：

1. 招聘任务入口可打开；
2. 候选人漏斗可显示；
3. 招聘需求台账可切换；
4. 搜索和阶段筛选有效；
5. 推进候选人阶段后页面刷新仍保留；
6. 新增/编辑记录后本地保存；
7. 招聘 Excel 导出可触发；
8. 原有员工台账仍可打开。

组织与岗位模块至少验证：

1. 组织架构、岗位、编制、变更四个台账可切换；
2. 搜索可筛选，新增/编辑后本地保存；
3. 编制空缺和超计划提示按台账数量展示；
4. 新增、编辑或导入前出现备份，指定备份恢复有效；
5. 组织岗位 Excel 模板可下载、上传，并对编号、状态、日期、数量和关联编号提供错误提示。
6. 导出后在下载目录打开文件，确认包含“组织架构、岗位主数据、编制管理、变更记录”四张表。

## 当前点测记录（2026-10-12）

- 已通过：工作台打开、四类台账切换、空缺显示、备份历史打开、有效模板上传并显示导入完成、页面错误检查。
- 已通过：390×844 窄屏下组织岗位弹窗可打开，四个页签、搜索框和台账操作仍可访问。
- 代码语法检查通过。
- 导出按钮已触发，但本次浏览器下载管理器没有留下可检查的文件；请按上面的第 6 项手动确认实际下载。
- 点测脚本会尝试关闭已有弹窗再打开模块，避免弹窗遮挡导致误报。

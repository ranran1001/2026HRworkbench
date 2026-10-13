param(
  [ValidateSet("open", "snapshot", "recruit", "recruit-candidates", "recruit-demands", "demand-workflow", "recruit-interviews", "recruit-handoff", "import-recruit", "employee-ledger", "org", "org-departments", "org-positions", "org-headcount", "org-changes", "org-backups", "import-org", "export-org", "org-mobile", "errors", "close")]
  [string]$Action = "open",
  [string]$Url = "http://127.0.0.1:4173/",
  [string]$File = "C:\Users\30105\Documents\Codex\2026-10-12\hr-md\outputs\招聘与人才获取工作簿-v0.1.xlsx",
  [string]$OrgFile = "C:\Users\30105\Documents\Codex\2026-10-10\new-chat\workbench-site\assets\组织与岗位工作簿-v0.1.xlsx"
)

$projectRoot = (Resolve-Path (Join-Path $PSScriptRoot "..\..\")).Path
$browser = Join-Path $projectRoot "node_modules\.bin\agent-browser.cmd"
$profile = Join-Path $projectRoot ".chrome-debug-profile"

$env:LOCALAPPDATA = "C:\Users\30105\AppData\Local"
$env:AGENT_BROWSER_NAMESPACE = "hr-workbench"
$common = @('--profile', $profile, '--allow-file-access', '--proxy-bypass', 'localhost,127.0.0.1')
$recruitSelector = 'button.task-item:nth-of-type(4)'
$orgSelector = 'button.task-item:nth-of-type(1)'
$ledgerSelector = '#open-ledger'

function Close-TaskDialog {
  & $browser @common eval "if (document.querySelector('#task-dialog')?.open) document.querySelector('#dialog-close').click()"
}

switch ($Action) {
  'open' { & $browser @common open $Url }
  'snapshot' { & $browser @common snapshot -i }
  'recruit' {
    & $browser @common click $recruitSelector
    & $browser @common snapshot -i
  }
  'recruit-demands' {
    & $browser @common click 'button[data-recruit-tab="demands"]'
    & $browser @common snapshot -i
  }
  'recruit-candidates' {
    & $browser @common click 'button[data-recruit-tab="applications"]'
    & $browser @common snapshot -i
  }
  'demand-workflow' {
    & $browser @common click 'button[data-demand-action]'
    & $browser @common snapshot -i
  }
  'recruit-interviews' {
    & $browser @common click 'button[data-recruit-tab="interviews"]'
    & $browser @common snapshot -i
  }
  'recruit-handoff' {
    & $browser @common click 'button[data-recruit-tab="handoff"]'
    & $browser @common snapshot -i
  }
  'import-recruit' {
    & $browser @common upload 'input#recruit-import' $File
    & $browser @common wait 1500
    & $browser @common snapshot -i
  }
  'employee-ledger' {
    & $browser @common click $ledgerSelector
    & $browser @common snapshot -i
  }
  'org' {
    Close-TaskDialog
    & $browser @common click $orgSelector
    & $browser @common snapshot -i
  }
  'org-departments' {
    Close-TaskDialog
    & $browser @common click $orgSelector
    & $browser @common click 'button[data-org-tab="departments"]'
    & $browser @common snapshot -i
  }
  'org-positions' {
    Close-TaskDialog
    & $browser @common click $orgSelector
    & $browser @common click 'button[data-org-tab="positions"]'
    & $browser @common snapshot -i
  }
  'org-headcount' {
    Close-TaskDialog
    & $browser @common click $orgSelector
    & $browser @common click 'button[data-org-tab="headcount"]'
    & $browser @common snapshot -i
  }
  'org-changes' {
    Close-TaskDialog
    & $browser @common click $orgSelector
    & $browser @common click 'button[data-org-tab="changes"]'
    & $browser @common snapshot -i
  }
  'org-backups' {
    Close-TaskDialog
    & $browser @common click $orgSelector
    & $browser @common click '#org-backups'
    & $browser @common snapshot -i
  }
  'import-org' {
    Close-TaskDialog
    & $browser @common click $orgSelector
    & $browser @common upload '#org-import-file' $OrgFile
    & $browser @common wait 1000
    & $browser @common snapshot -i
  }
  'export-org' {
    Close-TaskDialog
    & $browser @common click $orgSelector
    & $browser @common click '#org-export'
    & $browser @common snapshot -i
  }
  'org-mobile' {
    Close-TaskDialog
    & $browser @common set viewport 390 844
    & $browser @common click $orgSelector
    & $browser @common snapshot -i
  }
  'errors' { & $browser @common errors }
  'close' { & $browser @common close }
}

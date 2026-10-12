# Cross-thread / cross-AI handoff template

Copy this block into a new thread or another AI when continuing a workbench.

```text
Project: [name]
Purpose: [what practical work this workbench helps complete]
Current version: [version]
Current stage: [stage]

Non-negotiable rules:
- Work first; knowledge/showcase is secondary.
- Public/demo data is fictional and contains no secrets or personal data.
- Use relative paths and UTF-8; keep the project portable.
- Make changes modularly and preserve a complete backup before meaningful changes.
- Validate imports and show concrete errors; never silently overwrite invalid data.
- Test the user-visible path in a browser before declaring a stage complete.

Repository/project path: [path or URL]
Stable version/branch: [branch or archive]
Working version/branch: [branch or archive]
Run command: [exact command]
Browser test instructions: [path to project-specific browser-test instructions]

Completed:
- [item]

Known limitations:
- [item]

Data contracts / important files:
- [file or table]: [purpose]

Last verified:
- [date]: [what was tested and result]

Next requested stage:
[one concrete objective]

Before editing:
1. Read this handoff and the project instructions.
2. Inspect the current files and working-tree state.
3. Confirm the intended scope and make a stage backup.
4. Work in small, testable changes.
5. End with the required stage report and update this handoff.
```


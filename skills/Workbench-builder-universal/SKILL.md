---
name: Workbench-builder-universal
description: Design, build, test, package, and hand off lightweight practical workbenches for any domain, with portability, modularity, data safety, versioning, and browser acceptance as non-negotiable delivery requirements.
---

# Workbench Builder Universal
Use this skill when building or substantially changing a practical workbench, dashboard, internal tool, portal, tracker, or domain-specific task system. The domain may be HR, weather, finance, operations, research, education, or another field.

The workbench is a tool for completing work. Explanations, knowledge cards, and portfolios are supporting layers, not the main product.

## Non-negotiable bottom line

1. **Work first.** The home view must help a user find a task, record, queue, status, tool, or next action. A showcase or knowledge wall may exist separately.
2. **Portable by default.** Use relative paths, UTF-8, stable filenames, documented setup, pinned dependencies, and no machine-specific absolute paths in runtime code. A copied project must be understandable and runnable on another computer.
3. **Modular changes.** Keep each domain module, component, style token, data adapter, and test path isolated. A change to one button must not rewrite unrelated modules. Prefer small files and clear interfaces over one giant page script.
4. **Recoverable changes.** Before meaningful mutations, preserve a usable version or data snapshot. Keep a stable branch/version and a working branch/version. Never make destructive changes without a recoverable path.
5. **No silent failure.** Validate required fields, dates, duplicates, file format, and import scope. Show the row, field, and reason for an error. Never replace a whole dataset silently after a partial or invalid import.
6. **Safe demo data.** Public demos use fictional data only. Never place real names, IDs, contact details, salaries, health data, credentials, tokens, or private documents in source, examples, screenshots, or version history.
7. **Encoding and display.** Save text as UTF-8, avoid accidental mixed encodings, test Chinese and non-ASCII text when relevant, and verify that files, exports, filenames, and browser rendering do not produce garbled characters.
8. **Real acceptance.** Static checks are necessary but insufficient. Before calling a stage done, test the main user path in a real browser or an equivalent browser automation tool, including mobile-width behavior when the product is web-based.
9. **Explicit stage boundaries.** After each stage report: what changed, what was checked, what remains, what is blocked, and where the complete backup is. Do not claim an untested feature is verified.
10. **Scope discipline.** Do not add accounts, cloud sync, external integrations, legal rules, or AI automation merely because they sound useful. Add them only when the user’s goal and risk justify them.

## Choose the lightest architecture that can do the work

Start with the smallest architecture that satisfies the current use case:

- **Static HTML/CSS/JS:** suitable for a public prototype, local tool, task guide, or low-configuration demo.
- **Static app plus local persistence:** suitable for a single-user workbench where browser-local data is acceptable.
- **Backend/database:** required when multiple users, shared data, permissions, audit trails, server-side calculations, or reliable cross-device persistence matter.
- **Spreadsheet workflow:** suitable when users need to download, edit, sort, filter, freeze, and upload records in a familiar tool. Treat the spreadsheet as a defined input/output contract, not as an unvalidated file dump.

Do not turn a static prototype into a backend simply to make it look more like a product. Conversely, do not use browser-local storage for sensitive shared production data.

## Standard delivery workflow

### Stage 0 — Establish the contract

Clarify:

- primary users and their real work;
- the first task that must become faster or safer;
- public/private data boundaries;
- target devices and low-performance constraints;
- whether the result is a prototype, a private tool, or a public production service;
- what “done” means for this stage.

Write these decisions into a short project handoff document.

### Stage 1 — Separate shell from domain

Define the reusable shell before filling in domain content:

- navigation and module boundaries;
- work queue or task-first home;
- data input/output area;
- validation and error area;
- backup/version area;
- AI handoff area, if useful;
- optional knowledge or portfolio area separated from the work path.

Keep domain labels, field names, formulas, workflows, and sample data in module-level structures or files rather than scattering them through unrelated UI code.

### Stage 2 — Build one vertical slice

Choose one real task and finish its complete path:

`open task → enter/import data → validate → calculate/display result → save → recover/export → verify`

Do not build eight empty modules before one module is actually usable. Use the first slice to establish the component, data, error, and test patterns for later modules.

### Stage 3 — Define data contracts

For every importable or editable record, define:

- stable identifier;
- required and optional fields;
- accepted date/number formats;
- duplicate rules;
- status values and status transitions;
- relation keys between tables;
- import behavior on valid, invalid, duplicate, and missing rows;
- export field names and version/template compatibility.

For spreadsheets, provide a real `.xlsx` template when users need Excel behavior. Keep CSV only as a compatibility fallback unless CSV is the actual requirement.

### Stage 4 — Add persistence and recovery

Before writes, create a snapshot containing the affected state, reason, and timestamp. At minimum provide:

- a complete stable backup at each meaningful stage;
- recent data snapshots before imports and bulk changes;
- a visible restore path;
- a clear statement of what a restore does and does not restore.

Prefer soft archive over irreversible deletion for operational records. Test both archive and restore.

### Stage 5 — Test in layers

Run tests in this order:

1. syntax and static checks;
2. data-contract checks with empty, malformed, duplicate, and mixed-validity data;
3. browser acceptance of the main path;
4. mobile-width and narrow-screen checks;
5. portability check from a clean copy or archive;
6. deployment or public-link check when publishing.

The browser test should cover the user-visible path, not merely query that a function exists. Record failures and fixes in the stage log.

### Stage 6 — Package and hand off

A stage is not complete until it has:

- a complete archive or reproducible repository state;
- a version identifier and changelog entry;
- setup/run instructions;
- known limitations;
- test result and unresolved risks;
- a handoff note that a new thread or another AI can read without reconstructing the entire conversation.

## Tool selection

Use tools according to the work, not by habit:

- **Version control:** Git/GitHub or another repository. Keep a stable branch and a working branch; commit at meaningful checkpoints.
- **Browser acceptance:** project-configured browser automation such as `agent-browser`, Playwright, or an equivalent. Read the project’s browser-test instructions before guessing profiles or ports.
- **Spreadsheets:** use a spreadsheet-capable tool for authoring, inspecting, recalculating, rendering, and verifying `.xlsx`; do not fake an Excel deliverable as a renamed CSV.
- **AI:** embed AI where it shortens a task and provide a copyable prompt, input requirements, output format, and human-review warning. Do not build an AI feature when ordinary code, a template, or a spreadsheet is more reliable.
- **Deployment:** choose the lowest-friction static host for a static site; document the exact build/output path and keep local preview available.

If a required tool is unavailable, state the limitation and use the safest equivalent. Do not silently pretend that a fallback performed the same level of validation.

## Engineering rules that prevent “change one button, break the whole site”

- Use module-level render and event-binding functions.
- Keep state transformations separate from DOM rendering.
- Use shared design tokens for colors, spacing, typography, and component states.
- Give important controls stable IDs or test selectors.
- Make one focused change at a time and run the smallest relevant test after it.
- Keep a working archive before changing a shared component.
- Prefer additive changes and small diffs; do not rewrite the whole page for a local UI change.
- When a change crosses modules, document the dependency and test every affected path.

## AI routing rule

For each proposed feature, decide whether it belongs in:

- ordinary UI/code;
- a spreadsheet/template;
- a browser automation script;
- a reusable prompt sent to a general chat AI;
- a domain knowledge base;
- or the workbench itself.

The workbench should own repeatable workflows, structured records, validations, statuses, exports, and recovery. General chat AI should usually handle open-ended drafting, summarization, comparison, brainstorming, and one-off reasoning. Provide a handoff prompt when routing work out of the workbench.

## Required stage report

At the end of every stage, report in plain language:

```text
Stage: [version/name]
Completed: [user-visible changes]
Checked: [static/browser/data/portable checks]
Not completed: [known limitations]
Backup: [archive or repository location]
Next stage: [one concrete next target]
Blockers: [none, or exact blocker and required action]
```

Do not close a module until its agreed acceptance checklist passes. If the user asks to move on, record what remains as a non-blocking enhancement rather than silently losing it.

For a reusable cross-thread handoff template, read [references/ai-handoff-template.md](references/ai-handoff-template.md).


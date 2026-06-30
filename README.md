# Land Leads Dashboard

Static dashboard (HTML + JS, PapaParse) that renders **lead lists** from Google
Sheets published as CSV. Each section maps to one sheet and is titled with that
sheet's own name. Tables are generated dynamically from the CSV header, with
search, column sorting, pagination and CSV export.

## Sections (configured in `index.html` → `SECTIONS`)

| Section | Google Sheet |
|---|---|
| Land Not Talked to January 1 to March 14 | `1ltGS3psr0WZSeNrxvtHl9Rt2CGYEPQv9DooHRW2WFXE` (gid 1285820647) |
| Land Not Talked to March 15th to June 15th | `1dnWHeKrm88OtzeslQXHume102_iZpNsImmIw2lXmof4` (gid 1957588272) |

Each sheet must be shared as **Anyone with the link → Viewer** (or Published to web).

## Run locally

```
node _serve.js
```

Then open http://localhost:8078

## Add another list

Append an entry to the `SECTIONS` array in `index.html` with `key`, `title`,
`sheetId` and `gid`. No other code changes are needed.

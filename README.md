# AI Call Dashboard

Static dashboard (HTML + JS, PapaParse + Chart.js) for AI call analytics. Reads a
Google Sheet **"Logs"** tab published as CSV and renders KPIs, charts, a call log
table and lead intelligence.

## Data source

Configured in `index.html` → `SHEET_ID` / `SHEET_GID`:

- Sheet: `1ltGS3psr0WZSeNrxvtHl9Rt2CGYEPQv9DooHRW2WFXE`
- Tab: **Logs** (gid `783671061`)

The tab must be shared as **Anyone with the link → Viewer** (or Published to web).

### Expected columns (Logs schema)

```
call_id, timestamp_utc, lead_phone, lead_name, direction, attempt_number,
duration_sec, result, answered, dna_type, booked, dnc_violation,
recording_url, transcript
```

`timestamp_utc` is stored in UTC and displayed / bucketed in the timezone set by
`TZ` in `index.html` (default `America/Chicago`). The KPIs use the explicit
boolean columns `answered`, `booked` and `dnc_violation`. While the tab has only
headers (no rows yet) the dashboard loads and shows zeros.

## KPIs

Total Dials · Connect Rate · Booking/Connect · Dials to Book · Lead Reach Rate ·
Appts Booked · Avg Duration · DNC Violations · Wasted Dials.

## GHL integration (optional)

The "View in GHL" button needs a GHL API key + Location ID. Set them per client
via `window.GHL_API_KEY` / `window.GHL_LOCATION_ID` (empty by default).

## Run locally

```
node _serve.js
```

Then open http://localhost:8078

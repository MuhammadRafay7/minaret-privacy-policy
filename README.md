# Minaret Privacy Policy

Standalone Next.js privacy policy page for the Minaret app.

## What & Why

Google Play requires apps to host a publicly accessible privacy policy URL.
This app renders the policy at `/` so it can be deployed to Vercel, Netlify, or any platform that serves static/Next.js sites.

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy

Minimum viable deployment without an external build system:

```bash
npm install
npm run build
npm start
```

Or connect the folder to Vercel / Netlify / any Node host.

## Update the policy

Edit `src/app/page.tsx`. The content uses only Tailwind utility classes — no extra dependencies required.
# minaret-privacy-policy

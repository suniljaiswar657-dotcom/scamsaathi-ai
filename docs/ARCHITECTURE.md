# SCAMSAATHI AI — Initial Architecture

## 1. Product boundary

SCAMSAATHI AI is an independent India-focused digital safety product. Its purpose is to help users assess suspicious digital content and understand practical next steps.

This document records the initial architecture direction. It does not imply that planned detection or AI capabilities are already implemented.

## 2. Approved technology direction

| Layer | Technology | Status |
| --- | --- | --- |
| Web application | Next.js + React + TypeScript | Phase 1 scaffold |
| API backend | Python + FastAPI | Planned |
| Web hosting | Vercel | Planned |
| Database | None for initial foundation | Intentionally deferred |
| AI provider | To be evaluated in the AI intelligence phase | Not configured |

## 3. Planned application modules

- Message analysis: suspicious SMS and chat text.
- URL analysis: phishing indicators and URL safety signals.
- WhatsApp analysis: user-submitted message content.
- Screenshot analysis: image-based scam indicators.
- Security assistant: explanations in simple Hinglish.
- User dashboard and scan history.
- Family protection and business protection.
- Security awareness academy.
- Admin, analytics, and subscription management.

## 4. Planned request flow

1. User submits content to an explicitly identified analysis tool.
2. The application validates input type, size, and allowed formats.
3. Sensitive-data warnings and privacy disclosures are shown before external AI processing.
4. The analysis service evaluates available signals.
5. The user receives a risk level, supporting indicators, limitations, and recommended next steps.
6. The system avoids retaining submitted content by default unless a future, explicit user-controlled feature requires it.

## 5. Security and privacy requirements

- Never ask users to submit OTPs, passwords, card PINs, or UPI PINs.
- Do not request credentials to inspect a message or URL.
- Treat all user-submitted text, links, and images as untrusted input.
- Validate and constrain uploads before processing.
- Do not permanently store screenshots by default.
- Disclose what information is sent to external AI services before sending it.
- Keep secrets in server-side environment variables; never expose provider keys in browser code.
- Use risk language such as low, medium, or high confidence; never promise a guaranteed fraud verdict.
- Include guidance to report suspected cybercrime using India's official reporting channels.

## 6. Initial repository structure

```text
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── docs/
│   └── ARCHITECTURE.md
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── README.md
└── tsconfig.json
```

## 7. Delivery phases

1. Foundation — repository, documentation, and web scaffold.
2. Premium interface — polished product UI and responsive experience.
3. Detection engine — deterministic validation and risk indicators.
4. AI intelligence — carefully scoped AI-assisted analysis.
5. Complete platform — dashboard and approved platform modules.
6. Security — privacy, abuse resistance, and hardening.
7. Testing — automated checks and end-to-end verification.
8. Launch — deployment and release checks.

Phases remain in the approved order. Later capabilities must not be represented as live before implementation and testing.

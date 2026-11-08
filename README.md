# SCAMSAATHI AI

**Safer digital life. Smarter scam detection.**

SCAMSAATHI AI is an India-focused cybersecurity platform designed to help people identify suspicious messages, phishing links, scam screenshots, and other common digital threats.

## Project status

Phase 1 — Foundation.

This repository is an independent project. The initial foundation contains the web application scaffold and architecture documentation. Detection features are planned for later phases and are not yet implemented.

## Planned platform

- SMS and suspicious-message analysis
- URL and phishing risk checks
- WhatsApp message analysis
- Screenshot-based scam analysis
- Hinglish AI security assistant
- Scan history and user dashboard
- Family and business protection tools
- Security awareness resources

## Technology

- **Frontend:** Next.js, React, TypeScript
- **Planned backend:** Python + FastAPI
- **Hosting target:** Vercel for the web application
- **Initial MVP:** Free-tier-first, database-free foundation

## Local development

Requirements: Node.js 20.9 or later and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Useful commands:

```bash
npm run lint
npm run build
```

## Security and privacy principles

- Never request or store OTPs, passwords, card PINs, or UPI PINs.
- Do not permanently store uploaded screenshots by default.
- Explain what data is processed before sending it to an AI provider.
- Present results as risk assessments, not guaranteed fraud verdicts.
- Provide clear guidance to report cybercrime through India's official reporting channels.

## Project documentation

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for the initial system boundaries and planned architecture.

## License

No open-source license has been selected yet. All rights are reserved by default unless a license is added by the project owner.

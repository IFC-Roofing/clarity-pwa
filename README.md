# Clarity PWA

Standalone iMessage-style PWA for IFC Roofing's AI Sales Intelligence platform.

**Live:** https://clarity.ifcroofing.com

## Stack
- Static PWA (HTML/CSS/JS)
- Hosted on Linode (nginx + Let's Encrypt)
- Installable on iOS/Android via "Add to Home Screen"

## Deploy
```bash
scp -r ./* root@45.33.122.222:/var/www/clarity.ifcroofing.com/
```

## Features (v1 — Shell)
- iMessage-style dark mode UI
- Agent gallery (Clarity, Mark, Guide, IFC Feedback)
- Project Clarity conversation list
- PWA manifest + service worker
- Apple home screen install support

## Roadmap
- [ ] Chat view with real message bubbles
- [ ] IFC Platform API integration
- [ ] Pipeline tab
- [ ] Live data from Clarity conversations

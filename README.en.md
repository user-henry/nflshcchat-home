**English** | [简体中文](README.md)

# NFLSHC Chat Release Site · nflshcchat-home

The **official website / download portal** of NFLSHC Chat (the student chat platform of Nanjing Foreign Language School Huai'an Campus): it presents platform features, offers Windows and Android client downloads, publishes the changelog, and links to sign-up and help documentation.

- Live site: **https://home.nflshcchat.cc.cd**
- Main app: https://nflshcchat.cc.cd/chat
- Help documentation: https://help.nflshcchat.cc.cd

This repository is a **pure static site**: only HTML / CSS / one small interaction script — **no build step, no npm dependencies**. Changes take effect on save and are hosted by GitHub Pages.

---

## Pages

| File | Purpose | Main entry points |
|---|---|---|
| `index.html` | Home: hero, 8 core features, client download cards, community QR codes, tech-stack banner | Windows download, Android download, changelog, sign up, open the app |
| `windows.html` | Windows desktop download (v2.5.0): installer / portable / system requirements | Feishu fast channel, GitHub Releases |
| `android.html` | Android client download (v2.3.0): APK and Pro package, system requirements | Feishu fast channel, GitHub Pages mirror |
| `log.html` | Changelog: per-version entries for the web app v1.0.0 → v2.2.0 (added / improved / fixed) | — |
| `register.html` | Sign-up guide: redirects to the official registration page `https://nflshcchat.cc.cd/register.html` after a 3-second countdown | Go now, back to home |
| `script.js` | Home interactions: cursor-following glow, smooth anchor scrolling | — |
| `styles.css` | Site-wide styles: black-gold palette + aurora background (5 blobs), card layout, responsive `@media (max-width: 768px)` | — |
| `CNAME` | GitHub Pages custom domain: `home.nflshcchat.cc.cd` | — |
| `.gitignore` | Excludes `design-notes/` (internal design research; not committed, not published) | — |

---

## Download channels

The buttons on the page provide two channels; when bumping a version, **update both**:

**Windows desktop (v2.5.0)**

| Channel | Content |
|---|---|
| 🚀 Feishu fast channel | Installer (NSIS) / portable, faster within mainland China |
| GitHub Releases | `user-henry/nflshcchat-windows` → `NFLSHC-Chat-2.5.0-Setup.exe`, `NFLSHC-Chat-2.5.0-Portable.exe` |
| Requirements | Windows 10+ / x64, 4 GB RAM, 200 MB disk, an NFLSHC Chat account |

**Android client (v2.3.0)**

| Channel | Content |
|---|---|
| 🚀 Feishu fast channel | `NFLSHC Chat.apk`, `NFLSHC Chat pro.apk` |
| GitHub Pages mirror | Direct APK links on the main repository's Pages |
| Requirements | Android 5.0+, armeabi-v7a / arm64-v8a, 100 MB storage, an NFLSHC Chat account |

> Where version numbers appear: the hero on `index.html` (`NFLSHC Chat v2.5.0 · 2026`) and the two download cards, the version line on `windows.html`, the download channels on `android.html`, and "Current version" at the top of `log.html`. `log.html` tracks the **web app** version (currently v2.2.0); client versions are maintained on their own subpages.

---

## Local preview

Pick one approach (no dependencies required):

```bash
# Option 1: Python (recommended; path and relative-link behaviour match production)
python -m http.server 8080
# Then open http://127.0.0.1:8080/

# Option 2: Node
npx --yes serve -l 8080 .

# Option 3: double-click index.html
# It works too, but the countdown redirect on register.html and some external links point to the live domains
```

The brand logo and community QR-code images referenced by the pages are hosted on an external CDN (`cdn.luogu.com.cn`); they will not render offline, which is expected.

---

## Deployment

1. Commit and push to the `main` branch;
2. GitHub Pages publishes automatically (the repository root is the site root; `CNAME` is pinned to `home.nflshcchat.cc.cd`);
3. If the custom domain stops working, check that the `home` CNAME record points to `user-henry.github.io`, and that **Settings → Pages → Custom domain** is `home.nflshcchat.cc.cd`.

Suggested workflow: edit HTML / CSS only — no build output is needed. If browsers serve cached content after publishing, use `?v=timestamp` or a hard refresh to verify.

---

## Design material (not committed)

`design-notes/` stores visual research and reconstruction material for the site (`design-tokens.json`, `component-specs.json`, `project-log.md`, issue notes, etc.). It is internal reference and excluded by `.gitignore`: **it is neither committed to GitHub nor published with Pages**.

---

## Related repositories

| Repository | Description |
|---|---|
| [nflshcchat](https://github.com/user-henry/nflshcchat) | Main site and frontend pages (chat rooms, meetings, calendar, notes, etc.), with a Cloudflare Worker as the only backend |
| [nflshcchat-windows](https://github.com/user-henry/nflshcchat-windows) | Windows desktop client (Electron; NSIS installer / portable) |
| [chatai](https://github.com/user-henry/chatai) | HZYAI intelligent assistant (https://chatai.bot.cd) |
| [help-nflshc202401](https://github.com/user-henry/help-nflshc202401) | Help documentation site (https://help.nflshcchat.cc.cd) |
| [nflshcchat-platform](https://github.com/user-henry/nflshcchat-platform) | Developer platform (app creation, permissions, integration code) |
| [nflshcchat-accounts](https://github.com/user-henry/nflshcchat-accounts) | Account authorization center (OAuth consent, registration, authorization management) |

---

## License

MIT License (matching the site footer). The NFLSHC Chat name, logo and campus usage scenarios mentioned on the site belong to the project.

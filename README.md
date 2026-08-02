# JARVIS | CodeWithLaksh

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-00f5ff)](https://CodeWithLakxsh.github.io/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**JARVIS** is the personal project showcase website for **CodeWithLaksh** — a dark, cyber-themed single-page site presenting the JARVIS suite of tools: WhatsApp automation, GPS location spoofing, and premium Android applications.

> **Live website:** https://CodeWithLakxsh.github.io/

## Overview

The site features a boot-up loader animation, particle canvas background, aurora blobs, 3D orbit visualization, and interactive download cards for the JARVIS tool suite. It is a fully static website — no build step, no server, no runtime dependencies.

## Features

- **Jarvis WA Matrix** — multi-node WhatsApp automation engine (Windows desktop build + Android APK)
- **Jarvis Geo Spoof** — advanced Android location mocking with route simulation
- **Jarvis Music** — high-performance Android audio streaming app
- Animated hero section with live metrics
- Custom cursor, loader, particle network, and aurora background effects
- 3D tilt interaction on download cards
- Fully responsive layout

## Technology Stack

| Layer     | Technology                                  |
| --------- | ------------------------------------------- |
| Markup    | HTML5                                       |
| Styling   | CSS3 (custom properties, keyframe animations) |
| Scripting | Vanilla JavaScript (no frameworks)          |
| Fonts     | Google Fonts — Space Grotesk, JetBrains Mono, Syne |
| Icons     | Font Awesome 6.4.0 (CDN)                    |
| Hosting   | GitHub Pages (static)                       |

## Project Structure

```
.
├── index.html          # Homepage (single-page site)
├── style.css           # All styles and animations
├── script.js           # Loader, canvas particles, interactions
└── downloads/          # Downloadable application assets (APKs, ZIP)
```

## Local Development

No build tools or package manager required. Open it locally in one of two ways:

**Option A — direct:** open `index.html` in a browser (note: the page works best over HTTP).

**Option B — local HTTP server** (recommended):

```bash
# Python 3
python -m http.server 8080
# then visit http://localhost:8080

# or with Node.js
npx serve .
```

## Deployment — GitHub Pages

The site is deployed to GitHub Pages from the `main` branch (root `/`):

1. Push changes to the `main` branch of `CodeWithLakxsh/CodeWithLakxsh.github.io`
2. GitHub Pages serves the site automatically from the repository root
3. Verify at https://CodeWithLakxsh.github.io/

The repository name follows GitHub's `<username>.github.io` convention, so no additional configuration is required once Pages is enabled.

## Contributing

Contributions, issues, and feature requests are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Security

Found a security concern? See [SECURITY.md](SECURITY.md) for reporting guidance.

## Author

**CodeWithLakxsh**

- GitHub: [https://github.com/CodeWithLakxsh](https://github.com/CodeWithLakxsh)
- Telegram: [https://t.me/codewithlaksh](https://t.me/codewithlaksh)
- Website: [https://CodeWithLakxsh.github.io/](https://CodeWithLakxsh.github.io/)

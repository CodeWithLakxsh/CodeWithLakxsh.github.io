# Contributing to JARVIS | CodeWithLaksh

Thanks for your interest in contributing to this website! This is a small static site, so the contribution workflow is intentionally light.

## How to contribute

1. **Fork** the repository.
2. **Create a branch** for your change:

   ```bash
   git checkout -b feature/your-change
   ```

3. **Make your changes.** Keep them focused on the website's existing design — this project intentionally preserves its cyber/terminal visual identity.
4. **Test locally.** Open the site via a local HTTP server and verify your change works:

   ```bash
   python -m http.server 8080
   ```

5. **Commit** with a clear, descriptive message:

   ```bash
   git commit -m "feat: describe your change"
   ```

6. **Push and open a pull request** against the `main` branch.

## Guidelines

- Keep code style consistent with the existing files (`index.html`, `style.css`, `script.js`).
- Do not add frameworks or build steps — the site must remain plain static HTML/CSS/JS.
- Do not commit secrets, API keys, tokens, `.env` files, or logs (see `.gitignore`).
- Downloadable assets in `downloads/` may be large; discuss adding new ones in an issue first.
- The site must remain fully functional on GitHub Pages (no server-side code).

## Reporting issues

Please use the issue templates for [bug reports](.github/ISSUE_TEMPLATE/bug_report.yml) and [feature requests](.github/ISSUE_TEMPLATE/feature_request.yml).

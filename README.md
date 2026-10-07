# Viresh Sawant — Portfolio

Static portfolio site for GitHub Pages.

## Files
- `index.html` — homepage and case-study modal UI
- `style.css` — design system and responsive styles
- `script.js` — case-study content, interactions and navigation
- `assets/` — selected visuals rendered from the project PDFs
- `presentations/` — the six source PDF decks

## Publish free with GitHub Pages

1. Create or sign in to a GitHub account.
2. Create a **public** repository named exactly:
   `YOURUSERNAME.github.io`
3. Upload everything inside this folder to the repository root.
4. Go to **Settings → Pages**.
5. Under the source/build section, select **Deploy from a branch**.
6. Select `main` and `/ (root)` and save.
7. Wait for the deployment. Your site will be available at:
   `https://YOURUSERNAME.github.io/`

## Add your resume later (optional)

When you have a final resume PDF you want on the portfolio, put it at:
`presentations/resume.pdf`
Then add a button/link in `index.html` pointing to `presentations/resume.pdf`.

## Update content

Most portfolio text lives in `script.js` inside the `projects` object.
Replace a PDF by keeping the same filename in `presentations/` or updating the corresponding path in `script.js`.

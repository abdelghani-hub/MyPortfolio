# Abdelghani Ait Tamghart — Portfolio

Responsive personal portfolio built with HTML, CSS, and vanilla JavaScript. Includes dark/light mode that follows the OS until a preference is saved, scroll reveal animations and a marquee with reduced-motion support, a nav that highlights the section in view, fully clickable project cards, selected projects, professional experience, contact links, and a downloadable CV.

Typography: [Geist](https://vercel.com/font), Geist Mono, and Instrument Serif, loaded from Google Fonts with system-font fallbacks.

## Run locally

Open `index.html` directly, or serve this directory:

```sh
python3 -m http.server 8000
```

Visit http://localhost:8000. Clipboard access works on localhost or HTTPS; other contexts show the contact fallback.

## Deploy

No installation or build step is required. Upload `index.html`, `style.css`, `script.js`, `favicon.svg`, `apple-touch-icon.png`, `og-image.png`, and `Abdelghani-Ait-Tamghart-CV.pdf` together to any static web host. Use the repository root as the publish directory and leave the build command empty.

## Edit

- `index.html`: content, project links, experience, and contact details.
- `style.css`: colors, typography, responsive layouts, and animations.
- `script.js`: theme persistence, reveal observer, and copy-email interaction.
- `Abdelghani-Ait-Tamghart-CV.pdf`: downloadable resume; preserve the filename or update both download links.
- `og-image.png`: 1200×630 preview shown when the link is shared on LinkedIn, WhatsApp, Slack, etc.
- `favicon.svg` / `apple-touch-icon.png`: browser tab and home-screen icons.
- If the site moves to a new domain, update the `canonical`, `og:url`, `og:image`, and JSON-LD `url` values in the `<head>` of `index.html` (social previews need absolute URLs).

## Live portfolio

https://abdelghani-ait-tamghart.jauntyguppy66.chatgpt.site

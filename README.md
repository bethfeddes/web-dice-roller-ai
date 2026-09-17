# Web Dice Roller with AI

**Author:** Bethany Feddes

**Assignment:** Web Dice Roller with AI  
**Hosted at:** https://red-tree-02ff69910.6.azurestaticapps.net

## Description

A Dungeons & Dragons dice roller: pick a die type (d4, d6, d8, d10, d12,
d20, or d100) and how many dice to roll (up to 6), then roll using
JavaScript's random number generator. Built with separate HTML, CSS, and
JavaScript files so it can be deployed as a static site.

## Credits

Built with the assistance of [Claude AI](https://claude.ai) (Anthropic).


## Running Locally

No build step or server is strictly required, but a local server avoids
occasional browser restrictions on files opened directly from disk.

**Option 1 — Open directly**

1. Download/clone this repository, keeping the folder structure intact:
   ```
   index.html
   css/style.css
   js/script.js
   ```
2. Double-click `index.html` to open it in your default browser.

**Option 2 — Local server (recommended)**

1. Open a terminal in the project folder.
2. Start a simple local server:
   ```bash
   # Python 3
   python3 -m http.server 8000

   # or Node.js
   npx serve .
   ```
3. Open `http://localhost:8000` (or the URL shown in your terminal) in
   your browser.

## Deploying to Azure Static Web Apps

1. In the [Azure Portal](https://portal.azure.com), create a new
   **Static Web App** resource and connect it to this GitHub repository
   (or the branch you want to deploy).
2. Set the build details to:
   - App location: `/`
   - Output location: *(leave blank)*
3. Azure will add a GitHub Actions workflow to this repo that builds and
   deploys the site automatically on every push to the connected branch.
4. Once the workflow completes, Azure provides a public URL
   (e.g. `https://<app-name>.azurestaticapps.net`) where the site is live.
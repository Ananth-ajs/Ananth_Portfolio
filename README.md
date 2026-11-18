# Ananth A. | Data Science Portfolio

Dark analytics-dashboard portfolio (HTML, CSS, JavaScript). No build step, no backend, no external dependencies.

## Folder structure
```
ananth-data-science-portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── README.txt
    ├── guvi-certificate.png            <- add your real certificate image
    └── Ananth_A_Resume_PLACEHOLDER.pdf <- add your final resume
```

## Before you publish
1. Save your GUVI certificate image as `assets/guvi-certificate.png`.
2. Save your resume in `assets/`. If the file name differs, edit the Download Resume link in `index.html`.
3. Google Pay Expense Sharing has no repository link yet. When you have one, replace the greyed-out label in `index.html` with a "View on GitHub" link.

## Preview locally
Double-click `index.html`, or run a local server:
```
cd ananth-data-science-portfolio
python3 -m http.server 8000
```
Then open http://localhost:8000

## Upload to GitHub
1. Sign in at github.com and click New repository.
2. Name it `ananth-data-science-portfolio`, set it to Public, and create it.
3. Click "uploading an existing file", drag in everything inside the project folder (including `assets`), and commit.

Or with Git:
```
cd ananth-data-science-portfolio
git init
git add .
git commit -m "Add portfolio website"
git branch -M main
git remote add origin https://github.com/Ananth-ajs/ananth-data-science-portfolio.git
git push -u origin main
```

## Deploy with GitHub Pages
1. Open the repository, then Settings, then Pages.
2. Under Build and deployment, set Source to "Deploy from a branch".
3. Choose branch `main` and folder `/ (root)`, then Save.
4. After about a minute the site is live at https://ananth-ajs.github.io/ananth-data-science-portfolio/

# mmportfolio
# 🌐 Mein Portfolio – React + Tailwind (Vite + TypeScript)

Dies ist mein persönliches One-Page-Portfolio-Projekt, erstellt mit React, Tailwind CSS, Vite und TypeScript. Ziel war es, eine moderne, performante und übersichtliche Webseite zu bauen, die meine Fähigkeiten als Webentwickler präsentiert. Das Projekt wurde von Grund auf aufgesetzt und ist bereit für die Veröffentlichung auf GitHub Pages.

Zum Einsatz kamen Vite als Build-Tool, React für die UI-Komponenten, Tailwind CSS für schnelles Styling und TypeScript für Typsicherheit. Als Projektstruktur wurde ein klassisches React-Layout gewählt, bestehend aus einem `App.tsx`, dem Einstiegspunkt `main.tsx`, gemeinsam genutzten Komponenten wie der Navigation und mehreren Sektionen wie „Hero“, „Über mich“, „Skills“, „Projekte“ und „Kontakt“.

Das Projekt wurde mit folgendem Befehl erstellt:
```bash
npm create vite@latest mein-portfolio -- --template react-ts
cd mein-portfolio
npm install
Anschließend wurde Tailwind CSS in Version 4 hinzugefügt:

#npm install -D tailwindcss postcss autoprefixer @tailwindcss/postcss

Da Tailwind ab Version 4 nicht mehr direkt als PostCSS-Plugin funktioniert, wurde zusätzlich @tailwindcss/postcss installiert und die postcss.config.js wie folgt geändert:

# import tailwindcss from '@tailwindcss/postcss'
# import autoprefixer from 'autoprefixer'

# export default {
#   plugins: [tailwindcss(), autoprefixer()],
# }


In der src/style.css wurden die Tailwind Direktiven eingebunden:

# @import "tailwindcss";

Die Projektstruktur sieht so aus:

src/
├── components/     # z. B. Navbar
├── sections/       # Hero, About, Skills, Projects, Contact
├── App.tsx         # Gesamtlayout
├── main.tsx        # Einstiegspunkt
└── style.css       # Tailwind-Einstieg

Ein häufiger Fehler war, dass kein <div id="root"></div> im index.html vorhanden war. Dieser wurde ergänzt, damit main.tsx korrekt mounten kann.

Falls React oder ReactDOM fehlten, wurden diese nachträglich installiert:

# npm install react react-dom
# npm install -D @types/react @types/react-dom

Nach der Einrichtung funktioniert das Projekt einwandfrei im Browser. Alle Sektionen sind verbunden, die Navigation funktioniert, Tailwind-Klassen greifen wie gewünscht und das Layout ist responsiv.

## 🚀 Deployment auf GitHub Pages

Das Projekt wurde über GitHub Pages veröffentlicht. Dafür wurde das Paket `gh-pages` verwendet und das Projekt so konfiguriert, dass es über den `dist/`-Ordner veröffentlicht wird.

### Schritte zum Deployment:

1. Installation der gh-pages-Dev-Dependency:

npm install --save-dev gh-pages

In der Datei vite.config.ts wurde das base-Feld gesetzt – wichtig ist hier, dass der Name des GitHub-Repositories korrekt angegeben wird:

# import { defineConfig } from 'vite'
# import react from '@vitejs/plugin-react'

# export default defineConfig({
#   base: '/mmportfolio/', // Repo-Name mit Slash am Anfang
#   plugins: [react()],
# })

In der package.json wurden die folgenden Felder ergänzt:

# "homepage": "https://dein-github-username.github.io/mmportfolio",
 
# "scripts": {
#   "deploy": "gh-pages -d dist"
# }

Die Anwendung wurde wie folgt deployed:

npm run build
npm run deploy

Dadurch wird der Produktionsbuild im dist/-Ordner erstellt und anschließend automatisch auf den Branch gh-pages gepusht.

Die Seite ist dann unter folgender URL erreichbar:

https://dein-github-username.github.io/mmportfolio

Das ganze ist ein ideales Fundament für einen One-Page CV der übers web erreichbar ist!

© 2025 Marc Ehrlich – Webentwickler | React | DevOps










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

#  export default {
#   plugins: [tailwindcss(), autoprefixer()],
#  }
In der src/style.css wurden die Tailwind Direktiven eingebunden:

# @import "tailwindcss";

Die Projektstruktur sieht so aus:

src/
├── components/     # z. B. Navbar
├── sections/       # Hero, About, Skills, Projects, Contact
├── App.tsx         # Gesamtlayout
├── main.tsx        # Einstiegspunkt
└── style.css       # Tailwind-Einstieg
In allen .tsx-Dateien wurde import React from 'react' eingefügt, um JSX korrekt zu nutzen. Zusätzlich wurde in der tsconfig.json "jsx": "react-jsx" gesetzt.

Ein häufiger Fehler war, dass kein <div id="root"></div> im index.html vorhanden war. Dieser wurde ergänzt, damit main.tsx korrekt mounten kann.

Falls React oder ReactDOM fehlten, wurden diese nachträglich installiert:

# npm install react react-dom
# npm install -D @types/react @types/react-dom

Nach der Einrichtung funktioniert das Projekt einwandfrei im Browser. Alle Sektionen sind verbunden, die Navigation funktioniert, Tailwind-Klassen greifen wie gewünscht und das Layout ist responsiv.

Dieses Projekt kann nun weiter ausgebaut oder auf GitHub Pages veröffentlicht werden. Als mögliche Erweiterungen bieten sich Dark Mode, ein CV-Download, mehr Projektcards und Animationen an.

© 2025 Max Mustermann – Webentwickler | React | DevOps










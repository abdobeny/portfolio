# Abdellilah Benyousse — Portfolio

[![Built with Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

Portfolio personnel bilingue (FR / EN / AR) avec thème clair/sombre, animations subtiles et sections Projets, Compétences, Parcours et Contact.

**[Voir le site](https://abdobeny.dev/)**

## Stack
- [Vite](https://vitejs.dev/) 8 + [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) 4 via `@tailwindcss/vite`
- [Lucide React](https://lucide.dev/) pour les icônes
- Framer-like transitions natives (CSS)

## Fonctionnalités
- **Internationalisation** — Français, Anglais, Arabe avec bascule RTL automatique
- **Thème** — Mode sombre par défaut, mode clair persistant dans `localStorage`
- **Navigation responsive** — Menu mobile avec ferveur de section active
- **Projets** — Cartes avec aperçu, stack technique, liens vers le dépôt / démo
- **SEO** — Meta tags Open Graph/Twitter, `robots.txt`, `sitemap.xml`, données structurées JSON-LD
- **Performances** — Assets typographiés, images optimisées, cache headers

## Développement local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Vérifier le lint
npm run lint

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

## Déploiement

Ce projet est optimisé pour **[Cloudflare Pages](https://pages.cloudflare.com/)**.

1. Pousser le code sur GitHub
2. Créer un projet Cloudflare Pages en connectant le dépôt
3. Build command : `npm run build`
4. Output directory : `dist`
5. `NODE_VERSION` : `22` (défini automatiquement si `.nvmrc` absent ; Vite 8 requiert Node ≥20.19 / ≥22.12)

Des fichiers `_headers`, `_redirects`, `robots.txt` et `sitemap.xml` sont déjà présents dans `public/` et copiés dans `dist/` à la build.

> Si vous déployez depuis un sous-chemin (GitHub Pages), définissez `BASE_PATH=/nom-du-repo/` dans la config de build. `vite.config.js` le lit déjà.

## Structure

```
src/
├── components/   # Navbar, Hero, Projects, Skills, ExperienceEducation, Footer
├── context/      # ThemeContext, LanguageContext
├── data/         # translations.js, projectLinks, profileConfig
└── main.jsx      # Point d'entrée
public/
├── images/       # Avatars et captures de projets
├── _headers      # Headers Cloudflare/Netlify
├── _redirects    # Fallback SPA
└── cv-benyousse-abdellilah.pdf
```

## Licence
[MIT](./LICENSE) — © 2026 Abdellilah Benyousse

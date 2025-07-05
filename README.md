# Product Store 🛒

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/WassimBlilita7/product-store)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Description

**Product Store** est une application web moderne de gestion de produits, construite avec la stack PERN (PostgreSQL, Express, React, Node.js). Elle permet de créer, lire, mettre à jour et supprimer des produits, avec une interface utilisateur élégante et des fonctionnalités avancées de sécurité (anti-bot, rate-limiting).

---

## Fonctionnalités principales

- 🔍 Afficher la liste des produits
- ➕ Ajouter un produit
- 📝 Modifier un produit
- 🗑️ Supprimer un produit
- 🎨 Sélection de thème dynamique
- 🛡️ Protection anti-bot et anti-abus (Arcjet)
- ⚡ Notifications toast pour les actions
- 🌙 Plus que 10 thémes
- 🏎️ Chargement rapide grâce à Vite

---



## Architecture du projet

```mermaid
graph TD;
  A[Frontend (React)] --API REST--> B[Backend (Express)]
  B --SQL--> C[(PostgreSQL)]
  B --Arcjet--> D[Arcjet Security]
```

---

## Variables d'environnement

### Backend (`/backend/.env`)

| Variable      | Description                | Exemple                  |
|--------------|----------------------------|--------------------------|
| PORT         | Port du serveur Express    | 5000                     |
| PGHOST       | Hôte PostgreSQL            | ep-xxx.eu-central-1.aws.neon.tech |
| PGUSER       | Utilisateur PostgreSQL     | user123                  |
| PGPASSWORD   | Mot de passe PostgreSQL    | password123              |
| PGDATABASE   | Nom de la base de données  | productdb                |
| ARCJET_KEY   | Clé API Arcjet             | arcjet_xxx               |

**Exemple de fichier `.env` backend :**
```env
PORT=5000
PGHOST=ep-xxx.eu-central-1.aws.neon.tech
PGUSER=user123
PGPASSWORD=password123
PGDATABASE=productdb
ARCJET_KEY=arcjet_xxx
```

### Frontend (`/frontend/.env`)

| Variable      | Description                | Exemple                  |
|--------------|----------------------------|--------------------------|
| VITE_API_URL | URL de l'API backend       | http://localhost:5000    |

**Exemple de fichier `.env` frontend :**
```env
VITE_API_URL=http://localhost:5000
```

---

## Installation & Lancement

### Prérequis
- Node.js >= 16
- PostgreSQL (ou NeonDB)

### 1. Cloner le repo
```bash
git clone https://github.com/WassimBlilita7/product-store.git
cd product-store
```

### 2. Backend
```bash
cd backend
npm install
# Copier .env.example en .env et remplir les variables
npm start
```

### 3. Frontend
```bash
cd ../frontend
npm install
npm run dev
```

---

## Endpoints API

| Méthode | Endpoint              | Description                |
|---------|----------------------|----------------------------|
| GET     | /api/products        | Liste tous les produits    |
| GET     | /api/products/:id    | Détail d'un produit        |
| POST    | /api/products        | Ajouter un produit         |
| PUT     | /api/products/:id    | Modifier un produit        |
| DELETE  | /api/products/:id    | Supprimer un produit       |

---

## Fonctions principales (Frontend)

- `fetchProducts` : Récupère tous les produits
- `fetchProduct` : Récupère un produit par ID
- `addProduct` : Ajoute un nouveau produit
- `updateProduct` : Met à jour un produit existant
- `deleteProduct` : Supprime un produit
- `setFormData` / `resetForm` : Gère le formulaire produit
- `setTheme` : Change le thème de l'UI

---

## Technologies utilisées

### Frontend
- React 18+
- Zustand (state management)
- DaisyUI & TailwindCSS (UI)
- React Router
- React Hot Toast
- Vite

### Backend
- Express.js
- PostgreSQL (NeonDB compatible)
- Arcjet (sécurité anti-bot/rate-limit)
- Helmet, Morgan, CORS

### Sécurité
- Arcjet protège toutes les routes backend contre les bots et les abus.
- Helmet sécurise les headers HTTP.
- CORS configuré pour le frontend.

---

## Tests

- **Backend** : Ajoutez vos tests avec Jest ou Supertest (exemple : `npm test` dans `/backend`).
- **Frontend** : Ajoutez vos tests avec React Testing Library ou Vitest (exemple : `npm run test` dans `/frontend`).

---

## Déploiement

- **Frontend** : Déployable sur Vercel, Netlify, ou autre hébergeur statique.
- **Backend** : Déployable sur Render, Heroku, Railway, etc.
- Pensez à bien configurer les variables d'environnement sur la plateforme de déploiement.

---

## Contribution

1. Forkez le repo
2. Créez une branche (`git checkout -b feature/ma-feature`)
3. Commitez vos changements (`git commit -am 'feat: nouvelle fonctionnalité'`)
4. Pushez la branche (`git push origin feature/ma-feature`)
5. Ouvrez une Pull Request

---

## FAQ

- **Comment changer le port du frontend ?**
  Modifiez la clé `port` dans `frontend/vite.config.js`.
- **Comment changer le favicon ?**
  Remplacez le fichier dans `frontend/public/` et modifiez le lien dans `index.html`.
- **Comment connecter à une base NeonDB ?**
  Renseignez les variables PGHOST, PGUSER, PGPASSWORD, PGDATABASE dans le backend.

---

## Roadmap

- [ ] Authentification utilisateur
- [ ] Pagination et recherche produits
- [ ] Upload d'image (cloud)
- [ ] Tests automatisés complets
- [ ] Dashboard admin

---

## Support

Pour toute question ou suggestion : [wassim.blilita19@gmail.com]

Ouvrez une issue sur GitHub pour signaler un bug ou demander une fonctionnalité.

---

## License

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE).

---

© 2025 Product Store. MIT License. 
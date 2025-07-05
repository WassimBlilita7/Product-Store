# Product Store 🛒

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/yourusername/product-store)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Description

**Product Store** est une application web moderne de gestion de produits, construite avec la stack PERN (PostgreSQL, Express, React, Node.js). Elle permet de créer, lire, mettre à jour et supprimer des produits, avec une interface utilisateur élégante et des fonctionnalités avancées de sécurité (anti-bot, rate-limiting).

---

## Fonctionnalités principales

- 🔍 **Afficher la liste des produits**
- ➕ **Ajouter un produit**
- 📝 **Modifier un produit**
- 🗑️ **Supprimer un produit**
- 🎨 **Sélection de thème dynamique**
- 🛡️ **Protection anti-bot et anti-abus (Arcjet)**
- ⚡ **Notifications toast pour les actions**

---

## Architecture du projet

```mermaid
graph TD;
  A[Frontend (React)] --API REST--> B[Backend (Express)]
  B --SQL--> C[(PostgreSQL)]
  B --Arcjet--> D[Arcjet Security]
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

## Variables d'environnement (Backend)

- `PORT` : Port du serveur Express (par défaut 5000)
- `PGHOST`, `PGUSER`, `PGPASSWORD`, `PGDATABASE` : Accès PostgreSQL
- `ARCJET_KEY` : Clé API Arcjet

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

- **Frontend** : React, Zustand, DaisyUI, React Router, React Hot Toast
- **Backend** : Express, PostgreSQL (NeonDB), Arcjet, Helmet, Morgan, CORS
- **Sécurité** : Arcjet (anti-bot, rate-limit)

---

## Contribution

1. Forkez le repo
2. Créez une branche (`git checkout -b feature/ma-feature`)
3. Commitez vos changements (`git commit -am 'feat: nouvelle fonctionnalité'`)
4. Pushez la branche (`git push origin feature/ma-feature`)
5. Ouvrez une Pull Request

---

## Exemple d'utilisation

- Accédez à `http://localhost:5173` pour utiliser l'application
- Ajoutez, modifiez ou supprimez des produits en temps réel

---

## Contact

Pour toute question ou suggestion : [wassim.blilita19@gmail.com]

---

© 2025 Product Store. MIT License. 
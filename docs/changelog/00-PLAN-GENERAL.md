# Plan général d'implémentation — Corrections FPS v4
**Date client :** 19 mai 2026  
**Date d'analyse :** 29 mai 2026  
**Source :** `Correction _ Captures ecran SITE INTERNET FREEARCS PHARMA SERVICES_19Mai2026.docx.md`

---

## Vue d'ensemble

| Fichier | Page / Composant | Nb corrections | Priorité |
|---|---|---|---|
| [01-footer.md](./01-footer.md) | `Footer.jsx` | 5 | P1 |
| [02-composant-bouton-flottant.md](./02-composant-bouton-flottant.md) | Nouveau composant `FloatingCTA.jsx` | 1 (transversal) | P1 |
| [03-page-accueil.md](./03-page-accueil.md) | `HomePage.jsx` | 5 | P1 |
| [04-page-qui-sommes-nous.md](./04-page-qui-sommes-nous.md) | `AboutPage.jsx` | 6 | P2 |
| [05-page-notre-fondatrice.md](./05-page-notre-fondatrice.md) | `FounderPage.jsx` | 3 | P2 |
| [06-page-pourquoi-nous-choisir.md](./06-page-pourquoi-nous-choisir.md) | `WhyChooseUsPage.jsx` | 5 | P2 |
| [07-page-nos-services.md](./07-page-nos-services.md) | `ServicesPage.jsx` | 3 | P2 |
| [08-page-representation-legale.md](./08-page-representation-legale.md) | `LegalRepresentationPage.jsx` | 2 | P3 |
| [09-page-expertise-therapeutique.md](./09-page-expertise-therapeutique.md) | `TherapeuticExpertisePage.jsx` | 4 | P3 |
| [10-page-blog.md](./10-page-blog.md) | `BlogPage.jsx` | 5 | P3 |
| [11-page-contact.md](./11-page-contact.md) | `ContactPage.jsx` | 5 | P3 |

**Total : 44 corrections identifiées, toutes vérifiées dans le code.**

---

## Ordre d'implémentation recommandé

### Sprint 1 — Fondations transversales (P1)
1. Créer `src/components/FloatingCTA.jsx` — composant réutilisable, paramétrable par `label` et `href`
2. Corriger `Footer.jsx` — 5 corrections groupées
3. Corriger `HomePage.jsx` — Hero texts + CTAs

### Sprint 2 — Pages principales (P2)
4. `AboutPage.jsx` — breadcrumb, sous-titre, suppression carte verte, intégration FloatingCTA
5. `WhyChooseUsPage.jsx` — décommenter sections 5+6, redesign cartes, suppression icônes
6. `FounderPage.jsx` — H1, CTA bas de page, section "Mes convictions"
7. `ServicesPage.jsx` — suppression icônes modèle opérationnel, CTA → FloatingCTA

### Sprint 3 — Pages secondaires (P3)
8. `LegalRepresentationPage.jsx` — remplacement contenu complet
9. `TherapeuticExpertisePage.jsx` — sous-titre hero, nouvelles sections
10. `BlogPage.jsx` — SEO, articles, filtres
11. `ContactPage.jsx` — layout, formulaire, carte Carrières

---

## Corrections NON pertinentes / déjà implémentées

Aucune — toutes les corrections du document client ont été vérifiées dans la codebase et nécessitent des modifications.

## Légende des statuts

- `[ ]` À faire
- `[~]` En cours
- `[x]` Terminé
- `[!]` Bloquant (dépendance externe : asset image, backend, etc.)

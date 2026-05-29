# Corrections — Page Blog
**Fichier :** `src/pages/BlogPage.jsx`  
**Priorité :** P3

---

## C-BLOG-01 — SEO : title et meta description

**Demande client :**
- `<title>` : `Blog — Éclairages sur la recherche clinique | Freearcs Pharma Services`
- Meta description : `Veille réglementaire, méthodologie, retours d'expérience terrain et actualités de la recherche clinique — par Freearcs Pharma Services.`

**Analyse code :** `BlogPage.jsx` ligne 53 — composant `<SEO>` avec `t('blog.metaTitle')` et `t('blog.metaDescription')`. Vérifier ces clés dans `translations.js`.

**Verdict :** ✅ Pertinent — mettre à jour les clés de traduction.

**Action :** Dans `translations.js` FR :
```js
blog: {
  metaTitle: "Blog — Éclairages sur la recherche clinique | Freearcs Pharma Services",
  metaDescription: "Veille réglementaire, méthodologie, retours d'expérience terrain et actualités de la recherche clinique — par Freearcs Pharma Services.",
  ...
}
```

---

## C-BLOG-02 — Hero : H1 sous-titre + paragraphe de présentation

**Demande client :**
- H1 : "Blog"
- Sous-titre : *"Veille réglementaire, méthodologie, retours d'expérience terrain."*
- Paragraphe de présentation :
  > Retrouvez ici la veille, les analyses, les retours d'expérience terrain et les actualités de la recherche clinique : évolutions réglementaires, méthodologie, conduite opérationnelle des études et bonnes pratiques cliniques.

**Analyse code :** Vérifier dans `BlogPage.jsx` si un sous-titre et paragraphe existent sous le H1 Hero.

**Verdict :** ✅ Pertinent — ajouter sous-titre et paragraphe.

**Action :**
- Ajouter sous le H1 :
  ```jsx
  <p className="text-white/90 italic text-lg mt-4">
    Veille réglementaire, méthodologie, retours d'expérience terrain.
  </p>
  ```
- Ajouter un paragraphe de présentation dans la section post-hero.

---

## C-BLOG-03 — Mise à jour des 3 articles (titres, résumés, URLs, tags)

**Demande client :** Les liens des articles ont été modifiés. Nouveau contenu :

### Article 1
- **Titre** : "Comment concilier accélération des essais et exigence éthique ?"
- **Résumé** : "Le rôle stratégique des Comités de Protection des Personnes (CPPs) dans le nouveau cadre EU CTR. Décryptage des enjeux de compétitivité européenne et de souveraineté pharmaceutique."
- **Tag** : Réglementaire
- **Temps de lecture** : 4 min
- **URL** : `https://www.linkedin.com/feed/update/urn:li:activity:7434858946802233344/`

### Article 2
- **Titre** : "Essais cliniques décentralisés : un défi organisationnel"
- **Résumé** : "Les essais décentralisés rendent la recherche plus accessible aux patients mais déplacent la complexité vers l'opérationnel : e-consent, circuit du médicament, télémédecine, coordination des acteurs."
- **Tag** : Opérations cliniques
- **Temps de lecture** : 4 min
- **URL** : `https://www.linkedin.com/posts/nadège-kambou-🌍-64391089_rechercheclinique-clinicaltrials-dct-activity-7439620809733722112-eFdf`

### Article 3
- **Titre** : "Maladies chroniques complexes : la convergence des innovations"
- **Résumé** : "Thérapie génique en mucoviscidose (études LENTICLAIR et RECODE), télésurveillance en insuffisance rénale chronique, neuromodulation en Alzheimer et SLA : panorama des innovations qui redessinent la recherche clinique."
- **Tag** : Innovation
- **Temps de lecture** : 4 min
- **URL** : `https://www.linkedin.com/feed/update/urn:li:activity:7397314048805097472`

**Analyse code :** `BlogPage.jsx` lignes 9-37 — tableau `ARTICLES` avec les 3 articles actuels. Les titres, résumés et URLs sont **différents** de ce que demande le client.

**Verdict :** ✅ Pertinent — mise à jour complète du contenu.

**Action :**
- Remplacer le contenu du tableau `ARTICLES` par les 3 articles ci-dessus.
- Tag "Stratégie" (actuel article 3) → "Innovation" (demandé).
- Mettre à jour `TAG_COLORS` : ajouter `Innovation` avec couleur appropriée (ex : `bg: '#EAF5E1', color: '#2E9013'` — à confirmer).
- Corriger les URLs LinkedIn (article 2 en particulier, l'URL actuelle est différente).

---

## C-BLOG-04 — Filtres thématiques : supprimer le doublon bas de page

**Demande client :** "Position : sous le Hero uniquement (à supprimer du bas de page, qui les dupliquait actuellement)"

Filtres demandés : **Tous, Réglementaire, Opérations cliniques, Innovation, Formation**

**Analyse code :** `BlogPage.jsx` utilise `t('blog.topics')` (ligne 49). Les filtres sont probablement présents deux fois (sous le Hero ET en bas de page).

**Verdict :** ✅ Pertinent — supprimer le doublon et s'assurer que les filtres ne s'affichent qu'une fois (sous le Hero).

**Action :**
- Localiser les deux occurrences des filtres thématiques dans `BlogPage.jsx`.
- Garder uniquement celle qui est positionnée juste après le Hero.
- Mettre à jour les valeurs des filtres : remplacer "Stratégie" par "Innovation".

---

## C-BLOG-05 — Bouton flottant

**Demande client :** "Section 4 — CTA flottant bas de page : Vous préparez une étude clinique ? Bouton flottant : Discutons de votre projet →"

**Verdict :** ✅ Pertinent

**Action :** Intégrer `<FloatingCTA label="Discutons de votre projet" href="/contact" triggerRef={heroRef} />` (dépend de [02-composant-bouton-flottant.md](./02-composant-bouton-flottant.md)).

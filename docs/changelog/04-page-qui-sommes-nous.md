# Corrections — Page À propos (Qui sommes-nous ?)
**Fichier :** `src/pages/AboutPage.jsx`  
**Priorité :** P2

---

## C-ABOUT-01 — Breadcrumb : "Home" → "Accueil" + supprimer le "|"

**Demande client :** Corriger le breadcrumb : "Accueil / Qui sommes-nous ?" (sans le "│" final)

**Analyse code :** `AboutPage.jsx` lignes 41-48 :
```jsx
<Link to="/" className="...">Home</Link>       // ligne 43 — "Home" à corriger
<span className="text-white/60">/</span>
<span className="text-white">Qui sommes-nous ?</span>
<span className="hidden sm:inline-block text-white/40">|</span>  // ligne 47 — à supprimer
<span className="text-[#2E9013]...">...</span>    // ligne 49 — commenté
```

**Verdict :** ✅ Pertinent — deux corrections distinctes dans ce bloc.

**Action :**
- Ligne 43 : remplacer `Home` par `Accueil`
- Ligne 47 : supprimer entièrement le `<span>` contenant `|`
- Ligne 49-51 : décommenter et insérer le sous-titre (voir C-ABOUT-02)

---

## C-ABOUT-02 — Ajouter le sous-titre sous le H1

**Demande client :** Ajouter sous le H1 "Qui sommes-nous ?", en blanc : "Une CRO indépendante au service de la recherche clinique."

**Analyse code :** `AboutPage.jsx` ligne 49 — le sous-titre est **commenté** :
```jsx
{/* {t('about.heroTagline')} */}
```
La clé `about.heroTagline` doit exister ou être créée dans `translations.js`.

**Verdict :** ✅ Pertinent

**Action :**
1. Vérifier que `translations.js` contient `about.heroTagline: "Une CRO indépendante au service de la recherche clinique."`.
2. Décommenter le `<span>` ligne 49 en `AboutPage.jsx` :
   ```jsx
   <p className="text-white/90 text-lg font-medium mt-4 italic">
     Une CRO indépendante au service de la recherche clinique.
   </p>
   ```

---

## C-ABOUT-03 — Supprimer "CRO indépendante · France · Depuis 2020"

**Demande client :** Supprimer la ligne "CRO indépendante · France · Depuis 2020"

**Analyse code :** `AboutPage.jsx` ligne 67 :
```jsx
<h5 className="text-[#2B2B2B] text-xl font-bold mb-6">CRO indépendante · France · Depuis 2020</h5>
```

**Verdict :** ✅ Pertinent — à supprimer.

**Action :** Supprimer entièrement cet élément `<h5>`.

---

## C-ABOUT-04 — Bloc citation à valider / corriger

**Demande client :** Ajouter le bloc citation :
> « Notre modèle hybride combine la rigueur des grandes CROs internationales et la flexibilité opérationnelle indispensable aux biotechs et medtechs innovantes. »

**Analyse code :** `AboutPage.jsx` lignes 76-79 — une `<blockquote>` existe déjà avec `{t('about.introText3')}`. Vérifier le contenu de cette clé dans `translations.js`.

**Verdict :** ✅ Potentiellement pertinent — vérifier si le texte de la clé `about.introText3` correspond à la citation demandée. Si non, mettre à jour la traduction.

**Action :**
- Chercher `about.introText3` dans `translations.js`.
- Si le texte ne correspond pas, le remplacer par :
  ```
  "Notre modèle hybride combine la rigueur des grandes CROs internationales et la flexibilité opérationnelle indispensable aux biotechs et medtechs innovantes."
  ```

---

## C-ABOUT-05 — Contenu sections Vision, Mission et Valeurs

**Demande client :** Mise à jour des textes des sections Vision, Mission et Valeurs :

**Notre Vision :**
> Devenir le partenaire de référence pour la recherche clinique en Europe et en Afrique Francophone. Reconnus pour notre expertise, notre rigueur scientifique et notre capacité à innover, nous contribuons à transformer les avancées scientifiques en solutions thérapeutiques concrètes pour le bien-être du patient.

**Nos Valeurs (H2) :**
1. **Humanité et Confidentialité** — Une écoute active et un respect strict des données de santé. La confidentialité des projets est une discipline collective.
2. **Rigueur et Expertise** — La même exigence pour chaque projet, quelle que soit sa taille. La rigueur, chez nous, c'est une culture partagée.
3. **Qualité Scientifique** — Conformité aux Bonnes Pratiques Cliniques. Formations régulières, partage de bonnes pratiques, veille réglementaire en continue.
4. **Flexibilité et Réactivité** — Mobilisation des profils d'experts correspondants à vos besoins. Notre modèle hybride, à la fois agile et structuré est une souplesse qui fait notre force.

**Analyse code :** Ces textes sont probablement dans `translations.js` (clés `about.vision`, `about.values`). Vérifier et mettre à jour.

**Verdict :** ✅ Pertinent — vérifier les clés de traduction et les mettre à jour si nécessaire.

**Action :**
- Chercher les clés `about.vision` et `about.values` dans `translations.js`.
- Mettre à jour les valeurs si différentes de ce que demande le client.

---

## C-ABOUT-06 — Supprimer la carte verte "Rencontrer notre Fondatrice" → Bouton flottant

**Demande client :** Supprimer la grande carte verte "Rencontrer notre Fondatrice" en fin de page. La remplacer par un bouton flottant paramétrable (voir [02-composant-bouton-flottant.md](./02-composant-bouton-flottant.md)).

**Analyse code :** Chercher dans `AboutPage.jsx` une section avec fond vert et lien vers `/founder` ou "Rencontrer notre Fondatrice".

**Verdict :** ✅ Pertinent

**Action :**
1. Localiser et supprimer le bloc CTA carte verte dans `AboutPage.jsx`.
2. Importer et ajouter `<FloatingCTA label="Rencontrer notre Fondatrice" href="/founder" triggerRef={heroRef} />` à la fin de la page.
3. Créer un `heroRef` et l'attacher à la section Hero — le bouton apparaît dès que le visiteur dépasse le hero.

**Spécifications FloatingCTA pour cette page :**
- Libellé : "Rencontrer notre Fondatrice →"
- Cible : `/founder`
- Apparition : dès que le visiteur dépasse le hero
- Disparition : à l'entrée du footer
- Mobile : icône `<User />` de Lucide (sans texte)

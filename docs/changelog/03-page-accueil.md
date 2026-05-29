# Corrections — Page d'accueil (Home)
**Fichier :** `src/pages/HomePage.jsx`  
**Priorité :** P1

---

## C-HOME-01 — Hero : textes des 3 calques (slides)

**Demande client :**
| Calque | Titre H1 | Sous-titre |
|---|---|---|
| 1 — Identité | CRO indépendante, exigeante et humaine | Freearcs Pharma Services accompagne biotechs, medtechs, laboratoires et promoteurs académiques dans la conduite de leurs études cliniques |
| 2 — Vision | Élargissons le choix thérapeutique pour chaque patient. | Parce que chaque maladie est curable, nous unissons notre expertise à la vôtre pour offrir à chaque patient une solution thérapeutique adaptée. |
| 3 — Périmètre | Un périmètre complet pour vos études cliniques. | Médicaments, dispositifs médicaux et produits hors santé. Études interventionnelles, observationnelles et de vie réelle. |

**Analyse code :** `HomePage.jsx` lignes 153-250
- Slide 1 (actuel) : "L'expertise au service de la recherche clinique" → **à remplacer entièrement**
- Slide 2 (actuel) : "Un périmètre complet pour vos études cliniques." → **glisser en Slide 3**
- Slide 3 (actuel) : "Élargissons le choix thérapeutique pour chaque patient." → **glisser en Slide 2**
- Les sous-titres actuels des slides 2 et 3 sont **inversés** par rapport à la demande client.

**Verdict :** ✅ Pertinent — Slide 1 entièrement à réécrire ; Slides 2 et 3 à permuter.

**Action :**
- Slide 1 : Remplacer H1 et sous-titre intégralement.
- Slide 2 : Mettre le contenu Vision (actuellement en Slide 3).
- Slide 3 : Mettre le contenu Périmètre (actuellement en Slide 2).

---

## C-HOME-02 — Hero CTAs : libellés et couleurs

**Demande client :**
- CTA principal (vert `#2E9013`, blanc) : **"Discutons de votre projet"**
- CTA secondaire (transparent, bordure verte) : **"Découvrir nos services"**

**Analyse code :** `HomePage.jsx` lignes 172-180, 206-214, 240-248
- CTA principal actuel : "Discutez de votre projet" → **"Discutons de votre projet"** (3 occurrences)
- CTA secondaire actuel : "Nos Services" fond jaune `#F5A617` → **"Découvrir nos services"** transparent/bordure verte
- Également dans `translations.js` ligne 24 : `ctaDiscuss: "Discutez de votre projet"` → à corriger

**Verdict :** ✅ Pertinent

**Action :**
- Remplacer "Discutez" → "Discutons" dans les 3 slides ET dans `translations.js`.
- Modifier le CTA secondaire : fond transparent, `border-2 border-[#2E9013]`, texte `text-[#2E9013]`, libellé "Découvrir nos services".

---

## C-HOME-03 — Section "Qui sommes-nous" : mise en page

**Demande client :**
1. Encapsuler "Qui Sommes-Nous" dans une carte
2. Aligner verticalement les deux titres "Qui Sommes-Nous" et "Pourquoi Nous Choisir" à la même hauteur
3. Limiter la largeur du texte à ~450-500px (cartes de 600px)
4. Augmenter l'espacement entre les bullets de la carte droite (16px entre chaque puce)
5. Transformer "En savoir plus →" en bouton secondaire (transparent, bordure verte)

**Analyse code :** À vérifier dans `HomePage.jsx` à partir de la ligne ~250 (section "Qui sommes-nous").  
**Verdict :** ✅ Pertinent — corrections de layout et style.

**Action :**
- Wrapper la section "Qui sommes-nous" dans un `<Card>` ou div avec `bg-white rounded-xl shadow-sm p-8`.
- Appliquer `max-w-[500px]` au contenu textuel intérieur.
- Sur les puces : remplacer `space-y-2` par `space-y-4` (≈16px gap).
- Remplacer le lien "En savoir plus →" par :
  ```jsx
  <Link to="/about" className="inline-flex items-center border-2 border-[#2E9013] text-[#2E9013] font-semibold px-6 py-2 rounded hover:bg-[#2E9013] hover:text-white transition-colors">
    En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
  </Link>
  ```

---

## C-HOME-04 — Section KPIs : modifier le descriptif "International"

**Demande client :** Modifier le texte sous "International" dans les indicateurs clés :
```
International → France / EU – Afrique Francophone
```

**Analyse code :** `WhyChooseUsPage.jsx` lignes 224-243 (la section KPIs est sur la page Pourquoi nous choisir) ET possiblement dans `HomePage.jsx`. Chercher "International" dans les deux fichiers.

Les 3 KPIs demandés :
| Stat | Description |
|---|---|
| Depuis 2020 | Plus de 30 projets cliniques supervisés |
| 65 % | Taux de fidélisation client |
| International | France / EU – Afrique Francophone |

**Verdict :** ✅ Pertinent

**Action :**
- Trouver la section KPIs dans `HomePage.jsx` (chercher "International" ou "30").
- Modifier le texte descriptif sous "International" en "France / EU – Afrique Francophone".
- Même correction dans `WhyChooseUsPage.jsx` si les KPIs y sont dupliqués.

---

## C-HOME-05 — Bouton flottant : intégration

**Demande client :** Le bouton flottant "Discutons de votre projet →" doit apparaître dès la section "Notre crédibilité en pratique" et disparaître à l'entrée du footer.

**Analyse code :** Aucun composant FloatingCTA n'existe dans `HomePage.jsx`.  
**Verdict :** ✅ Pertinent — dépend du composant créé dans [02-composant-bouton-flottant.md](./02-composant-bouton-flottant.md)

**Action :**
1. Créer d'abord `FloatingCTA.jsx` (voir fichier dédié).
2. Dans `HomePage.jsx` :
   ```jsx
   const credibilityRef = useRef(null);
   // Sur la section KPIs/crédibilité :
   <section ref={credibilityRef} ...>...</section>
   <FloatingCTA label="Discutons de votre projet" href="/contact" triggerRef={credibilityRef} />
   ```

---

## C-HOME-06 — Supprimer le CTA final bas de page

**Demande client :** "CTA final supprimé" — le bandeau CTA en bas de la page d'accueil doit être supprimé, remplacé par le bouton flottant.

**Analyse code :** Chercher une section CTA (bandeau vert) en bas de `HomePage.jsx`.  
**Verdict :** ✅ Pertinent si ce bandeau existe.

**Action :** Supprimer le `<section>` CTA final et s'assurer que le FloatingCTA est visible jusqu'au footer.

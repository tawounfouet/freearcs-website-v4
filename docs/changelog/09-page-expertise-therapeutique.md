# Corrections — Page Expertise Thérapeutique
**Fichier :** `src/pages/TherapeuticExpertisePage.jsx`  
**Priorité :** P3

---

## C-THERAP-01 — Sous-titre Hero manquant

**Demande client :** Ajouter sous le H1 "Expertise Thérapeutique" le sous-titre : "Oncologie, SNC, maladies rares, en France et à l'international."

**Analyse code :** `TherapeuticExpertisePage.jsx` lignes 38-41 — le sous-titre est **commenté** :
```jsx
{/* <span className="hidden sm:inline-block text-white/40">|</span>
<span className="text-[#2E9013] text-lg font-medium italic">
  Oncologie, SNC, maladies rares, en France et à l'international.
</span> */}
```

**Verdict :** ✅ Pertinent — décommenter + corriger le layout (supprimer le "|" inutile, afficher le sous-titre centré sous le H1)

**Action :**
- Décommenter et reformuler :
  ```jsx
  <p className="text-white/90 text-lg italic mt-4">
    Oncologie, SNC, maladies rares, en France et à l'international.
  </p>
  ```

---

## C-THERAP-02 — SEO : meta description

**Demande client :** Meta description :
> "Une CRO intervenant sur toutes les aires thérapeutiques. Études interventionnelles, observationnelles, épidémiologiques et données de vie réelles sur les médicaments, dispositifs médicaux et hors produits de santé."

**Analyse code :** `TherapeuticExpertisePage.jsx` ligne 14 — meta description actuelle :
```
"Expertise CRO sur les aires thérapeutiques complexes : oncologie, SNC, maladies rares, dermatologie, cardiologie, pneumologie. Études interventionnelles, observationnelles et RWE."
```

**Verdict :** ✅ Pertinent — à mettre à jour.

**Action :** Remplacer la prop `description` du composant `SEO` par le texte demandé.

---

## C-THERAP-03 — Restructurer les sections (Types d'études, Périmètres)

**Demande client :** Remplacer la structure actuelle par :

### Section 3 — Types d'études (H2)
**Sous-titre :** "Quatre modalités d'accompagnement adaptées à votre stade de développement."  
**Layout :** Grille 2×2 (4 blocs)

| Étude | Contenu |
|---|---|
| Études interventionnelles | Études de dérisquage, POC, First-in-Human, essais cliniques contrôlés (Phase I à IV), investigations cliniques, PMCF |
| Études observationnelles | Cohortes, registres, études post-AMM, suivi long terme |
| Études épidémiologiques | Études de prévalence, d'incidence, identification des facteurs de risque |
| Données de vie réelle (RWE) | Projets Real-World Evidence à partir de bases de données de soins courants |

### Section 4 — Périmètres d'études (H2)
**Layout :** Grille 1×3 (3 blocs égaux)

| Périmètre | Contenu |
|---|---|
| Médicaments | Produits soumis à Autorisation de Mise sur le Marché (AMM) |
| Dispositifs médicaux | Études pré-marquage CE et suivi post-marquage (PMCF) |
| Hors produits de santé | Études cliniques sur produits cosmétiques, compléments alimentaires, nutraceutiques |

**Analyse code :** `TherapeuticExpertisePage.jsx` lignes 57-100 — la structure actuelle est une grille 2 colonnes avec "L'entreprise intervient sur" + "Types d'études". Ce contenu doit être reorganisé en sections distinctes.

**Verdict :** ✅ Pertinent — restructuration de la section introduction.

**Action :** Remplacer la section `<div className="grid md:grid-cols-2 gap-10 mt-10">` et les sections qui suivent par :
1. Une section "Types d'études" en grille 2×2 avec cards blanches
2. Une section "Périmètres d'études" en grille 1×3 avec cards

---

## C-THERAP-04 — Section "Aires thérapeutiques" : mise à jour du contenu

**Demande client :** La section Aires Thérapeutiques doit présenter **6 cartes** (grille 3×2) avec le contenu détaillé suivant :

| Card | Titre | Contenu |
|---|---|---|
| A | Oncologie & Hématologie | Phases précoces (I & II), First-in-Human, immunothérapies, vaccins thérapeutiques... Indications : tumeurs solides, lymphomes, myélome multiple, leucémies (LLC, LAM), cancer de la vessie, GIST, études sur implants mammaires, radiothérapie |
| B | Neurosciences (SNC) | Pathologies neurodégénératives. Indications : Alzheimer, Parkinson, SLA, troubles neurodéveloppementaux, spasticité, atrophie multisystématisée |
| C | Maladies rares & orphelines | Expertise des designs adaptés aux faibles effectifs. Indications : dystrophie musculaire de Duchenne, maladie de Wilson, FAOD |
| D | Dermatologie & maladies inflammatoires | Indications : psoriasis, lupus, dermatite atopique |
| E | Infectiologie & Vaccinologie | Études sur maladies infectieuses et essais vaccinaux |
| F | Pneumologie, Rhumatologie & Cardiologie | BPCO, rhumatologie, FAP, LVAD |

**Titre H2** : "Aires thérapeutiques couvertes"  
**Sous-titre** : "L'ensemble des aires où nous avons accompagné nos partenaires. Aucune n'est plus importante qu'une autre."

**Analyse code :** La section des aires thérapeutiques existe probablement (le fichier a des imports `FlaskConical`, `Brain`, `Stethoscope`) mais avec un contenu moins détaillé.

**Verdict :** ✅ Pertinent — contenu enrichi significativement.

**Action :**
- Mettre à jour les cards avec le contenu ci-dessus.
- Titre H2 et sous-titre à mettre à jour.
- Retirer les icônes des cards (non demandées par le client — à confirmer).

---

## C-THERAP-05 — Bouton flottant

**Demande client :** Bouton flottant "Discutons de votre projet →" vers `/contact`.

**Analyse code :** `TherapeuticExpertisePage.jsx` ligne 220 — il y a déjà un lien "Discutons de votre projet" mais probablement dans un CTA statique, pas flottant.

**Verdict :** ✅ Pertinent — remplacer le CTA statique par FloatingCTA.

**Action :**
- Supprimer le bandeau CTA statique.
- Intégrer `<FloatingCTA label="Discutons de votre projet" href="/contact" triggerRef={heroRef} />`.

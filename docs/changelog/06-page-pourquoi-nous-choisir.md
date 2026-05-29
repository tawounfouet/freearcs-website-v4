# Corrections — Page Pourquoi nous choisir ?
**Fichier :** `src/pages/WhyChooseUsPage.jsx`  
**Priorité :** P2

---

## C-WHY-01 — Breadcrumb : "Home" → "Accueil"

**Demande client :** Breadcrumb : "Accueil / Pourquoi nous choisir ?"

**Analyse code :** `WhyChooseUsPage.jsx` ligne 39 :
```jsx
<Link to="/" className="...">Home</Link>  // ← à corriger
```

**Verdict :** ✅ Pertinent

**Action :** Remplacer `Home` par `Accueil` (ou utiliser `{t('nav.home')}` qui doit retourner "Accueil" en FR).

---

## C-WHY-02 — Supprimer la mention "Pfizer, Novartis, Sanofi, Roche, AstraZeneca"

**Demande client :** "Mention « Pfizer, Novartis, Sanofi, Roche, AstraZeneca » supprimée."

**Analyse code :** `WhyChooseUsPage.jsx` ligne 64 :
```jsx
<p className="...">
  Le développement scientifique a fait émerger une nouvelle génération de biotechs et de startups HealthTech, 
  qui innovent aujourd'hui aux côtés des laboratoires pharmaceutiques établis tels que Pfizer, Novartis, Sanofi, Roche, AstraZeneca.
</p>
```

**Verdict :** ✅ Pertinent

**Action :** Remplacer le paragraphe par la version sans mention des noms de laboratoires (conformément au document client, section 2 — Le contexte) :
```jsx
<p className="...">
  Le développement scientifique a fait émerger une nouvelle génération de biotechs et de startups HealthTech,
  qui innovent aux côtés des laboratoires pharmaceutiques établis. Si leur expertise technologique est de pointe,
  beaucoup sont moins outillées sur la dimension réglementaire et opérationnelle : stratégie, budgétisation,
  jalons de pilotage, délais d'autorisations, conventions hospitalières, conformité aux Bonnes Pratiques Cliniques.
  C'est précisément à cette jonction que Freearcs Pharma Services intervient.
</p>
```

---

## C-WHY-03 — Supprimer les icônes des 5 cartes d'engagements

**Demande client :** "ne pas mettre d'icones sur les cartes" (Section Cinq engagements concrets)

**Analyse code :** `WhyChooseUsPage.jsx` lignes 100-138 — chaque carte a un bloc icône :
```jsx
<div className="w-12 h-12 rounded-full bg-[#EDE8EB] flex items-center justify-center mb-4">
  <Building2 className="w-6 h-6 text-[#573D4E]" />
</div>
```
Présent sur les 5 cartes.

**Verdict :** ✅ Pertinent

**Action :**
- Supprimer le div icône de chaque carte (lignes 101-103, 109-111, 117-119, 125-127, 133-135).
- Retirer `items-center text-center` du flex container si le centrage était uniquement dû aux icônes.
- Ajouter un numéro "01", "02"... en tête de carte à la place de l'icône (selon la spec client : "Carte 01", "Carte 02"...) :
  ```jsx
  <span className="text-4xl font-bold text-[#E8E0E4] mb-3 block">01</span>
  ```

---

## C-WHY-04 — Décommenter et redesigner les sections 5 & 6

**Demande client :** "la page s'arrête après les 5 engagements concrets. Correction : ajouter la section 5 (Conformité) et la section 6 (Dimension pédagogique)."

**Analyse code :** `WhyChooseUsPage.jsx` lignes 144-203 — sections 5 & 6 sont **commentées** :
```jsx
{/* <section className="py-16 bg-[#F9FAFD]">
  ...
</section> */}
```
Le contenu existe mais est désactivé et utilise un layout avec images (côté gauche/droit) que le client ne veut plus.

**Verdict :** ✅ Pertinent — décommenter ET redesigner selon les nouvelles spécifications.

**Nouveau design demandé :**
- **Titre H2 commun** : "Notre différence"
- **Sous-titre** : "Deux dimensions qui distinguent notre accompagnement."
- **2 cartes côte à côte** (grille 2 colonnes)
- Fond cartes : blanc cassé `#FAFAFA`
- `border-radius: 12px`, `padding: 40px`, `gap: 32px` entre cartes
- Hauteur égalisée
- Titre H3 par carte (marron FPS `#7A4A38`), sous-titre italique vert FPS

**Carte 5 — Vos procédures, ou les nôtres :**
- H3 : "Adaptation au niveau de maturité de votre organisation"
- Sous-titre italique vert : "Vos procédures, ou les nôtres."
- Contenu : (existant déjà dans le code commenté, textes conformes)

**Carte 6 — Comprendre pour décider en toute autonomie :**
- H3 : "La dimension pédagogique"
- Sous-titre italique vert : "Comprendre pour décider en toute autonomie."
- Contenu : (existant déjà dans le code commenté, textes conformes)

**Action :** Remplacer le bloc commenté par :
```jsx
<section className="py-16 bg-[#FAFAFA]">
  <div className="max-w-[1100px] mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-[#573D4E]">Notre différence</h2>
      <p className="text-[#4B5563] mt-2 italic">Deux dimensions qui distinguent notre accompagnement.</p>
      <div className="w-16 h-1 bg-[#2E9013] mx-auto mt-4"></div>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      {/* Carte 5 */}
      <div className="bg-white rounded-xl p-10">
        <h3 className="text-[#7A4A38] font-bold text-xl mb-2">Adaptation au niveau de maturité de votre organisation</h3>
        <p className="text-[#2E9013] italic mb-6">Vos procédures, ou les nôtres.</p>
        <p className="text-[#4B5563] mb-4">Toutes les organisations n'ont pas le même niveau de structuration qualité. Notre approche s'adapte :</p>
        <p className="text-[#4B5563] mb-3"><strong>Pour les organisations déjà structurées :</strong> Nous nous intégrons à vos SOPs...</p>
        <p className="text-[#4B5563]"><strong>Pour les organisations en cours de structuration :</strong> Nous mettons en œuvre un cadre qualité adapté...</p>
      </div>
      {/* Carte 6 */}
      <div className="bg-white rounded-xl p-10">
        <h3 className="text-[#7A4A38] font-bold text-xl mb-2">La dimension pédagogique</h3>
        <p className="text-[#2E9013] italic mb-6">Comprendre pour décider en toute autonomie.</p>
        <p className="text-[#4B5563] mb-4">Notre accompagnement inclut une dimension pédagogique...</p>
        <ul className="list-disc pl-5 text-[#4B5563] space-y-2">
          <li>Comprennent le cadre réglementaire applicable à votre projet</li>
          <li>Anticipent les étapes critiques...</li>
          <li>Pilotent le développement de votre technologie...</li>
        </ul>
      </div>
    </div>
    <p className="text-center text-[#2E9013] italic mt-10 text-lg">
      Notre objectif : que vous compreniez chaque décision réglementaire et opérationnelle prise sur votre étude, 
      et que vous puissiez la défendre devant un investisseur, une autorité ou un partenaire académique.
    </p>
  </div>
</section>
```

---

## C-WHY-05 — Bouton flottant

**Demande client :** "Discutons de votre projet →" — apparaît dès que le visiteur dépasse le Hero.

**Analyse code :** Aucun FloatingCTA dans `WhyChooseUsPage.jsx`.  
**Verdict :** ✅ Pertinent

**Action :** Intégrer `<FloatingCTA label="Discutons de votre projet" href="/contact" triggerRef={heroRef} />` (dépend de [02-composant-bouton-flottant.md](./02-composant-bouton-flottant.md)).

---

## Spécifications transversales (source : document client)

- Largeur max des sections : **1100px**, centrée
- Padding vertical par section : **64px** (réduit de 96px)
- Alternance des fonds : blanc → blanc cassé `#FAFAFA` → blanc
  - Section Contexte : fond blanc
  - Section Notre approche : fond blanc cassé `#FAFAFA`
  - Section Cinq engagements : fond blanc
  - Section Notre différence (5+6) : fond blanc cassé `#FAFAFA`

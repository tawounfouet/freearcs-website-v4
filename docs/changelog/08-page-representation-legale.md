# Corrections — Page Représentation Légale dans l'UE
**Fichier :** `src/pages/LegalRepresentationPage.jsx`  
**Priorité :** P3

---

## C-LEGAL-01 — Remplacement complet du contenu textuel

**Demande client :** "REPRÉSENTATION LÉGALE DANS L'UE : supprimer toutes les phrases actuelles et remplacer par le texte ci-dessous"

**Analyse code :** `LegalRepresentationPage.jsx` — page actuellement basée sur des clés de traduction `t('legalRepresentation.xxx')` (lignes 15-17). Le contenu est entièrement géré via `translations.js`.

**Verdict :** ✅ Pertinent — mise à jour du contenu dans `translations.js` ET restructuration de la page.

**Nouveau contenu demandé :**

### SEO
- `<title>` : `Représentation Légale en Union Européenne — Freearcs Pharma Services`
- Meta description : `Service de représentant légal en recherche clinique pour les promoteurs établis hors EEE. Conformité aux exigences réglementaires de l'UE et interlocuteur officiel des autorités.`

### Section 1 — Hero
- **H1** : "Représentation Légale dans l'Union Européenne"
- **Breadcrumb** : Accueil / Représentation Légale dans l'Union Européenne

### Section 2 — Le cadre réglementaire

**H2** : Le cadre réglementaire

> Selon le Règlement (UE) 536/2014 sur les essais cliniques de médicaments et le Règlement (UE) 2017/745 sur les dispositifs médicaux, tout promoteur établi en dehors de l'Espace Économique Européen (EEE) doit désigner un représentant légal établi dans l'un des États membres de l'UE. Ce représentant légal est responsable de veiller à ce que l'essai clinique soit conforme aux exigences réglementaires de l'UE et sert d'interlocuteur pour les autorités de régulation de l'UE.
>
> Freearcs Pharma Services agit comme représentant légal pour les promoteurs établis hors UE qui conduisent des études cliniques dans un ou plusieurs États membres. Contactez-nous pour en savoir plus sur nos services et comment nous pouvons vous aider à réussir vos projets de Recherche Clinique en Union Européenne.

**Action :**
1. Mettre à jour les clés de traduction FR et EN dans `translations.js` :
   - `legalRepresentation.metaTitle`
   - `legalRepresentation.metaDescription`
   - `legalRepresentation.h1` (ou utiliser `nav.legalRepresentation`)
   - `legalRepresentation.regulatoryFramework` (nouveau texte)

2. Simplifier la structure de `LegalRepresentationPage.jsx` pour afficher uniquement :
   - Hero avec H1 + breadcrumb
   - Section texte réglementaire (1 seul paragraphe condensé)
   - CTA bas de page

> **Note :** La page actuelle est plus complexe (sections `targetRegions`, `typesOfOrgs`, `benefits`). Ces sections ne sont **pas mentionnées** dans le document client → **les supprimer ou les mettre en commentaire** en attendant validation.

---

## C-LEGAL-02 — CTA bas de page

**Demande client :** CTA bas de page : "Vous préparez une étude clinique ? / Discutons de votre projet"

**Analyse code :** `LegalRepresentationPage.jsx` ligne 57-65 — un `<Button>` CTA existe déjà dans la page (libellé à vérifier).

**Verdict :** ✅ Potentiellement pertinent — vérifier si le libellé et le layout correspondent à la demande.

**Action :**
- Si le CTA est différent de ce qui est demandé, mettre à jour le libellé et le styling.
- Format attendu :
  ```jsx
  <section className="py-16 bg-[#2E9013]">
    <div className="max-w-[1100px] mx-auto px-6 text-center">
      <h2 className="text-white text-2xl font-bold mb-4">Vous préparez une étude clinique ?</h2>
      <Link to="/contact" className="inline-flex items-center bg-white text-[#2E9013] font-semibold px-8 py-4 rounded-full">
        Discutons de votre projet <ArrowRight className="ml-2 w-5 h-5" />
      </Link>
    </div>
  </section>
  ```

# Corrections — Footer
**Fichier :** `src/components/Footer.jsx`  
**Fichier traductions :** `src/i18n/translations.js`  
**Priorité :** P1

---

## C-FOOTER-01 — Supprimer le doublon "A passion For Better Health"

**Demande client :** Supprimer le doublon « A passion For Better Health »  
**Analyse code :** La tagline est hardcodée en ligne 36 de `Footer.jsx` ET présente dans `translations.js` ligne 110 (`signature: "A passion For Better Health"`). Le footer ne consomme pas la clé de traduction — c'est donc une duplication code/traduction.  
**Verdict :** ✅ Pertinent

**Action :**
- Supprimer la ligne 36 de `Footer.jsx` :
  ```jsx
  // SUPPRIMER :
  <p className="text-white/80 italic text-sm mb-4">A passion For Better Health</p>
  ```
- Conserver la clé `signature` dans `translations.js` pour usage éventuel futur (ou la supprimer si aucun autre composant ne l'utilise).

---

## C-FOOTER-02 — Liens Rapides : restructurer la liste

**Demande client :** La liste Liens Rapides doit contenir exactement :
```
Accueil | À Propos | Nos Services | Représentation Légale UE | Expertise Thérapeutique | Blog | Contact
```

**Analyse code :** `Footer.jsx` lignes 13-21 — `navLinks` actuelle :
```js
{ path: '/about',                 label: t('nav.about') },
{ path: '/services',              label: t('nav.services') },
{ path: '/therapeutic-expertise', label: t('nav.therapeuticExpertise') },
{ path: '/why-choose-us',         label: t('nav.whyChooseUs') },
{ path: '/references',            label: t('nav.references') },
{ path: '/blog',                  label: t('nav.blog') },
{ path: '/contact',               label: t('nav.contact') },
```
Manquent : `Accueil` et `Représentation Légale UE`.  
À supprimer : `Pourquoi nous choisir` (`/why-choose-us`) et `Références` (`/references`).  
**Verdict :** ✅ Pertinent

**Action :** Remplacer le tableau `navLinks` par :
```js
const navLinks = [
  { path: '/',                       label: t('nav.home') },
  { path: '/about',                  label: t('nav.about') },
  { path: '/services',               label: t('nav.services') },
  { path: '/legal-representation',   label: t('nav.legalRepresentation') },
  { path: '/therapeutic-expertise',  label: t('nav.therapeuticExpertise') },
  { path: '/blog',                   label: t('nav.blog') },
  { path: '/contact',                label: t('nav.contact') },
];
```
> Vérifier que `t('nav.legalRepresentation')` retourne bien "Représentation Légale UE" dans `translations.js`.

---

## C-FOOTER-03 — Services : lister les 6 piliers opérationnels

**Demande client :** Lister dans la colonne Services du footer les 6 services de FPS.  
**Analyse code :** `Footer.jsx` lignes 65-81 — seulement 4 services affichés :
- Gestion de Projet
- Affaires Réglementaires
- Faisabilité et Monitoring
- Représentation Légale (lien vers `/legal-representation`)

Manquent : `Contrat et Budget` et `Support Site et Saisie de Données` (et `Formation`).  
**Verdict :** ✅ Pertinent

**Action :** Remplacer la nav Services par les 6 piliers :
```jsx
<nav className="flex flex-col space-y-2 text-sm text-white/70">
  <Link to="/services" className="hover:text-[#F5A617] transition-colors">Gestion de Projet</Link>
  <Link to="/services" className="hover:text-[#F5A617] transition-colors">Affaires Réglementaires</Link>
  <Link to="/services" className="hover:text-[#F5A617] transition-colors">Contrat et Budget</Link>
  <Link to="/services" className="hover:text-[#F5A617] transition-colors">Faisabilité et Monitoring</Link>
  <Link to="/services" className="hover:text-[#F5A617] transition-colors">Support Site et Saisie de Données</Link>
  <Link to="/services" className="hover:text-[#F5A617] transition-colors">Formation</Link>
</nav>
```
> Optionnel : ajouter des ancres `#pilier-X` si la page Services les supporte.

---

## C-FOOTER-04 — Badge AFCROs : harmoniser avec le "s" final

**Demande client :** Incohérence constatée — le badge image montre "AFCRO" mais le texte dit "Membre AFCROs". Corriger pour afficher "AFCROs" partout.  
**Analyse code :**
- `Footer.jsx` ligne 43 : `alt="AFCROs"` ✅ (alt correct)
- `Footer.jsx` ligne 44 : `Membre AFCROs` ✅ (texte correct)
- `public/AFCROs.png` : le fichier image lui-même affiche "AFCRO" sans "s" (constaté par le client)  
**Verdict :** ✅ Pertinent — l'image source `AFCROs.png` doit être remplacée par une version avec "AFCROs"

**Action :**
- `[!]` **Bloquer sur asset** : demander à FPS ou AFCROs un logo officiel "AFCROs" avec le "s". Le fichier à remplacer est `public/AFCROs.png`.
- En attendant l'asset, ajouter un suffixe "s" en texte superposé via CSS si nécessaire.

---

## C-FOOTER-05 — Version anglaise : appliquer les mêmes corrections

**Demande client :** "Version anglaise à corriger" — les mêmes corrections s'appliquent en EN.  
**Analyse code :** `translations.js` contient les clés EN (lignes ~390+). Les clés `footer.quickLinks`, `footer.servicesTitle`, etc. doivent refléter les mêmes changements de structure.  
**Verdict :** ✅ Pertinent

**Action :**
- Une fois les corrections FR validées, appliquer les équivalents EN dans `translations.js` (section `en: { footer: { ... } }`).
- Vérifier que `t('nav.legalRepresentation')` en EN retourne "Legal Representation EU" ou équivalent.

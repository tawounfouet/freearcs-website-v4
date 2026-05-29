# Corrections — Page Contact
**Fichier :** `src/pages/ContactPage.jsx`  
**Priorité :** P3

---

## C-CONTACT-01 — Hero : ajouter le sous-titre

**Demande client :** Ajouter sous le H1 "Contact" le sous-titre : "Présentez-nous votre projet. Premier échange sous 48 heures."

**Analyse code :** Vérifier dans `ContactPage.jsx` si un sous-titre Hero existe après le H1.

**Verdict :** ✅ Pertinent — sous-titre manquant à ajouter.

**Action :** Dans la section Hero, ajouter :
```jsx
<p className="text-white/90 text-lg mt-4">
  Présentez-nous votre projet. Premier échange sous 48 heures.
</p>
```

---

## C-CONTACT-02 — Supprimer les sections droite "Contact" & "Membre de l'AFCROs"

**Demande client :** "supprimer les sections sur la droite : « contact » & « Membre de l'afcros »"

**Analyse code :** `ContactPage.jsx` ligne 271 — présence de `<img src="/AFCROs.png" alt="AFCROs" />` dans une colonne droite. La section de contact (téléphone, adresse) et la section AFCROs sont à supprimer de la colonne droite.

**Verdict :** ✅ Pertinent

**Action :**
- Supprimer la colonne de droite contenant les infos contact et le badge AFCROs.
- Remplacer par la **carte Carrières** (voir C-CONTACT-03).
- Le formulaire (colonne gauche) prend 60% de la largeur, la colonne Carrières prend 40%.

---

## C-CONTACT-03 — Ajouter la carte "Carrières"

**Demande client :** Ajouter une carte "Carrières" en colonne droite, alignée avec le titre du formulaire.

**Contenu :**
```
💼 Carrières

Vous souhaitez rejoindre nos équipes ?
Adressez votre candidature à contact@freearcs.com

Candidatures spontanées et candidatures aux offres ouvertes acceptées.
```

**Verdict :** ✅ Pertinent — carte absente.

**Action :** Créer la colonne droite avec :
```jsx
{/* Colonne droite — Carrières */}
<div className="lg:w-2/5">
  <div className="bg-white rounded-xl shadow-sm p-8">
    <div className="flex items-center gap-3 mb-4">
      <Briefcase className="w-6 h-6 text-[#2E9013]" />
      <h3 className="text-xl font-bold text-[#573D4E]">Carrières</h3>
    </div>
    <p className="text-[#4B5563] mb-4">
      Vous souhaitez rejoindre nos équipes ? Adressez votre candidature à{' '}
      <a href="mailto:contact@freearcs.com" className="text-[#2E9013] font-semibold hover:underline">
        contact@freearcs.com
      </a>
    </p>
    <p className="text-[#4B5563] text-sm italic">
      Candidatures spontanées et candidatures aux offres ouvertes acceptées.
    </p>
  </div>
</div>
```
Importer `Briefcase` depuis `lucide-react`.

---

## C-CONTACT-04 — Formulaire : restructurer les champs

**Demande client :** Formulaire restructuré avec les champs suivants :
1. Nom et prénom *
2. Adresse e-mail professionnelle *
3. Organisation *
4. Fonction
5. Téléphone *(optionnel)*
6. Sujet de la demande * *(menu déroulant)*
7. Votre message * *(zone texte, 1500 caractères max)*
8. ☐ J'accepte la Politique de Confidentialité *

**Menu déroulant "Sujet" :** Étude clinique · Représentation Légale UE · Formation · Partenariat · Autre

**Analyse code :** `ContactPage.jsx` lignes 16-25 — état du formulaire actuel :
```js
const [formData, setFormData] = useState({
  firstName: '',   // → fusionner en "name" (Nom et prénom)
  name: '',        // → à supprimer (fusion avec firstName)
  company: '',     // → renommer "organisation"
  email: '',       // ✅ ok (renommer label en "e-mail professionnelle")
  phone: '',       // ✅ ok (optionnel)
  subject: '',     // ✅ ok (changer en select)
  message: '',     // ✅ ok (ajouter max 1500 chars)
  file: null,      // → SUPPRIMER (upload de fichier non demandé)
});
```

**Verdict :** ✅ Pertinent — plusieurs modifications de structure.

**Action :**
1. Fusionner `firstName` + `name` → un seul champ `fullName` "Nom et prénom *"
2. Renommer `company` → `organisation` avec label "Organisation *"
3. Ajouter le champ `fonction` (non obligatoire)
4. Modifier le champ `subject` : le passer de `<Input>` à `<Select>` avec les options demandées
5. Supprimer le champ `file` et son handler `handleFileChange`
6. Ajouter le champ `rgpdConsent` (checkbox obligatoire)
7. Ajouter `maxLength={1500}` sur le textarea `message`

---

## C-CONTACT-05 — Mention RGPD sous le bouton d'envoi

**Demande client :** Ajouter sous le bouton "Envoyer le message" la mention RGPD :
> *En envoyant ce message, vous acceptez que vos données soient traitées par Freearcs Pharma Services pour répondre à votre demande, conformément à notre Politique de Confidentialité. Vos données ne font l'objet d'aucune cession à des tiers à des fins commerciales.*

**Analyse code :** Pas de mention RGPD visible dans le formulaire actuel.

**Verdict :** ✅ Pertinent

**Action :** Ajouter sous le bouton submit :
```jsx
<p className="text-[#6B7280] text-xs mt-3 italic">
  En envoyant ce message, vous acceptez que vos données soient traitées par Freearcs Pharma Services 
  pour répondre à votre demande, conformément à notre{' '}
  <Link to="/privacy" className="text-[#2E9013] hover:underline">Politique de Confidentialité</Link>.{' '}
  Vos données ne font l'objet d'aucune cession à des tiers à des fins commerciales.
</p>
```

---

## Récapitulatif layout Contact

```
┌─────────────────────────────────────────────────────────┐
│  HERO (H1: Contact + sous-titre)                        │
├─────────────────────────────────────────────────────────┤
│  ┌──────────────────────────┐  ┌────────────────────┐  │
│  │  Formulaire (60%)        │  │  Carte Carrières   │  │
│  │  - Nom et prénom         │  │  (40%)             │  │
│  │  - Email professionnel   │  │                    │  │
│  │  - Organisation          │  │  💼 Carrières      │  │
│  │  - Fonction              │  │  contact@...       │  │
│  │  - Téléphone (opt.)      │  │                    │  │
│  │  - Sujet (select)        │  │                    │  │
│  │  - Message (1500 chars)  │  │                    │  │
│  │  - ☐ RGPD               │  │                    │  │
│  │  [Envoyer le message]    │  │                    │  │
│  │  _mention RGPD_          │  │                    │  │
│  └──────────────────────────┘  └────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

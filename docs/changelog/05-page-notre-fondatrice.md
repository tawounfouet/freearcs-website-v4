# Corrections — Page Notre Fondatrice
**Fichier :** `src/pages/FounderPage.jsx`  
**Fichier traductions :** `src/i18n/translations.js`  
**Priorité :** P2

---

## C-FOUNDER-01 — H1 : "Notre fondatrice" → "Notre Fondatrice" (majuscule F)

**Demande client :** Titre H1 : "Notre Fondatrice" (avec F majuscule).

**Analyse code :** `FounderPage.jsx` ligne 33 :
```jsx
<h1 className="...">
  {t('nav.founder')}  // retourne "Notre fondatrice" (f minuscule)
</h1>
```
`translations.js` ligne 7 :
```js
founder: "Notre fondatrice",  // ← f minuscule
```

**Verdict :** ✅ Pertinent

**Action :**
- Dans `translations.js` FR, changer :
  ```js
  // Avant
  founder: "Notre fondatrice",
  // Après
  founder: "Notre Fondatrice",
  ```
- Vérifier également le breadcrumb (ligne 37 de `FounderPage.jsx` utilise aussi `{t('nav.founder')}`).
- En EN, `translations.js` ligne 417 : `founder: "Our Founder"` → déjà correct, pas de changement.

---

## C-FOUNDER-02 — CTA bas de page manquant

**Demande client :** Ajouter en bas de page le bloc CTA "Vous préparez une étude clinique ?" avec le bouton "Discutons de votre projet" (vert `#2E9013`, texte blanc), conformément V4.

**Analyse code :** `FounderPage.jsx` — pas de section CTA en bas de page actuellement (à vérifier en lisant le fichier complet). Le client indique ce CTA est "manquant".

**Verdict :** ✅ Pertinent — CTA à ajouter.

**Action :** Ajouter avant le `</div>` fermant de retour :
```jsx
{/* ── CTA bas de page ─────────────────────────────────────────── */}
<section className="py-16 bg-[#2E9013]">
  <div className="max-w-[1100px] mx-auto px-6 text-center">
    <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
      Vous préparez une étude clinique ?
    </h2>
    <Link
      to="/contact"
      className="inline-flex items-center bg-white text-[#2E9013] font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-colors"
    >
      Discutons de votre projet <ArrowRight className="ml-2 w-5 h-5" />
    </Link>
  </div>
</section>
```
> Alternativement, utiliser le FloatingCTA si le bandeau CTA est supprimé (selon choix client). Le document indique un **bouton flottant** sur cette page — voir C-FOUNDER-03.

---

## C-FOUNDER-03 — Nouvelle section "Mes convictions"

**Demande client :** Ajouter une section "Mes convictions" entre la carte de présentation et le bas de page.

**Layout :** Section centrée, fond blanc cassé `#FAFAFA`, 3 puces verticales avec icônes Lucide en vert FPS.

**H2** : "Mes convictions"  
**Sous-titre italique** : "Trois principes qui guident chacune de mes missions."

**Contenu :**
1. **Une CRO n'est pas un sous-traitant : c'est un partenaire stratégique.** La qualité d'une étude clinique ne se mesure pas seulement à l'exécution. Elle se construit dans le dialogue entre le promoteur et la CRO, à chaque étape.

2. **La rigueur sans la pédagogie n'a aucun sens.** Mon rôle n'est pas seulement d'exécuter l'étude, mais aussi de transmettre, pour que mes partenaires comprennent et défendent chaque décision réglementaire et opérationnelle prise sur leur projet.

3. **Chaque promoteur mérite un accompagnement adapté à sa réalité.** Biotech early-stage, laboratoire établi, medtech innovante ou acteur académique : les besoins ne sont pas les mêmes. Le cadre méthodologique non plus.

**Analyse code :** Cette section est **absente** de `FounderPage.jsx`.

**Verdict :** ✅ Pertinent — nouvelle section à créer.

**Action :** Ajouter après la section "Message From CEO & Company Overview" :
```jsx
{/* ── Mes convictions ────────────────────────────────────────── */}
<section className="py-16 lg:py-24 bg-[#FAFAFA]">
  <div className="max-w-[1100px] mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-[#573D4E]">Mes convictions</h2>
      <p className="text-[#2E9013] italic mt-2">Trois principes qui guident chacune de mes missions.</p>
    </div>
    <div className="space-y-8">
      {[
        {
          title: "Une CRO n'est pas un sous-traitant : c'est un partenaire stratégique.",
          text: "La qualité d'une étude clinique ne se mesure pas seulement à l'exécution. Elle se construit dans le dialogue entre le promoteur et la CRO, à chaque étape.",
          icon: Handshake,
        },
        {
          title: "La rigueur sans la pédagogie n'a aucun sens.",
          text: "Mon rôle n'est pas seulement d'exécuter l'étude, mais aussi de transmettre, pour que mes partenaires comprennent et défendent chaque décision réglementaire et opérationnelle prise sur leur projet.",
          icon: GraduationCap,
        },
        {
          title: "Chaque promoteur mérite un accompagnement adapté à sa réalité.",
          text: "Biotech early-stage, laboratoire établi, medtech innovante ou acteur académique : les besoins ne sont pas les mêmes. Le cadre méthodologique non plus.",
          icon: Users,
        },
      ].map(({ title, text, icon: Icon }) => (
        <div key={title} className="flex gap-6 items-start">
          <div className="w-12 h-12 rounded-full bg-[#EAF5E1] flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-[#2E9013]" />
          </div>
          <div>
            <p className="font-bold text-[#2B2B2B] text-lg mb-1">{title}</p>
            <p className="text-[#4B5563] leading-relaxed">{text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```
Importer les icônes nécessaires : `Handshake`, `GraduationCap`, `Users` depuis `lucide-react`.

---

## C-FOUNDER-04 — Bouton flottant

**Demande client :** Sur la page Fondatrice, le bouton flottant est "Discutons de votre projet →" vers `/contact`. Apparaît dès la fin du Hero.

**Analyse code :** Aucun FloatingCTA dans `FounderPage.jsx`.  
**Verdict :** ✅ Pertinent — dépend de [02-composant-bouton-flottant.md](./02-composant-bouton-flottant.md)

**Action :**
```jsx
const heroRef = useRef(null);
// Hero section :
<section ref={heroRef}>...</section>
// Fin de page :
<FloatingCTA label="Discutons de votre projet" href="/contact" triggerRef={heroRef} />
```

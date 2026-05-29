# Nouveau composant — FloatingCTA (Bouton flottant transversal)
**Fichier à créer :** `src/components/FloatingCTA.jsx`  
**Priorité :** P1 — Dépendance pour les pages : Accueil, À propos, Fondatrice, Pourquoi nous choisir, Nos Services, Expertise Thérapeutique, Blog

---

## Contexte

Le client demande un bouton flottant (bottom-right) présent sur toutes les pages, mais avec un libellé et une cible différents selon la page :

| Page | Libellé | Href | Déclencheur apparition |
|---|---|---|---|
| Accueil | "Discutons de votre projet →" | `/contact` | Section "Notre crédibilité en pratique" visible |
| À propos | "Rencontrer notre Fondatrice →" | `/founder` | Dépassé le hero |
| Notre Fondatrice | "Discutons de votre projet →" | `/contact` | Fin du hero |
| Pourquoi nous choisir | "Discutons de votre projet →" | `/contact` | Dépassé le hero |
| Nos Services | "Discutons de votre projet →" | `/contact` | Dépassé le hero |
| Expertise Thérapeutique | "Discutons de votre projet →" | `/contact` | Dépassé le hero |
| Blog | "Discutons de votre projet →" | `/contact` | Dépassé le hero |

**Verdict :** ✅ Nouveau composant à créer — aucune implémentation existante dans le code.

---

## Spécifications techniques (source : document client)

### Comportement
- **Apparition :** quand `triggerRef` entre dans le viewport (via `IntersectionObserver`)
- **Disparition :** quand le footer entre dans le viewport
- **Position :** `fixed`, `bottom: 24px`, `right: 24px`
- **Animation apparition :** `opacity 0→1` en 0,4s + `translateY 20px→0`
- **Animation disparition :** `opacity 1→0` en 0,3s

### Apparence (desktop)
- Forme pilule : `border-radius: 999px`
- Fond : `#3D8B2A`
- Texte : blanc, `font-weight: 600`, `font-size: 15px`
- Padding : `16px 28px`
- Icône : `<ArrowRight />` (Lucide)
- Ombre : `box-shadow: 0 8px 24px rgba(61, 139, 42, 0.3)`
- Survol : `translateY(-2px)` + ombre renforcée

### Apparence (mobile)
- Forme circulaire uniquement (icône seule, sans texte)
- Même couleur et ombre

### Accessibilité
- `aria-label` = libellé du bouton
- Focusable au clavier (tabindex naturel)
- Focus visible : `outline: 3px solid #2E9013`

---

## Code à implémenter

```jsx
// src/components/FloatingCTA.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FloatingCTA = ({ label, href, triggerRef }) => {
  const [visible, setVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer || !triggerRef?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const footerObserver = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(false); },
      { threshold: 0.1 }
    );

    observer.observe(triggerRef.current);
    footerObserver.observe(footer);

    return () => { observer.disconnect(); footerObserver.disconnect(); };
  }, [triggerRef]);

  return (
    <Link
      to={href}
      aria-label={label}
      className={`
        fixed bottom-6 right-6 z-50
        flex items-center gap-2
        bg-[#3D8B2A] text-white font-semibold
        rounded-full shadow-[0_8px_24px_rgba(61,139,42,0.3)]
        transition-all duration-300
        hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(61,139,42,0.4)]
        focus:outline focus:outline-[3px] focus:outline-[#2E9013]
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'}
        px-7 py-4 text-[15px]
        sm:px-3 sm:py-3
      `}
    >
      <span className="hidden sm:inline">{label}</span>
      <ArrowRight className="w-4 h-4" />
    </Link>
  );
};

export default FloatingCTA;
```

> **Note :** Sur mobile (`sm:` breakpoint), masquer le texte et ne conserver que l'icône (forme circulaire). Ajuster les paddings mobile pour que le cercle soit ~48px.

---

## Intégration par page

Chaque page doit :
1. Importer `FloatingCTA`
2. Créer un `triggerRef` et l'attacher à la section déclencheuse
3. Passer `label` et `href` selon le tableau ci-dessus

**Exemple (Accueil) :**
```jsx
const credibilityRef = useRef(null);
// ...
<section ref={credibilityRef}>Notre crédibilité en pratique...</section>
<FloatingCTA
  label="Discutons de votre projet"
  href="/contact"
  triggerRef={credibilityRef}
/>
```

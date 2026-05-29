# Corrections — Page Nos Services
**Fichier :** `src/pages/ServicesPage.jsx`  
**Priorité :** P2

---

## C-SERVICES-01 — Supprimer les icônes des cartes du modèle opérationnel

**Demande client :** "supprimer les icones" des 2 cartes Modèle intégré / Intégration dans vos équipes.

**Analyse code :** `ServicesPage.jsx` lignes ~80-170 (section "Notre Modèle Opérationnel"). Le code utilise `Building2` et `Network` importés depuis `lucide-react` (ligne 13-14). Ces icônes sont probablement affichées dans les cartes.

**Verdict :** ✅ Pertinent

**Action :**
- Supprimer les blocs icône dans les 2 cartes du Modèle Opérationnel.
- Si plus aucune icône utilisée dans ce fichier, nettoyer les imports `Building2`, `Network`.

---

## C-SERVICES-02 — Mise à jour des sous-titres des cartes de piliers

**Demande client :** Mettre à jour les descriptions courtes (sous-titres) de chaque pilier :

| Pilier | Sous-titre actuel (code) | Sous-titre demandé |
|---|---|---|
| Gestion de Projet | "Pilotage opérationnel d'études cliniques" | "Pilotage opérationnel et coordination de vos études cliniques." |
| Affaires Réglementaires | "Soumissions et conformité réglementaire en France et Internationale" | "Soumissions et conformité réglementaire, en France et à l'international." |
| Contrat et Budget | "Négociation et gestion contractuelle des études cliniques" | "Négociation et gestion contractuelle de vos études cliniques." |
| Faisabilité et Monitoring | "Sélection des sites et supervision opérationnelle des études" | "Sélection des centres et supervision opérationnelle de vos études." |
| Support Site et Saisie de Données | (à vérifier) | "Soutien opérationnel aux investigateurs et conformité des données." |
| Formation | (à vérifier) | "Transfert de compétences et accompagnement personnalisé : de la conception de l'étude à l'ancrage opérationnel" |

**Analyse code :** `ServicesPage.jsx` lignes 26-100, tableau `PILLARS` — les `subtitle` de chaque pilier.

**Verdict :** ✅ Pertinent — corrections mineures de formulation.

**Action :** Mettre à jour les clés `subtitle` du tableau `PILLARS` dans `ServicesPage.jsx`.

---

## C-SERVICES-03 — Affaires Réglementaires : mise à jour des missions

**Demande client :** Mettre à jour les missions du pilier "Affaires Réglementaires" :

Actuel (code, lignes 41-46) :
- "Expertise CTR 536/2014, MDR 745/2017, Directive 2010/63/UE"
- "Soumissions via CTIS et auprès des autorités françaises (ANSM, CPP, ANSES, CNIL)"
- "Déclaration des événements indésirables et suivi de pharmacovigilance"
- "Suivi réglementaire en cours d'étude et amendements"

Demandé :
- "Expertise des cadres réglementaires : médicaments, dispositifs médicaux et études hors produits de santé, en France et à l'international"
- "Soumissions réglementaires auprès des autorités compétentes nationales et internationales"
- "Coordination avec les comités d'éthique selon les juridictions"
- "Déclaration des événements indésirables et suivi de pharmacovigilance"
- "Suivi réglementaire en cours d'étude et gestion des amendements"

**Verdict :** ✅ Pertinent — 2 nouvelles missions, reformulation des existantes.

**Action :** Remplacer le tableau `missions` du pilier 2 dans `PILLARS`.

---

## C-SERVICES-04 — Formation : mise à jour des missions

**Demande client :** Le pilier "Formation" doit avoir le contenu suivant :

```
Missions types :
- Stratégie de montage d'étude clinique et accompagnement à la structuration des études de preuve de concept (POC)
- Diagnostic des besoins et conception de modules sur-mesure adaptés à votre étude et votre aire thérapeutique
- Formation aux Bonnes Pratiques Cliniques (BPC) et aux exigences réglementaires
- Formation à la méthodologie appliquée à la Recherche Clinique
- Formation des équipes investigatrices
- Accompagnement à la mise en œuvre des bonnes pratiques au sein de vos équipes
- Team building stratégique : journées d'alignement des équipes autour des enjeux d'un projet clinique
```

**Analyse code :** Vérifier le pilier 6 `Formation` dans `PILLARS` de `ServicesPage.jsx`.

**Verdict :** ✅ Pertinent — contenu à mettre à jour.

**Action :** Remplacer le tableau `missions` du pilier 6.

---

## C-SERVICES-05 — Supprimer le bandeau CTA vert → Bouton flottant

**Demande client :** "Le bandeau vert plein « Vous préparez une étude clinique ? » est supprimé. Remplacé par le bouton flottant."

**Analyse code :** `ServicesPage.jsx` — il existe probablement une section CTA avec fond vert `bg-[#2E9013]`. Vérifier aux alentours de la ligne 340+ (où `Discutons de votre projet` apparaît à la ligne 346).

**Verdict :** ✅ Pertinent

**Action :**
- Localiser et supprimer le bandeau CTA vert.
- Intégrer `<FloatingCTA label="Discutons de votre projet" href="/contact" triggerRef={heroRef} />` (dépend de [02-composant-bouton-flottant.md](./02-composant-bouton-flottant.md)).

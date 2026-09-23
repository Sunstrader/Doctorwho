# QA — Collection Doctor Who

Contrôle effectué sur la collection complète.

## Résultat

| Fichier | Scènes | Syntaxe | Scènes sans 3 choix | Liens manquants |
|---|---:|---|---:|---:|
| Livre 1 — Le Docteur a disparu ! | 54 | OK | 0 | 0 |
| Livre 2 — Les Anges du Musée | 39 | OK | 0 | 0 |
| Livre 3 — Le Dinosaure de Londres | 45 | OK | 0 | 0 |
| Livre 4 — Panique dans le TARDIS | 53 | OK | 0 | 0 |
| Livre 5 — Le Dernier Dalek | 49 | OK | 0 | 0 |
| **Total** | **240** | **OK** | **0** | **0** |

Le moteur `app.js` passe également la vérification de syntaxe.

## Contrôles effectués

- Parse JavaScript de chaque fichier.
- Vérification que chaque scène non finale possède exactement trois choix.
- Vérification de toutes les destinations statiques.
- Test de plusieurs états pour les destinations calculées par fonction.
- Vérification que les destinations obtenues existent dans le livre concerné.

## Version

Première collection complète : 5 aventures jouables, moteur commun, interface responsive, roues personnage et objet.

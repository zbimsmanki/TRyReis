# Bias Check · K-Pop Guess the Song

Hör einen kurzen Ausschnitt eines K-Pop-Songs oder schau dir die Choreo an. Du hast vier Antworten, eine davon stimmt.

## Spielen

- **Lokal:** `index.html` im Browser öffnen (der Ordner `data/` muss daneben liegen). Für die Ausschnitte brauchst du Internet.
- **Online:** GitHub Pages für dieses Repo aktivieren (Settings → Pages → Branch wählen, Ordner `/`).

## Features

- Über 1000 K-Pop-Songs von über 100 Gruppen und Solo-Artists (30-Sekunden-Vorschauen von Apple Music/iTunes, viele davon auch mit Musikvideo)
- Spielmodi:
  - 🎧 **Nur Audio**: Ausschnitt aus dem Song
  - 💃 **Nur Choreo**: Ausschnitt aus dem Musikvideo ohne Ton
  - 🎬 **MV mit Ton**: Ausschnitt aus dem Musikvideo mit Ton
  - 🔀 **Gemischt**: jede Runde ein zufälliger Modus
- 10, 20 oder 50 Runden oder **Endlos** mit 3 Leben
- Ausschnittlänge: 10, 5 oder 2 Sekunden
- Schwierigkeit: **Leicht** (falsche Antworten von anderen Artists), **Normal** (eine vom selben Artist), **Schwer** (alle vom selben Artist)
- Gruppen auswählen, z. B. nur TWICE und Stray Kids
- Punkte für Tempo plus Combo-Bonus, Rekord wird im Browser gespeichert
- Tastatur: `1`–`4` antworten, `R` nochmal hören, `Enter` weiter

## Songliste erweitern

1. In `tools/songs.txt` eine Zeile im Format `Artist|Song 1;Song 2;Song 3` hinzufügen.
2. `python3 tools/fetch_previews.py` ausführen. Das Skript sucht die Vorschauen bei iTunes und schreibt `data/songs.js` neu.
3. Songs ohne Treffer stehen danach in `tools/missing.txt`.

# Bias Check · K-Pop Guess the Song

Hör einen kurzen Ausschnitt eines K-Pop-Songs oder schau dir die Choreo an. Du hast vier Antworten, eine davon stimmt.

## Spielen

- **Lokal:** `index.html` im Browser öffnen (der Ordner `data/` muss daneben liegen). Für die Ausschnitte brauchst du Internet.
- **Online:** GitHub Pages für dieses Repo aktivieren (Settings → Pages → Branch wählen, Ordner `/`).

## Features

- **1451 K-Pop-Songs** von 153 Gruppen und Solo-Artists (30-Sekunden-Vorschauen von Apple Music/iTunes), davon **805 mit Musikvideo** für die Choreo- und MV-Modi
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

---

# tripleS Gesichter · Member lernen

Im Ordner [`triples/`](triples/) liegt eine Handy-App, mit der du alle 24 tripleS Member am Aussehen erkennen lernst, inklusive S-Nummer (S1 SeoYeon bis S24 JiYeon).

- **4 Antworten:** Foto sehen, aus vier Namen den richtigen wählen
- **Alle 24:** Foto sehen, den Namen selbst aus allen 24 Membern heraussuchen
- **Lernen:** alle Member als Karten, Namen auf Wunsch verdeckt zum Selbsttest
- Antworten als Name, Name + S-Nummer oder nur S-Nummer
- „Schwächen zuerst“: Member, die du oft verwechselst, kommen häufiger dran

**Fotos:** Die App bringt keine Bilder mit. Unter *Fotos verwalten* lädst du eigene Fotos vom Handy hoch. Heißen die Dateien z. B. `S7.jpg` oder `nakyoung.jpg`, werden sie automatisch zugeordnet; den Rest ordnest du von Hand zu. Die Fotos bleiben nur auf deinem Gerät (IndexedDB).

**Aufs Handy:** Über GitHub Pages öffnen (`…/triples/`) und im Browser „Zum Home-Bildschirm“ wählen. Danach läuft die App wie eine normale App, auch offline.

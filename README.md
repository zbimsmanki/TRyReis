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

# WAV · tripleS Member lernen

Im Ordner [`triples/`](triples/) liegt eine Handy-App, mit der du alle 24 tripleS Member am Aussehen erkennen lernst, inklusive S-Nummer (S1 SeoYeon bis S24 JiYeon).

- **4 Antworten:** Foto sehen, aus vier Namen den richtigen wählen
- **Alle 24:** Foto sehen, den Namen selbst aus allen 24 Membern heraussuchen
- **Lernen:** alle Member als Karten, Namen auf Wunsch verdeckt zum Selbsttest
- Antworten als Name, Name + S-Nummer oder nur S-Nummer
- „Schwächen zuerst“: Member, die du oft verwechselst, kommen häufiger dran

**Fotos:** Jeder Member hat 21–27 eingebaute Fotos (564 insgesamt): offizielle Konzeptfotos (L&P pt.1/pt.2, A25, A24, BB) und Cosmo-Profilbilder (u. a. A26), geholt aus dem tripleS-Fan-Wiki (triples.fandom.com) und automatisch auf das Gesicht zugeschnitten. Zugeordnet sind sie über den Dateinamen im Wiki, die S-Nummern sind mit den Member-Seiten im Wiki abgeglichen. Unter *Fotos verwalten* kannst du zusätzlich eigene Fotos hochladen. Die bleiben nur auf deinem Gerät.

**Aufs Handy:** Über GitHub Pages öffnen (`…/triples/`) und im Browser „Zum Home-Bildschirm“ wählen. Danach läuft die App wie eine normale App, auch offline.

## Android-App (APK)

Fertiges APK: [`apk/WAV.apk`](apk/WAV.apk) (App-Name „WAV“, Icon: tripleS-Logo)

1. Die Datei auf dem Handy herunterladen (auf GitHub: Datei öffnen → „Download raw file“).
2. Antippen und installieren. Android fragt einmal, ob der Browser bzw. Dateimanager Apps installieren darf: erlauben.
3. Die App braucht kein Internet. Alle Fotos sind im APK enthalten.

Selbst bauen (JDK 17+ und Android SDK nötig): `cd android && ./gradlew assembleRelease`. Das APK liegt dann unter `android/app/build/outputs/apk/release/`. Die App lädt die Web-App aus `triples/` und packt sie unverändert ins APK.

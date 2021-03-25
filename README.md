### 1. A megjelenő listában készítsd el a törlés funkcionalitást! 
- A törlés gombra kattintva a példa adatbázisból törlődjön az adott rekord. 
- Törlés előtt jelenjen meg egy megerősítő kérdés. 
- A törléshez a TodoService osztályban is hozd létre a szükséges metódust.
### 2. Tedd szűrhetővé a listában megjelenő adatokat! 
- A táblázat feletti beviteli mezőt használd. 
- A szűrés beírásra működjön. 
- A beviteli mező értékének módosítása esetén a lista azon rekordjai maradjanak láthatóak, amelyek `title` mezője részben vagy egészben tartalmazza a beviteli mezőbe gépelt
szöveget.
### 3. Tedd rendezhetővé a listában megjelenő adatokat! 
- Ha a felhasználó a táblázat felett lévő gombra kattint, akkor a megjelenő rekordok rendeződjenek a Title oszlop szerint növekvő sorrendbe. 
- Csak növekvő sorrendbe kell rendezni.
### 4. Tedd módosíthatóvá a lista elemeinek active értékét! 
- A táblázat sorainak utolsó cellájában lévő gombra kattintva (egy check jel látható benne) az
adatbázisban kerüljenek frissítésre az adott rekord adatai. 
- Ha az active érték true volt, akkor legyen false és ha false volt akkor legyen true. 
- A módosításhoz a TodoService osztályban is hozd létre a szükséges metódust.
### 5. Validáld az adatokat az oldal tetején megjelenő űrlapon! 
- Minden input elem előtt kommentben feltüntettük a validálás szabályait. 
- Attribútumok és reguláris kifejezések használatával validáld a mezőkbe írt adatokat. 
- Ha nem megfelelő az adat, akkor jelenjen meg releváns hibaüzenet közvetlenül a hibás adatot
tartalmazó mező alatt. 
- Ha az űrlap bármely mezője hibás adatot tartalmaz, a mentés gomb legyen letiltva és ne legyen az űrlap elküldhető.
### 6. Tedd lehetővé új rekord rögzítését. 
- Az oldal felső részén látható űrlap megfelelő kitöltése után a mentés gombra kattintva történjen meg az új rekord beszúrása az adatbázisba. 
- A beszúráshoz a TodoService osztályban is hozd létre a szükséges metódusokat. 

### 1. ok A megjelenő listában készítsd el a törlés funkcionalitást! 
- ok A törlés gombra kattintva a példa adatbázisból törlődjön az adott rekord. 
- ok Törlés előtt jelenjen meg egy megerősítő kérdés. 
- ok A törléshez a TodoService osztályban is hozd létre a szükséges metódust.
### 2. ok Tedd szűrhetővé a listában megjelenő adatokat! 
- ok A táblázat feletti beviteli mezőt használd. 
- ok A szűrés beírásra működjön. 
- ok A beviteli mező értékének módosítása esetén a lista azon rekordjai maradjanak láthatóak, amelyek `title` mezője részben vagy egészben tartalmazza a beviteli mezőbe gépelt
szöveget.
### 3. ok Tedd rendezhetővé a listában megjelenő adatokat! 
- ok Ha a felhasználó a táblázat felett lévő gombra kattint, akkor a megjelenő rekordok rendeződjenek a Title oszlop szerint növekvő sorrendbe. 
- ok Csak növekvő sorrendbe kell rendezni.
### 4. ok Tedd módosíthatóvá a lista elemeinek active értékét! 
- ok A táblázat sorainak utolsó cellájában lévő gombra kattintva (egy check jel látható benne) az adatbázisban kerüljenek frissítésre az adott rekord adatai. 
- ok Ha az active érték true volt, akkor legyen false és ha false volt akkor legyen true. 
- ok A módosításhoz a TodoService osztályban is hozd létre a szükséges metódust.
### 5. Validáld az adatokat az oldal tetején megjelenő űrlapon! 
- Minden input elem előtt kommentben feltüntettük a validálás szabályait. 
- Attribútumok és reguláris kifejezések használatával validáld a mezőkbe írt adatokat. 
- Ha nem megfelelő az adat, akkor jelenjen meg releváns hibaüzenet közvetlenül a hibás adatot
tartalmazó mező alatt. 
- Ha az űrlap bármely mezője hibás adatot tartalmaz, a mentés gomb legyen letiltva és ne legyen az űrlap elküldhető.
### 6. Tedd lehetővé új rekord rögzítését. 
- Az oldal felső részén látható űrlap megfelelő kitöltése után a mentés gombra kattintva történjen meg az új rekord beszúrása az adatbázisba. 
- A beszúráshoz a TodoService osztályban is hozd létre a szükséges metódusokat. 

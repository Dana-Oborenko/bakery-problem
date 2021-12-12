# Ievads
Šī darba ietvaros tiek pētīta sistēmas (tīmekļa lappuses) izstrāde par individuāli identificēto problēmu.

## Problēmas nostādne
Uzņēmums (ceptuve) ražo dažādu veidu bulciņas. Bulciņām ir īss derīguma termiņš. Ceptuvē katru dienu ir jānosaka cepamo bulciņu skaits, lai maksimizētu peļņu. Jāņem vērā arī mainīgais bulciņu pieprasījums. Tāpēc vispirms ir jānodrošina strukturēta un droša datu (izceptu bulciņu skaita) uzskaite.

## Mērķis
Izstrādāt izceptu bulciņu skaita uzskaites tīmekļa lappusi.

# Līdzīgo risinājumu pārskats
Lai uzzinātu, kādi risinājumi jau pastāv pasaulē līdzīgās problēmas risināšanai, internetā tika atrastas un apskatītas šādas lietotnes un tiešsaistes risinājumi:
* [Oracle Database](https://www.oracle.com/database),
* [Azure Data Lake Storage](https://azure.microsoft.com/en-us/services/storage/data-lake-storage/#overview),
* [Microsoft Power BI](https://powerbi.microsoft.com/en-au),
* [Retail Insight](https://www.retailinsight.io),
* [Quinyx](https://www.quinyx.com/ai-optimization),
* [Forecast NOW!](https://fnow.ru/about-product/food-retail).

# Risinājuma nepieciešamība un potenciālais pieprasījums
Tiešsaistē tika atrasti un izpētīti dažādi raksti par izvēlēto problēmu. Pēc to izpētes tika secināts, ka:
* tā kā visiem pārtikas produktiem ir ierobežots derīguma termiņš, izvirzītā problēma vienmēr paliks aktuāla,
* pārrunās ar pārtikas produktu ražotājiem ir jūtama šāda risinājuma izstrādes nepieciešamība.

# Risinājumā ieinteresētās puses
Pēc tiešsaistes materiālu izpētes tika konstatētas šādas risinājumā ieinteresētās puses:
1. **pārtikas produktu ražotāji**,
2. **pārtikas produktu izplatītāji**,
3. **pārtikas produktu pircēji** (netieši).

# Projektēšana un prasības
Tiek paredzēts, ka tīmekļa lappusi izmantos 3 lietotāju grupas no pārtikas produktu ražotāju puses:
1. **ceptuves darbinieks**, kas ievadīs datus katras darba dienas nobeigumā,
2. **ceptuves vadītājs**, kas aplūkos uzņēmuma statistiskos rādītājus un veiks datu labojumus,
3. **lappuses administrators**, kas uzturēs lappuses darbību un veiks globālus labojumus.

## Biznesa prasības
Ceptuvei ir jānodrošina izceptu bulciņu skaita uzskaite darbības efektivitātes novērtēšanai un paaugstināšanai.

## Funkcionālās prasības
Tīmekļa lappuses funkcionālās prasības ir definētas lietotāju grupu stāstu veidā.

**Ceptuves darbinieks**:
* vēlas atcerēties izceptu bulciņu skaitu,
* vēlas samazināt savu darba apjomu un darba laiku.

**Ceptuves vadītājs**:
* vēlas paaugstināt uzņēmuma efektivitāti, nodrošināt resursu un cilvēkresursu optimālu sadali,
* vēlas novērtēt ceptuves peļņu, jo jāzina pašreizējie darbības rādītāji,
* vēlas ņemt vērā negūto peļņu, jo jānovērtē, kāda ir iztrūkuma ietekme,
* vēlas turpmāk prognozēt cepamo bulciņu skaitu, lai zinātu, cik bulciņas ir nepieciešams dienā izcept,
* vēlas salīdzināt vēsturisko izcepto un pārdoto bulciņu skaitu, jo turpmāk būs arī jānovērtē prognozes precizitāte.

**Lappuses administrators**:
* vēlas samazināt pārējo uzņēmuma darbinieku darba apjomu un darba laiku saistībā ar tīmekļa lappuses lietošanu,
* vēlas padarīt tīmekļa lappuses lietošanu ērtu un patīkamu.

Citas prasības, kas ir raksturīgas projektēšanas uzdevumam:
* risinājumam ir jābūt daudzlietotāju sistēmai, lai vienlaicīgi to varētu lietot vairāki darbinieki,
* izceptu bulciņu skaitam ir jābūt saglabājamam darba dienas beigās, lai varētu gūt priekšstatu par uzņēmuma darbības rādītājiem kādā periodā.

# Izstrādes metode
Kā izstrādes metode tika izvēlēts **Ūdenskrituma modelis**, jo visas uzstādāmas prasības ir zināmas, saprotamas, noteiktas un nav pretrunīgas. Tā kā minētās tīmekļa lappuses izstrāde ir salīdzinoši neliels projekts, un visi tā izstrādes posmi: plānošana un prasību analīze, projektēšana, kodēšana, testēšana un uzturēšana - ir izvietoti lineārā secībā, izstrāde pēc Ūdenskrituma modeļa varētu dot labāku rezultātu.

# Prototipa izstrāde
Kā zināms, risinājuma prototipa izveide ļauj būtiski novērst neskaidrības un saskaņot izstrādātāja un lietotāja domas un vēlmes. Vienkāršākais prototipa veids ir saskarņu uzmetumi jeb horizontālā prototipēšana, kas tiek koncentrēta tā, lai pasūtītājs varētu novērtēt ārējo izskatu, pieejamo funkciju daudzumu, opciju izvietojumu un navigāciju.
**Par tīmekļa lappuses prototipu tika izvēlēta lappuse, kas bija izveidota 1. mājas darba ietvaros par HTML tēmu.**
Izveidotais prototips ļāva pirmajiem lietotājiem novērtēt lappuses pirmo versiju darbībā un deva iespēju noteikt, vai ievaddatu skaits un kvalitāte ir pietiekama, lai izpildītu uzdevumu, vai datu ievadīšanas process notiek korekti, vai kopumā risinājums ir piemērots minētās problēmas risināšanai utt.

# Risinājuma izstrāde
Tā kā risinājuma prototips būtībā ir tīmekļa lappuse, kas bija uzrakstīta **HTML** valodā, arī gala risinājums izskatīsies tādā pašā veidā. Papildus tika uzrakstīts kods **CSS** valodā noformējuma uzlabošanai, kā arī **JavaScript** valodā - interaktīvajai satura maiņai.

# Risinājuma testēšana
Vispirms paši izstrādātāji veica risinājuma testēšanu un, atbilstoši testēšanas rezultātiem, veica nepieciešamus labojumus. Piemēram, pakāpeniski tika pārstrādāta lietotāja pierakstīšanās forma.
Otrajā testēšanas posmā "no ārpuses" bija pieaicināti daži cilvēki, kuriem tika piedāvāts izmēģināt lappusi. Rezultātā būtiskas problēmas atklātas nebija, vienīgais, bija uzlabota lappuses "vizuālā sastāvdaļa", piemērojot to atbilstoši vairākuma lietotāju izteiktajiem viedokļiem.

# Dokumentācija gala lietotājam

Lapa paredzēta lietošanai visiem ražošanā strādājošajiem, tādēļ, ievadot, lai piekļūtu datiem, jāievada lietotājvārds un parole, tādējādi pieslēdzoties. Ieejot sistēmā, pazūd stanzas ar paroli un pieteikšanos un parādās pati tabula, virs kuras tiek rakstīta tā gada nedēļa, kas šobrīd tiek aizpildīta. Tabula tiek pārskatīta uz nedēļu, tāpēc blakus atbilstošajam datumam darbinieks var pierakstīt bulciņu skaitu un pievienot komentāru, pēc tam saglabāt datus, izmantojot pogu zem tabulas, un atkārtoti iziet ar pogu «Izrakstīties» augšpusē kreisajā stūrī.

# Risinājuma turpmākas attīstības iespējas
1. Esošajai lappusei pievienojot datu bāzi un izvietojot to visu uz servera, ir iespējams izveidot "īsto" tiešsaistes daudzlietotāju sistēmu, lai vairāki lietotāji no visa interneta varētu piekļūt lappusei un izmantot to.
2. Izstrādāto lappusi principā ir iespējams izmantot ne tikai minētā uzņēmuma (bulciņu ceptuves) kontekstā, bet jebkuru pārtikas produktu ražotāju vajadzībām, jo izveidotais risinājums atbilst visiem pārtikas produktiem kopīgajām prasībām.
3. Realizējot kādu no datu prognozēšanas metodēm/modeļiem, ilgā laika periodā uzkrātos datus var izmantot nākotnes datu prognozēšanai.

# Secinājumi
1. Risinājuma izstrāde ir salīdzinoši sarežģīts process, kas ietver vairākus atkarīgus posmus.
2. Pirms sākt jebkura risinājuma izstrādi ir vajadzīga problēmvides analīze un prasību identificēšana.

## Darba pienākumu sadale
Tā kā šis darbs bija izstrādāts individuāli, darba pienākumu sadale netika veikta.

## Darba autore
Dana Oborenko

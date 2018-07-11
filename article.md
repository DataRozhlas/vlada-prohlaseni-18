title: "Od Kramáře k Babišovi:<br>Jak se měnila vládní prohlášení"
perex: "Programové prohlášení vlády Andreje Babiše (ANO) obsahuje 14 223 slov. Je tudíž nejdelší ze všech programů vlád od vzniku Československa. Těsně ho předstihl jen předchozí kabinet Bohuslava Sobotky, který však - jako jediný - ke svému ustavujícímu dokumentu připojil i plné znění koaliční smlouvy. Samotný program měl Sobotka stručnější. Porovnejte si délku a nejfrekventovanější sousloví z programu Babišovy vlády s jeho předchůdci."
published: "11. července 2018"
coverimg: https://www.irozhlas.cz/sites/default/files/styles/zpravy_snowfall/public/uploader/3177864-milan-hodza-_180403-231411_pj.jpeg?itok=cK7OnNP8
coverimg_note: "Slovenskému agrárníkovi Milanu Hodžovi (na snímku) stačilo na programové prohlášení 149 slov, Andrej Babiš jich použil stokrát víc. Foto <a href='#'>Foto: Archiv Českého rozhlasu</a>"
styles: []
# snadné načítání csv: d3csv v libraries, d3.csv("soubor.csv").then(function(data){} ) v kódu
libraries: [highcharts, "https://cdnjs.cloudflare.com/ajax/libs/highcharts/6.1.1/js/modules/wordcloud.js"] #jquery, d3, d3v5, d3csv, highcharts, datatables
options: [] #wide, noheader (, nopic)
---

Důraz na obrannou politiku a odmítání uprchlických kvót, lepší správa daní, zemědělská politika a digitalizace státní správy – to jsou sliby, které nejčastěji zaznívají na 34 stranách <a href="https://www.vlada.cz/assets/jednani-vlady/programove-prohlaseni/Programove-prohlaseni-vlady-cerven-2018.pdf" target="_blank">programového prohlášení</a>, s nímž jde dnes menšinová vláda ANO a ČSSD s předjednanou podporou komunistů žádat o důvěru poslanců. Vyplývá to z analýzy textů programových prohlášení, kterou server iROZHLAS.cz zpracoval pomocí nástroje <a href="https://www.sketchengine.eu/" target="_blank">Sketch Engine</a>.

<div class="cloudwrap">
<div class="cloud" id="2018 Andrej Babiš"></div>
</div>

_Vizualizace ukazuje sousloví, která se v programovém prohlášení vyskytují nejčastěji. Čím frekventovanější výraz je, tím je na obrázku větší. Zobrazují se jen sousloví, která se v textu vyskytují alespoň třikrát. Najetím myší na vybraný výraz zobrazíte podrobnosti, kliknutím na název grafu pak otevřete plný text prohlášení._

Původně zveřejněný návrh programu se během vyjednávání o podpoře vlády dočkal několika změn, nejvýraznější z nich je vypuštění bodu o posílení zahraničních misí, jímž svou podporu Babišově vládě <a href="https://www.irozhlas.cz/zpravy-domov/vlada-andreje-babise-kscm-zahranicni-mise_1806271715_pj" target="_blank">podmínili komunisti</a>. 

K nejtypičtějším přívlastkům v Babišově programu patří slovo "digitální". V textu se objevuje ve třech desítkách případů, a to v 21 různých kombinacích: digitální revoluce, digitální přestavba, digitální transformace, digitální státní správa, digitální datová infrastruktura, digitální agenda či digitální identita.

Prohlášení se také věnuje postavení českých zemědělců v Evropské unii. V rámci Společné zemědělské politiky slibuje prosazení spravedlivých podmínek. V praxi to <a href="https://www.irozhlas.cz/zpravy-domov/intenzivni-zemedelstvi-nici-ceskou-prirodu-mnohe-druhy-ptaku-na-polich-nepreziji_1803120600_cib" target="_blank">může znamenat, že chce zachovat příjem dotací pro velké zemědělské podniky</a>. 

<wide>
<div id="delka"></div>
</wide>

Program Babišovy vlády je zároveň nejdelší v historii. V grafu se sice jeví kratší než čtyři roky staré prohlášení kabinetu Bohuslava Sobotky (ČSSD), ten však do dokumentu jako jediný zahrnul i plný text koaliční smlouvy – a tato příloha zabírá 32 z 51 stran dokumentu.

## Méně korupce, více migrace

Podrobnější srovnání Babišova a Sobotkova programu ukázalo, že se v něm vyskytuje několik dlouhých sousloví, která jsou zcela identická. Mezi nejdelšími shluky stejných slov ("<a href="https://cs.wikipedia.org/wiki/N-gram" target="_blank">n-gramy</a>"), které přecházejí z jednoho prohlášení do druhého, nalezneme formulace jako „kroky směřující k maximálnímu snižování administrativní zátěže pro podnikatele” či „zapojení do úsilí čelit mezinárodnímu terorismu a kyberterorismu”.

<div class="cloudwrap">
<div class="cloud" id="2014 Bohuslav Sobotka"></div>
</div>

Detailní srovnání obou dokumentů ukazuje také změnu témat, která hýbou českou politikou. Zatímco v Sobotkově programu se slovo „korupce“ objevilo dvanáctkrát, u Babiše už pouze třikrát. Naproti tomu „migrace“, „azylová politika“ a „ochrana hranic“, tedy témata, která začala v Evropě i v Česku silně rezonovat v roce 2015, u Sobotky nenajdeme, zatímco u Babiše patří k hlavním bodům programu.

Ze srovnání délky všech programových prohlášení za sto let vysvítá, že v období první Československé republiky byla relativně stručná. Rekordmanem je Milan Hodža (agrárníci), který si v roce 1935 <a href="https://www.vlada.cz/assets/clenove-vlady/historie-minulych-vlad/prehled-vlad-cr/1918-1938-csr/milan-hodza-1/ppv-1935-hodza1.pdf" target="_blank">vystačil se 149 slovy</a>. Po válce se pak začaly tyto dokumenty prodlužovat. Rekordní  byl v minulém století program vlády Oldřicha Černíka (KSČ) v období Pražského jara, v novodobé historii jej pak překonali Petr Nečas (ODS), Bohuslav Sobotka (díky přiložené koaliční smlouvě) a Andrej Babiš. Trend dlouhých programů v novém tisíciletí narušují dočasné překlenovací vlády nestraníků Jana Fischera a Jiřího Rusnoka.

V následujícím přehledu si můžete porovnat, jak se měnila nejfrekventovanější sousloví v programových prohlášeních vlád od roku 1918. Zahrnuty jsou pouze programy dost dlouhé na to, aby u nich analýza nejfrekventovanějších sousloví dávala smysl (u krátkých programů se sousloví neopakují). Kliknutím na název každého z grafů otevřete plný text daného programového prohlášení.

<wide>
	<div id="charts"></div>
</wide>
const articles = [
  {
    id: 3,
    headline: "Jak nakódovat barvu?",
    url: "jak-nakodovat-barvu",
    subheadline: `Nejpoužívanějšími formáty pro definici barvy jsou RGB    
                a HEX. V čem se liší kde se uvádějí?`,
    content: `Jak uvádím v článku <b><a href="/nastroje-pro-vyvoj-webu" class="my-a">
              "Nástroje pro vývoj webu"</a></b> to, jak obsah na našem webu vypadá, 
              je zodpovědný soubor css (z anglického 
              "<b>c</b>ascading <b>s</b>tyle <b>s</b>heets"). Právě zde se definice barev uvádějí.</p>
              <p>RGB formát, jsem již zčásti popsal v článku <b>
              <a href="/jak-se-zobrazuji-barvy-na-vasem-monitoru" class="my-a">
              "Jak se zobrazují barvy na vašem monitoru?"</a></b>. Zkratka RGB jsou
              počáteční písmena anglických názvů barev "red" "gree" a "blue". V tomto
              pořadí se uvádějí do závorky jako jejich intenzita vyjádřená číslem
              v rozmezí 0 - 255. Takže červená je například "rgb(255, 0, 0)."<br>
              Ten samý princip používá i "HEX" s tím rozdílem, že čísla uvádí za # symbol a 
              těsně za sebe. Čísla jsou ale navíc v šestnáctkové soustavě. Červená je
              tedy "#ff0000".<br>
              Na automatické převody mezi formáty se používají převodníky. Jeden z nich (z RGB na HEX)
              si můžete vyzkoušet <b><a href="/color" class="my-a">zde</a></b>.
               `,
    date: "13.11.2025",
    alt: "itesar | Obrazovka s kódem",
  },
  {
    id: 2,
    headline: "Nástroje pro vývoj webů",
    url: "nastroje-pro-vyvoj-webu",
    subheadline: `Internetový prohlížeč (Chrome, Firefox, Edge...) je okno,
                kterým se návštěvníci dívají na naše stránky. Co mu musíme
                nabídnout, aby zobrazoval to, co chceme a jak chceme?`,
    content: `Takový prohlížeč je naučený konzumovat tři druhy potravy: html,
              css a javascript. Všechny tři mu přes Internet naservíruje náš
              server (z anglického "serve" - sloužit, zásobovat, naservírovat).
              Html mu říká, co poskytujeme (obsah webu), css jak to má pěkně
              vypadat a javascript, co to má dělat a jak reagovat (např. po
              kliknutí na tlačítko zobraz něco).
            </p>
            <p>
              Jak takovou "potravu" vytvořit? Jednou možností jsou redakční
              systémy (CMS - Content Management System) jako je třeba WordPress,
              které všechny tři složky vytvoří za vás. Vy mu pouze řeknete, jaké
              předpřipravené prvky chcete. Další možností je, což dělám já, si
              je sám, tedy soubory .html, .css, .js, vytvořit. Výhodou druhého
              je naprostá svoboda - tedy co to má být, jak chci aby to vypadalo
              a co chci přesně aby to dělalo.`,
    date: "3.10.2025",
    alt: "itesar | Nástroje",
  },
  {
    id: 1,
    headline: "Jak se zobrazují barvy na vašem monitoru?",
    url: "jak-se-zobrazuji-barvy-na-vasem-monitoru",
    subheadline: `Na rozdíl od přírody nebo běžných věcí monitor, když ukazuje
                grafiku na vašem webu (logo, fotky apod.), světlo vyzařuje a
                nepohlcuje.`,
    content: `Aby nějakou barvu vytvořil "namíchá" ji z červené, zelené a modré.
              Nejmenší částečka, tzv. pixel, tak má 3 svítící body a každý z
              nich umí svítit jednou z těchto barev různou intenzitou. <b
                ><a href="/color" class="my-a">Zde</a></b
              > si to sami vyzkoušejte a zadejte tři hodnoty (od 0 do 255)
              oddělené čárkou nebo mezerou, postupně pro červenou, zelenou a
              modrou. Když se tvoří internetová stránka, řeknete stejně
              internetovému prohlížeči, že chcete například olivovou tímto
              kódem: rgb(226, 226, 182).`,
    date: "15.09.2025",
    alt: "itesar | Obraz s barvami",
  },
];

export { articles };

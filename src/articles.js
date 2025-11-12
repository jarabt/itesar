const articles = [
  {
    id: 1,
    headline: "Jak se zobrazují barvy na vašem webu",
    url: "jak-se-zobrazuji-barvy-na-vasem-webu",
    subheadline: `Na rozdíl od přírody nebo běžných věcí monitor, když ukazuje
                grafiku na vašem webu (logo, fotky apod.), světlo vyzařuje a
                nepohlcuje.`,
    content: `Aby nějakou barvu vytvořil "namíchá" ji z červené, zelené a modré.
              Nejmenší částečka, tzv. pixel, tak má 3 svítící body a každý z
              nich umí svítit jednou z těchto barev různou intenzitou.<b
                ><a href="/color" class="my-a">Zde</a></b
              >si to sami vyzkoušejte a zadejte tři hodnoty (od 0 do 255)
              oddělené čárkou nebo mezerou, postupně pro červenou, zelenou a
              modrou. Když se tvoří internetová stránka, řeknete stejně
              internetovému prohlížeči, že chcete například olivovou tímto
              kódem: rgb(226, 226, 182).`,
    date: "15.10.2025",
    alt: "itesar | barvy na webu",
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
    date: "3.11.2025",
    alt: "itesar | nástroje pro tvorbu webu",
  },
];

export { articles };

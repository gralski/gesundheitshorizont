export type SitePage = {
  href: string;
  title: string;
  description: string;
  image: string;
  type: 'Artikel' | 'Advertorial';
};

// Central list of the currently built editorial and advertorial pages.
// It keeps the homepage and the review overview in sync.
export const sitePages: SitePage[] = [
  {
    href: '/artikel/5-gruende-warum-frauen-ab-35/',
    title: '5 Gründe für eine neue Beauty-Routine ab 35',
    description: 'Ein gesponserter Beitrag über eine einfache Ergänzung zur täglichen Pflegeroutine.',
    image: '/images/5-gruende-hero.png',
    type: 'Artikel',
  },
  {
    href: '/artikel/beauty-luecke-ab-50/',
    title: 'Warum wirkt das Gesicht auf Fotos oft müder?',
    description: 'Eine Beauty-Geschichte über den Abstand zwischen Lebensgefühl und Spiegelbild.',
    image: '/images/advertorial-v3/hero-frau-am-handy.webp',
    type: 'Artikel',
  },
  {
    href: '/artikel/derma-renew-beauty-routine/',
    title: 'Der Tiegel war leer. Die Frage blieb.',
    description: 'Eine Geschichte über volle Pflegeschubladen und eine neue Zwei-Kapsel-Routine.',
    image: '/images/advertorial-v3/volle-pflegeschublade.webp',
    type: 'Advertorial',
  },
  {
    href: '/artikel/derma-renew-hautpflege-durchbruch/',
    title: '7 Gründe für den Derma Renew Hautkomplex',
    description: 'Eine Advertorial-Seite über Hautpflege und eine tägliche Beauty-Routine.',
    image: '/images/0img1.webp',
    type: 'Advertorial',
  },
  {
    href: '/artikel/mit-47-sah-ich-im-spiegel/',
    title: 'Mit 47 sah ich im Spiegel meine Mutter',
    description: 'Eine persönliche Kolumne über das Älterwerden und einen neuen Blick auf die Haut.',
    image: '/images/mit-47/v2/editorial-hero.webp',
    type: 'Artikel',
  },
  {
    href: '/haut-gesund-check/die-deutsche-hautaerztin/',
    title: 'Die deutsche Hautärztin',
    description: 'Ein gesponserter Beitrag über Hautpflege von innen und den Derma Renew Komplex.',
    image: '/images/hautaerztin/editorial-hero.jpg',
    type: 'Advertorial',
  },
  {
    href: '/haut-gesund-check/dermaf/',
    title: 'Derma Renew Complex: Entwickelt von einer Frau',
    description: 'Eine Longform-Landingpage mit Hintergrund zur Beauty-Routine ab 40.',
    image: '/images/derma1.webp',
    type: 'Advertorial',
  },
  {
    href: '/haut-gesund-check/derma-renew/',
    title: 'Hautpflege von innen',
    description: 'Eine Landingpage rund um Falten, Ausstrahlung und eine tägliche Routine.',
    image: '/images/derma3.webp',
    type: 'Advertorial',
  },
  {
    href: '/haut-gesund-check/dermapuris/',
    title: 'Das Hormon, das die Haut altern lässt',
    description: 'Ein Haut-Gesund-Check über Hautalterung, Kollagen und Pflege von innen.',
    image: '/images/derma-pl.webp',
    type: 'Advertorial',
  },
];

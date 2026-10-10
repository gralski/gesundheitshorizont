export type Locale = 'de' | 'fr';

type UiStrings = {
  siteTagline: string;
  nav: {
    home: string;
    brainHealth: string;
    nutrition: string;
    longevity: string;
    research: string;
    openMenu: string;
  };
  legal: {
    imprint: string;
    privacy: string;
    allRightsReserved: string;
  };
  home: {
    title: string;
    heroLead: string;
    heroHighlight: string;
    heroBody: string;
    latestArticles: string;
    noArticles: string;
    comingSoon: string;
    ctaTitle: string;
    ctaBody: string;
  };
  articleList: {
    title: string;
    description: string;
    noArticles: string;
  };
  article: {
    published: string;
    updated: string;
    readingTime: string;
    writtenBy: string;
    reviewedBy: string;
    promoTitle: string;
    promoBody: string;
    promoCta: string;
  };
};

export const ui: Record<Locale, UiStrings> = {
  de: {
    siteTagline: 'Ihr Wegweiser zu einem gesünderen Leben',
    nav: {
      home: 'Startseite',
      brainHealth: 'Gehirngesundheit',
      nutrition: 'Ernährung',
      longevity: 'Langlebigkeit',
      research: 'Forschung',
      openMenu: 'Menu öffnen'
    },
    legal: {
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      allRightsReserved: 'Alle Rechte vorbehalten.'
    },
    home: {
      title: 'Startseite',
      heroLead: 'Ihr Wegweiser zu einem',
      heroHighlight: 'gesünderen Leben',
      heroBody: 'Entdecken Sie fundierte Artikel zu Gesundheit, Ernährung und Wohlbefinden. Wir begleiten Sie auf Ihrem Weg zu mehr Vitalität.',
      latestArticles: 'Aktuelle Artikel',
      noArticles: 'Noch keine Artikel veröffentlicht.',
      comingSoon: 'Neue Inhalte folgen bald!',
      ctaTitle: 'Gesundheit beginnt mit Wissen',
      ctaBody: 'Stöbern Sie durch unsere Artikel und entdecken Sie wertvolle Tipps für Ihren Alltag.'
    },
    articleList: {
      title: 'Alle Artikel',
      description: 'Stöbern Sie durch unsere Sammlung an fundierten Artikeln zu Gesundheitsthemen.',
      noArticles: 'Noch keine Artikel veröffentlicht.'
    },
    article: {
      published: 'Veröffentlicht',
      updated: 'Aktualisiert',
      readingTime: 'Lesezeit',
      writtenBy: 'Verfasst von',
      reviewedBy: 'Geprüft von',
      promoTitle: 'Entdecken Sie mehr',
      promoBody: 'Erfahren Sie mehr über unsere Produkte und wie sie Ihnen zu einem gesünderen Leben verhelfen können.',
      promoCta: 'Mehr erfahren'
    }
  },
  fr: {
    siteTagline: 'Votre guide vers une vie plus saine',
    nav: {
      home: 'Accueil',
      brainHealth: 'Santé du cerveau',
      nutrition: 'Nutrition',
      longevity: 'Longévité',
      research: 'Recherche',
      openMenu: 'Ouvrir le menu'
    },
    legal: {
      imprint: 'Mentions légales',
      privacy: 'Politique de confidentialité',
      allRightsReserved: 'Tous droits réservés.'
    },
    home: {
      title: 'Accueil',
      heroLead: 'Votre guide vers une',
      heroHighlight: 'vie plus saine',
      heroBody: 'Découvrez des articles fiables sur la santé, la nutrition et le bien-être. Nous vous accompagnons vers plus de vitalité.',
      latestArticles: 'Articles récents',
      noArticles: 'Aucun article publié pour le moment.',
      comingSoon: 'Nouveaux contenus à venir !',
      ctaTitle: 'La santé commence par la connaissance',
      ctaBody: 'Parcourez nos articles et découvrez des conseils utiles pour votre quotidien.'
    },
    articleList: {
      title: 'Tous les articles',
      description: 'Parcourez notre collection d’articles approfondis sur la santé.',
      noArticles: 'Aucun article publié pour le moment.'
    },
    article: {
      published: 'Publié',
      updated: 'Mis à jour',
      readingTime: 'de lecture',
      writtenBy: 'Rédigé par',
      reviewedBy: 'Vérifié par',
      promoTitle: 'En savoir plus',
      promoBody: 'Découvrez nos produits et comment ils peuvent vous accompagner vers une vie plus saine.',
      promoCta: 'En savoir plus'
    }
  }
};

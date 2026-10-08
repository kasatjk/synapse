export const subjects = [
  {
    id: 'biology',
    slug: 'biology',
    path: '/biology',
    title: 'Біологія',
    description: '"Біологія - це наука про складні речі, які виглядають так, ніби вони були створені для певної мети" --- Чарльз Докінз',
    documentTitle: 'Біологія | Синапс',
  },
  {
    id: 'geography',
    slug: 'geography',
    path: '/geography',
    title: 'Географія',
    description: '"Карти - це найвеличніші поеми, написані лініями та кольорами." --- Ґілберт Гросвенор',
    documentTitle: 'Географія | Синапс',
  },
  {
    id: 'ukrainian-language',
    slug: 'ukrainian-language',
    path: '/ukrainian-language',
    title: 'Українська мова',
    description: '"Яке прекрасне рідне слово! Воно - не світ, а всі світи." --- Володимир Сосюра',
    documentTitle: 'Українська мова | Синапс',
  }
];

export const works = [
  {
    id: 'species',
    subject: 'biology',
    slug: 'species',
    path: '/biology/species',
    title: 'Лабораторна робота 1',
    shortTitle: 'Таксономія Homo sapiens',
    description:
      'Визначення таксономічного положення виду в системі органічного світу на прикладі людини розумної.',
    documentTitle: 'Таксономія виду | Біологія | Синапс',
  },
  {
    id: 'elephants',
    subject: 'biology',
    slug: 'elephants',
    path: '/biology/elephants',
    title: 'Слони',
    shortTitle: 'Слони',
    description: 'Порівняння слона саванного та індійського за критеріями виду.',
    documentTitle: 'Слони | Біологія | Синапс',
  },
  {
    id: 'scrapie',
    subject: 'biology',
    slug: 'scrapie',
    path: '/biology/scrapie',
    title: 'Скрепі',
    shortTitle: 'Скрепі',
    description: 'Захворювання, що викликає дегенерацію нервової системи у овець і кіз через пріони.',
    documentTitle: ' Скрепі | Біологія | Синапс',
  },
  {
    id: 'secondary-sector',
    subject: 'geography',
    slug: 'secondary-sector',
    path: '/geography/secondary-sector',
    title: 'Вторинний сектор економіки',
    shortTitle: 'Вторинний сектор',
    description:
      'Галузі промисловості, що перетворюють сировину первинного сектора на готові товари.',
    documentTitle: 'Вторинний сектор | Географія | Синапс',
  },
  {
    id: 'europe',
    subject: 'geography',
    slug: 'europe',
    path: '/geography/europe',
    title: 'Європа',
    shortTitle: 'Європа',
    description: 'Загальна характеристика Європи.',
    documentTitle: 'Європа | Географія | Синапс',
  },
  {
    id: 'recreation',
    subject: 'geography',
    slug: 'recreation',
    path: '/geography/recreation',
    title: 'Рекреаційні ресурси Європи',
    shortTitle: 'Рекреаційні ресурси',
    description: 'Рекреаційні ресурси третинного сектора економіки Європи.',
    documentTitle: 'Рекреаційні ресурси | Географія | Синапс',
  },
  {
    id: 'netherlands',
    subject: 'geography',
    slug: 'netherlands',
    path: '/geography/netherlands',
    title: 'Нідерланди',
    shortTitle: 'Нідерланди',
    description: 'Характеристика Нідерландів в рамках проєкту "Країни Європи".',
    documentTitle: 'Нідерланди | Географія | Синапс',
  },
  {
    id: 'songs',
    subject: 'ukrainian-language',
    slug: 'songs',
    path: '/ukrainian-language/songs',
    title: 'Пісні',
    shortTitle: 'Пісні',
    description: 'Аналіз звукового складу народних пісень.',
    documentTitle: 'Пісні | Українська мова | Синапс',
  }
];

export const homeMeta = {
  title: 'Синапс | Портал робіт',
  subject: null,
  featuredWorkId: 'netherlands',
};

export const notFoundMeta = {
  title: 'Сторінку не знайдено | Синапс',
  subject: null,
};

function normalizePath(pathname) {
  return pathname === '/' ? pathname : pathname.replace(/\/+$/, '');
}

export function getSubject(id) {
  return subjects.find((item) => item.id === id);
}

export function getWorksBySubject(subjectId) {
  return works.filter((work) => work.subject === subjectId);
}

export function getWorkById(workId) {
  return works.find((work) => work.id === workId);
}

export function getRouteMeta(pathname) {
  if (pathname === '/') {
    return { ...homeMeta };
  }

  const normalizedPath = normalizePath(pathname);
  const subject = subjects.find((item) => normalizePath(item.path) === normalizedPath);
  if (subject) {
    return { title: subject.documentTitle, subject: subject.id };
  }

  const work = works.find((item) => normalizePath(item.path) === normalizedPath);
  if (work) {
    return { title: work.documentTitle, subject: work.subject };
  }

  return { ...notFoundMeta };
}

export const subjects = [
  {
    id: 'biology',
    slug: 'biology',
    path: '/biology',
    title: 'Біологія',
    description: 'Лабораторні та порівняльні роботи з біології.',
    documentTitle: 'Біологія | Синапс',
  },
  {
    id: 'geography',
    slug: 'geography',
    path: '/geography',
    title: 'Географія',
    description: 'Роботи про сектори економіки та рекреаційні ресурси.',
    documentTitle: 'Географія | Синапс',
  },
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
    shortTitle: 'Слон саванний і індійський',
    description: 'Порівняння слона саванного та індійського за критеріями виду.',
    documentTitle: 'Слони | Біологія | Синапс',
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
    id: 'recreation',
    subject: 'geography',
    slug: 'recreation',
    path: '/geography/recreation',
    title: 'Рекреаційні ресурси',
    shortTitle: 'Рекреація Європи',
    description: 'Рекреаційні ресурси третинного сектора економіки Європи.',
    documentTitle: 'Рекреаційні ресурси | Географія | Синапс',
  },
];

export const homeMeta = {
  title: 'Синапс | Портал робіт',
  subject: null,
};

export const notFoundMeta = {
  title: 'Сторінку не знайдено | Синапс',
  subject: null,
};

export function getSubject(id) {
  return subjects.find((item) => item.id === id);
}

export function getWorksBySubject(subjectId) {
  return works.filter((work) => work.subject === subjectId);
}

export function getRouteMeta(pathname) {
  if (pathname === '/') {
    return { ...homeMeta };
  }

  const subject = subjects.find((item) => item.path === pathname);
  if (subject) {
    return { title: subject.documentTitle, subject: subject.id };
  }

  const work = works.find((item) => item.path === pathname);
  if (work) {
    return { title: work.documentTitle, subject: work.subject };
  }

  return { ...notFoundMeta };
}

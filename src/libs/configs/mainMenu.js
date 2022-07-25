export const mainMenu = [
  { name: 'Главная', link: '/' },
  {
    name: 'Каталог',
    link: '/catalog',
    children: [
      { name: 'Накладные электронные замки', link: '/catalog/1' },
      { name: 'Врезные электронные замки', link: '/catalog/2' },
      { name: 'Замки для квартиры', link: '/catalog/3' },
      { name: 'Замки для дома', link: '/catalog/4' },
      { name: 'Замки для отелей', link: '/catalog/5' },
      { name: 'Замки для офиса', link: '/catalog/6' },
      { name: 'Замки для шкафчиков', link: '/catalog/7' },
      { name: 'Замки для раздевалок', link: '/catalog/8' }
    ]
  },
  { name: 'Оптовая продажа', link: '/sales' },
  { name: 'О нас', link: '/about' }
]

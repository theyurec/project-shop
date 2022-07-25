export const mainMenu = [
  { name: 'Главная', link: '/' },
  {
    name: 'Каталог',
    link: '/categories',
    children: [
      { name: 'Накладные электронные замки', link: '/categories/1' },
      { name: 'Врезные электронные замки', link: '/categories/2' },
      { name: 'Замки для квартиры', link: '/categories/3' },
      { name: 'Замки для дома', link: '/categories/4' },
      { name: 'Замки для отелей', link: '/categories/5' },
      { name: 'Замки для офиса', link: '/categories/6' },
      { name: 'Замки для шкафчиков', link: '/categories/7' },
      { name: 'Замки для раздевалок', link: '/categories/8' }
    ]
  },
  { name: 'Оптовая продажа', link: '/sales' },
  { name: 'О нас', link: '/about' }
]

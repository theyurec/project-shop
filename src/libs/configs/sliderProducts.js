import product1 from '../../assets/images/sliderProducts/product1.png'
import product2 from '../../assets/images/sliderProducts/product2.png'
import product3 from '../../assets/images/sliderProducts/product3.png'
import product4 from '../../assets/images/sliderProducts/product4.png'
import iconInStock from '../../assets/images/sliderProducts/iconInStock.svg'
import iconOutOfStock from '../../assets/images/sliderProducts/iconOutOfStock.svg'

export const sliderProducts = [
  {
    image: { product1 },
    title: 'Дверной Замок Golden Soft для отеля',
    price: '33 000₽',
    crossedPrice: '37 000₽',
    icon: { iconInStock },
    inStock: 'В наличии'
  },
  {
    image: { product2 },
    title: 'Вариативный замок Golden Soft для отеля',
    price: '7 000₽',
    crossedPrice: '8 000₽',
    icon: { iconOutOfStock },
    inStock: 'Нет в наличии'
  },
  {
    image: { product3 },
    title: 'Дверной Замок Golden Soft для офиса',
    price: '33 000₽',
    crossedPrice: '30 000₽',
    icon: { iconInStock },
    inStock: 'В наличии'
  },
  {
    image: { product4 },
    title: 'Дверной Замок Golden Soft для офиса',
    price: '33 000₽',
    crossedPrice: '37 000₽',
    icon: { iconInStock },
    inStock: 'В наличии'
  },
  {
    image: { product1 },
    title: 'Вариативный замок Golden Soft для отеля',
    price: '9 000₽',
    crossedPrice: '12 000₽',
    icon: { iconInStock },
    inStock: 'В наличии'
  },
  {
    image: { product2 },
    title: 'Дверной Замок Golden Soft для отеля',
    price: '12 000₽',
    crossedPrice: '9 000₽',
    icon: { iconOutOfStock },
    inStock: 'Нет в наличии'
  }
]

import ryan from '../../assets/ryan.jpg'
import ryan2 from '../../assets/ryan2.jpg'
import ryan3 from '../../assets/ryan3.jpg'
import ryan4 from '../../assets/ryan4.jpg'
import ryan5 from '../../assets/ryan5.jpg'

interface ICard {
  id: number;
  img: string;
  name: string;
  role: string;
  speciality: string;
  course: string;
}


export const cards: ICard[] = [
  {
    id: 1,
    img: ryan,
    name: 'Ryan Gosling',
    role: 'God',
    speciality: 'Actor',
    course: '1'
  },
  {
    id: 2,
    img: ryan2,
    name: 'Ryan Gosling',
    role: 'God',
    speciality: 'Lorem',
    course: '2'
  },
  {
    id: 3,
    img: ryan3,
    name: 'Ryan Gosling',
    role: 'God',
    speciality: 'Lorem ipsum dolor. Lorem ipsum dolor Lorem ipsum dolor',
    course: '3'
  },
  {
    id: 4,
    img: ryan4,
    name: 'Ryan Gosling',
    role: 'God',
    speciality: '',
    course: '4'
  },
  {
    id: 5,
    img: ryan5,
    name: 'Ryan Gosling',
    role: 'God',
    speciality: '',
    course: '5'
  },
];

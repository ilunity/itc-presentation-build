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
    img: '/ryan.jpg',
    name: 'Ryan Gosling',
    role: 'God',
    speciality: 'Actor',
    course: '1'
  },
  {
    id: 2,
    img: '/ryan2.jpg',
    name: 'Ryan Gosling',
    role: 'God',
    speciality: 'Lorem',
    course: '2'
  },
  {
    id: 3,
    img: '/ryan3.jpg',
    name: 'Ryan Gosling',
    role: 'God',
    speciality: 'Lorem ipsum dolor. Lorem ipsum dolor Lorem ipsum dolor',
    course: '3'
  },
  {
    id: 4,
    img: '/ryan4.jpg',
    name: 'Ryan Gosling',
    role: 'God',
    speciality: '',
    course: '4'
  },
  {
    id: 5,
    img: '/ryan5.jpg',
    name: 'Ryan Gosling',
    role: 'God',
    speciality: '',
    course: '5'
  },
];

import { IBonus } from '@interfaces/bonus.interface';

export const bonusIDForTestRemove = '05b97a06-8d76-453a-831e-068eb95c5104';
export const bonusIDForTestGet = 'a8baad8d-809a-47a0-bc45-dd804facbc13';

export const expectedBonus: IBonus = {
  id: 'a8baad8d-809a-47a0-bc45-dd804facbc13',
  title: '15%',
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus cum voluptate laborum repellat ut repudiandae architecto, blanditiis quaerat inventore.',
  type: 'restaurant',
  phone: '385894054985',
  company: {
    id: '08928c3e-d72a-41bc-9677-cbe80dec440a',
    name: 'Marani',
    email: 'maranimmmm@fjfhkfjgkf',
  },
  dateStart: '2021-01-31T22:00:00Z',
  dateEnd: '2021-03-30T21:00:00Z',
  rating: 0,
  isActive: true,
  locations: [
    {
      city: 'Vinnytsia',
      country: 'Ukraine',
      address: 'Teatralna Street 47',
      latitude: 49.2320327,
      longitude: 28.4624705,
    },
  ],
  tags: ['food', 'cafe', 'restaurant'],
};

export const expectedBonuses: IBonus[] = [
  {
    id: '05b97a06-8d76-453a-831e-068eb95c5104',
    title: '10% discount',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus cum voluptate laborum repellat ut repudiandae architecto, blanditiis quaerat inventore.',
    type: 'default',
    phone: '293764737893',
    company: {
      id: 'bcef0f19-30ce-4e00-8834-9a0aaad878a4',
      name: 'Glovo',
      email: 'glovojhdjkfj@ghjdkjf.com',
    },
    dateStart: '2021-01-31T22:00:00Z',
    dateEnd: '2021-05-30T21:00:00Z',
    rating: 0,
    isActive: true,
    locations: [
      {
        city: 'Vinnytsia',
        country: 'Ukraine',
        address: ' ',
        latitude: 49.2320162,
        longitude: 28.467975,
      },
      {
        city: 'Odesa',
        country: 'Ukraine',
        address: ' ',
        latitude: 46.4873195,
        longitude: 30.7392776,
      },
      {
        city: 'Kyiv',
        country: 'Ukraine',
        address: ' ',
        latitude: 50.4500336,
        longitude: 30.5241361,
      },
    ],
    tags: ['delivery', 'glovo'],
  },
  {
    id: 'a8baad8d-809a-47a0-bc45-dd804facbc13',
    title: '15%',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus cum voluptate laborum repellat ut repudiandae architecto, blanditiis quaerat inventore.',
    type: 'restaurant',
    phone: '385894054985',
    company: {
      id: '08928c3e-d72a-41bc-9677-cbe80dec440a',
      name: 'Marani',
      email: 'maranimmmm@fjfhkfjgkf',
    },
    dateStart: '2021-01-31T22:00:00Z',
    dateEnd: '2021-03-30T21:00:00Z',
    rating: 0,
    isActive: true,
    locations: [
      {
        city: 'Vinnytsia',
        country: 'Ukraine',
        address: 'Teatralna Street 47',
        latitude: 49.2320327,
        longitude: 28.4624705,
      },
    ],
    tags: ['food', 'cafe', 'restaurant'],
  },
  {
    id: '2e2eb20f-e5df-4c4a-b1c9-2daf97e1e935',
    title: 'Discount 10%',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus cum voluptate laborum repellat ut repudiandae architecto, blanditiis quaerat inventore.',
    type: 'restaurant',
    phone: '864672693955',
    company: {
      id: '94873469-9464-4247-b971-d8525530ab64',
      name: 'Primis Teilte',
      email: 'ahuws3@bbc.co.uk',
    },
    dateStart: '2021-01-31T22:00:00Z',
    dateEnd: '2021-03-30T21:00:00Z',
    rating: 0,
    isActive: true,
    locations: [
      {
        city: 'Minsk',
        country: 'Belarus',
        address: 'улица Ленина, 50',
        latitude: 53.8896062,
        longitude: 27.5766485,
      },
    ],
    tags: ['food', 'cafe', 'restaurant'],
  },
  {
    id: '1fcacb77-e64c-4b7c-8aa2-7089feae3afa',
    title: 'Discount coupons 10%',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus cum voluptate laborum repellat ut repudiandae architecto, blanditiis quaerat inventore.',
    type: 'default',
    phone: '864109306520',
    company: {
      id: '367018ba-69c5-4ef9-b355-43c18604ac64',
      name: 'Mayami-Tour',
      email: 'lmiddlemass2@elpais.com',
    },
    dateStart: '2021-01-31T22:00:00Z',
    dateEnd: '2021-03-30T21:00:00Z',
    rating: 0,
    isActive: true,
    locations: [
      {
        city: 'Kyiv',
        country: 'Ukraine',
        address: 'Chornohirska Street, 34',
        latitude: 50.4074999,
        longitude: 30.53439,
      },
    ],
    tags: ['tour', 'trip', 'travel'],
  },
  {
    id: 'f2886f9f-e292-4b2c-b561-c552434fb59f',
    title: 'Fourth pizza free',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus cum voluptate laborum repellat ut repudiandae architecto, blanditiis quaerat inventore.',
    type: 'restaurant',
    phone: '555386855858',
    company: {
      id: '251a90a1-2d45-4685-9b53-2ba8329a8fd8',
      name: 'Mauris morbi',
      email: 'ajills4@tripod.com',
    },
    dateStart: '2021-01-31T22:00:00Z',
    dateEnd: '2021-03-30T21:00:00Z',
    rating: 0,
    isActive: true,
    locations: [
      {
        city: 'Minsk',
        country: 'Belarus',
        address: 'Пинская улица, 30',
        latitude: 53.9068604,
        longitude: 27.5167736,
      },
    ],
    tags: ['food', 'pizza'],
  },
  {
    id: '7776c677-1741-4506-9a7e-341dd9a59526',
    title: 'From 10 tickets 20% discount on tickets',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus cum voluptate laborum repellat ut repudiandae architecto, blanditiis quaerat inventore.',
    type: 'cinema',
    phone: '332199993648',
    company: {
      id: 'd06d7f2f-8114-4c6b-89b7-81776a9f6692',
      name: 'Cinema+',
      email: 'jfearnall1@europa.eu',
    },
    dateStart: '2021-01-31T22:00:00Z',
    dateEnd: '2021-03-30T21:00:00Z',
    rating: 1.6666666666666667,
    isActive: true,
    locations: [
      {
        city: 'Odesa',
        country: 'Ukraine',
        address: 'Mariinska Street, 5/1',
        latitude: 46.4657709,
        longitude: 30.7492361,
      },
    ],
    tags: ['cinema', 'tickets'],
  },
  {
    id: '30efc6ab-7b23-45f5-b070-9e7b20a76eb0',
    title: 'discount 10%',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus cum voluptate laborum repellat ut repudiandae architecto, blanditiis quaerat inventore.',
    type: 'restaurant',
    phone: '544444488888',
    company: {
      id: 'bb5391c6-e20b-4d52-8fc5-7b062f78c39b',
      name: 'Bella Rosa',
      email: 'bellarosa@gmail.com',
    },
    dateStart: '2021-01-31T22:00:00Z',
    dateEnd: '2021-03-30T21:00:00Z',
    rating: 0,
    isActive: true,
    locations: [
      {
        city: 'Minsk',
        country: 'Belarus',
        address: 'улица Гикало 3',
        latitude: 53.9160253,
        longitude: 27.5880345,
      },
    ],
    tags: ['restaurant', 'food', 'cafe'],
  },
  {
    id: '98de26da-47d0-4f60-803c-8f4ffec484fe',
    title: 'discount 20%',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus cum voluptate laborum repellat ut repudiandae architecto, blanditiis quaerat inventore.',
    type: 'cinema',
    phone: '298785647867',
    company: {
      id: '31081026-b89c-439f-bf0f-7af4b08f85f2',
      name: 'SmartCinema',
      email: 'ghgfdsjhf@com',
    },
    dateStart: '2021-01-31T22:00:00Z',
    dateEnd: '2021-04-29T21:00:00Z',
    rating: 0,
    isActive: true,
    locations: [
      {
        city: 'Vinnytsia',
        country: 'Ukraine',
        address: 'Mikoli Ovodova street 51',
        latitude: 49.2336374,
        longitude: 28.4707609,
      },
    ],
    tags: ['cinema', 'film'],
  },
  {
    id: 'b9d7a437-64ae-4f1f-b832-bf18af3508b7',
    title: 'discount 25%',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus cum voluptate laborum repellat ut repudiandae architecto, blanditiis quaerat inventore.',
    type: 'default',
    phone: '928376444444',
    company: {
      id: '7029e444-439d-4c3d-a9fd-0cb4ff547716',
      name: 'Artel Gallery Cafe',
      email: 'artelgalerycafe@gmail.com',
    },
    dateStart: '2021-01-31T22:00:00Z',
    dateEnd: '2021-04-29T21:00:00Z',
    rating: 0,
    isActive: false,
    locations: [
      {
        city: 'Minsk',
        country: 'Belarus',
        address: 'проспект Независимости 58',
        latitude: 53.9178512,
        longitude: 27.5912494,
      },
    ],
    tags: ['art', 'gallery'],
  },
  {
    id: '0f56d970-8d27-4060-a2dc-2ffcbd27f1e3',
    title: 'discount 3%',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus cum voluptate laborum repellat ut repudiandae architecto, blanditiis quaerat inventore.',
    type: 'default',
    phone: '286478675445',
    company: {
      id: '3d7baf53-b9ea-487a-9336-b54f1de0d45a',
      name: 'Uni',
      email: 'uni@gmail.com',
    },
    dateStart: '2021-01-31T22:00:00Z',
    dateEnd: '2021-04-29T21:00:00Z',
    rating: 0,
    isActive: true,
    locations: [
      {
        city: 'Minsk',
        country: 'Belarus',
        address: 'улица Сурганова ',
        latitude: 53.9311439,
        longitude: 27.5778544,
      },
    ],
    tags: ['delivery'],
  },
  {
    id: '00f8c66c-d6a7-4f34-95d3-315ce5ea765c',
    title: 'discount 5%',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus cum voluptate laborum repellat ut repudiandae architecto, blanditiis quaerat inventore.',
    type: 'restaurant',
    phone: '454555555555',
    company: {
      id: 'a7873ae8-3317-4d0d-bc38-eaf4efcb6796',
      name: 'PizzBurg',
      email: 'pizzburg@gmail.com',
    },
    dateStart: '2021-01-31T22:00:00Z',
    dateEnd: '2021-02-27T22:00:00Z',
    rating: 0,
    isActive: true,
    locations: [
      {
        city: 'Homyel',
        country: 'Belarus',
        address: 'улица Кожара 6А',
        latitude: 52.4510713,
        longitude: 30.9990183,
      },
    ],
    tags: ['food', 'pizza', 'cafe', 'burger'],
  },
  {
    id: 'd28ce3de-ed99-4a73-82d2-8cf0529396a3',
    title: 'discount 5%',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus cum voluptate laborum repellat ut repudiandae architecto, blanditiis quaerat inventore.',
    type: 'restaurant',
    phone: '546487328888',
    company: {
      id: '6e637e5e-8ed9-482b-a3e8-e0a34b55167c',
      name: 'Yerevan',
      email: 'yerevan@gmail.com',
    },
    dateStart: '2021-01-31T22:00:00Z',
    dateEnd: '2021-02-27T22:00:00Z',
    rating: 0,
    isActive: true,
    locations: [
      {
        city: 'Minsk',
        country: 'Belarus',
        address: 'улица Кульман 14',
        latitude: 53.9211581,
        longitude: 27.5815692,
      },
    ],
    tags: ['food', 'restaurant', 'cafe'],
  },
  {
    id: '85885026-34e7-4b25-9b94-a737bda1e700',
    title: 'discount 5%',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus cum voluptate laborum repellat ut repudiandae architecto, blanditiis quaerat inventore.',
    type: 'hotel',
    phone: '333333333333',
    company: {
      id: 'fe7b6797-6168-4fe8-864e-3d25c7f714f3',
      name: 'City-Hotel',
      email: 'cityhotel@gmail.com',
    },
    dateStart: '2021-01-31T22:00:00Z',
    dateEnd: '2021-04-29T21:00:00Z',
    rating: 0,
    isActive: true,
    locations: [
      {
        city: 'Homyel',
        country: 'Belarus',
        address: 'проспект Октября 46',
        latitude: 52.4057443,
        longitude: 30.9424991,
      },
    ],
    tags: ['hotel', 'room'],
  },
  {
    id: 'd8d6a690-1aea-4f79-8320-ede200bcd096',
    title: 'discount 5%',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus cum voluptate laborum repellat ut repudiandae architecto, blanditiis quaerat inventore.',
    type: 'store',
    phone: '884765647567',
    company: {
      id: '78f4aa2a-21f1-44cb-aa99-8df63a3809dc',
      name: 'Apple Store',
      email: 'aplestoreuuu@hhdgjgj.com',
    },
    dateStart: '2021-01-31T22:00:00Z',
    dateEnd: '2021-03-30T21:00:00Z',
    rating: 0,
    isActive: true,
    locations: [
      {
        city: 'Vinnytsia',
        country: 'Ukraine',
        address: 'Soborna Street 69',
        latitude: 49.2330989,
        longitude: 28.4667835,
      },
    ],
    tags: ['store', 'apple', 'shop'],
  },
  {
    id: '32f4fda9-d5dd-43c0-861b-6a750522e593',
    title: 'discount 5% ',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus cum voluptate laborum repellat ut repudiandae architecto, blanditiis quaerat inventore.',
    type: 'cinema',
    phone: '456333333333',
    company: {
      id: 'eb955f86-de0c-4812-b781-343f44608cf2',
      name: 'Mir Cinema',
      email: 'mircinemajj@gmail.com',
    },
    dateStart: '2021-01-31T22:00:00Z',
    dateEnd: '2021-05-30T21:00:00Z',
    rating: 0,
    isActive: true,
    locations: [
      {
        city: 'Homyel',
        country: 'Belarus',
        address: 'улица Ильича 51Б',
        latitude: 52.3927307,
        longitude: 31.0288229,
      },
    ],
    tags: ['cinema', 'film'],
  },
  {
    id: '5735b8ab-fabb-42fc-b211-c6465d41723d',
    title: 'sale 5% for Conference Rooms',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus cum voluptate laborum repellat ut repudiandae architecto, blanditiis quaerat inventore.',
    type: 'hotel',
    phone: '380992792102',
    company: {
      id: 'e01c138a-979c-4b4a-98d5-ad2911a8afbe',
      name: 'Ice Hotel',
      email: 'zwhitlaw0@craigslist.org',
    },
    dateStart: '2021-01-31T22:00:00Z',
    dateEnd: '2021-03-30T21:00:00Z',
    rating: 0,
    isActive: true,
    locations: [
      {
        city: 'Vinnytsia',
        country: 'Ukraine',
        address: 'Soborna Street, 56',
        latitude: 49.2333167,
        longitude: 28.4679267,
      },
    ],
    tags: ['room', 'conference', 'hotel'],
  },
];

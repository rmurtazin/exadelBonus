import { IBonus } from "@interfaces/bonus.interface";

export const expectedBonuses: IBonus[] = [{
  "id": "2e2eb20f-e5df-4c4a-b1c9-2daf97e1e935",
  "title": "Discount 10%",
  "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus cum voluptate laborum repellat ut repudiandae architecto, blanditiis quaerat inventore.",
  "type": "restaurant",
  "phone": "864672693955",
  "company": {
    "id": "94873469-9464-4247-b971-d8525530ab64",
    "name": "Primis Teilte",
    "email": "ahuws3@bbc.co.uk"
  },
  "dateStart": "2021-01-31T22:00:00Z",
  "dateEnd": "2021-03-30T21:00:00Z",
  "rating": 0,
  "isActive": true,
  "locations": [{
    "city": "Minsk",
    "country": "Belarus",
    "address": "улица Ленина, 50",
    "latitude": 53.8896062,
    "longitude": 27.5766485
  }],
  "tags": ["food", "cafe", "restaurant"]
}, {
  "id": "1fcacb77-e64c-4b7c-8aa2-7089feae3afa",
  "title": "Discount coupons 10%",
  "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus cum voluptate laborum repellat ut repudiandae architecto, blanditiis quaerat inventore.",
  "type": "default",
  "phone": "864109306520",
  "company": {
    "id": "367018ba-69c5-4ef9-b355-43c18604ac64",
    "name": "Mayami-Tour",
    "email": "lmiddlemass2@elpais.com"
  },
  "dateStart": "2021-01-31T22:00:00Z",
  "dateEnd": "2021-03-30T21:00:00Z",
  "rating": 0,
  "isActive": true,
  "locations": [{
    "city": "Kyiv",
    "country": "Ukraine",
    "address": "Chornohirska Street, 34",
    "latitude": 50.4074999,
    "longitude": 30.53439
  }],
  "tags": ["tour", "trip", "travel"]
}, {
  "id": "f2886f9f-e292-4b2c-b561-c552434fb59f",
  "title": "Fourth pizza free",
  "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus cum voluptate laborum repellat ut repudiandae architecto, blanditiis quaerat inventore.",
  "type": "restaurant",
  "phone": "555386855858",
  "company": {
    "id": "251a90a1-2d45-4685-9b53-2ba8329a8fd8",
    "name": "Mauris morbi",
    "email": "ajills4@tripod.com"
  },
  "dateStart": "2021-01-31T22:00:00Z",
  "dateEnd": "2021-03-30T21:00:00Z",
  "rating": 0,
  "isActive": true,
  "locations": [{
    "city": "Minsk",
    "country": "Belarus",
    "address": "Пинская улица, 30",
    "latitude": 53.9068604,
    "longitude": 27.5167736
  }],
  "tags": ["food", "pizza"]
}, {
  "id": "7776c677-1741-4506-9a7e-341dd9a59526",
  "title": "From 10 tickets 20% discount on tickets",
  "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus cum voluptate laborum repellat ut repudiandae architecto, blanditiis quaerat inventore.",
  "type": "cinema",
  "phone": "332199993648",
  "company": {
    "id": "d06d7f2f-8114-4c6b-89b7-81776a9f6692",
    "name": "Cinema+",
    "email": "jfearnall1@europa.eu"
  },
  "dateStart": "2021-01-31T22:00:00Z",
  "dateEnd": "2021-03-30T21:00:00Z",
  "rating": 0,
  "isActive": true,
  "locations": [{
    "city": "Odesa",
    "country": "Ukraine",
    "address": "Mariinska Street, 5/1",
    "latitude": 46.4657709,
    "longitude": 30.7492361
  }],
  "tags": ["cinema", "tickets"]
}, {
  "id": "5735b8ab-fabb-42fc-b211-c6465d41723d",
  "title": "sale 5% for Conference Rooms",
  "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus cum voluptate laborum repellat ut repudiandae architecto, blanditiis quaerat inventore.",
  "type": "hotel",
  "phone": "380992792102",
  "company": {
    "id": "e01c138a-979c-4b4a-98d5-ad2911a8afbe",
    "name": "Ice Hotel",
    "email": "zwhitlaw0@craigslist.org"
  },
  "dateStart": "2021-01-31T22:00:00Z",
  "dateEnd": "2021-03-30T21:00:00Z",
  "rating": 0,
  "isActive": true,
  "locations": [{
    "city": "Vinnytsia",
    "country": "Ukraine",
    "address": "Soborna Street, 56",
    "latitude": 49.2333167,
    "longitude": 28.4679267
  }],
  "tags": ["room", "conference", "hotel"]
}]

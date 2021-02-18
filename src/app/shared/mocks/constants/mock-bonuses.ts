import {
  IBonus
} from "@interfaces/bonus.interface";

export const mockUrlBonuses = "https://exadel-bonus-plus-app.herokuapp.com/api/Bonus";

export const BonusesVinnytsia = [{
    "id": "c364498c-3d63-458c-807e-f7f9e682341e",
    "title": "10%",
    "description": "sale 10% every Monday",
    "type": "cinema",
    "phone": "380982222222",
    "company": {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": null,
      "email": null
    },
    "dateStart": "2021-01-31T22:00:00Z",
    "dateEnd": "2021-02-27T22:00:00Z",
    "rating": 0,
    "isActive": true,
    "locations": [{
      "city": "Vinnytsia",
      "country": "Ukraine",
      "address": "Soborna Street, 69",
      "latitude": 49.2330989,
      "longitude": 28.4667835
    }],
    "tags": ["cinema", "film"]
  }, {
    "id": "c505249c-2380-4f3e-8589-d9f02c9a1404",
    "title": "5%",
    "description": "sale 5% for all evening sessions ",
    "type": "cinema",
    "phone": "380985555555",
    "company": {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": null,
      "email": null
    },
    "dateStart": "2021-01-31T22:00:00Z",
    "dateEnd": "2021-02-27T22:00:00Z",
    "rating": 0,
    "isActive": true,
    "locations": [{
      "city": "Vinnytsia",
      "country": "Ukraine",
      "address": "Keletska Street, 80",
      "latitude": 49.2259212,
      "longitude": 28.4132876
    }],
    "tags": ["cinema", "films"]
  }, {
    "id": "68a9da5e-bd36-4355-b131-ca02c57e784b",
    "title": "5%",
    "description": "sale 5%",
    "type": "hotel",
    "phone": "383333333333",
    "company": {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": null,
      "email": null
    },
    "dateStart": "2021-01-31T22:00:00Z",
    "dateEnd": "2021-02-14T22:00:00Z",
    "rating": 0,
    "isActive": true,
    "locations": [{
      "city": "Vinnytsia",
      "country": "Ukraine",
      "address": "Soborna Street, 69",
      "latitude": 49.2330989,
      "longitude": 28.4667835
    }],
    "tags": ["hotel"]
  }, {
    "id": "2cec8b20-7ae7-473b-8b10-77ab35edd714",
    "title": "5%",
    "description": "sale 5%",
    "type": "cinema",
    "phone": "380965555555",
    "company": {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": null,
      "email": null
    },
    "dateStart": "2021-01-31T22:00:00Z",
    "dateEnd": "2021-02-25T22:00:00Z",
    "rating": 0,
    "isActive": true,
    "locations": [{
      "city": "Vinnytsia",
      "country": "Ukraine",
      "address": "Keletska Street, 70",
      "latitude": 49.2257885,
      "longitude": 28.4170463
    }],
    "tags": ["films", "cinema"]
  }, {
    "id": "4e92a06b-dafb-4b6f-a2ee-70ba6387d6af",
    "title": "5%",
    "description": "sale 5%",
    "type": "default",
    "phone": "380974444444",
    "company": {
      "id": "565fb4c8-9578-4a6c-9b7c-22a91df7b3dd",
      "name": "MegaTaxi",
      "email": "megataxi@gmail.com"
    },
    "dateStart": "2021-01-31T22:00:00Z",
    "dateEnd": "2021-02-15T22:00:00Z",
    "rating": 0,
    "isActive": true,
    "locations": [{
      "city": "Vinnytsia",
      "country": "Ukraine",
      "address": "",
      "latitude": 49.2320162,
      "longitude": 28.467975
    }],
    "tags": ["taxi"]
  }, {
    "id": "be60a947-e001-4db4-bad1-0f0e1dadb650",
    "title": "My Hata",
    "description": "My current location",
    "type": "hotel",
    "phone": "+380973560705",
    "company": {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": null,
      "email": null
    },
    "dateStart": "2021-02-12T10:11:44.778Z",
    "dateEnd": "2021-02-12T10:11:44.778Z",
    "rating": 0,
    "isActive": true,
    "locations": [{
      "city": "Vinnytsia",
      "country": "Ukraine",
      "address": "vul Privokzalna 68",
      "latitude": 49.224853316690194,
      "longitude": 28.50281464713524
    }],
    "tags": ["house"]
  }, {
    "id": "a2bdc89d-7213-42d7-afd5-3935a655ebf4",
    "title": "hfghfcgthy",
    "description": "rggrctjylkhjggsezrfwer",
    "type": "store",
    "phone": "874834578349",
    "company": {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": null,
      "email": null
    },
    "dateStart": "2021-01-31T22:00:00Z",
    "dateEnd": "2021-02-17T22:00:00Z",
    "rating": 0,
    "isActive": true,
    "locations": [{
      "city": "Vinnytsia",
      "country": "Ukraine",
      "address": "Soborna Street, 76",
      "latitude": 49.234201,
      "longitude": 28.4626412
    }],
    "tags": ["gfhgf", "gfhgc"]
  }, {
    "id": "4808d8a1-8f5d-4ec7-831d-59817bf78d21",
    "title": "vfdvdffvfv",
    "description": "jlkfj;gljlkf",
    "type": "restaurant",
    "phone": "748537485555",
    "company": {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": null,
      "email": null
    },
    "dateStart": "2021-01-31T22:00:00Z",
    "dateEnd": "2021-02-15T22:00:00Z",
    "rating": 0,
    "isActive": true,
    "locations": [{
      "city": "Vinnytsia",
      "country": "Ukraine",
      "address": "Soborna Street, 76",
      "latitude": 49.234201,
      "longitude": 28.4626412
    }],
    "tags": ["jkfnv", "nfjkvnkf"]
  }];


export const expectedBonuses: IBonus[] = [{
  "id": "c364498c-3d63-458c-807e-f7f9e682341e",
  "title": "10%",
  "description": "sale 10% every Monday",
  "type": "cinema",
  "phone": "380982222222",
  "company": {
    "id": "00000000-0000-0000-0000-000000000000",
    "name": null,
    "email": null
  },
  "dateStart": "2021-01-31T22:00:00Z",
  "dateEnd": "2021-02-27T22:00:00Z",
  "rating": 0,
  "isActive": true,
  "locations": [{
    "city": "Vinnytsia",
    "country": "Ukraine",
    "address": "Soborna Street, 69",
    "latitude": 49.2330989,
    "longitude": 28.4667835
  }],
  "tags": ["cinema", "film"]
}, {
  "id": "8ea91555-3015-452f-a440-38e588cb7a5d",
  "title": "10%",
  "description": "sale 10%",
  "type": "hotel",
  "phone": "380993344657",
  "company": {
    "id": "00000000-0000-0000-0000-000000000000",
    "name": null,
    "email": null
  },
  "dateStart": "2021-01-31T22:00:00Z",
  "dateEnd": "2021-02-27T22:00:00Z",
  "rating": 0,
  "isActive": true,
  "locations": [{
    "city": "Odesa",
    "country": "Ukraine",
    "address": "",
    "latitude": 46.4873195,
    "longitude": 30.7392776
  }],
  "tags": ["hotel"]
}, {
  "id": "0211b300-dc3c-4d8b-a09b-0369a94c7732",
  "title": "3%",
  "description": "sale 3%",
  "type": "hotel",
  "phone": "+380983335533",
  "company": {
    "id": "e11bb746-cfd3-412d-9967-53732b90258e",
    "name": "Imperial",
    "email": "imperial@gmail.com"
  },
  "dateStart": "2021-02-18T12:42:32.716Z",
  "dateEnd": "2021-02-18T12:42:32.716Z",
  "rating": 0,
  "isActive": true,
  "locations": [{
    "city": "string",
    "country": "string",
    "address": "string",
    "latitude": 0,
    "longitude": 0
  }],
  "tags": ["string"]
}, {
  "id": "d0ba9c63-f1cc-4ec1-9144-b5cf256bcfcf",
  "title": "3%",
  "description": "sale 3%",
  "type": "hotel",
  "phone": "+380983335533",
  "company": {
    "id": "e11bb746-cfd3-412d-9967-53732b90258e",
    "name": "Imperial",
    "email": "imperial@gmail.com"
  },
  "dateStart": "2021-02-18T12:42:32.716Z",
  "dateEnd": "2021-02-18T12:42:32.716Z",
  "rating": 0,
  "isActive": true,
  "locations": [{
    "city": "string",
    "country": "string",
    "address": "string",
    "latitude": 0,
    "longitude": 0
  }],
  "tags": ["string"]
}, {
  "id": "c505249c-2380-4f3e-8589-d9f02c9a1404",
  "title": "5%",
  "description": "sale 5% for all evening sessions ",
  "type": "cinema",
  "phone": "380985555555",
  "company": {
    "id": "00000000-0000-0000-0000-000000000000",
    "name": null,
    "email": null
  },
  "dateStart": "2021-01-31T22:00:00Z",
  "dateEnd": "2021-02-27T22:00:00Z",
  "rating": 0,
  "isActive": true,
  "locations": [{
    "city": "Vinnytsia",
    "country": "Ukraine",
    "address": "Keletska Street, 80",
    "latitude": 49.2259212,
    "longitude": 28.4132876
  }],
  "tags": ["cinema", "films"]
}, {
  "id": "68a9da5e-bd36-4355-b131-ca02c57e784b",
  "title": "5%",
  "description": "sale 5%",
  "type": "hotel",
  "phone": "383333333333",
  "company": {
    "id": "00000000-0000-0000-0000-000000000000",
    "name": null,
    "email": null
  },
  "dateStart": "2021-01-31T22:00:00Z",
  "dateEnd": "2021-02-14T22:00:00Z",
  "rating": 0,
  "isActive": true,
  "locations": [{
    "city": "Vinnytsia",
    "country": "Ukraine",
    "address": "Soborna Street, 69",
    "latitude": 49.2330989,
    "longitude": 28.4667835
  }],
  "tags": ["hotel"]
}, {
  "id": "2cec8b20-7ae7-473b-8b10-77ab35edd714",
  "title": "5%",
  "description": "sale 5%",
  "type": "cinema",
  "phone": "380965555555",
  "company": {
    "id": "00000000-0000-0000-0000-000000000000",
    "name": null,
    "email": null
  },
  "dateStart": "2021-01-31T22:00:00Z",
  "dateEnd": "2021-02-25T22:00:00Z",
  "rating": 0,
  "isActive": true,
  "locations": [{
    "city": "Vinnytsia",
    "country": "Ukraine",
    "address": "Keletska Street, 70",
    "latitude": 49.2257885,
    "longitude": 28.4170463
  }],
  "tags": ["films", "cinema"]
}, {
  "id": "4797bff4-e3b6-4966-a019-896dda874344",
  "title": "5%",
  "description": "5% for all goods",
  "type": "store",
  "phone": "380960653366",
  "company": {
    "id": "00000000-0000-0000-0000-000000000000",
    "name": null,
    "email": null
  },
  "dateStart": "2021-01-31T22:00:00Z",
  "dateEnd": "2021-02-27T22:00:00Z",
  "rating": 0,
  "isActive": true,
  "locations": [{
    "city": "Minsk",
    "country": "Belarus",
    "address": "",
    "latitude": 53.902334,
    "longitude": 27.5618791
  }],
  "tags": ["gold"]
}, {
  "id": "4e92a06b-dafb-4b6f-a2ee-70ba6387d6af",
  "title": "5%",
  "description": "sale 5%",
  "type": "default",
  "phone": "380974444444",
  "company": {
    "id": "565fb4c8-9578-4a6c-9b7c-22a91df7b3dd",
    "name": "MegaTaxi",
    "email": "megataxi@gmail.com"
  },
  "dateStart": "2021-01-31T22:00:00Z",
  "dateEnd": "2021-02-15T22:00:00Z",
  "rating": 0,
  "isActive": true,
  "locations": [{
    "city": "Vinnytsia",
    "country": "Ukraine",
    "address": "",
    "latitude": 49.2320162,
    "longitude": 28.467975
  }],
  "tags": ["taxi"]
}, {
  "id": "2501c9b9-0f37-477b-a5f7-1d996ef6b628",
  "title": "7%",
  "description": "discount 7%",
  "type": "restaurant",
  "phone": "380971111111",
  "company": {
    "id": "00000000-0000-0000-0000-000000000000",
    "name": null,
    "email": null
  },
  "dateStart": "2021-01-31T22:00:00Z",
  "dateEnd": "2021-02-26T22:00:00Z",
  "rating": 0,
  "isActive": true,
  "locations": [{
    "city": "Minsk",
    "country": "Belarus",
    "address": "",
    "latitude": 53.902334,
    "longitude": 27.5618791
  }],
  "tags": ["coffee"]
}, {
  "id": "49fdf21b-dbef-4df7-8096-3d45d035d189",
  "title": "7%",
  "description": "sale 7%",
  "type": "default",
  "phone": "380996666666",
  "company": {
    "id": "00000000-0000-0000-0000-000000000000",
    "name": null,
    "email": null
  },
  "dateStart": "2021-01-31T22:00:00Z",
  "dateEnd": "2021-02-27T22:00:00Z",
  "rating": 0,
  "isActive": true,
  "locations": [{
    "city": "Minsk",
    "country": "Belarus",
    "address": "",
    "latitude": 53.902334,
    "longitude": 27.5618791
  }],
  "tags": ["taxi"]
}, {
  "id": "be60a947-e001-4db4-bad1-0f0e1dadb650",
  "title": "My Hata",
  "description": "My current location",
  "type": "hotel",
  "phone": "+380973560705",
  "company": {
    "id": "00000000-0000-0000-0000-000000000000",
    "name": null,
    "email": null
  },
  "dateStart": "2021-02-12T10:11:44.778Z",
  "dateEnd": "2021-02-12T10:11:44.778Z",
  "rating": 0,
  "isActive": true,
  "locations": [{
    "city": "Vinnytsia",
    "country": "Ukraine",
    "address": "vul Privokzalna 68",
    "latitude": 49.224853316690194,
    "longitude": 28.50281464713524
  }],
  "tags": ["house"]
}, {
  "id": "88a8deff-7576-4bc3-a680-89faf16aa00f",
  "title": "dfdfdsf",
  "description": "fdfdf",
  "type": "store",
  "phone": "444444444444",
  "company": {
    "id": "00000000-0000-0000-0000-000000000000",
    "name": null,
    "email": null
  },
  "dateStart": "2021-01-31T22:00:00Z",
  "dateEnd": "2021-02-23T22:00:00Z",
  "rating": 0,
  "isActive": true,
  "locations": [{
    "city": "Odesa",
    "country": "Ukraine",
    "address": "",
    "latitude": 46.4873195,
    "longitude": 30.7392776
  }],
  "tags": ["fdgdsf", "jfvd"]
}, {
  "id": "09bcbd23-d230-4401-a1ff-758c733ffc39",
  "title": "discount 5% ",
  "description": "discount 5% ",
  "type": "restaurant",
  "phone": "380996666666",
  "company": {
    "id": "00000000-0000-0000-0000-000000000000",
    "name": null,
    "email": null
  },
  "dateStart": "2021-01-31T22:00:00Z",
  "dateEnd": "2021-02-27T22:00:00Z",
  "rating": 0,
  "isActive": true,
  "locations": [{
    "city": "Minsk",
    "country": "Belarus",
    "address": "",
    "latitude": 53.902334,
    "longitude": 27.5618791
  }],
  "tags": ["coffee"]
}, {
  "id": "a2bdc89d-7213-42d7-afd5-3935a655ebf4",
  "title": "hfghfcgthy",
  "description": "rggrctjylkhjggsezrfwer",
  "type": "store",
  "phone": "874834578349",
  "company": {
    "id": "00000000-0000-0000-0000-000000000000",
    "name": null,
    "email": null
  },
  "dateStart": "2021-01-31T22:00:00Z",
  "dateEnd": "2021-02-17T22:00:00Z",
  "rating": 0,
  "isActive": true,
  "locations": [{
    "city": "Vinnytsia",
    "country": "Ukraine",
    "address": "Soborna Street, 76",
    "latitude": 49.234201,
    "longitude": 28.4626412
  }],
  "tags": ["gfhgf", "gfhgc"]
}, {
  "id": "35517ab8-94fb-4863-a9e7-61dbcb5001b1",
  "title": "sale 15%",
  "description": "sale 15%",
  "type": "cinema",
  "phone": "+38098-333-33-33",
  "company": {
    "id": "00000000-0000-0000-0000-000000000000",
    "name": null,
    "email": null
  },
  "dateStart": "2021-02-13T16:19:09.928Z",
  "dateEnd": "2021-02-13T16:19:09.928Z",
  "rating": 0,
  "isActive": true,
  "locations": [{
    "city": "string",
    "country": "string",
    "address": "string",
    "latitude": 42,
    "longitude": 27
  }],
  "tags": ["string"]
}, {
  "id": "c2554799-7bce-42cf-8a3f-95e981d7379e",
  "title": "sale 5%",
  "description": "sale 5% every Friday",
  "type": "restaurant",
  "phone": "380985555555",
  "company": {
    "id": "00000000-0000-0000-0000-000000000000",
    "name": null,
    "email": null
  },
  "dateStart": "2021-01-31T22:00:00Z",
  "dateEnd": "2021-02-16T22:00:00Z",
  "rating": 0,
  "isActive": true,
  "locations": [{
    "city": "Odessa",
    "country": "Ukraine",
    "address": "",
    "latitude": 46.4873195,
    "longitude": 30.7392776
  }],
  "tags": ["sale", "cafe", "restaurant"]
}, {
  "id": "4808d8a1-8f5d-4ec7-831d-59817bf78d21",
  "title": "vfdvdffvfv",
  "description": "jlkfj;gljlkf",
  "type": "restaurant",
  "phone": "748537485555",
  "company": {
    "id": "00000000-0000-0000-0000-000000000000",
    "name": null,
    "email": null
  },
  "dateStart": "2021-01-31T22:00:00Z",
  "dateEnd": "2021-02-15T22:00:00Z",
  "rating": 0,
  "isActive": true,
  "locations": [{
    "city": "Vinnytsia",
    "country": "Ukraine",
    "address": "Soborna Street, 76",
    "latitude": 49.234201,
    "longitude": 28.4626412
  }],
  "tags": ["jkfnv", "nfjkvnkf"]
}, {
  "id": "dab9e202-1755-43a4-b0d2-783d06e0173d",
  "title": "Пицца 10",
  "description": "string",
  "type": "string",
  "phone": "string",
  "company": {
    "id": "00000000-0000-0000-0000-000000000000",
    "name": null,
    "email": null
  },
  "dateStart": "2021-02-12T08:21:46.009Z",
  "dateEnd": "2021-02-12T08:21:46.009Z",
  "rating": 0,
  "isActive": true,
  "locations": [{
    "city": "string",
    "country": "string",
    "address": "string",
    "latitude": 0,
    "longitude": 0
  }],
  "tags": ["string"]
}];

const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: 'bd36d13d-a710-47f5-b3e2-94aeaabbaf5b',
        title: 'Upgrade to a business class',
        price: 97
      },
      {
        id: '492bf152-7b65-4e79-a8b6-790b20856ffb',
        title: 'Choose the radio station',
        price: 89
      },
      {
        id: '2da69326-0c9f-4c55-87e3-bba4f2d751cc',
        title: 'Choose temperature',
        price: 133
      },
      {
        id: 'aacb910c-6632-4041-bf66-87ea2ebd7a0e',
        title: 'Drive quickly, I\'m in a hurry',
        price: 192
      },
      {
        id: '69c33a94-5508-4461-8aca-ce0ce58742c2',
        title: 'Drive slowly',
        price: 71
      }
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        id: '47e9a9e7-25dc-4084-9d24-05ffca5046e4',
        title: 'Infotainment system',
        price: 127
      },
      {
        id: '4f92495a-6392-4b06-9c39-fdfa36364397',
        title: 'Order meal',
        price: 84
      },
      {
        id: 'bf9a09e4-325b-4739-ac50-194a4c9b857f',
        title: 'Choose seats',
        price: 162
      }
    ]
  },
  {
    type: 'train',
    offers: [
      {
        id: 'b88b933f-92b5-4606-ac61-f57535509bd7',
        title: 'Book a taxi at the arrival point',
        price: 124
      },
      {
        id: '45c0100c-659f-4c58-a14e-3db9ce3243f5',
        title: 'Order a breakfast',
        price: 59
      },
      {
        id: '7a94491e-73b3-4112-ad85-5370903bccb4',
        title: 'Wake up at a certain time',
        price: 68
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: 'ea734ba3-33a5-4d61-8e7d-5f1823275684',
        title: 'Choose meal',
        price: 65
      },
      {
        id: '72cf1d2a-d32c-452d-90ee-b5f59abed745',
        title: 'Choose seats',
        price: 194
      },
      {
        id: '621c7257-9203-4281-8a0f-1558cfa64646',
        title: 'Upgrade to comfort class',
        price: 176
      },
      {
        id: 'f6575745-b575-41c0-a9b2-36a3185dcd72',
        title: 'Upgrade to business class',
        price: 61
      },
      {
        id: 'c523b80e-c2d1-4a87-9908-eb8ef8e80bb4',
        title: 'Add luggage',
        price: 169
      },
      {
        id: 'f7de00e7-5a27-4bb9-a270-fda7ceb8b988',
        title: 'Business lounge',
        price: 88
      }
    ]
  },
  {
    type: 'check-in',
    offers: [
      {
        id: '23099b2c-1d49-4674-9228-6d15411dfddd',
        title: 'Choose the time of check-in',
        price: 75
      },
      {
        id: '333c87f5-025e-4f54-9aeb-0c038c1323bd',
        title: 'Choose the time of check-out',
        price: 170
      },
      {
        id: '6fead699-de9b-427a-b81b-b0ea65b5631b',
        title: 'Add breakfast',
        price: 120
      },
      {
        id: 'a508f653-310a-4d04-8427-34f082ee0dbf',
        title: 'Laundry',
        price: 164
      },
      {
        id: 'be1bd718-576d-4ff0-92ee-e2b2600815af',
        title: 'Order a meal from the restaurant',
        price: 193
      }
    ]
  },
  {
    type: 'sightseeing',
    offers: []
  },
  {
    type: 'ship',
    offers: [
      {
        id: 'a510a7e3-d12b-45f5-bbf4-632ffa5e70c9',
        title: 'Choose meal',
        price: 124
      },
      {
        id: '05cd57bb-9465-484e-a2c0-3af6291639ee',
        title: 'Choose seats',
        price: 31
      },
      {
        id: '7950bfb4-be1d-4fc4-9c89-b171b4af31d9',
        title: 'Upgrade to comfort class',
        price: 57
      },
      {
        id: '2143bac7-266e-4aeb-b4d6-f847d28d88cd',
        title: 'Upgrade to business class',
        price: 179
      },
      {
        id: '0f3da8d8-be07-4592-aed9-cdcd3ef5fdb2',
        title: 'Add luggage',
        price: 77
      },
      {
        id: 'dd45da10-01d6-4e70-aa90-e4b151223fef',
        title: 'Business lounge',
        price: 44
      }
    ]
  },
  {
    type: 'drive',
    offers: [
      {
        id: '63963080-8427-4294-94df-f1ab293ada93',
        title: 'With automatic transmission',
        price: 66
      },
      {
        id: '81c2b53e-3743-4f0f-b320-dd221b439c67',
        title: 'With air conditioning',
        price: 136
      }
    ]
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: 'd760c4b7-25c9-406c-917f-6c274ac3f835',
        title: 'Choose live music',
        price: 73
      },
      {
        id: '768df0fc-c766-4062-8fac-7d6db5f69108',
        title: 'Choose VIP area',
        price: 116
      }
    ]
  }
];

export const getOffers = () => mockOffers;

export const getOffersByType = (type) => mockOffers.find((offer) => offer.type === type).offers;

export const getOfferByTypeAndId = (type, id) => getOffersByType(type).find((offer) => offer.id === id);



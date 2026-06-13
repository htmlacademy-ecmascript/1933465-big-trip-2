const mockPoints = [
  {
    id: 'c9858a89-615b-439a-a859-9e0c38dc4560',
    basePrice: 831,
    dateFrom: '2026-08-04T01:08:04.671Z',
    dateTo: '2026-08-05T22:54:04.671Z',
    destination: '2722cc2f-6ca3-4dfc-93ae-720f430d6aa9',
    isFavorite: false,
    offers: [],
    type: 'sightseeing'
  },
  {
    id: 'c992c938-f675-4e59-a5d9-ec00ba537a4b',
    basePrice: 1341,
    dateFrom: '2026-08-06T13:42:04.671Z',
    dateTo: '2026-08-08T03:56:04.671Z',
    destination: 'a7bb1bf7-36ae-4ee3-94d3-c49ca86c9bdd',
    isFavorite: true,
    offers: [
      '7a94491e-73b3-4112-ad85-5370903bccb4'
    ],
    type: 'train'
  },
  {
    id: '7d88371c-60c8-4d21-8b31-fe17f0105f0c',
    basePrice: 1299,
    dateFrom: '2026-08-10T00:11:04.671Z',
    dateTo: '2026-08-11T04:07:04.671Z',
    destination: '1f286277-3be6-4b0a-a0fc-f5963e979dd6',
    isFavorite: true,
    offers: [
      '6fead699-de9b-427a-b81b-b0ea65b5631b',
      'a508f653-310a-4d04-8427-34f082ee0dbf',
      'be1bd718-576d-4ff0-92ee-e2b2600815af'
    ],
    type: 'check-in'
  },
  {
    id: '774afe7c-0f0c-4ad8-a154-873d8184777a',
    basePrice: 549,
    dateFrom: '2026-08-12T10:31:04.671Z',
    dateTo: '2026-08-13T10:24:04.671Z',
    destination: '2722cc2f-6ca3-4dfc-93ae-720f430d6aa9',
    isFavorite: false,
    offers: [],
    type: 'restaurant'
  },
  {
    id: '5126ff11-37e2-4983-a020-19b6f6c99711',
    basePrice: 1844,
    dateFrom: '2026-08-13T20:39:04.671Z',
    dateTo: '2026-08-14T07:20:04.671Z',
    destination: '8d837b27-44b0-4166-bd32-a494671d22af',
    isFavorite: false,
    offers: [],
    type: 'sightseeing'
  },
  {
    id: '440aa61d-8f19-453c-bddc-1b2a482ce8b4',
    basePrice: 4021,
    dateFrom: '2026-08-14T22:00:04.671Z',
    dateTo: '2026-08-16T15:26:04.671Z',
    destination: '2722cc2f-6ca3-4dfc-93ae-720f430d6aa9',
    isFavorite: false,
    offers: [
      'd760c4b7-25c9-406c-917f-6c274ac3f835',
      '768df0fc-c766-4062-8fac-7d6db5f69108'
    ],
    type: 'restaurant'
  },
  {
    id: '0233975a-e0ab-4ceb-a513-edaf9ec716a5',
    basePrice: 8778,
    dateFrom: '2026-08-18T15:50:04.671Z',
    dateTo: '2026-08-20T03:27:04.671Z',
    destination: '2722cc2f-6ca3-4dfc-93ae-720f430d6aa9',
    isFavorite: false,
    offers: [],
    type: 'restaurant'
  },
  {
    id: '8fe196f4-1b15-4297-ac05-008ebe6be707',
    basePrice: 4177,
    dateFrom: '2026-08-20T22:04:04.671Z',
    dateTo: '2026-08-21T16:00:04.671Z',
    destination: '1f286277-3be6-4b0a-a0fc-f5963e979dd6',
    isFavorite: true,
    offers: [],
    type: 'sightseeing'
  },
  {
    id: '6f7dd88e-8584-43e1-b97c-e982b676d446',
    basePrice: 3610,
    dateFrom: '2026-08-21T22:33:04.671Z',
    dateTo: '2026-08-23T19:17:04.671Z',
    destination: 'a6aef91b-4d70-4788-bb77-99a01b713db5',
    isFavorite: true,
    offers: [
      '2143bac7-266e-4aeb-b4d6-f847d28d88cd',
      '0f3da8d8-be07-4592-aed9-cdcd3ef5fdb2',
      'dd45da10-01d6-4e70-aa90-e4b151223fef'
    ],
    type: 'ship'
  },
  {
    id: '1a344450-33ff-4313-8a5b-73d3b5363eef',
    basePrice: 7940,
    dateFrom: '2026-08-25T02:00:04.671Z',
    dateTo: '2026-08-26T10:38:04.671Z',
    destination: 'a6aef91b-4d70-4788-bb77-99a01b713db5',
    isFavorite: false,
    offers: [
      '4f92495a-6392-4b06-9c39-fdfa36364397',
      'bf9a09e4-325b-4739-ac50-194a4c9b857f'
    ],
    type: 'bus'
  },
  {
    id: '64f05050-aef3-470b-ba60-df3dd091f03d',
    basePrice: 8233,
    dateFrom: '2026-08-27T20:15:04.671Z',
    dateTo: '2026-08-28T21:14:04.671Z',
    destination: 'a6aef91b-4d70-4788-bb77-99a01b713db5',
    isFavorite: true,
    offers: [
      '768df0fc-c766-4062-8fac-7d6db5f69108'
    ],
    type: 'restaurant'
  },
  {
    id: '0e811bbc-b42f-40b1-9f67-3456c9183ea1',
    basePrice: 7283,
    dateFrom: '2026-08-30T13:24:04.671Z',
    dateTo: '2026-08-30T20:07:04.671Z',
    destination: 'a7bb1bf7-36ae-4ee3-94d3-c49ca86c9bdd',
    isFavorite: true,
    offers: [
      '81c2b53e-3743-4f0f-b320-dd221b439c67'
    ],
    type: 'drive'
  },
  {
    id: '4205c21a-80a8-490f-804c-0e88b9c7441a',
    basePrice: 3769,
    dateFrom: '2026-08-31T21:59:04.671Z',
    dateTo: '2026-09-01T09:51:04.671Z',
    destination: 'ea4ac39a-8967-4e97-8327-bda7ac076de5',
    isFavorite: true,
    offers: [
      'f6575745-b575-41c0-a9b2-36a3185dcd72',
      'c523b80e-c2d1-4a87-9908-eb8ef8e80bb4',
      'f7de00e7-5a27-4bb9-a270-fda7ceb8b988'
    ],
    type: 'flight'
  },
  {
    id: 'df4801e0-6575-42c9-8681-56cc8ae85711',
    basePrice: 9595,
    dateFrom: '2026-09-01T15:56:04.671Z',
    dateTo: '2026-09-03T10:02:04.671Z',
    destination: 'ea4ac39a-8967-4e97-8327-bda7ac076de5',
    isFavorite: false,
    offers: [
      'd760c4b7-25c9-406c-917f-6c274ac3f835',
      '768df0fc-c766-4062-8fac-7d6db5f69108'
    ],
    type: 'restaurant'
  },
  {
    id: '8edd3d19-9b44-45af-b77d-579e17f32d6e',
    basePrice: 5928,
    dateFrom: '2026-09-04T18:45:04.671Z',
    dateTo: '2026-09-06T07:23:04.671Z',
    destination: '8d837b27-44b0-4166-bd32-a494671d22af',
    isFavorite: false,
    offers: [
      '69c33a94-5508-4461-8aca-ce0ce58742c2'
    ],
    type: 'taxi'
  },
  {
    id: '8a67825c-c542-4125-903e-d2fddc0d0918',
    basePrice: 2647,
    dateFrom: '2026-09-07T07:19:04.671Z',
    dateTo: '2026-09-08T00:45:04.671Z',
    destination: 'ea4ac39a-8967-4e97-8327-bda7ac076de5',
    isFavorite: false,
    offers: [
      '768df0fc-c766-4062-8fac-7d6db5f69108'
    ],
    type: 'restaurant'
  },
  {
    id: '9960cb91-66ab-47bd-b9e0-6d7e1ea0f0e8',
    basePrice: 2399,
    dateFrom: '2026-09-09T05:07:04.671Z',
    dateTo: '2026-09-11T04:10:04.671Z',
    destination: '1f286277-3be6-4b0a-a0fc-f5963e979dd6',
    isFavorite: true,
    offers: [
      'b88b933f-92b5-4606-ac61-f57535509bd7',
      '45c0100c-659f-4c58-a14e-3db9ce3243f5',
      '7a94491e-73b3-4112-ad85-5370903bccb4'
    ],
    type: 'train'
  },
  {
    id: '984dee50-2a40-49c4-a85d-b9d0d40b4717',
    basePrice: 4786,
    dateFrom: '2026-09-12T04:26:04.671Z',
    dateTo: '2026-09-13T11:59:04.671Z',
    destination: '1f286277-3be6-4b0a-a0fc-f5963e979dd6',
    isFavorite: false,
    offers: [
      '7a94491e-73b3-4112-ad85-5370903bccb4'
    ],
    type: 'train'
  },
  {
    id: 'bae9977b-8292-435b-ae7d-72cc1b7fac14',
    basePrice: 8580,
    dateFrom: '2026-09-14T09:15:04.671Z',
    dateTo: '2026-09-16T01:25:04.671Z',
    destination: '2722cc2f-6ca3-4dfc-93ae-720f430d6aa9',
    isFavorite: true,
    offers: [
      '4f92495a-6392-4b06-9c39-fdfa36364397',
      'bf9a09e4-325b-4739-ac50-194a4c9b857f'
    ],
    type: 'bus'
  },
  {
    id: '3a8c7957-ecc8-43e9-9fc6-52b743b821a6',
    basePrice: 2606,
    dateFrom: '2026-09-17T22:03:04.671Z',
    dateTo: '2026-09-18T13:36:04.671Z',
    destination: '8d837b27-44b0-4166-bd32-a494671d22af',
    isFavorite: false,
    offers: [
      '23099b2c-1d49-4674-9228-6d15411dfddd',
      '333c87f5-025e-4f54-9aeb-0c038c1323bd',
      '6fead699-de9b-427a-b81b-b0ea65b5631b',
      'a508f653-310a-4d04-8427-34f082ee0dbf',
      'be1bd718-576d-4ff0-92ee-e2b2600815af'
    ],
    type: 'check-in'
  },
  {
    id: 'aff6ad5b-7d40-44b9-8f5f-7e37a4639da9',
    basePrice: 6709,
    dateFrom: '2026-09-18T20:23:04.671Z',
    dateTo: '2026-09-20T12:07:04.671Z',
    destination: '1f286277-3be6-4b0a-a0fc-f5963e979dd6',
    isFavorite: true,
    offers: [
      '768df0fc-c766-4062-8fac-7d6db5f69108'
    ],
    type: 'restaurant'
  },
  {
    id: 'd042ef3a-63be-449e-ad82-bb68ab5163b6',
    basePrice: 6902,
    dateFrom: '2026-09-21T12:56:04.671Z',
    dateTo: '2026-09-23T12:14:04.671Z',
    destination: 'f95fb17f-f211-465a-b37e-13025ca1ad4d',
    isFavorite: true,
    offers: [
      '47e9a9e7-25dc-4084-9d24-05ffca5046e4',
      '4f92495a-6392-4b06-9c39-fdfa36364397',
      'bf9a09e4-325b-4739-ac50-194a4c9b857f'
    ],
    type: 'bus'
  },
  {
    id: '2596d8c4-ec8c-4864-bf35-e5e0651c63bf',
    basePrice: 8576,
    dateFrom: '2026-09-24T11:16:04.671Z',
    dateTo: '2026-09-26T07:19:04.671Z',
    destination: '0aaef692-2d3f-4c51-aa07-255328a6ab28',
    isFavorite: false,
    offers: [
      '69c33a94-5508-4461-8aca-ce0ce58742c2'
    ],
    type: 'taxi'
  },
  {
    id: '3d14830e-f856-4e83-b54c-4cdc95a4b7c4',
    basePrice: 710,
    dateFrom: '2026-09-27T16:44:04.671Z',
    dateTo: '2026-09-28T14:57:04.671Z',
    destination: 'a7bb1bf7-36ae-4ee3-94d3-c49ca86c9bdd',
    isFavorite: false,
    offers: [
      '4f92495a-6392-4b06-9c39-fdfa36364397',
      'bf9a09e4-325b-4739-ac50-194a4c9b857f'
    ],
    type: 'bus'
  },
  {
    id: 'ba437454-31d4-4e13-9669-3e3173687da4',
    basePrice: 5010,
    dateFrom: '2026-09-30T00:56:04.671Z',
    dateTo: '2026-10-01T19:09:04.671Z',
    destination: 'bfd934e7-fc58-42dc-b000-18f17cf14050',
    isFavorite: true,
    offers: [
      'd760c4b7-25c9-406c-917f-6c274ac3f835',
      '768df0fc-c766-4062-8fac-7d6db5f69108'
    ],
    type: 'restaurant'
  }
];

export const getRandomPoints = (count) => mockPoints.slice(0, count);

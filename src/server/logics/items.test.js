const items = require('../models/items');
const itemLogic = require('./item');

test('Search without filter', () => {
  const result = 20;
  let reqObj = [{ "name": "Kale Caesar Pasta, Turmeric Satay Broccoli & Lemon Cashew Greens" }];
  expect(itemLogic(items, "")).toEqual(items);
})


test('Search with filter', () => {
  const result = 1;
  const res = { "send": [] }
  let reqObj = [{ "name": "Kale Caesar Pasta, Turmeric Satay Broccoli & Lemon Cashew Greens" }];
  expect(itemLogic(reqObj, 'Broccoli').length).toEqual(result);
})

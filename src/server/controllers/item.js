const itemLogic = require('../logics/item');// Business logic
const items = require('../models/items');// Layer to interect with model/DB
const selectedList = [];
console.log('-----selectedList: ', selectedList.length);

// API's as per end-point
const getAllItems = (req, res) => {
    res.send({ items });
};

const getItemsByName = (req, res) => {
    const itmName = req.query.name

    console.log('itmName: ', itmName)
    if (itmName) {
        let filteredItems = itemLogic(items, itmName);
        res.send({ items: filteredItems })
    } else {
        res.send({ items })
    }
};

const getAllDietaryTypes = (req, res) => {
    const allDietaryTypes =
        ([...new Set([...
            (items.map(
                (item) => {
                    return item.dietaries
                })
            )].flat())]);
    res.send({ allDietaryTypes })
};

//export controller functions
module.exports = {
    // end-points
    getAllItems,
    getItemsByName,
    getAllDietaryTypes,
};

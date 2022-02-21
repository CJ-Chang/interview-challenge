const itmUtil = {
    dietaryCount: (obj) => {
        let tagResult = {};
        let initialCount = 1;
        let newItem = obj || [];
        newItem.map(itm => {
            itm.dietaries.map(diet => {
                if (tagResult[diet] !== undefined) {
                    tagResult[diet] += 1;
                } else {
                    tagResult[diet] = initialCount;
                }
            })
        })
        return tagResult;
    }
}
export default itmUtil;

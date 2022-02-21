module.exports = (data, filterKey) => {
    let filteredData;

    filteredData = data.filter(
        (item) => item.name.toLowerCase()
            .includes(filterKey.toLowerCase())
    );

    return filteredData;
}

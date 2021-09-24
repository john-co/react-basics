function filterByTerm(inputArr, searchTerm) {
  if (!searchTerm) throw Error("searchTerm cannot be empty");
  if (!inputArr.length) throw Error("inputArr cannot be empty");
  const regex = new RegExp(searchTerm, "i")

  function matchSearchTerm(arrayElement) {
    return arrayElement.url.match(regex);
  }

  return inputArr.filter(matchSearchTerm);

}

module.exports = filterByTerm
export const getRandomArrayElements = function(arr, count) {
    var min = arr.length - count
    var shuffled = shuffle(arr)
    return shuffled.slice(min);
}

export const removeItemOnce = function (arr, value) {
    var result = [...arr]
    var index = result.indexOf(value);
    if (index > -1) {
      result.splice(index, 1);
    }
    return result;
  }

export const getRandomCard = function (arr, notThisCard){
    var randomIndex = Math.floor(Math.random() * arr.length);
    var item = arr[randomIndex];
    if(item === notThisCard){
      return getRandomCard(arr, notThisCard)
    }
    return(item);
  }


export const shuffle = function (array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
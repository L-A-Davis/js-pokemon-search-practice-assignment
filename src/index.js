
document.addEventListener("DOMContentLoaded", function() {

let searchFor = ""
let cardsContainer = document.getElementById("pokemon-container")


let searchFormInput = document.getElementById("pokemon-search-input")

searchFormInput.addEventListener('keyup', function(key) {
    while (cardsContainer.firstChild) {
    cardsContainer.removeChild(cardsContainer.firstChild);
  }
  if( key.keyCode === 8 || key.keyCode === 46 ) {
    searchFor = searchFor.slice(0, -1)
  } else  {
  letter = String.fromCharCode(key.which)
  letterToUse = letter.toLowerCase()
  searchFor += letterToUse
}
  let list = searchDataBase(searchFor)
  displayCards(list)

})


function searchDataBase (searchFor) {
  let outputList = data.pokemons.filter(function(obj) {
    return obj.name.indexOf(searchFor) !== -1;
  })
  return outputList
}

function displayCards(list) {
list.forEach(function(element) {
  let name = element.name
  let frontImgLink = element.sprites.front
  let backImgLink = element.sprites.back

  new Pokemon(name, frontImgLink, backImgLink)
})
}

cardsContainer.addEventListener("click", handleDelegatedFlipcard)

function handleDelegatedFlipcard(event) {
     if (event.target.className === "center-text flip-image"){
       event.preventDefault()
       let name = event.target.dataset.pokemon
       let obj = Pokemon.findByName(name)
       let outerContainer = event.target.parentNode
       let image = outerContainer.querySelector("img")
       let link = image.src
       if (link == obj.frontImgLink) {
         image.src = obj.backImgLink
       } else {
         image.src = obj.frontImgLink
       }
     }
   }
})

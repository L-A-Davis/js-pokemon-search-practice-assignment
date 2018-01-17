const cardsContainer = document.getElementById("pokemon-container")

let store = []
class Pokemon {
   constructor (name, frontImgLink, backImgLink) {
   this.name = name;
   this.frontImgLink = frontImgLink;
   this.backImgLink = backImgLink;
   this.imgLink = frontImgLink
   store.push(this)
   let divContainer = this.createOuterDiv()

   this.createTitle(divContainer)
   let innerDiv = this.createInnerDiv(divContainer)
   let innerInnerDiv = this.createInnerInnerDiv(innerDiv)
   this.createImage(innerInnerDiv)
   this.createText(divContainer)
}

  static findByName(name){
  return store.find(char => char.name === name)
}


   createOuterDiv() {
     let divContainer = document.createElement("div")
     divContainer.setAttribute("class", "pokemon-container")
     divContainer.style.background = '#fecd2f'
     divContainer.style.margin = '10px'
     divContainer.style.color = '#2d72fc'
     document.getElementById("pokemon-container").appendChild(divContainer)
     return divContainer
   }

    createTitle(divContainer){
      let title = document.createElement("h1")
      title.setAttribute("class", "center-text")
      title.innerText = this.name
      divContainer.appendChild(title)
    }

    createInnerDiv(divContainer) {
      let innerDiv = document.createElement("div")
      // innerDiv.style.background = "green"
      innerDiv.style.width = "239px"
      innerDiv.style.margin = "auto"
      divContainer.appendChild(innerDiv)
      return innerDiv
    }


    createInnerInnerDiv(innerDiv) {
      let innerInnerDiv = document.createElement("div")
      // innerInnerDiv.style.background = "blue"
      innerInnerDiv.style.width = "96px"
      innerInnerDiv.style.margin = "auto"
      innerDiv.appendChild(innerInnerDiv)
      return innerInnerDiv
    }

    createImage(innerInnerDiv) {
      let image = document.createElement("img")
      image.src = this.imgLink
      innerInnerDiv.appendChild(image)
  }

    createText(divContainer) {
      let fliptext = document.createElement("p")
      fliptext.setAttribute("class", "center-text flip-image" )
      fliptext.dataset.pokemon = this.name
      fliptext.innerText = "flip card"
      divContainer.appendChild(fliptext)

    }




}

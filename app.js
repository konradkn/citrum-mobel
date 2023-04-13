//selectors ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const mainDiv = document.querySelector("#main-div");
const restartButton = document.querySelector("#restart-button");
const optionButtons1 = document.querySelector("#button1");
const optionButtons2 = document.querySelector("#button2");
const optionButtons3 = document.querySelector("#button3");
const optionButtons4 = document.querySelector("#button4");
const optionButtons5 = document.querySelector("#button5");
let buttons = document.getElementById("kitchen-buttons");

//change color selectors
const changeColor1 = document.querySelector('#change-button1')
const changeColor2 = document.querySelector('#change-button2')

//price selector 
const priceDisplay = document.getElementById('price-display')

let priceTags = [2500, 3000, 4000, 2000, 4000]



//functions ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

let counter = 0
const showPrice = (e) => {
    priceDisplay.textContent = counter
}

const add = (e) => {
  const kitchenElement = document.createElement("div");

  if (e.target.id == "button1") {
    kitchenElement;
    kitchenElement.classList.add("kitchen-element1");
    kitchenElement.setAttribute("id", "kitchen1");
    mainDiv.append(kitchenElement);
    counter += priceTags[0]
  } else if (e.target.id == "button2") {
    kitchenElement;
    kitchenElement.classList.add("kitchen-element2");
    mainDiv.append(kitchenElement);
    counter += priceTags[1]
  } else if (e.target.id == "button3") {
    kitchenElement;
    kitchenElement.classList.add("kitchen-element3");
    mainDiv.append(kitchenElement);
    counter += priceTags[2]
  } else if (e.target.id == "button4") {
    kitchenElement;
    kitchenElement.classList.add("kitchen-element4");
    mainDiv.append(kitchenElement);
    counter += priceTags[3]
  } else if (e.target.id == "button5") {
    kitchenElement;
    kitchenElement.classList.add("kitchen-element5");
    mainDiv.append(kitchenElement);
    optionButtons5.hidden = true;
    counter += priceTags[4]
  }


  const element = document.getElementById("main-div");

  if (element.closest("#main-div").querySelectorAll("div").length >= 7) {
    buttons.hidden = true;
  } 

  showPrice()

//   console.log(e.target.id);
};

const restart = () => {
    document.location.reload();
  };



//event listeners /////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("click", (e) => {
  const target = e.target.closest("#main-div");

  console.log(e.target.classList);

  if (target) {
    e.target.remove();
    buttons.hidden = false;
  }

  if (e.target.classList.value == "kitchen-element5") {
    optionButtons5.hidden = false;
  }

  if(e.target.classList.value == 'kitchen-element1') {
    counter -= priceTags[0]
  } else if(e.target.classList.value == 'kitchen-element2') {
    counter -= priceTags[1]
  } else if(e.target.classList.value == 'kitchen-element3') {
    counter -= priceTags[2]
  } else if(e.target.classList.value == 'kitchen-element4') {
    counter -= priceTags[3]
  } else if(e.target.classList.value == 'kitchen-element5') {
    counter -= priceTags[4]
  }

  showPrice()
});


document.addEventListener("mouseover", (e) => {
  let eraseNote = document.getElementById('erase-notification')
  const target = e.target.closest("#main-div");

  if(target) {
    eraseNote.style.display = 'block'
  } else {
    eraseNote.style.display = 'none'
  }

})




optionButtons1.addEventListener("click", add);
optionButtons2.addEventListener("click", add);
optionButtons3.addEventListener("click", add);
optionButtons4.addEventListener("click", add);
optionButtons5.addEventListener("click", add);
restartButton.addEventListener("click", restart);

//function calls ////////////////////////////////////////////////////////////////////////////////////////////////////
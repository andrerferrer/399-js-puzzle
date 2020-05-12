/////////////////////
// The hint button //
/////////////////////

// Select an element
const button = document.querySelector("#show-hint");
const hiddenText = document.querySelector(".hint");

// add eventListener
button.addEventListener('click', (event) => {
  // do the callback
  // toggle the active class on
  // the hiddenText element
  hiddenText.classList.toggle("active");
});

// The fancy way
// const callBack = (event) => {
//   // do the callback
//   // toggle the active class on
//   // the hiddenText element
//   hiddenText.classList.toggle("active");
// }

// // add eventListener
// button.addEventListener('click', callBack);

/////////////////////
// The game itself //
/////////////////////

const canMove = (box) => {
  // Find my box position
  const rowPosition = box.parentElement.rowIndex;
  const colPosition = box.cellIndex;

  // Find the empty box
  const emptyBox = document.querySelector("td.empty");
  //  Find the position of the empty box 
  const emptyBoxRowPosition = emptyBox.parentElement.rowIndex;
  const emptyBoxColPosition = emptyBox.cellIndex;

  const rowDifference =  Math.abs(emptyBoxRowPosition - rowPosition);
  const colDifference = Math.abs(emptyBoxColPosition - colPosition);

  // Compare if they are in the same row but one col apart
  // Compare if they are in the same col but one row apart
  return (rowDifference === 0 && colDifference === 1) || (colDifference === 0 && rowDifference === 1);
};

const moveBox = (box) => {
  const emptyBox = document.querySelector("td.empty");
  // take the content of the box
  const content = box.innerText; 
  // put it inside the emptyBox
  emptyBox.innerText = content;
  // make my box empty
  box.innerText = "";
  // make the emptyBox without the empty class
  emptyBox.classList.remove("empty");
  // make the box with the empty class
  box.classList.add("empty");
};

const checkIfGameIsOver = () => {
  // have all of the boxes
  const boxes = document.querySelectorAll("td");
  // create a numbers array
  const numbersArray = [];
  boxes.forEach((box) => {
    numbersArray.push(box.innerText);
  });
  // check if the numbers array to string
  const arrayToString = numbersArray.join(",");
  //  is equal to the right order
  const gameIsOver = arrayToString === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,";
  if (gameIsOver) {
    // alert and restart the game
    alert("You Win!");
    location.reload();
  };
};

const run = () => {
  // select all of the boxes
  const boxes = document.querySelectorAll("td");
  // for each of my boxes
  boxes.forEach( (box) => {  
    // add an event listener for a click
    box.addEventListener('click', (event) => {
      // when the click happens
      // check if the box can move
      // if yes I'm going to move the box
      if (canMove(box) === true) moveBox(box);
      // then, I'm going check if game is over
      checkIfGameIsOver();
    })
  });
}

run();

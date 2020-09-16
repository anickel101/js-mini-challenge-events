/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

function headerEventHandler() {
  const header = document.querySelector("#header");
  header.addEventListener("click", function(e) {
    toggleColor(header);
  });
}

headerEventHandler();

/***** Deliverable 2 *****/
const addPlayerForm = document.querySelector("#new-player-form");
addPlayerForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const player = {
    number: addPlayerForm.number.value,
    name: addPlayerForm.name.value,
    nickname: addPlayerForm.nickname.value,
    photo: addPlayerForm.photo.value,
    likes: 0
  }
  addPlayerForm.reset();
  renderPlayer(player);
})

/***** Deliverable 3 *****/

playerContainer.addEventListener("click", function(e) {

	if(e.target && e.target.nodeName == "BUTTON") {
    likes = e.target.parentNode.querySelector("p").textContent;
    numLikes = parseInt(likes.split(" ")[0]) + 1;
    e.target.parentNode.querySelector("p").textContent = numLikes + " likes"
	}
});


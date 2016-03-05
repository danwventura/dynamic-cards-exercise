//Creating variables
var create = document.getElementById("create");
var erase = document.getElementsByClassName("delete");
var input = document.getElementById("input");
var container = document.getElementById("container");
var card = document.getElementsByName("card")

// Creating Event Listener to run createCard on click
create.addEventListener("click", createCard);

//Function to create card HTML
function createCard(){
  var output = '<div class="card"> <section> <p class="text">' + input.value + '</p> </section> <input type="button" class="delete" value="Delete"> </div>';

container.innerHTML += output;

DeleteBtnEl();
}


function DeleteBtnEl() {
  for(var i = 0; i < erase.length; i++){
    erase[i].addEventListener("click", function(event){
  card.remove(event.target.parentElement);
  })
}
}

// Creating Event Listener to run deleteCard




const searchBar = document.getElementById('pokiName');
const charactersList = document.getElementById('charactersList');
let filteredCharacters = []; 
const unlist = document.getElementById("cards");
//load in all tags "li" within cards
const list = unlist.getElementsByTagName("li");
function createList(input){
    console.log(input);
    var li = document.createElement('li');
    var img = document.createElement('img');
    var title = document.createElement('h2');
    var type = document.createElement('p');
    var evolution = document.createElement('p');

    for(let i=0; i<input.length; i++){
    li.innerHTML = input[i];
    img = input[i].firstElementChild;
    title.innerHTML = input[i].firstElementChild.nextElementSibling;
    type.innerHTML = input[i].firstElementChild.nextElementSibling.nextElementSibling;
    evolution.innerHTML = input[i].firstElementChild.nextElementSibling.nextElementSibling;
    }
    console.log(img);
   
   
   
}

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    console.log (searchString);
    console.log(list);
    for(let i=0; i<20;i++){
        //load h2 headers
        const card_id = list[i].getElementsByClassName("card-title")[0];
        //console.log(card_id);
        //load card type
        const card_type1 = list[i].getElementsByClassName("card-type")[0]; 
        //load evolution stage
        const evolution = list[i].getElementsByClassName("evolution")[0];
        const image = list[i].getElementsByClassName("image")[0]; 
        if(card_id.innerHTML.toLowerCase().indexOf(searchString) > -1){ 
            filteredCharacters.push(list[i]);
            }
            //  displayCharacters(filteredCharacters);
        }
        console.log(filteredCharacters);
        //console.log(charactersList);
        console.log(charactersList.appendChild(createList(filteredCharacters)));
    });



    
           
                               
             
                        
  

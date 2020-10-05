const searchBar = document.getElementById('pokiName');
const searchBar1 = document.getElementById('Number');
const unlist = document.getElementById("cards");
//load in all tags "li" within cards
const list = unlist.getElementsByTagName("li");
var myDiv = document.getElementById("myDiv");
var errorMsg = document.getElementById("error_message");
var text;

//stores dynamically typed string pattern
searchBar.addEventListener('keyup', (e) => { 
    var charactersList = document.getElementById('charactersList');
    //reset it
    charactersList.innerHTML = " ";
    //array to store filtered characters
    let filteredCharacters = []; 
    const searchString = e.target.value.toLowerCase();
    console.log (searchString);
    if(searchString == ""){
        myDiv.style.display = "none";
    }
    else{
        myDiv.style.display = "block";
    }
   // console.log(list);
    for(let i=0; i<20;i++){
        //load h2 headers
        const card_id = list[i].getElementsByClassName("card-title")[0];
        if(card_id.innerHTML.toLowerCase().indexOf(searchString) > -1){ 
            filteredCharacters.push(list[i]);
          //  var cln = list[i].cloneNode(true);
            }
        }
        console.log(filteredCharacters);
        //clone each filtered character and append it
        filteredCharacters.forEach((character) => {
            var cln = character.cloneNode(true);
            charactersList.appendChild(cln);
            
        });
    });
    //do the same for number
    searchBar1.addEventListener('keyup', (e) => { 
        var charactersList = document.getElementById('charactersList');
        charactersList.innerHTML = " ";
        let filteredCharacters = []; 
        const searchString = e.target.value.toLowerCase();
        console.log (searchString);
        if(searchString == ""){
            myDiv.style.display = "none";
        }
        else{
            myDiv.style.display = "block";
        }
       // console.log(list);
        for(let i=0; i<20;i++){
            //load h2 headers
            const card_id = list[i].getElementsByClassName("card-title")[0];
            if(card_id.innerHTML.toLowerCase().indexOf(searchString) > -1){ 
                filteredCharacters.push(list[i]);
              //  var cln = list[i].cloneNode(true);
                }
            }
            console.log(filteredCharacters);
            //clone it and append it
            filteredCharacters.forEach((character) => {
                var cln = character.cloneNode(true);
                charactersList.appendChild(cln);
                
            });
        });



    


    
           
                               
             
                        
  

function validation() {
      var name = document.getElementById("pokiName").value;
      var errorMsg = document.getElementById("error_message");
      var text;
      var card_title = ["bulbasaur", "ivysaur" , "venusaur", "charmander type: fire", 
      "charmeleon", "charzard", "squirtle", "wartortle", "blastoise", "caterpie", 
      "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", 
      "pidgeotto", "pidgeot", "rattata", "raticate"];
      var value;

      errorMsg.style.padding = "10px";
      if(name.length > 20 || !name.match(/^[A-Za-z]+$/)){
          console.log("checked");
          text = "Please Enter Valid Name";
          errorMsg.innerHTML = text;
          return false;
         
      }
      else{
        var index, value, result, inner;

        for(index = 0; index<card_title.length;index++){
          for(inner =1; inner<card_title[index].length+1;inner++){
            value = card_title[index];
            if(value.substring(inner,0) == "c"){
              alert(value);
            }
          }
        }

        //   if(card_title.indexOf(name) > -1){
        //        alert("name: " + card_title[card_title.indexOf(name)]) ;
        //   }
        //   if(name == 'b'){
        //       alert("name: Bulbasaur  Type: Grass Poison\n" + "name: Blastoise  Type: water\n" + "name: Butterfree  Type: Bug flying\n" + "name: Beedrill  Type: Bug Poison");
        //   }
        }
          /*if(name == "Bulbasaur" || name== "bulbasaur" || name== "BULBASAUR"){
              console.log("checked2");
              alert("Name: Bulbasaur \n" + " Type: Grass Poison");
          }

          if(name == "Ivysaur" || name== "IVYSAUR"|| name =="ivysaur"){
              console.log("checked3");
              alert("Name: Ivysaur\n" + "Type: Grass Poison");
          }

          if(name == "Venusaur" || name== "VENUSAUR"|| name =="venusaur"){
            console.log("checked4");
            alert("Name: Venusaur\n" + "Type: Grass Poison");
        }
        
        if(name == "Charmander" || name== "CHARMANDER"|| name=="charmander"){
            console.log("checked5");
            alert("Name: Charmander\n" + "Type: Fire");
        }
        
        if(name == "Charmeleon" || name== "CHARMELEON"|| name=="charmeleon"){
            console.log("checked6");
            alert("Name: Charmeleon\n" + "Type: Fire");
        }*/
        
      }
     
     // alert("Searching...");
      //return false;
    

function validation_Number(){
    var number = document.getElementById("Number").value;
    var errorMsg = document.getElementById("error_message");
    var text;
    errorMsg.style.padding = "10px";
        if(isNaN(number) || number >20 || number <1 ){
            text = "Please Enter Valid PokiID";
            errorMsg.innerHTML = text;
            }
        else{
            if(number ==1 || number == 001 || number == 01){
                console.log("number 1");
                alert("Name: Bulbasaur \n" + " Type: Grass Poison");
            }
            if(number ==2 || number == 002 || number == 02){
                console.log("number 2");
                alert("Name: Ivysaur\n" + "Type: Grass Poison");
             }
            if(number ==3 || number == 003 || number == 03){
                console.log("number 3");
                alert("Name: Venusaur\n" + "Type: Grass Poison");
            }
            if(number ==4 || number == 004 || number == 04){
                console.log("number 4");
                alert("Name: Charmander\n" + "Type: Fire");
            }
            if(number ==5 || number == 005 || number == 05){
                console.log("number 5");
                alert("Name: Charmeleon\n" + "Type: Fire");
            }
            
        //alert("Searching Function 2");
        //return false;
    }
}

    











/*const name = document.getElementById('name')
const number = document.getElementById('number')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('Search', (e) => {
    let messages = []
    if(name.value == ' ' || name.value == null ||name.length>20){
        messages.push('Name must be less than 20 characters')
    }

    if(messages.length >0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
   
})*/


function validation() {
      var name = document.getElementById("pokiName").value;
      name = name.toLowerCase();
      var errorMsg = document.getElementById("error_message");
      var text;
      var card_title = ["bulbasaur type: Grass Poison", "ivysaur type: Grass Poison" , "venusaur type: Grass Poison", "charmander type: fire", 
      "charmeleon type: Fire", "charzard type: Fire Flying", "squirtle type: Water", "wartortle type: Water", "blastoise type: Water", "caterpie type: Bug", 
      "metapod type: Bug", "butterfree type: Bug Flying", "weedle type: Bug Poison", "kakuna type: Bug Poison", "beedrill type: Bug Poison", "pidgey type: Normal Flying", 
      "pidgeotto type: Normal Flying", "pidgeot type: Normal Flying", "rattata type: Normal", "raticate type: Normal"];

      errorMsg.style.padding = "10px";
      if(name.length > 20 || !name.match(/^[A-Za-z]+$/)){
          console.log("checked");
          text = "Please Enter Valid Name";
          errorMsg.innerHTML = text;
          return false;
         
      }
      else{
        var index, value, inner;
        var counter =0;
        var count = 0;
        var unique;
        var myArr = new Array ();
                     //     if(card_title.indexOf(name) > -1){
                     //         alert("name: " + card_title[card_title.indexOf(name)]) ;
                     //    }
                    //keeps track of word
                for(index = 0; index<card_title.length;index++){
                    //increments boundary
                    for(substring=0;substring<card_title[index].length;substring++){
                     //goes from boundary onwards ie b, bu,..bulbasaur then u,ul,ulb..ulbasaur,u
                        for(inner=1; inner<card_title[index].length+1;inner++){
                        value = card_title[index];
                        // console.log(value.substring(inner,substring));
                            if(value.substring(inner,substring) =="a"){
                                myArr[counter] = value;
                                counter++;
                                // console.log(myArr);
                                unique  = Array.from(new Set(myArr));
                            
                             }
                                                                
                        }
                    }
                    
                } 
                for (var count = 0; count <= 4; count++) {
                    alert(unique[count]);
                  }
                           
         
                     
        }
    }
     
    

function validation_Number(){
    var number = document.getElementById("Number").value;
    var errorMsg = document.getElementById("error_message");
    var text;
    var card_title2 = ["1.bulbasaur type: Grass Poison", "2.ivysaur type: Grass Poison" , "3. venusaur type: Grass Poison", "4. charmander type: fire", 
    "5.charmeleon type: Fire", "6.charzard type: Fire Flying", "7.squirtle type: Water", "8.wartortle type: Water", "9.blastoise type: Water", "10.caterpie type: Bug", 
    "11.metapod type: Bug", "12.butterfree type: Bug Flying", "13.weedle type: Bug Poison", "14.kakuna type: Bug Poison", "15.beedrill type: Bug Poison", "16.pidgey type: Normal Flying", 
    "17.pidgeotto type: Normal Flying", "18.pidgeot type: Normal Flying", "19.rattata type: Normal", "20.raticate type: Normal"];
    errorMsg.style.padding = "10px";
        if(isNaN(number) || number >20 || number <1 ){
            text = "Please Enter Valid PokiID";
            errorMsg.innerHTML = text;
            }
        else{
            var index1, value1, inner1;
            var counter =0;
            for(index1 = 0; index1<card_title2.length;index1++){
                for(inner1 =1; inner1<card_title2[index1].length+1;inner1++){
                  value1 = card_title2[index1];
                  if(value1.substring(inner1,0) == number &&counter <5){
                    alert(value1);
                    counter++;
                  }
                }
              }

            // if(number ==1 || number == 001 || number == 01){
            //     console.log("number 1");
            //     alert("Name: Bulbasaur \n" + " Type: Grass Poison");
            // }
            // if(number ==2 || number == 002 || number == 02){
            //     console.log("number 2");
            //     alert("Name: Ivysaur\n" + "Type: Grass Poison");
            //  }
            // if(number ==3 || number == 003 || number == 03){
            //     console.log("number 3");
            //     alert("Name: Venusaur\n" + "Type: Grass Poison");
            // }
            // if(number ==4 || number == 004 || number == 04){
            //     console.log("number 4");
            //     alert("Name: Charmander\n" + "Type: Fire");
            // }
            // if(number ==5 || number == 005 || number == 05){
            //     console.log("number 5");
            //     alert("Name: Charmeleon\n" + "Type: Fire");
            // }
            
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

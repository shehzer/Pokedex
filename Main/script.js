function validation() {
      var name = document.getElementById("pokiName").value;
      name = name.toLowerCase();
      var errorMsg = document.getElementById("error_message");
      var text;
      var unlist = document.getElementById("cards");
      var list = unlist.getElementsByTagName("li");
      var counter =0;
      errorMsg.style.padding = "10px";
      
      if(name.length > 20 || !name.match(/^[A-Za-z]+$/)){
          console.log("checked");
          text = "Please Enter Valid Name (less than 20 characters)";
          errorMsg.innerHTML = text;
          return false;
         
      }
      else{
          for(let i=0; i<20;i++){
            var card_id = list[i].getElementsByClassName("card-title")[0];
            var card_type1 = list[i].getElementsByClassName("card-type")[0];
            console.log(card_id.innerHTML.toLowerCase());
           // console.log(card_id.indexOf(name));
            if(card_id.innerHTML.toLowerCase().indexOf(name) >-1 &&counter <5){ //add counter
                alert("Number "+ card_id.innerHTML + "\n" + "Type: " + card_type1.innerHTML);
                counter++;
            }
            else{
                console.log("not checked");
            }
          }
       
                           
         
                     
        }
    }
     
    

function validation_Number(){
    var number = document.getElementById("Number").value;
    var errorMsg = document.getElementById("error_message");
    var text;
    var unlist1 = document.getElementById("cards");
    var list1 = unlist1.getElementsByTagName("li");
    var counter1 =0;
    errorMsg.style.padding = "10px";
        if(isNaN(number) || number >20 || number <1 ){
            text = "Please Enter Valid PokiID";
            errorMsg.innerHTML = text;
            }
        else{
            for(let i=0; i<20;i++){
                var card_id = list1[i].getElementsByClassName("card-title")[0];
              //  console.log(card_id);
                var card_type = list1[i].getElementsByClassName("card-type")[0];
                console.log(card_id.innerHTML.toLowerCase());
                console.log(card_type.innerHTML);
               // console.log(card_id.indexOf(name));
                if(card_id.innerHTML.toLowerCase().indexOf(number) >-1 && counter1 <5){ //add counter
                    alert("Number:"+ card_id.innerHTML + "\n" + "Type: " + card_type.innerHTML);
                    counter1++;
                }
                else{
                    console.log("not checked");
                }
              }

          
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

/*var index, value, inner;
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
                    if(value.substring(inner,substring) ==name){
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
          }*/
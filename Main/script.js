function validation() {
    //Load in value they enter in name search box
      var name = document.getElementById("pokiName").value;
      name = name.toLowerCase();
      //load in error message
      var errorMsg = document.getElementById("error_message");
      var text;
      //load in cards
      var unlist = document.getElementById("cards");
      //load in all tags "li" within cards
      var list = unlist.getElementsByTagName("li");
      var counter =0;
      errorMsg.style.padding = "10px";
      //if name is greater than 20 characters or not A-Z (caps and non caps)
      if(name.length > 20 || !name.match(/^[A-Za-z]+$/)){
          console.log("checked");
          text = "Please Enter Valid Name (less than 20 characters)";
          errorMsg.innerHTML = text;
          return false;
         
      }
      else{
          //check all 20 cards and print out all cards that match string pattern
          for(let i=0; i<20;i++){
            //load h2 headers
            var card_id = list[i].getElementsByClassName("card-title")[0];
            //load card type
            var card_type1 = list[i].getElementsByClassName("card-type")[0]; 
            //load evolution stage
            var evolution = list[i].getElementsByClassName("evolution")[0];
            console.log(card_id.innerHTML.toLowerCase());
            //if it matches the string entered and counter less than 5 print the card, type and evolution
            if(card_id.innerHTML.toLowerCase().indexOf(name) >-1 &&counter <5){ 
                alert("Number "+ card_id.innerHTML + "\n" + "Type: " + card_type1.innerHTML +"\n" + evolution.innerHTML);
                counter++;
            }
            else{
                console.log("not checked");
            }
          }
       
                           
         
                     
        }
    }
     
    

function validation_Number(){
    //load in number that is entered
    var number = document.getElementById("Number").value;
    //load error message
    var errorMsg = document.getElementById("error_message");
    var text;
    var unlist1 = document.getElementById("cards"); //load in cards
    var list1 = unlist1.getElementsByTagName("li"); // load in li headers under cards
    var counter1 =0;
    errorMsg.style.padding = "10px"; 
        //if its not a number or not between 1-20 print error
        if(isNaN(number) || number >20 || number <1 ){
            text = "Please Enter Valid PokiID";
            errorMsg.innerHTML = text;
            }
        else{
            for(let i=0; i<20;i++){
                //load h2 headers
                var card_id = list1[i].getElementsByClassName("card-title")[0];
                //load types
                var card_type = list1[i].getElementsByClassName("card-type")[0];
                //load evolution
                var evolution = list1[i].getElementsByClassName("evolution")[0];
                console.log(card_id.innerHTML.toLowerCase());
                console.log(card_type.innerHTML);
                //if it matches string pattern entered, print the card, type and evolution
                if(card_id.innerHTML.toLowerCase().indexOf(number) >-1 && counter1 <5){ 
                    alert("Number:"+ card_id.innerHTML + "\n" + "Type: " + card_type.innerHTML +"\n" + evolution.innerHTML);
                    counter1++;
                }
                else{
                    console.log("not checked");
                }
              }

          
    }
}

    












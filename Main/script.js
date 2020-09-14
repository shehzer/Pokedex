function validation() {
   
      var name = document.getElementById("pokiName").value;
      var number = document.getElementById("Number").value;
      var errorMsg = document.getElementById("error_message");
      var text;
      errorMsg.style.padding = "10px";
      if(name.length > 20 || !name.match(/^[A-Za-z]+$/)){
          text = "Please Enter Valid Name";
          errorMsg.innerHTML = text;
          return false;
      }
      if(isNaN(number) || number >20 || number <1 ){
          text = "Please Enter Valid PokiID";
          errorMsg.innerHTML = text;
      }
      alert("Searching...");
      return false;
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

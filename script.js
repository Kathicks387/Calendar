var NowMoment=moment();
var eDisplayMoment= document.getElementById("displayMoment");
eDisplayMoment.innerHTML=NowMoment.format("dddd MMMM DD YYYY hh:mm");

/*var text = $(".description").text();
 localStorage.setItem("description", text);
 $("description").on("click", function(){
     var newText = $(this).text();
     localStorage.setItem("description", newText);
     alert(localStorage.getItem("description"));
 });*/


const storageInput = document.querySelector(".appointment");
/*const text = document.querySelector(".appointment");*/
const button = document.querySelector(".saveBtn");
const storedInput = localStorage.getItem("storageInputContent");

if (storageInput) {
    storageInput.storageInputContent = storedInput
}


storageInput.addEventListener("input", word=>{
    /*text.textContent=word.target.value*/
storageInput.storageInputContent = word.target.value
 })

const saveToLocalStorage = () => {
    localStorage.setItem("textInput", storageInput.storageInputContent);
}

button.addEventListener("click", saveToLocalStorage)

  
 
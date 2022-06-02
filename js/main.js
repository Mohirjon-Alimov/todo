// CREATING ELEMENTS 
let elForm = document.createElement("form");
let elInp = document.createElement("input");
let elBtn  = document.createElement("button");
let elList = document.createElement("ol");
let errorValue = document.createElement("p");

// ARRAY 
let todo = [];

// ATTREBUTES
elForm.setAttribute("class", "form");
elInp.setAttribute("class", "input");
elBtn.setAttribute("class", "button");
errorValue.setAttribute("class", "textError");
elInp.setAttribute("placeholder", "add wishes");


elBtn.textContent = "add";


document.body.append(elForm, elList);
elForm.append(elInp, elBtn)



elForm.addEventListener("submit", function(evt){
  evt.preventDefault();
  
  if(elInp.value === ""){
    // elInp.style.borderColor = 'red';
    elInp.style.border = "5px solid red";
    elList.append(errorValue);
    errorValue.textContent = "invaid value";
  }else{
    // elInp.style.borderColor = 'aqua';
    elInp.style.border = "2px solid aqua";
    errorValue.remove();
    errorValue.textContent = "";
    todo.push(elInp.value);

    var Listitems = document.createElement("li");
    elList.appendChild(Listitems);
    
    Listitems.textContent = elInp.value;
  }





  // console.log(todo);


  elInp.value = null
})
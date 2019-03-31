"use strict"

let personArray = [];

let wrapper = document.querySelector('#list');
let now = new Date()


function formValidation(){
    let formName = document.forms["myForm"]["name"].value;
    let formSurname = document.forms["myForm"]["surname"].value;
    let formBirthday = document.forms["myForm"]["birthday"].value;
    let formEmail = document.forms["myForm"]["email"].value;
    if(formName == "" || formSurname == "" || formBirthday == "" || formEmail == ""){
        alert("enter symbol");
        return false;
    }
    if(checkLetter(formName) == false || checkLetter(formSurname) == false){
        alert("Either Name or Surname must consist of string");
        return false;
    }
    if(isIsoDate(formBirthday) == false){
        alert("iso false");
        return false;
    }
    

    if(emailIsValid(formEmail) == false){
        alert("email is false");
        return false;
    }
    
    
    return true;


}

function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
function isIsoDate(str) {
    if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(str)) return false;
    var d = new Date(str); 
    return d.toISOString()===str;
  }



function checkLetter(string){
    for(let i = 0; i<string.length; i++){
        if(Number(string[i]) == true){
            return false;
        }
       
    }
    return true
}

function person(nomre, ad, soyad, adgun,  email){
    
    this.id = nomre;
    this.name = ad;
    this.surname = soyad;
    this.birthday = adgun;
   
    this.email = email;
  
    
};


function addPerson(event) {
    event.preventDefault();
    let formName = document.forms["myForm"]["name"].value;
    let formSurname = document.forms["myForm"]["surname"].value;
    let formBirthday = document.forms["myForm"]["birthday"].value;
    let formEmail = document.forms["myForm"]["email"].value;
    if(formValidation() == true){
        let formAge = now.getFullYear() - Number(formBirthday.slice(0, 4));
        let newPerson = new person(personArray.length + 1, formName, formSurname, formAge,  formEmail);
        personArray.push(newPerson);
        createList();
        
       
    }
    
};



var form = document.getElementById("validation");


form.addEventListener("submit", addPerson, true);


function createList(){
    let list = "<ul>";
    for(let i = 0; i < personArray.length; i++ ){
        list += "<li id='" + personArray[i].id + "'>" + " - " + personArray[i].id + " . " + personArray[i].name 
        + " " + personArray[i].surname + " " + personArray[i].birthday +
        " " + personArray[i].email + "</li>"
    }
    list += "</ul>";

    wrapper.innerHTML = list;
}


function deleteId(){
    let num = document.querySelector('#delete').value;
    if(num < 1 || num > personArray.length){
        alert("this id dont find");
        return false;

    }else {
         personArray.splice(num, 1);
        console.log(personArray);
    }
}

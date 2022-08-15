const myIngredientesList = document.getElementById("sandwich-ingredients");
const allSandwiches = document.getElementById("all-sandwiches");

let myIngredients = [];

let savedSandwich = {
    name: "",
    ingredients: []
};

let savedSandwichList = [];

function makeMeASandwich(){
    console.log("cliked!!!");
}

function ingredientSelected(val){
    myIngredients.push(val);
    myIngredientesList.innerText = myIngredients;
}

function saveSandwich(){
    // allSandwiches.innerText = myIngredients;
    //push name and ingedients to saved Sandwiches List

    let myIngredients = [];
}

function saveSandwichName(val){
    console.log("Name: ", val);
}



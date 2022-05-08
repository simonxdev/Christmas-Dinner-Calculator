const btn = document.getElementById("btn")
let food = document.getElementById("food")
const guests = document.getElementById("guests")
const vegetarian = document.getElementById("vegetarian-input")
const vegan = document.getElementById("vegan-input")
const meals = [" Nut roast", " Turkey", " Goose", " Salad", " You are lost, cant help you with that! :)"]

btn.addEventListener("click", function(){
    if (vegetarian.checked && vegan.checked){
        food.innerText = meals[4]
    } else if (vegan.checked){
        food.innerText = meals[3]
    } else if (vegetarian.checked){
        food.innerText = meals[0]
    } else if (guests.value){
    if (guests.value <= 4){
        food.innerText = meals[1]
    } else if (guests.value >= 5){
        food.innerText = meals[2]
    }
}
})


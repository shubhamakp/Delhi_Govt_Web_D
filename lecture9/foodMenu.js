let menu = [
    "paneer tikka",
    "tandoori naan",
    "Chicken Biryani",
    "Malai chaap",
    "Masala Dosa",
    "uttapam",
    "garlic nan",
    "onion pyaza",
    "idli sambhar",
    "chicken changezi",
    "tandoori chicken",
    "chicken tikka",
    "Egg curry",
    "litti chokha",
    "Dal Fry"
]

function isVeg(food){
    if(food.toLowerCase().indexOf("chicken")!=-1){
        return false;
    }
    else if(food.toLowerCase().indexOf("egg")!=-1){
        return false;
    }
    else {
        return true;
    }
}

function onionGarlicFree(food){
    if(food.toLowerCase().indexOf("onion")!=-1){
        return false;
    }
    else if(food.toLowerCase().indexOf("garlic")!=-1){
        return false;
    }
    else {
        return true;
    }
}


let vegMenu = menu.filter(isVeg);

let jainMenu = vegMenu.filter(onionGarlicFree);

console.log("Menu : " + menu);
console.log("Veg Menu : " + vegMenu);
console.log("Jain Menu : " + jainMenu);

//food container
const foodContainer = document.getElementById('food-container');

//reset btn
document.getElementById('start-over').addEventListener('click', () => {
    location.reload();
})

//ingredient position distance
let ingredientIndex = 40

//ingredients array
const ingredients = [
                    'bun',
                    'patty',
                    'cheese',
                    'bacon',
                    'lettuce',
                    'onion',
                    'tomato',
                    'pickles'
                    ];


//loop that assigns imgs and behaviour to buttons
for (let i = 0; i < ingredients.length; i++) {
    let ingredient = ingredients[i];
    document.getElementById(ingredient).addEventListener('click', () => {
        createIngredient(ingredient);
        
    })
}


//adds ingredients nodes to DOM
function createIngredient(name){

    console.log(name);
    const newIngredient = document.createElement('img');
    
    newIngredient.style.position = 'absolute';
    newIngredient.style.maxBlockSize = '300px';
    newIngredient.src = `./imgs/${name}.png`;
    newIngredient.style.bottom = ingredientIndex + 'px';

    foodContainer.appendChild(newIngredient);
    
    ingredientIndex += 40;

}
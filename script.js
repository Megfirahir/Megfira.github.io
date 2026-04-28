function toggleRecipe(food) {

    const recipes = {

        injera: "Ingredients: Teff flour, water, Yeast.<br> How to do that: Mix flour and water into a thin batter. Let it sit at room temperature for 2–3 days to ferment. Pour onto pan and cook.",

        dorowat: "Ingredients: Chicken, onion, berbere, eggs.<br> How to do that: Cook onion, add spices, then chicken and eggs.",

        kitfo: "Ingredients: Minced beef, butter, mitmita.<br> How to do that: Mix and serve raw or cooked.",

        tibs: "Ingredients: Meat, onion, pepper.<br> How to do that: Fry meat and mix with spices.",

        shiro: "Ingredients: Chickpea powder, garlic.<br> How to do that: Cook with water until thick.",

        gomen: "Ingredients: Greens, butter.<br> How to do that: Cook until soft.",

        firfir: "Ingredients: Injera, berbere.<br> How to do that: Mix injera with sauce.",

        genfo: "Ingredients: Flour, water.<br> How to do that: Stir into thick porridge.",

        chechebsa: "Ingredients: Flatbread, butter.<br> How to do that: Tear and cook.",

        tej: "Ingredients: Honey, water.<br> How to do that: Ferment for weeks.",

        tella: "Ingredients: Grains.<br> How to do that: Ferment traditionally.",

        meweded: "Ingredients: Honey.<br> How to do that: Strong fermented drink.",

        buna: "Ingredients: Coffee beans.<br> How to do that: Roast and brew.",

        borde: "Ingredients: Flour.<br> How to do that: Ferment for 1 day.",

        keribo: "Ingredients: Barley.<br> How to do that: Light fermentation."

    };

    let element = document.getElementById(food + "-recipe");

    if (!element) return;

    if (element.innerHTML === "") {
        element.innerHTML = recipes[food];
    } else {
        element.innerHTML = "";
    }
    
    function explore() {
    window.location.href = "foods.html";
}
}


alert ("hi");

//Created an array of topics that includes the food items
var topics = ["Bell Peppers" , "Mushrooms" , "Jalapenos" , "Chicken" , "Spinach" , "Asparagus" , "Pepperjack Cheese" , "Olives" , "Avocado" ,"Cucumber"];

//Created a function to allow the appropriate food item content to be shown when  clicked.

function displayFoodItemInfo () {
    var food = $(this).attr("data-name");
    var foodStr = food.split(" ").join("+");
    var APIKey =  "DjWtmM2fUL6AYn27DkHYvhO436OOAUck";
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + foodStr + "&api_key=" + APIkey + "&limit=5";

}

//This function is to create buttons for each element in the array and adding it to the div id of buttons-food.
function createButton () {
    $("#buttons-food").empty();

    for (var i = 0; i < topics.length; i++) {

        var a = $("<button>");

        a.addClass("food-btn");
        a.text(topics[i]);
        $("#buttons-food").append(a);

    };
};

    $("#add-item").on("click", function(event) {

        event.preventDefault();
        var food = $("#food-input").val().trim();
        topics.push(food);

        createButton ();
    });

    $(document).on("click", ".food-btn", displayFoodItemInfo);

    createButton ();


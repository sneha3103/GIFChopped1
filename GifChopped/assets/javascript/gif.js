alert ("hi");

//Created an array of topics that includes the food items
var topics = ["Bell Peppers" , "Mushrooms" , "Jalapenos" , "Chicken" , "Spinach" , "Asparagus" , "Pepperjack Cheese" , "Olives" , "Avocado" ,"Cucumber"];

//Created a function to allow the appropriate food item content to be shown when  clicked.

function displayFoodItemInfo () {
    var food = $(this).attr("data-name");
    var foodStr = food.split(" ").join("+");
    var APIKey =  "DjWtmM2fUL6AYn27DkHYvhO436OOAUck";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + foodStr + "&api_key=" + APIkey + "&limit=5";

    //Need to create AJAX call 

}

//This function is to create buttons for each element in the array and adding it to the div id of buttons-food.
function createButton () {
    $("#buttons-food").empty();

    for (var i = 0; i < topics.length; i++) {
        //Generating buttons for each movie in the array and giving it a class of food-btn.
        var a = $("<button>");

        a.addClass("food-btn");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#buttons-food").append(a);

    };
};
   //When movie button is clicked, the following function triggers. Event prevent default stops page from reloading and erasing prior data. 
    $("#add-item").on("click", function(event) {

        event.preventDefault();
        var food = $("#food-input").val().trim();
        topics.push(food);

        createButton ();
    });
    //Attaching entire html document on the event handler on the class food-btn when user clicks. 
    $(document).on("click", ".food-btn", displayFoodItemInfo);


    //Called this function to display the buttons
    createButton ();


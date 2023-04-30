let foodList = [];

document.addEventListener("DOMContentLoaded", function (event) {
    // populate foodList
    foodList.push(new FoodItem("Snickers", 280));
    foodList.push(new FoodItem("Apple", 95));
    foodList.push(new FoodItem("Ramen", 188));
    console.log(foodList);

    // update display
    updateDisplay();

    // attach submission
    document.getElementById("submitBtn").addEventListener("click", attemptSubmit);
});


function attemptSubmit() {
    let foodName = form.getFoodName();
    let calorieCount = form.getCalorieCount();

    // validate form
    if (!form.isFoodNameValid(foodName)) {
        alert("Food name cannot be empty");
        return;
    }
    if (!form.isCalorieCountValid(calorieCount)) {
        alert("Calorie count must be an integer");
        return;
    }

    // submit it
    foodList.push(new FoodItem(foodName, calorieCount));
    console.log(foodList);

    // update display
    updateDisplay();
}

function updateDisplay() {
    totalCalories = 0;
    foodList.forEach(food => totalCalories += food.calorieCount);
    document.getElementById("totalCalorieDisplay").value = totalCalories;
}
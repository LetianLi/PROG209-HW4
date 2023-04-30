var form = {
    getFoodName: function() {
        return document.getElementById("foodNameInput").value;
    },

    getCalorieCount: function() {
        return document.getElementById("calorieCountInput").value;
    },

    isFoodNameValid: function(name) {
        return typeof name === 'string' && name.length > 0;
    },

    isCalorieCountValid: function(count) {
        // We do a second strict check where the number in string form must equal the original
        return typeof count === 'string' && Number.isInteger(Number(count)) && count === String(Number(count));
    }
}
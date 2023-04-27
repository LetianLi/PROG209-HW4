# PROG209-HW4

## Instructions:

Write a new program (HTML, CSS, and JavaScript)

Requirements:
- It should keep track of how many calories you have eaten.
- It should allow the user to enter a food name and a number of calories.
- Each time they enter a new item, a food object should be created and added to an array.
- Write out the updated contents of the array in the console.log.
- Also, in that same click event, you should update a display on the screen that shows the user the total number of calories they have consumed.

(My/teacher's version creates 2 food items, a banana and hot dog when I first start the program, so you will see that when I add one item with 200 calories, there are already 3 items in my object list and the calorie output shows 670. You are not required to do that, but I suggest you do.)

Tip: in your constructor, use `this.calories = parseInt(pCalories);` where calories is the number of calories variable, call it what you like, and pCalories is the name in the constructor parameters list where you pass in a value. This will force the users input to be written into the property as a number and not a string.

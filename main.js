//first catch the 
/* ১. 
আমি যদি বলি কোন একটা এলিমেন্ট কে সিলেক্ট করে নিয়ে এসে console log করে দেখাতে হবে। তুমি কি সেটা করে দেখাতে পারবে?
*/
var element = document.getElementById("card-title-first");
console.log(element);


//Problem
/* ২. 
সেখানে একদম হেডার এ একটা buy now বাটন আছে। সেই বাটনে একটা ক্লিক হ্যান্ডলার যোগ করতে হবে? সেটা কি করতে পারবে? যদি পারো তাহলে সেই বাটনে ক্লিক করলে উপরে যেখানে BE THE PENGUIN এই কথাগুলো আছে সেখানে BE THE PENGUIN এর পরিবর্তে "I AM PENGUIN" কথাটা লিখে দিতে পারবে? 
 */


document.getElementById("first-button").addEventListener("click", function () {
	/* at first we can declear a variable and get the id and added .innerHTML to change the element value and then equal = set the new value */

	const element = document.getElementById("change-element").innerHTML = "I AM PENGUIN";

})


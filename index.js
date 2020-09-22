//  "good morning"  لو كان الوقت بين الساعة 6 صباحا و 12 مساء قم بطباعة
// "good afternon"  لو كان الوقت بين الساعة 12 مساء و 6 مساء قم بطباعة
// "good evening"  غير ذلك , اطبع

let hour = 10;

if (hour >= 6 && hour < 12) {
  console.log("good morning ");
} else if (hour >= 12 && hour < 18) {
  console.log("good afternoon");
} else {
  console.log("good evening");
}
// question 2
let mentors = ["rahaf", "nancy", "moudhi", "jawan", "menawer"];

mentors.forEach(function (item) {
  if (item === "nancy") {
    item = item.toUpperCase();
  } else if (item === "jawan") {
    item = item.toUpperCase();
  } else {
    item = item.toLowerCase();
  }
  console.log(item);
});

console.log("jawan");

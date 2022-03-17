let arr1 = [1, 2, 3, 4, 5]
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (; arr1.length < arr2.length;){
  arr1.push(Math.floor(Math.random() * 100 + 1));
}

for (; arr2.length < arr1.length;){
  arr2.push(Math.floor(Math.random() * 100 + 1));
}

document.getElementById("result").innerHTML = "Prima lista" + JSON.stringify(arr1);
document.getElementById("result1").innerHTML = "Seconda lista" + JSON.stringify(arr2);
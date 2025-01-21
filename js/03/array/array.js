let arr = ["dev", 4, 756, "t"]

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
}

console.log(arr.length);

console.log(arr[0][0]);
console.log(arr[0][1]);
console.log(arr[0][2]);

console.log(arr[0].length);

// arrays are mutable
arr[10] = "fruit"
console.log(arr);

// methods in array
arr.push("simple")    // add to end
console.log(arr);
arr.pop()             // remove from end
console.log(arr);
arr.shift()           // remove from beginning
console.log(arr);
arr.unshift(13)       // add to beginning
console.log(arr);
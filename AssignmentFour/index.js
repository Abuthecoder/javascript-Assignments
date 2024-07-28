function removeDuplicates(arr) {
    let seen = {};
    
    let uniqueArray = [];

    
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        
        if (!seen[item]) {
            uniqueArray.push(item);
            seen[item] = true;
        }
    }

    return uniqueArray;
}

let array = [1,2,3,4,5,1,6,2,7,1,3];
console.log(removeDuplicates(array));
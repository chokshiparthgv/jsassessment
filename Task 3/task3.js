// 3. Given the string S, arrange all its characters in higher occurrence order. 
// Input:  
// S : "abcdeeadescebd" 
// Output: "eeeedddaabbccs" 

var demo = function() {
    const s = document.getElementById("name").value;
    let obj = {}, res = [];
    for(let char of s){
        obj[char] = ++obj[char] || 1;
    }
    let sortStr = Object.entries(obj).sort((a,b) => b[1]-a[1]);
    for(let i = 0; i < sortStr.length; i++){
        for(let j = 0; j < sortStr[i][1]; j++){
            res.push(sortStr[i][0]);
        }
    }
    console.log(res.join(""));    
};


// frequencySort("asabsbhabsaxxxaaxxxxxaaazzzzzzzzzzzzzzzzz")
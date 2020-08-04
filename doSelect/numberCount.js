const findCount = (string) => {
    const regexForAlphabets = new RegExp(/[a-z]/, "gi");
    const regexforDigits = new RegExp(/[0-9]/, "g");
    let numbers = [];

    let a = string.split("");
    if(parseInt(string)) return 1;
    for(let i =0; i< a.length ; i++){
        if(a[i].match(regexforDigits) && a[i+1] && a[i+1].match(regexForAlphabets)){
            numbers.push(a[i]);
        }
        else if(a[i].match(regexForAlphabets) && a[i+1] && a[i+1].match(regexforDigits)){
            numbers.push(a[i+1]);
        }
    }
    return numbers.length;
}

console.log(findCount("a123as123"));
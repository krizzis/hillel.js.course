var numericPrompt = function(title) {
    while(true){
        let res = prompt(title);
        if (!isNaN(res)) {
            console.log(res);
            return res;
        }
        if (res === null) break;
        else alert("Enter a number");
    }
}
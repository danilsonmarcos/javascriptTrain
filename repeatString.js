const repeatString = function (str, num){
    if (num <= 0){
        return "ERROR"; 
    } else {
        //string that will be returned
        var finalString = "";
        //for to make the string repeat multiply times
        for (let i = 0; i < num ; i++){
            finalString += str; 
        }
        //the return is right here
        return finalString; 
    }
}
    console.log(repeatString('marcos',10))
module.exports = repeatString; 
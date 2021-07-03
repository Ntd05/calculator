/* show phep toan
*/
var str ;
function getText(clicked) {
    var x = document.getElementById("showText").innerText;
    var y = x.concat(clicked);
    if (y.length < 20){
        document.getElementById("showText").innerHTML = y;
    }
    str = y;
    
}

/* show ket qua
*/


function getResult() {
    let t= Result(str);
    document.getElementById("result").innerHTML = t;
}
function Result(s) {
    const x = s.toString().replace('×','*');
    const y = x.toString().replace('÷','/');
    return eval(y);
};


/*xoa
*/
function DeleteAll(){
    document.getElementById("showText").innerHTML = "";
}
function DeleteElement(){
    let y = str.substring(0,str.length - 1);
    document.getElementById("showText").innerHTML = y;
    str = y;
}

/* phep %
*/
function Rate(){
    let y = str.concat(document.getElementById("phantram").innerText);
    document.getElementById("showText").innerHTML = y;
    str = y;
}


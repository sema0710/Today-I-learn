function clicked(){
    var jin1 = document.getElementById("jinsu1").value;
    var jin2 = document.getElementById("jinsu2").value;
    var n1 = document.getElementById("num1").value;
    var result;
    jinsu(jin1,jin2,n1);
    console.log(jin1);
    console.log(jin2);
    console.log(n1);
    }
function jinsu(one,two,num1){
    switch(one){
        case "2":
        {
                if(two == "8"){
                    result =  Number.parseInt(num1,2).toString(8);
                }
                else if(two == "16"){
                    result = Number.parseInt(num1,2).toString(16);
                }
                else if(two == "10"){
                    result = Number.parseInt(num1,2);
                }
                else{
                    result = num1
                }
                break;
        }
        case "8":
        {
                if(two == "2"){
                   result = Number.parseInt(num1,8).toString(2);
                }
                else if(two == "16"){
                    result = Number.parseInt(num1,8).toString(16);
                }
                else if(two == "10"){
                    result = Number.parseInt(num1,8);
                }
                else{
                    result = num1;
                }
                break;
        }
        case "16":
        {
                if(two == "8"){
                   result = Number.parseInt(num1,16).toString(8);
                }
                else if(two == "2"){
                   result = Number.parseInt(num1,16).toString(2);
                }
                else if(two == "10"){
                    result = Number.parseInt(num1,16);
                }
                else{
                    result = num1;
                }
                break;
        }
        case "10":
        {
            num1 = num1 * 1;
                if(two == "2"){
                    result = num1.toString(2);
                }
                else if(two == "8"){
                   result =  num1.toString(8);
                }
                else if(two == "16"){
                   result = num1.toString(16);
                }
                else{
                    result = num1;
                }
                break;
        }
    }
    document.getElementById("result").innerHTML = result;
}
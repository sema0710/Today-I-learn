function ten_to_ano(jinsu,num){
    let arr = [];
    let result = 0;
    for(let i;num > jinsu;num = num/jinsu){
        arr.unshift(parseInt(num % jinsu));
    }
    arr.unshift(parseInt(num));
    if(jinsu == 16){
        for(let prop = arr.length-1;prop >= 0;prop--){
            if(arr[prop] === 10){
                arr[prop] = "A";
            }
            else if(arr[prop] === 11){
                arr[prop] = "B";
            }
            else if(arr[prop] === 12){
                arr[prop] = "C";
            }
            else if(arr[prop] === 13){
                arr[prop] = "D";
            }
            else if(arr[prop] === 14){
                arr[prop] = "E";
            }
            else if(arr[prop] === 15){
                arr[prop] = "F";
            }
        }
    }
    for(let prop = arr.length-1;prop >= 0;prop--){
        result = result + arr[prop] * Math.pow(10,prop);
    }
    return arr;
}
function ano_to_ten(jinsu,num){
    let arr = (""+num).split("");
    let result = 0;
    let count = arr.length - 1;
    for(let prop = 0 ;prop > arr.length;prop++ ){
        result += parseInt(arr[prop]) * Math.pow(jinsu,count);
        count--;
    }
    return result;
}
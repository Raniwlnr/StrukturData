let angka = [64,  34, 25, 12, 22, 18, 20];

function bubleShort(arr){
    let n = arr.length;
    for(let i = 0; i < n - 1; i++){
        for(let j=0; j < n - i - 1; j++) {
           if(arr[j]>arr[j+1]){
            console.log(arr[j] + " dibandingkan dengan " + arr[j+i]);
            let temp = arr[j];
            arr[j]=arr[j+1];
            arr[j+1] = temp;
           }
        }
    }
    return arr;
}

       bubleShort(angka);
       console.log(angka)
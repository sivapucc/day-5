//a) Print Odd numbers in an array
(function(arr){
    var arr1=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            arr1.push(arr[i]);
        }
    }
    console.log(arr1);
})([2,1,4,5,6,4,7,8,9]);


//b) Convert all the Strings to caps in a string array
(function(arr){
    var arr1=[];
    for(var i=0;i<arr.length;i++){
        var a=arr[i];
        var b=a[0].toUpperCase()+a.slice(1);
        arr1.push(b);
    }
    console.log(arr1);
})(["siva","kumar","logesh","sandeep"]);


//c) Sum of all numbers in the array
(function(arr){
    var arr1=0;
    for(var i=0;i<arr.length;i++){
        arr1+=arr[i];
    }
    console.log(arr1);
})([1,5,9,7,45,63,2]);

//d) Return all prime numbers in an array
(function(arr){
    var arr1=[];
    arr.sort();
    for(var i=0;i<arr.length;i++){
        var count=0;
        for(var j=1;j<=arr[i];j++){
            if(arr[i]%j==0){
                count++;
            }
        }
        if(count==2){
            arr1.push(arr[i]);
        }
    }
    console.log(arr1);
})([1,5,9,7,45,63,2]);

//e) Return all palindrome in an array
(function(arr){
    var arr1=[];
    for(var i=0;i<arr.length;i++){
        var s=String(arr[i]).split("").map(Number);
        var a="";
        for(var j=s.length-1;j>=0;j--){
            a+=s[j];
        }
        if(arr[i]==a){
            arr1.push(arr[i]);
        }
    }
    console.log(arr1);;
})([121,451,858,623,78987]);

//f) Return median of two sorted arrays
( function(arr1,arr2){
    var arr3=arr1+arr2;
    var a=arr3.split(",").map(Number);
    a.sort();
    var med;
    if(a.length%2==0){
        med=(a[(a.length/2)]+a[(a.length/2)-1])/2;
    }
    else{
        med=a[(a.length/2)-0.5];
    }
    console.log(med);
})([2,1,4,5,6],[5,4,6,7,8]);

//g) Remove dulicates from an array
(function(arr){
    var arr1=[];
    arr.sort();
    for(var i=0;i<arr.length;i++){
        var count=0;
        for(var j=0;j<arr1.length;j++){
            if(arr[i]==arr1[j]){
                count++;
            }
        }
        if(count<1){
                arr1.push(arr[i]);
            }
    }
    console.log(arr1);
})([1,2,2,3,4,5,5,6,8,8,8,9]);

//h) Rotate an array by k times
(function(arr,k){
    for(var i=0;i<k;i++){
        arr.splice(0,0,arr[arr.length-1]);
        arr.pop();
    }
    console.log(arr);
})([2,1,4,5,6,4,7,8,9],5);

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers = numbers.filter(function(number){
    if(number % 2 ===0)return true;
});

console.log(evenNumbers);

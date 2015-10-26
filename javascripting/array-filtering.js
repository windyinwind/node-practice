var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var rel = arr.filter(function(item){
    if(item%2===0) return item;
})
console.log(rel)

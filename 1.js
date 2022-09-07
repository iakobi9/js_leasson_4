let array = ['academy', 'of', 'digital', 'industries'].reduce(function(acumulator, currentValue){
    return acumulator + "".concat(currentValue);
}, "" );

console.log(array);
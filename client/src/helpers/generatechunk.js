const chunk = (arr,size) => {
    if(!Array.isArray(arr)){
        throw new TypeError("Input should be array");

    }
    if(typeof size !== 'number'){
        throw new TypeError('Size should be a Number');

    }

    const result = [];
    for (var i = 0; i < arr.length; i+= size){
        result.push(arr.slice(i,size + i));
    }
    return result;
}


export default chunk
module.exports = function towelSort (matrix) {
    var arr = []
    if(matrix == undefined){
      return arr
    }
    for(var i = 0; i < matrix.length; i++){

        if(i % 2 == 1){
            matrix[i].reverse()
        }
        for(var j = 0; j < matrix[i].length; j++){
            arr[arr.length] = matrix[i][j]                    
        }
    }
    return arr
}

function patt(n){

    var str =  ''

    for (let i = 1; i <=n; i++) {
        
        for (let j = 1; j <=i; j++) {
            str += '*'
            
        }

        str += '\n'
        
    }

    return str
}

console.log(patt(4));
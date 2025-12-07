function findNome(arr, nome){
    let index = 0;
    for(let item of arr){
        if(item === nome){
            return console.log(`\"${nome}"\ encontrado no index ${index}`);
        } else{
            index += 1;
        }
    }
    return console.log(`Item ${nome} não encontrado`)
}

let myArr = ["gabriel", "joão", "pedro", "lucas", "maurilio", "ana", "maria", "braga", "joana", "leticia", "marcos", "caetano", "veloso", "djavan", "araujo", "kevin", "karina", "nathan", "anita", "julia", "raquel"];
findNome(myArr, "veloso");

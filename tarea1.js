exports.fruits = function (fruit){
    let fruitsList = ["Manzana", "Pera", "Uva", "Sandía", "Banano", "Melocotón", "Piña", "Maracuyá", "Mandarina", "Mango"]
    let msj = ""
    let exist = false
    for (let i = 0; i < fruitsList.length; i++) {
        if (fruit == fruitsList[i]) {
            exist = true
        }
    }
    return listResult(exist)
}

function listResult(exist){
    if (exist) {
        msj = "la fruta se encuentra en la lista"
    }else{
        msj = "la fruta no se encuentra en la lista"
    }
    return msj
}
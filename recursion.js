export function consoleRec(arr, index){
    if (arr.length != index){
        console.log(arr[index++]);
        consoleRec(arr, index);
    }
}

//module.exports.consoleRec = consoleRec;
//consoleRec(['я', 'умею', 'писать', 'рекурсивные', 'функции'], 0);
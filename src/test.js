let list = [1, 2]
let state = {
    list,
    getItem(index){
        console.log(list[index])
    }
}

// console.log(state.list[0])
state.getItem(0)
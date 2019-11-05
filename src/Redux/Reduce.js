

let initialiSate = {
    counter: 100
}
let Reduce = (State = initialiSate, action) => {
    // return State;

    switch (action.type) {
        case 'increment':
            return { ...State, 'counter': State.counter + 1 }
        case 'decrement':
            return { ...State, 'counter': State.counter - 1 }
        case 'increment2':
            return { ...State, 'counter': State.counter + action.payload }
        default: {
            return State;
        }
    }
}
export default Reduce;
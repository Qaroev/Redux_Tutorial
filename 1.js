let state = 0;


function updateState(state, action) {
    if (action === 'Increment') {
        return state + 1
    } else if (action === 'Decrement') {
        return state - 1
    } else {
        return state
    }
}

state = updateState(state, 'Increment');
console.log(state);

state = updateState(state, "Decrement");
console.log(state);

state = updateState(state, '');

console.log(state);

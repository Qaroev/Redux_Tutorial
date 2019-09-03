let state = 0;


function updateState(state, action) {
    if (action.type === 'Increment') {
        return state + action.amount
    } else if (action.type === 'Decrement') {
        return state - action.amount
    } else {
        return state
    }
}

const incrementAction = {type: "Increment", amount: 5};
const DecrementAction = {type: "Decrement", amount: 3};


state = updateState(state, incrementAction);
console.log(state);

state = updateState(state, DecrementAction);
console.log(state);

state = updateState(state, {});

console.log(state);

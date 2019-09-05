function updateState(state, action) {
    if (action.type === 'Increment') {
        return state + action.amount
    } else if (action.type === 'Decrement') {
        return state - action.amount
    } else {
        return state
    }
}


class Store {
    constructor(updateState, state) {
        this._updateSate = updateState;
        this._state = state;
    }

    get state() {
        return this._state
    }

    update(action) {
        this._state = this._updateSate(this._state, action)
    }
}


const store = new Store(updateState, 0);

const incrementAction = {type: "Increment", amount: 5};
const DecrementAction = {type: "Decrement", amount: 3};


store.update(incrementAction);
console.log(store.state);
store.update(DecrementAction);
console.log(store.state);
store.update({});
console.log(store.state);

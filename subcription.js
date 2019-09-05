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
        this._callbacks = []
    }

    get state() {
        return this._state
    }

    update(action) {
        this._state = this._updateSate(this._state, action);
        this._callbacks.forEach(callback => callback())
    }

    subscribe(callback) {
        this._callbacks.push(callback);
        return () => this._callbacks = this._callbacks.filter(cb => cb !== callback)
    }
}


const store = new Store(updateState, 0);

const incrementAction = {type: "Increment", amount: 5};
const DecrementAction = {type: "Decrement", amount: 3};

const unSubscribe = store.subscribe(() => console.log('State changes1', store.state));
store.subscribe(() => console.log('State changes2', store.state));

store.update(incrementAction);
unSubscribe();
store.update(DecrementAction);
store.update({});

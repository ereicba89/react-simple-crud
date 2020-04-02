import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducers'

const store = createStore(
    reducer,
    compose(applyMiddleware(thunk),

    //cuando tengamos instalado redux dev tool sino da error
    typeof windows === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
        window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
)

export default store;

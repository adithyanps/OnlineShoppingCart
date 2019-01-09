import { createStore ,applyMiddleware,compose, combineReducers } from 'redux'
import cartReducer from '../features/cart/reducer';
import productsReducer from '../features/productListing/reducer';
import itemReducer from '../features/detailList/reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  cart:cartReducer,
  products:productsReducer,
  choosed:itemReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )

)

export default store
// import { createStore , combineReducers } from 'redux'
// import cartReducer from '../features/cart/reducer';
// import productsReducer from '../features/productListing/reducer';
// import itemReducer from '../features/detailList/reducer';
//
// const rootReducer = combineReducers({
//   cart:cartReducer,
//   products:productsReducer,
//   choosed:itemReducer
// })
//
// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//
// )
//
// export default store

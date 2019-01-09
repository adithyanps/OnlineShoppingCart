






// import React , { Component } from 'react';
//
// const selected = (products, item) => products.filter(prdctItem => prdctItem.id === item.id)
//
const matched = (choosed, item) => (choosed.id === item.id)[0]

const detailList = (choosed, item) => {
  // const cartItem = selected(products, item)
  // console.log("0000",cartItem)
  console.log("////",choosed)
  console.log("////",item)

  const match = matched(choosed,item)
  console.log(match)
 return item
}
const itemReducer = (state=[], action) => {
  switch(action.type) {
    case 'SELECTED':
      return detailList(state, action.payload)
    default:
      return state
  }

}
export default itemReducer;

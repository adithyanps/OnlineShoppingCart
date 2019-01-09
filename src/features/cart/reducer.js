import React , { Component } from 'react';

const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id)
const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0]

const addToCart = (cart, item) => {
  console.log("...",cart)
  console.log("...",item)

  const cartItem = itemInCart(cart, item)
  console.log(cartItem)
  return cartItem === undefined
    ? [ ...cartWithoutItem(cart, item), { ...item, count: 1 }]
    : [ ...cartWithoutItem(cart, item), { ...cartItem, count: cartItem.count + 1 }]
}
const removeFromCart = (cart, item) => {
  return item.count === 1
  ? [...cartWithoutItem(cart,item)]
  : [...cartWithoutItem(cart,item), {...item, count:item.count-1}]
}
const removeAllFromCart =(cart,item) => {
  return [...cartWithoutItem(cart,item)]
}
const cartReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD':
      return addToCart(state, action.payload)
    case 'REMOVE':
      return removeFromCart(state, action.payload)
    case 'REMOVE_ALL':
      return removeAllFromCart(state, action.payload)
    default:
      return state
  }

}
export default cartReducer;

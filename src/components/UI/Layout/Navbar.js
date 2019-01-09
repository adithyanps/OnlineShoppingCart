import React , { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { connect } from 'react-redux';

import Logo from '../../../assets/images/logo.svg'
import {Button} from '../css/Button/Button';

class Navbar extends Component{
  render(){
    // console.log(props)
    console.log(this)
    return(
    <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
      {/*
        https://www.iconfinder.com/icons/1243689/call_phone_icon
        Creative Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk */}

        <Link to="/">
          <img src={Logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">products</Link>
          </li>
        </ul>
        <div className="wrap">
          <div className="search">
            <input
              type="text"
              className="searchterm" name=""
              placeholder="what are you looking for?"/>
            <button type="submit" className="searchbtn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <Link to="/cart" className="ml-auto">
          <Button>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>my cart-<span style={{color:"red"}}>{this.props.cart.length === 0 ? (null):(this.props.cart.length)}</span>
          </Button>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/authentication" className="nav-link">authenticate</Link>
          </li>
        </ul>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/login" className="nav-link">login</Link>
          </li>
        </ul>
    </NavWrapper>
    )
  }
}
const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform:capitalize !important;
  }
  .wrap {
    padding: 0.2rem 0.4rem;
  }
  .search {
    width: 100%;
    position: relative;
  }
  .searchterm {
    /* float: left; */
    /* width: 50%; */
    border: 3px solid #00B4CC;
    padding: 0.5px;
    font-size: 17px;
    outline: none;
  }
  .searchbtn {
    /* width: 50px; */
    /* height: 5-px; */
    /* border: 1px solid #00b4CC; */
    /* background-color: red; */ */
    text-align:center;
    color: #fff;
    cursor: pointer;
    /* fontsize:20px; */
  }
  count_cart {
      color:var(--mainRed)!important;
  }

`
function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Navbar);

import React from 'react';
import { Field , reduxForm } from 'redux-form';
import './form.css'

const CheckoutForm = (props) => {
  console.log(props)
  const { handleSubmit } = props

  return(
    <div>
      <form className='Form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="order[name]"> Your Name</label><br />
          <input name="order[name]" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="order[email]"> Your Email-Address</label><br />
          <input name="order[email]" type="text" />
        </div>
        <div>
          <label htmlFor="order[streetname]"> street-name</label><br />
          <input name="streetname" type="text" />
        </div>
        <div>
          <label htmlFor="pincode"> pincode</label><br />
          <input name="pin-code" type="text" />
        </div>
        <div>
          <button type="submit">Submit Order</button>
        </div>
      </form>
    </div>
  )
}

export default CheckoutForm

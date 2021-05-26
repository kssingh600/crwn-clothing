import React from 'react' ;
import StripeCheckout from 'react-stripe-checkout' ;

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100 ;
    const publishableKey = 'pk_test_51Iv15jSHFeAFdPeoGUbIngEWaykTTtfrnWywR7ccJGkyvJ6NC5s6EYqc9fKJcuYD3PVF3vt9wrj9FZh30rGMLayJ00YHUR9r9u' ;

    const onToken = token => {
        console.log(token) ;
        alert('Payment Successful') ;
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            img='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price} `}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton ;
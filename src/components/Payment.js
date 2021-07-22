import React, { useState } from "react";
import './payment.css';
import logo from "./images/reading_img.svg";
import gpay from "./images/gpay.png";
import paytm from "./images/paytm1.png";
import paypal from "./images/paypal.png";
import { Link } from "react-router-dom";



const Payment = () => {
  const [input, setInput] = useState(false);
  const [payment, setpayment] = useState("");
  const change = (value) => {
    setInput(!input);
    setpayment(value);
  };
  const submit = () => {
    alert("Thank You For Subscribing!")
  }
  return (

    <div className="container-fluid payment-main">
      <div id='gap'></div>
      <div className="row payment-center ">
        <div className="col-12 col-sm-6">

          <img src={logo} className="myimage" alt="Reading" />
          <h3 className="payment-h3">
            <pre id="pree">
              The more that you read,the more things<br></br>
              you will know. The more that you<br></br>
              learn the more places<br></br>
              you'll go.
            </pre>
          </h3>
        </div>
        <div className="col-12 col-sm-6">
          <div className="col-12 payment-box">
            <h1 id='h1'>Payment Methods</h1>
            <div className="row payment">
              <div className="col-5 col-sm-5 small-box1">
                <h4 className="payment-h4">
                  Monthly <small>Subscription</small>
                </h4>
                <h5>
                  <small>
                    <s>$10</s>
                  </small>
                   &nbsp;$8
                </h5>
              </div>
              <div className="col-5 col-sm-5 small-box2">
                <h4 className="payment-h4">
                  Yearly <small>Subscription</small>
                </h4>
                <h5>
                  <small>
                    <s>$99</s>
                  </small>
                   &nbsp;$80
                </h5>
              </div>
            </div>
            {
              input ?
                (<div id="newText">
                  <p>Enter Details To Continue</p>
                  <input id="payment-input" type="text" placeholder={payment} />
                  <Link to='/'>
                    <button class='btn button pay' onClick={submit}>Submit</button>
                  </Link>
                </div>

                ) :
                (
                  <h6 className="payment-h6">
                    Click Any Payment Method To Begin Your Learning.
                  </h6>
                )
            }

            <img onClick={() => change(" Enter Google Pay Number")} src={gpay} className="img3" alt="gpay" />
            <img onClick={() => change(" Enter Paytm Number")} src={paytm} className="img2" alt="paytm" />
            <img onClick={() => change(" Enter Paypal Number")} src={paypal} className="img2" alt="paypal" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Payment;
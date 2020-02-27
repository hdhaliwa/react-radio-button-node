import React, { Component } from "react";
import RadioButton from "./RadioButton/RadioButton";

class App extends Component {

    state = {
        paymentMethod: "COD"
    }

    radioChangeHandler = (event) => {

        this.setState({
            paymentMethod: event.target.value
        });
    }

    render() {

        const quickpay = this.state.paymentMethod === "QuickPay" ? <input type="text" placeholder="Enter transaction id"/> : null;

        return (
            <div className="Apps">
                <div className="radio-btn-container" style={{ display: "flex" }}>

                    <RadioButton 
                        changed={ this.radioChangeHandler } 
                        id="1" 
                        isSelected={ this.state.paymentMethod === "QuickPay" } 
                        label="QuickPay" 
                        value="QuickPay" 
                    />

                    <RadioButton 
                        changed={ this.radioChangeHandler } 
                        id="2" 
                        isSelected={ this.state.paymentMethod === "COD" } 
                        label="Cash On Delivery" 
                        value="COD" 
                    />

                  </div>
                
                { quickpay }

                <h2 style={{ marginTop: "50px" }}>
                    The selected radio button value is => { this.state.paymentMethod }
                </h2>
            </div>
            
        );
        
    }
}

export default App;
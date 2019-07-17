import React from 'react';
import { red } from 'ansi-colors';

const RESET_VALUES = {id: '', category: '', price: '', stocked: false, name: ''};

class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.checkNameBeforeSubmit = this.checkNameBeforeSubmit.bind(this);
        this.state = {
            product: Object.assign({}, RESET_VALUES),
            errors: {
                message: "",
                control: false
            }
        };
    }

    handleSave(e) {
        // prevent the form submit event from triggering an HTTP Post
        e.preventDefault();
        
        if(this.checkNameBeforeSubmit()){
            return;
        }

        this.props.onSave(this.state.product);
        // reset form values to blank after submitting
        this.setState({
            product: Object.assign({}, RESET_VALUES),
            errors: {
                message: "",
                control: false
            }
        });
    }

    checkNameBeforeSubmit() {
        if(this.state.product.name) {
            this.setState({errors: {message: "", control: false}});
            return false;
        }
        this.setState({errors: {message: "You have to send a name", control: true}});
        return true;
    }

    handleChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if(name === "name" && value){
            this.setState({errors: {message: "", control: false}});
        }else{
            this.setState({errors: {message: "You have to send a name", control: true}});
        }

        this.setState((prevState) => {
            prevState.product[name] = value;
            return {
                product: prevState.product
            };
        });
    }

    render() {
        let message = this.state.errors.control ? <span style={{color: 'red'}}>{this.state.errors.message}</span> : "";
        return (
            <form action="">
                <h3>Enter a new product</h3>
                <p>
                    <label>
                        Name {message}
                        <br/>
                        <input type="text" name="name" value={this.state.product.name} onChange={this.handleChange} />
                    </label>
                </p>
                <p>
                    <label>
                        Category
                        <br/>
                        <input type="text" name="category" value={this.state.product.category} onChange={this.handleChange} />
                    </label>
                </p>
                <p>
                    <label>
                        Price
                        <br/>
                        <input type="text" name="price" value={this.state.product.price} onChange={this.handleChange} />
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" name="stocked" checked={this.state.product.stocked} onChange={this.handleChange} />
                        In stock?
                    </label>
                </p>
                <input type="submit" value="Save" onClick={this.handleSave} />
            </form>
        );
    }
}

export default ProductForm;
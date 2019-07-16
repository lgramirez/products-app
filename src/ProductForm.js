import React from 'react';

const RESET_VALUES = {id: '', category: '', price: '', stocked: false, name: ''};

class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            product: Object.assign({}, RESET_VALUES),
            errors: {}
        };
    }

    handleSave(e) {
        this.props.onSave(this.state.product);
        // reset form values to blank after submitting
        this.setState({
            product: Object.assign({}, RESET_VALUES),
            errors: {}
        });
        // prevent the form submit event from triggering an HTTP Post
        e.preventDefault();
    }

    handleChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState((prevState) => {
            prevState.product[name] = value;
            return {
                product: prevState.product
            };
        });
    }

    render() {
        return (
            <form action="">
                <h3>Enter a new product</h3>
                <p>
                    <label>
                        Name
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
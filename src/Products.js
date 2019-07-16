import React from 'react';
import Filters from './Filters.js';
import ProductTable from './ProductTable.js';
import ProductForm from './ProductForm.js';

var PRODUCTS = {
    '1': {id: 1, category: 'Musical Instruments', price: '$459.99', stocked: true, name: 'Clarinet'},
    '2': {id: 2, category: 'Musical Instruments', price: '$5,000', stocked: true, name: 'Harpsicord'},
    '3': {id: 3, category: 'Musical Instruments', price: '$11,000', stocked: false, name: 'Fortepiano'},
    '4': {id: 4, category: 'Furniture', price: '$799', stocked: true, name: 'Chaise Lounge'},
    '5': {id: 5, category: 'Furniture', price: '$1,300', stocked: false, name: 'Dining Table'},
    '6': {id: 6, category: 'Furniture', price: '$100', stocked: true, name: 'Bean Bag'}
};

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.handlerFilter = this.handlerFilter.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
        this.state = {
            filterText: '',
            inStockOnly: false,
            products: PRODUCTS
        };
    }

    handlerFilter(filterInput) {
        this.setState(filterInput);
    }

    saveProduct(product) {
        this.setState((prevState) => {
            let products = prevState.products;
            product.id = products[Object.keys(products).length].id + 1;
            products[product.id] = product;
            return {products};
        });
    }

    // handleDestroy(id) {
    //     this.setState((prevState) => {
    //         let products = prevState.products;

    //     });
    // }

    render() {
        return (
            <div>
                <Filters filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} onFilter={this.handlerFilter} />
                <ProductTable products={this.state.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
                <ProductForm onSave={this.saveProduct} />
            </div>
        );
    }
}

export default Products;
import React from 'react';

class Filters extends React.Component {
    render() {
        return (
            <form action="">
                <input type="text" placeholder="Search..." value={this.props.filterText}/>
                <p>
                    <label>
                        <input type="checkbox" checked={this.props.inStockOnly}/>
                        Only show products in stock
                    </label>
                </p>
            </form>
        );
    }
}

export default Filters;
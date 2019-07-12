import React from 'react';

class EventHandler extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            foo: 'Click Me'
        };
    }

    handleClick() {
        this.setState({
            foo: 'bar'
        });
    }
    
    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.foo}
            </button>
        );
    }
}

export default EventHandler;
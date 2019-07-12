import React from 'react';

class ChangeColorButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.props.click();
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                I do not like {this.props.currentColor}
            </button>
        );
    }
}

export default ChangeColorButton;

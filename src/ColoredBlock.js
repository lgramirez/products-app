import React from 'react';
import ChangeColorButton from './ChangeColorButton';

class ColoredBlock extends React.Component {
    constructor(props) {
        super(props);
        this.changeColor = this.changeColor.bind(this);
        this.state = {
            backgroundColor: 'red'
        }
    }

    changeColor() {
        /* no hacer esto cuando dependemos de un state pasado, usar el setState que recibe un funcion como parametro */
        // let newColor = this.state.backgroundColor === "red" ? "blue" : "red";
        // this.setState({
        //     backgroundColor: newColor
        // });
        this.setState((prevState) => {
            let newColor = prevState.backgroundColor === "red" ? "blue" : "red";
            return {
                backgroundColor: newColor
            };
        });
    }

    render() {
        return (
            <div style={{width: "200px", height: "200px", backgroundColor: this.state.backgroundColor}}>
                <ChangeColorButton click={this.changeColor}/>
            </div>
        );
    }
}

export default ColoredBlock;
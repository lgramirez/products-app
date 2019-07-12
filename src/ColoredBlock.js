import React from 'react';
import ChangeColorButton from './ChangeColorButton';

class ColoredBlock extends React.Component {
    constructor(props) {
        super(props);
        this.changeColor = this.changeColor.bind(this);
        this.state = {
            color: 'red',
        }
    }

    changeColor() {
        /* no hacer esto cuando dependemos de un state pasado, usar el setState que recibe un funcion como parametro */
        // let newColor = this.state.backgroundColor === "red" ? "blue" : "red";
        // this.setState({
        //     backgroundColor: newColor
        // });

        /* otra forma de hacer lo mismo*/
        // this.setState((prevState) => {
        //     let newColor = prevState.backgroundColor === "red" ? "blue" : "red";
        //     return {
        //         backgroundColor: newColor,
        //         title: newTitle
        //     };
        // });

        //otra forma
        this.setState((prevState, props) => ({
            color: prevState.color === 'red' ? 'blue' : 'red'
        }));
    }

    render() {
        return (
            <div style={{width: "200px", height: "200px", backgroundColor: this.state.color}}>
                <ChangeColorButton click={this.changeColor} currentColor={this.state.color}/>
            </div>
        );
    }
}

export default ColoredBlock;
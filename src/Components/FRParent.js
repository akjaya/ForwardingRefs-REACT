import React, { Component } from 'react'
import FRInput from './FRInput';

export class FRParent extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }

    clickhandler =() => {
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <FRInput ref ={this.inputRef} />
                <button onClick ={ this.clickhandler} > Click me</button>
            </div>
        )
    }
}

export default FRParent

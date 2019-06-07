import React, {Component} from 'react'
import axios from 'axios'

export default class Form extends Component {
    constructor() {
        super() 
        
        this.state = {
            imageUrl: "",
            name: "",
            price: 0
        }
    }

    handleChange = (e) => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleCancel = () => {
        this.setState({
            imageUrl: "",
            name: "",
            price: 0
        })
    }



    render() {
        return (
            <div>
                <h1>Form</h1>

                <input type="text"
                placeholder="Image"
                name="imageUrl"
                onChange={this.handleChange}
                value={this.state.imageUrl}
                />

                <input type="text"
                placeholder="Name"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
                />    

                <input type="text"
                placeholder="Price"
                name="price"
                onChange={this.handleChange}
                value={this.state.price}
                />

                <button onClick={(e) => this.handleCancel(e.target.value)}>Cancel</button>
                <button onClick={() => this.props.addInventory}>Add to Inventory</button>
            </div>
        )
    }
}
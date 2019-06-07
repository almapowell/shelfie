import React, { Component } from 'react'
import axios from 'axios'

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            imageUrl: "",
            name: "",
            price: 0
        }
    }

    componentDidUpdate(product) {
        console.log(98189168464, 'EXECUTED')
        // let {product} = this.props.product
        // if(product.name !== product.name){
        this.setState({
            imageUrl: imageUrl,
            name: name,
            price: price
        })
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

createProduct = () => {
    const { imageUrl, name, price } = this.state
    let newProduct = {
        imageUrl,
        name,
        price
    }

    this.props.createProduct(newProduct)

    this.setState({
        imageUrl: "",
        name: "",
        price: 0
    })
}

editProduct = (e) => {
    const { id } = this.props.product
    const { imageUrl, name, price } = this.state
    let edited = (
        imageUrl,
        name,
        price
    )

    this.props.editProduct(id, edited)

    this.setState({
        imageUrl: '',
        name: '',
        price: 0
    })
}


render () {
    const { imageUrl, name, price } = this.state
    const { editing } = this.props
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

                {this.editProduct ? (
                    <button onClick={() => this.createProduct}>Add to Inventory</button>
                ) : (
                        <button>Save Changes</button>
                    )}

                <button onClick={(e) => this.handleCancel(e.target.value)}>Cancel</button>
        </div>
    )
}

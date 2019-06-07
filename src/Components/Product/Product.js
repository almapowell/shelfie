import React, {Component} from 'react'
import axios from 'axios'

export default class Product extends Component {
    
    
    render() {
        const { deleteProduct } = this.props
        return (
            <div>
                <button onClick={() => deleteProduct}>Delete</button>
                <h1>Product</h1>
            </div>
        )
    }
}
import React, { Component } from 'react'
import axios from 'axios'
import Product from '../Product/Product'

export default class Dashboard extends Component {
    constructor(props) {
        super(props) 
        
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get('/api/inventory').then(res => {
            console.log(651651351681815, res.data)
            this.setState({
                inventory: res.data
            })
        }).catch(err => console.log("why is this happening?", err))
    }

    createProduct = (product) => {
        axios.post('/api/inventory', product).then(res => {
            console.log(561896168165498, res.data)
            this.setState({
                inventory: res.data
            })
        })
    }




    render() {
        const mappedInventory = this.props.inventory.map(product => {
            return(
                <Product
                key={product.product_id}
                
                /> 
            )
        })
        return (
            <div>
                <h1>Dashboard</h1>
                <Product  />
                {mappedInventory}
            </div>
        )
    }
}


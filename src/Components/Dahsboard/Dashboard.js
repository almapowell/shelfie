import React, { Component } from 'react'
import axios from 'axios'
import Product from '../Product/Product'
import Form from '../Form/Form'


export default class Dashboard extends Component {
    constructor(props) {
        super(props) 
        
        this.state = {
            products: [],
            editing: true
        }
    }

    componentDidMount() {
        axios.get('/api/inventory').then(res => {
            console.log(651651351681815, res.data)
            this.setState({
                products: res.data
            })
        }).catch(err => console.log("why is this happening?", err))
    }

    createProduct = (product) => {
        axios.post('/api/inventory', product).then(res => {
            console.log(561896168165498, res.data)
            this.setState({
                products: res.data,
            })
        })
    }

    deleteProduct = (id) => {
        axios.delete(`/api/inventory/${id}`).then(res => {
            console.log(6516518665165, res.data)
            this.setState({
                products: res.data
            })
        })
    }

    setEditing = (id) => {
        let product = this.state.products.find(product => product.id == product)

        this.setState({
            editing: true,
            currentProduct: product
        })
    }



    render() {
        const mappedInventory = this.props.inventory.map(product => {
            return(
                <Product
                key={product.product_id}
                deleteProduct={this.deleteProduct}
                /> 
                // <Form product={product}/>
            )
        })
        return (
            <div>
                <h1>Dashboard</h1>
                <Product/>
                <Form 
                products={this.state.products}
                create={this.createProduct}
                editing={this.state.editing} />
                {mappedInventory}
            </div>
        )
    }
}


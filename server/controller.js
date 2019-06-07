module.exports = {
    getAllProducts: (req, res) => {
        const db = req.app.get('db')

        db.get_inventory().then(product => {
            res.status(200).send(product)
        })
    },

    createProduct: (req, res) => {
        const db = req.app.get('db')
        const {product} = req.body

        db.create_product([product]).then(product => {
            res.status(200).send(product)
        }).catch(err => console.log(err))
    }, 

    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.body
        
        db.delete_product([id]).then(product => {
            res.status(200).send(product)
        }).catch(err => console.log(err))
    },

    updateProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {product} = req.body

        db.update_product([id, product]).then(product => {
            res.status(200).send(product)
        })
    }
}
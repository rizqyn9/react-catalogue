import React from 'react'
import axios from 'axios'

const ProductDetails = (props)  => {
    const {id} = props
    axios.get(`/product/${id}`).then(el => {
        console.log(el);
    }).catch (err => {
        console.log(err);
    })

    return (
        <div>
            asds
        </div>
    )
}

export default ProductDetails
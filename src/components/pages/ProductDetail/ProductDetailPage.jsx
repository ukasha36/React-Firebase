import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../../services/products.service'

function ProductDetailPage() {
    const { id } = useParams()


    useEffect(() => {
        if (id) {
            (async () => {
                const detailResponse = await getProductById(id)
                console.log(detailResponse);
            })()
        }
    }, [id])

    return (
        <div>ProductDetailPage</div>
    )
}

export default ProductDetailPage
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../../services/products.service';
import { Link } from 'react-router-dom'
import logo from '/src/assets/img.jpg';


function ProductDetailPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const detailResponse = await getProductById(id);
                setProduct(detailResponse);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        if (id) {
            fetchProduct();
        }
    }, [id]);

    return (
        <>
    <Link to="/"> Back To Home </Link>
    <img className="logo" src={logo} alt="" />


        <div className='productDetails'>
            <h1>Product Details</h1>
            <div>
            {product ? (
                <div>
                    <h2>Product Name:{product.name}</h2>
                    <h5>Price: ${product.price}</h5>
                    <img className='largeimg' src={product.imageUrl || 'placeholder.jpg'} alt={name} />
                    <p>Description: {product.description}</p>
                    <button>Order Now</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            </div>
        </div>
        </>
    );
}

export default ProductDetailPage;

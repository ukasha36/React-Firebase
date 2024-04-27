import React from "react";
import { useState, useEffect } from "react";
import { getAllProducts } from "../../../services/products.service";
import { Link } from 'react-router-dom'
import logo from '/src/assets/img.jpg';


const Admindashboard = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      const productsResponse = await getAllProducts();
      setProducts(productsResponse);
    })();
  }, []);

  console.log(products);

  if (!products) return null;

  return(
  
  
  
  <>
  <img className="logo" src={logo} alt="" />
  <div>
    <div className="adminheader">
        <h2>Admin Dashboard</h2>
      <div className="adminheaderbtn">
      <Link to="/"> <button>Home</button></Link>

      <Link to="/add-product"><button >Add Products  </button> </Link>    
        <button>Logout </button>
        
        </div>
      
        </div>


        <table border={1}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          {/* Add more table headers for other product properties */}
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id || product.pid}> {/* Ensure unique key */}
            <td>{product.name}</td>
            <td>{product.price}rs</td>
            <td>{product.qty}</td>
            {/* Add more table cells for other product properties */}
          </tr>
        ))}
      </tbody>
    </table>
  
  
    </div>
  
  
  
  
  </>
  



) ;
};

export default Admindashboard;

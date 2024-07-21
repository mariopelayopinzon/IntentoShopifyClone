// src/pages/ProductDetail.jsx
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams(); // Obtener el parámetro de la URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://ecommerce-json-jwt.onrender.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      {product ? (
        <div>
          <h2>Detalles del Producto {product.name}</h2>
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
          {/* Botón de regreso a la página principal */}
          <Link to="/">Home</Link>
        </div>
      ) : (
        <p>Cargando detalles del producto...</p>
      )}
    </div>
  );
};

export default ProductDetail;

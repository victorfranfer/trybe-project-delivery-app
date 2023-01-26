import React, { useEffect, useState } from 'react';
import { requestProducts } from '../Services/Request';

export default function ProductCard() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await requestProducts('/products');
      setProductsList(products);
    };
    fetchProducts();
  }, []);

  return (
    <section className="product-list">
      {
        productsList.map((product) => (
          <div className="product-card" key={ product.id }>
            <img
              src={ product.urlImage }
              alt="product-logo"
              data-testid={ `customer_products__img-card-bg-image-${product.id}` }
            />
            <p data-testid={ `customer_products__element-card-title-${product.id}` }>
              { product.name }
            </p>
            <p data-testid={ `customer_products__element-card-price-${product.id}` }>
              { Number(product.price)
                .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }
            </p>
            <div className="quantity-buttons">
              <button
                type="button"
                data-testid={ `customer_products__button-card-rm-item-${product.id}` }
              >
                -
              </button>
              <input
                type="number"
                data-testid={ `customer_products__input-card-quantity-${product.id}` }
              />

              <button
                type="button"
                data-testid={ `customer_products__button-card-add-item-${product.id}` }
              >
                +
              </button>
            </div>
          </div>
        ))
      }
    </section>
  );
}

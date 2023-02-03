import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../Context/provider';
import { saveCart } from '../Services/Storage';
import { ProductCardDiv } from './Styles/productCard';

export default function ProductCard({ product }) {
  const { cart, setCart } = useContext(AppContext);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const updateQuantity = () => {
      cart.forEach((item) => {
        if (item.productId === product.id) {
          setQuantity(item.quantity);
        }
      });

      saveCart(cart);
    };

    updateQuantity();
  }, [cart]);

  const addTocart = () => {
    setQuantity((prev) => prev + 1);

    const newCart = cart.map((item) => {
      if (item.productId === product.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
          subTotal: Number((item.subTotal + item.unitPrice).toFixed(2)),
        };
      }

      return item;
    });

    if (JSON.stringify(newCart) === JSON.stringify(cart)) {
      return setCart((prev) => [
        ...prev,
        {
          productId: product.id,
          name: product.name,
          quantity: 1,
          unitPrice: Number(product.price),
          subTotal: Number(product.price),
        },
      ]);
    }

    return setCart(newCart);
  };

  const removeItem = () => {
    setQuantity((prev) => {
      if (prev === 0) {
        return 0;
      }
      return prev - 1;
    });

    const newCart = cart.map((item) => {
      if (item.productId === product.id) {
        return {
          ...item,
          quantity: item.quantity - 1,
          subTotal: Number((item.subTotal - item.unitPrice).toFixed(2)),
        };
      }

      return item;
    });

    if (quantity === 1) {
      const newCart2 = cart.filter((item) => item.productId !== product.id);

      return setCart(newCart2);
    }
    return setCart(newCart);
  };

  const updateCart = ({ target }) => {
    const newCart = cart.map((item) => {
      if (item.productId === product.id && target.value > 0) {
        return {
          ...item,
          quantity: target.value,
          subTotal: Number((product.price * target.value).toFixed(2)),
        };
      }

      return item;
    });

    if (JSON.stringify(newCart) === JSON.stringify(cart) && target.value > 0) {
      return setCart((prev) => [
        ...prev,
        {
          productId: product.id,
          name: product.name,
          quantity: target.value,
          unitPrice: Number(product.price),
          subTotal: Number((product.price * target.value).toFixed(2)),
        },
      ]);
    }

    return setCart(newCart);
  };

  return (
    <ProductCardDiv className="product-card" key={ product.id }>
      <span data-testid={ `customer_products__element-card-price-${product.id}` }>
          { Number(product.price)
            .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }
      </span>
      <img
        src={ product.urlImage }
        alt="product-logo"
        data-testid={ `customer_products__img-card-bg-image-${product.id}` }
      />
      <div>
        <p data-testid={ `customer_products__element-card-title-${product.id}` }>
          { product.name }
        </p>
        <div className="quantity-buttons">
          <button
            onClick={ removeItem }
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${product.id}` }
          >
            -
          </button>
          <input
            min="0"
            value={ quantity }
            onChange={ updateCart }
            type="number"
            data-testid={ `customer_products__input-card-quantity-${product.id}` }
          />
          <button
            onClick={ addTocart }
            type="button"
            data-testid={ `customer_products__button-card-add-item-${product.id}` }
          >
            +
          </button>
        </div>
      </div>
    </ProductCardDiv>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape(
    PropTypes.any.isRequired,
  ).isRequired,
};

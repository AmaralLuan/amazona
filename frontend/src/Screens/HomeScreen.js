import React, {  useEffect } from 'react';
import {Link} from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import {useDispatch, useSelector} from 'react-redux';

// renderiza a página principal  

function HomeScreen (props) {
    // define o estado da aplicação e traz as informações do backend
    const productList = useSelector(state => state.productList);
    const {products, loading, error} = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
      return () => {
        //
      };
    }, [])

    // retorna todos os produtos da Homepage

    return loading? <div>loading...</div> : 
    error? <div>{error}</div>:
    <ul className="products">

    {

      // usa a função map pra renderizar dinamicamente cada produto do objeto data.js

      products.map(product => 
        <li key={product._id}>
          <div className="product">
          <Link to={'products/' + product._id}>
                <img src={product.image} alt="product" className="product-image"></img>
          </Link>  
            <div className="product-name">
              <Link to={'/products/' + product._id}>{product.name}</Link>
            </div>

            <div className="product-brand">{product.brand}</div>
            <div className="product-price">{product.price}</div>
            <div className="product-rating">{product.rating} Stars {product.numReviews}</div>
          </div>
        </li>
        )

    }

    </ul>
}

export default HomeScreen;
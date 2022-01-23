import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Product } from "../models/product";
import Rating from "./Rating";
// import Rating from './Rating'

interface Props {
  product: Product;
}

const ProductComponent: React.FC<Props> = (props: Props) => {
  const { product } = props;
  return (
    <Card border="primary" className="my-3 py-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>

          <Card.Text as="div">
            <div className="my-3">
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </div>
          </Card.Text>
          <Card.Text as="h3">${product.price}</Card.Text>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductComponent;

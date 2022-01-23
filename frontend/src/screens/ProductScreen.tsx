import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Row, Image, ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import { Product } from "../models/product";

interface Props {}

const ProductScreen: React.FC<Props> = (props: Props) => {
  const [product, setProduct] = useState<Product>({});

  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get<Product>(`/api/product/${id}`);
      data ? setProduct(data) : setProduct({});
    };
    fetchProduct;
  }, [id]);
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product?.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product?.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product?.rating} text={` ${product?.numReviews} reviews`} />
            </ListGroup.Item>
            
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;

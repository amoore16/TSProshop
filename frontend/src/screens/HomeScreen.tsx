import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ProductComponent from "../components/Product";
import { Product } from "../models/product";

interface Props {}

const HomeScreen: React.FC<Props> = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get<Product[]>("/api/products");
      data ? setProducts(data) : setProducts([]);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => {
          <Col sm={12} md={6} lg={4} xxl={3} key={product._id}>
            <ProductComponent product={product} />
          </Col>;
        })}
      </Row>
    </>
  );
};

export default HomeScreen;

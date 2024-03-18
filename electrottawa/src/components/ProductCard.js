import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
// import { Link } from 'react-router-dom';
import { useCart } from "react-use-shoppingcart";

function ProductCard(props) {
  const { addToCart } = useCart();
  return (
    <Card id="carte" className='m-2' style={{ width: '18rem' }}>
      <Card.Img className="imgprod" variant="top" src={props.product.img} alt='product image' />
      <Card.Body>
        <Card.Text>
          <Row>
            <Col>Name:</Col>
            <Col>{props.product.name}</Col>
          </Row>
          <Row>
            <Col>Brand:</Col>
            <Col>{props.product.Brand}</Col>
          </Row>
          <Row>
            <Col>Price:</Col>
            <Col>{props.product.price}$</Col>
          </Row>

        </Card.Text>
        
      </Card.Body>
      <Container className='text-center' style={{ paddingBottom: '10px' }}  >
          {/* as={Link} to="/cart" variant="danger" */}
          <Button  onClick={() => addToCart(props.product)} variant="danger">Add to cart</Button>
        </Container>
    </Card>
  );
}

export default ProductCard;
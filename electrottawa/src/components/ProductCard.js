import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import { useCart } from "react-use-shoppingcart";
import { useHistory } from 'react-router-dom';

function ProductCard(props) {
  const { addToCart } = useCart();
  const history = useHistory();
  function handleClick() {
    history.push('/product_details', { props });
  }
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
      <Container className='text-center' style={{ paddingBottom: '14px' }}  >
          {/* as={Link} to="/cart" variant="danger" */}
          <Row>
            <Col> <Button className='addCart' style={{ fontSize: '1.6ex', backgroundColor: '#b22222', color: 'white' }} onClick={() => addToCart(props.product) }>Add to cart</Button></Col>
            <Col><Button style={{ fontSize: '1.6ex' }} onClick={handleClick} variant="dark">View details</Button></Col>
          </Row>
         
          
        </Container>
    </Card>
  );
}

export default ProductCard;
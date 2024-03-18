
import { Multistepbar } from "../components/Multistepbar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { MultiStepForm } from "../components/Multistepform";
import { questions } from "./Question";
import { useCart } from "react-use-shoppingcart";


const Checkout = () => {
  var sum = 0;
  const { cartItems, removeFromCart, clearCart, totalPriceCart } = useCart();
  const [index, setIndex] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const totalPagesCount = questions?.length || 0;
  // numbered by pages. for exampe { 1: [{"key" : "value"}], 2:["key": "value"], 3: []}
  const [pagesAnswers, setPagesAnswers] = useState({});

  const prevButton = () => {
    if (index > 1) {
      setIndex(prevIndex => prevIndex - 1);
    }
  }

  const nextButton = () => {
    if (index - 3) {
      setIndex(prevIndex => prevIndex + 1);
    } else {
      // clear the form on submit
      setPagesAnswers({});
      setSubmitted(true);
    }
  }

  const onPageAnswerUpdate = (step, answersObj) => {
    setPagesAnswers({ ...pagesAnswers, [step]: answersObj });
  }

  const handleStart = () => {
    setIndex(1);
    setSubmitted(false);
    
  }

  return (
    <div>
      <div className="d-flex justify-content-center"><h1 className="titre">CHECKOUT</h1></div>
      <div className="container text-center">
      <div className="row">
      <Row className="m-5">
              <Col className="align-self-center">
                <Multistepbar
                  step={index}
                />
              </Col>
            </Row>
        <div className="col-8 align-self-start">
          <Container className="h-100">
            
            <Row>
              {
                submitted ?
                  <Card>
                    <Card.Body>
                      <p>Thank you for doing business with us. A confirmation email will be sent to you with a summary of the invoice</p>
                    </Card.Body>
                    <Card.Footer>
                      <Button className="btn btn-danger" onClick={()=>{handleStart(); clearCart()}}>Buy another Services</Button>
                    </Card.Footer>
                  </Card> :
                  <Card>
                    <Card.Body>
                      <MultiStepForm
                        list={questions}
                        step={index}
                        onPageUpdate={onPageAnswerUpdate}
                        pagesAnswers={pagesAnswers}
                      />
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between">
                      <Button className="btn btn-danger" onClick={prevButton} disabled={index === 1}>Previous</Button>
                      <Button className="btn btn-danger" onClick={nextButton}>{index === totalPagesCount ? 'Submit' : 'Next'}</Button>
                    </Card.Footer>
                  </Card>
              }
            </Row>
          </Container>
        </div>
        <div className="cartContainer col-4 align-self-center" id='orderSum'>
          <div><h6>Order Summary</h6></div>
          {cartItems.map(item => {
            sum += item.product.price * item.qty;
            return (
              <div className="cart" key={item.product.id}>
                <div>
                  <div>
                  {item.qty} x {item.product.name}  -  {item.product.price}$/unit
                    
                  </div>
                </div>
              </div>
            );
          })}
          <div>Total : {sum}$</div>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default Checkout;
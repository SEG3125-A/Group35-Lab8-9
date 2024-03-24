import { useCart } from "react-use-shoppingcart";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { useHistory } from 'react-router-dom';
// import Disqus from '../components/Disqus';
import { DiscussionEmbed } from 'disqus-react';

const ProductDetails = (props) => {
  const { addToCart } = useCart();
  const product = props.location.state.props.product;
  const [currentValue, setCurrentValue] = useState(1);

  const history = useHistory();
  function handleClick() {
    history.push('/cart', { props });
  }
  const handleChange = (val)=> {
    setCurrentValue(val.target.value);
    console.log(val.target.value);
  }

  const onFormSubmit = (e) => {
    alert("Product added to cart!");
    e.preventDefault();
    console.log(e.target.quantity.value);
     const Data = Number(e.target.quantity.value);
     console.log("data: "+ Data);
    addToCart (product,Data);
};
  
  return (
    <div className="container" style={{marginTop: '70px', marginBottom: '20px'}}>
      <div className="row justify-content-center">
        <div className="col">
          <img src={product.img} alt='product image' />
        </div>
        <div className="col text-start" style={{marginLeft: '40px'}}>
          <p id="prodTitle" style={{fontWeight: 'bolder', fontSize: '30px', height: '25px'}}>{product.name} </p>
          <p id="prodPrice" style={{fontWeight: 'bold', color: '#b22222', fontSize: '20px'}}>{product.price}$</p>
          <div style={{ paddingTop: "15px" }}>
            <p style={{fontWeight: 'bolder'}}>Product description:</p>
            <p style={{fontSize: '14px'}}>{product.description}</p>
          </div>
          <div>
            <Form onSubmit={onFormSubmit}>
              <Form.Group className="mb-3" controlId="test1" >
                <Form.Label style={{fontWeight: 'bolder'}}>Quantity</Form.Label>
                <Form.Control 
                type="number" 
                name="quantity"
                value= {currentValue}
                onChange={handleChange}
                required 
                style={{width: "100px"}}
                />
              </Form.Group>

              <Button className='addCart' style={{ fontSize: '1.7ex', width:'150px', backgroundColor: '#b22222', color: 'white' }} variant="danger" type="submit">
                Add to Cart
              </Button>
              <Button style={{ fontSize: '1.7ex', width:'150px', marginLeft: '10px' }} variant="dark" onClick={handleClick}>Go to Cart</Button>
            </Form>
              
          </div>
          
        </div>
      </div>
      <div className='container' style={{marginTop: '50px'}}>
      <br></br>
        <h3 style={{fontWeight: 'bolder'}}>Buyers comments</h3>
      <DiscussionEmbed
    shortname='Electrottawa'
    config={
        {
            url: "http://localhost:3000/"+product.id,
            identifier: product.id,
            title: product.name,	
        }
    }
/>
            </div>
    </div>

  );
}

export default ProductDetails;
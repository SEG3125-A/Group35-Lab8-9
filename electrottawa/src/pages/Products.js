import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import FilterContainer from '../components/FilterContainer';
import ProductCard from '../components/ProductCard';
import { Base } from "../components/ProdData";


const Products = () => {

  const build_categorical_facet_values = (name) => {
    const values = [...new Set(Base.map(item => item[name]))];
    return values ? values.map(value => ({ 'name': value, 'checked': false })) : [];
  }

  const [state, setState] = useState({
    all_clothes: [],
    shown_clothes: [],
    facets: {
      Category: build_categorical_facet_values('Category'),
      Brand: build_categorical_facet_values('Brand'),
      
    }
  });

  useEffect(() => {
    setState(prevState => ({ ...prevState, all_clothes: Base, shown_clothes: Base }));
  }, []);

  useEffect(() => {
    if (state.all_clothes.length === 0) {
      setState(prevState => ({ ...prevState, shown_clothes: [] }));
      return;
    }

    const facets = {};
    Object.entries(state.facets).forEach(([name, values]) => {
      facets[name] = [];
      values.forEach(value => {
        if (value.checked) {
          facets[name].push(value.name);
        }
      });
    });

    if (Object.values(facets).every(arr => arr.length === 0)) {
      setState(prevState => ({ ...prevState, shown_clothes: state.all_clothes }));
      return;
    }

    const number_of_active_facets = Object.values(facets).filter(x => x.length).length;

    const to_show = state.all_clothes.filter(clothe =>
      Object.entries(facets).every(([name, values]) =>
        values.length === 0 || values.includes(clothe[name]))
    );

    setState(prevState => ({ ...prevState, shown_clothes: to_show }));
  }, [state.all_clothes, state.facets]);

  function clearAllFacetValues(facet) {
    const new_facet = state.facets[facet].map(facet_value => ({
      ...facet_value,
      checked: false
    }));
    setState(prevState => ({ ...prevState, facets: { ...prevState.facets, [facet]: new_facet } }));
  }

  function updateCategory(facet, value, newChecked) {
    const new_facet = state.facets[facet].map(({ name, checked }) => ({
      name: name,
      checked: name === value ? newChecked : checked
    }));
    setState(prevState => ({ ...prevState, facets: { ...prevState.facets, [facet]: new_facet } }));
  }
  return (
    <>
      <div className='bg-white'>
        <br></br>
        <div className="d-flex justify-content-center"><h1 className="titre">ALL PRODUCTS</h1></div>
        <br></br>
        <Row>
          <Col className='border-end' md={3}>
            <FilterContainer facets={state.facets} updateCategory={updateCategory} clearAllFacetValues={clearAllFacetValues} />
          </Col>
          <Col>
            <Container className='d-flex flex-wrap'>
              {state.shown_clothes.length > 0 ? (
                state.shown_clothes.map((product, index) => <ProductCard key={index} product={product} />)
              ) : (
                <p>No product matching the option selected</p>
              )}
            </Container>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Products;
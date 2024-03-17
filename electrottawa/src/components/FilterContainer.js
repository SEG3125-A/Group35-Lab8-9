import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import FilterFacet from './FilterFacet';
import Row from 'react-bootstrap/esm/Row';

function FilterContainer({ facets, updateCategory, clearAllFacetValues}) {
    //Loop through all the facets and create a Facet component
    return (
        <Container className='ms-4'>
            {Object.entries(facets).map(([name, values]) =>
                <Row className=' m-3'>
                    <FilterFacet name={name} values={values} updateCategory={updateCategory} clearAllFacetValues={clearAllFacetValues} />
                </Row>)}
        </Container>
    );
}

export default FilterContainer;
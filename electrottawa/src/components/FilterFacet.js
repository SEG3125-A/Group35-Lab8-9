import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Filter from './Filter';
import Col from 'react-bootstrap/esm/Col';

function filterFacet({ name, values, updateCategory }) {
    // Print the name of the facet and loop through all of its values to create Facet_value components
    return (<>
        <Row>
            <Col>
                {name}
                <hr></hr>
            </Col>
        </Row>
        {values.map(value => (
            <Row>
                <Filter name={value.name} updateCategory={updateCategory} facet={name}/>
            </Row>
        ))}
        
    </>
    );
}

export default filterFacet;
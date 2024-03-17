import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

function Filter({name, updateCategory, facet}) {

    //State of the checkbox
    const [selected, setSelected] = useState(false)

    // Changes the state of selected on click
    const handleChange = () => {
        setSelected(!selected)
    }

    // Update the state in App.js when the variable selected changes.
    useEffect(() => {
        updateCategory(facet, name, selected)
    }, [selected])
    return (
        <Form.Check type='checkbox'
            label={name}
            value={selected}
            onChange={handleChange}
        />    
    );
}

export default Filter;
import { Form } from "react-bootstrap";
import { useState } from "react";
import Credit from './Creditcart';

export const FormItem =  ({ item, onChange, answer })  => {
  const [currentValue, setCurrentValue] = useState(answer || null);

  const handleChange = (value) => {
    setCurrentValue(value);
    onChange(value, item.value);
  }

   switch (item.type) {
      case 'text':
        return (
          <>
            <Form.Label style={{height: '10px'}}>{item.label}</Form.Label>
            <Form.Control
              type="text"
              id={item.label}
              onChange={(e) => handleChange(e.target.value, item.value)}
              value={currentValue}
              style={{marginBottom: '20px', borderColor: '#e7e0e0'}}
              required
            />
          </>
        )
        break;
        case 'code':
        return (
          <>
            <Form.Label style={{height: '10px'}}>{item.label}</Form.Label>
            <Form.Control
              type="text"
              id={item.label}
              onChange={(e) => handleChange(e.target.value, item.value)}
              value={currentValue}
              pattern="([A-Z][0-9]){3}"
               placeholder="A1A1A1"
               style={{marginBottom: '20px', borderColor: '#e7e0e0'}}
              required
            />
          </>
        )
        break;
        case 'credit':
        return (
          <>
          <br></br>
            <h5><Form.Label style={{height: '10px'}}>{item.label}</Form.Label></h5>
            <Credit />
          </>
        )
        break;
      case 'tel':
        return (
            <>
            <Form.Label style={{height: '10px'}}>{item.label}</Form.Label>
            <Form.Control
                type="tel"
                id={item.label}
                onChange={(e) => handleChange(e.target.value, item.value)}
                value={currentValue}
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                placeholder="xxx-xxx-xxxx"
                style={{marginBottom: '20px', borderColor: '#e7e0e0'}}
                required
            />
            </>
        )
        break;
      case 'email':
        return (
            <>
            <Form.Label style={{height: '10px'}}>{item.label}</Form.Label>
            <Form.Control
                type="email"
                id={item.label}
                onChange={(e) => handleChange(e.target.value, item.value)}
                value={currentValue}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                placeholder="xxxx@xxxx.xx"
                style={{marginBottom: '20px', borderColor: '#e7e0e0'}}
                required
            />
            </>
        )
        break;
      case 'number':
        return (
          <>
            <Form.Label style={{height: '10px'}} htmlFor="ages">{item.label}</Form.Label>
            <Form.Control
              type="number"
              id="ages"
              aria-describedby="ages"
              onChange={(e) => onChange(e.target.value, item.value)}
              style={{marginBottom: '20px', borderColor: '#e7e0e0'}}
              required
            />
          </>
        )
        break;
      case 'information':
        return (
          <p>
            {item.label}
          </p>
        )
      case 'select':
        return (
          <div className="mt-2">
            <Form.Select style={{marginBottom: '20px', borderColor: '#e7e0e0'}} aria-label={item.label} onChange={(e) => onChange(e.target.value, item.value)}>
              <option>{item.label}</option>
              {
                item.options.map((opt, index) => {
                  return (
                    <option value={opt}>{opt}</option>
                  )
                })
              }
            </Form.Select>
          </div>
        )
    }
  };
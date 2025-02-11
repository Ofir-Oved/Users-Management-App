import { useState, useEffect } from 'react';
import './css/Address.css';

const Address = ({address, setAddress}) => {
  const [street, setStreet] = useState(address.street);
  const [city, setCity] = useState(address.city);
  const [zip, setZip] = useState(address.zipcode);  

  // Update the parent component address whenever any input field changes
  useEffect(() => {
    setAddress({
      street,
      city,
      zipcode: zip,
    });
  }, [street, city, zip, setAddress]);

  return (
    <>
    <div className='address-card'>
      <div className='input-group-address'>
        <label>Street:</label>
        <input value={street} onChange={(e) => setStreet(e.target.value)} /><br />
      </div>
      <div className='input-group-address'>
        <label>City:</label>
        <input value={city} onChange={(e) => setCity(e.target.value)} /><br />
      </div>
      <div className='input-group-address'>
        <label>Zip Code:</label>
        <input value={zip} onChange={(e) => setZip(e.target.value)} /><br />
      </div>
    </div></>
  )
}

export default Address
import React, { useState } from 'react';

const Form = ({ availableBrands, availableYears, availablePrices, onSearch }) => {
  const [formData, setFormData] = useState({
    brand: '',
    year: '',
    price: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSearch(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="brand">Car brand</label>
        <input
          name="brand"
          id="brand"
          placeholder="Enter the brand"
          type="text"
          list="brandList"
          value={formData.brand}
          onChange={handleInputChange}
        />
        <datalist id="brandList">
          {availableBrands.map(brand => (
            <option key={brand} value={brand} />
          ))}
        </datalist>
      </div>
      <div>
        <label htmlFor="year">Car year</label>
        <input
          name="year"
          id="year"
          placeholder="Enter the year"
          type="number"
          min="1900"
          max="2099"
          list="yearList"
          value={formData.year}
          onChange={handleInputChange}
        />
        <datalist id="yearList">
          {availableYears.map(year => (
            <option key={year} value={year} />
          ))}
        </datalist>
      </div>
      <div>
        <label htmlFor="price">Car price</label>
        <input
          name="price"
          id="price"
          placeholder="Enter the price"
          type="number"
          min="0"
          list="priceList"
          value={formData.price}
          onChange={handleInputChange}
        />
        <datalist id="priceList">
          {availablePrices.map(price => (
            <option key={price} value={price} />
          ))}
        </datalist>
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
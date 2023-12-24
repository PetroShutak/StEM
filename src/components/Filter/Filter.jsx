import React, { useState, useEffect } from 'react';

const Filter = ({ products, applyFilter }) => {
  const [brands, setBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  useEffect(() => {
    const uniqueBrands = Array.from(
      new Set(products.map(product => product.brand))
    );
    setBrands(uniqueBrands);
  }, [products]);

  const handleBrandChange = brand => {
    const updatedBrands = [...selectedBrands];
    if (updatedBrands.includes(brand)) {
      const index = updatedBrands.indexOf(brand);
      updatedBrands.splice(index, 1);
    } else {
      updatedBrands.push(brand);
    }
    setSelectedBrands(updatedBrands);
  };

  const applyFilterHandler = () => {
    applyFilter(selectedBrands);
  };

  return (
    <div>
      <h3>Бренди</h3>
      {brands.map(brand => (
        <div key={brand}>
          <input
            type="checkbox"
            id={brand}
            name={brand}
            checked={selectedBrands.includes(brand)}
            onChange={() => handleBrandChange(brand)}
          />
          <label htmlFor={brand}>{brand}</label>
        </div>
      ))}
      <button onClick={applyFilterHandler}>Застосувати фільтр</button>
    </div>
  );
};

export default Filter;

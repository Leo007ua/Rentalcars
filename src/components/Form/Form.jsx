import { useSelector } from 'react-redux';
import { selectCars } from 'redux/selector';

function Form() {
  const cars = useSelector(selectCars);

  
  return (
    <form>
      <div role="group" aria-labelledby="CarBrand">
        <label htmlFor="brand">Car brand</label>
        <input
          list="brands"
          name="brand"
          id="brand"
          placeholder="Enter the text"
          type="text"
        />
        {/* <datalist id="brands">
          {cars.map(car => <option>{car.make}</option>
          )}
        </datalist> */}
      </div>
      <div role="group" aria-labelledby="Price">
        <label htmlFor="price">Price/1 hour</label>
        <select id="price" name="price">
          <option defaultValue="">To $</option>
          <option defaultValue="30">30</option>
        </select>
      </div>
      <div>
        <label htmlFor="priceRange">Сar mileage/km</label>
        <div role="group" aria-labelledby="Mileage" id="priceRange">
          <input
            type="number"
            name="mileage"
            min="0"
            max="200"
            placeholder="From"
          />
          <input
            type="number"
            name="mileage"
            min="0"
            max="200"
            placeholder="To"
          />
        </div>
      </div>
      <button type="submit">Search</button>
    </form>
  );
}

export default Form;

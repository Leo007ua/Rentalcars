import CarCard from 'components/CarCard/CarCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectFavoriteCars } from 'redux/selector';

import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;
  list-style: none;
`;
const Favorites = () => {
  const favoriteCars = useSelector(selectFavoriteCars);

  return (
    <StyledWrapper>
      {favoriteCars?.length > 0 ? (
        favoriteCars.map(car => <CarCard key={car.id} car={car} />)
      ) : (
        <span>
          Please choose the car in our <Link to="/catalog">Catalog</Link>
        </span>
      )}
    </StyledWrapper>
  );
};

export default Favorites;

import React from 'react';
import {
  PaginationButton,
  PaginationItem,
  PaginationWrapper,
} from './paginationStyled';

const Pagination = ({ currentPage, totalCars, carsPerPage, onPageChange }) => {
  const pageNumbers = Math.ceil(totalCars / carsPerPage);

  return (
    <PaginationWrapper>
      {Array.from({ length: pageNumbers }, (_, index) => index + 1).map(
        page => (
          <PaginationItem key={page}>
            <PaginationButton
              active={currentPage === page ? 'true' : undefined}
              onClick={() => onPageChange(page)}
            >
              {page}
            </PaginationButton>
          </PaginationItem>
        )
      )}
    </PaginationWrapper>
  );
};

export default Pagination;

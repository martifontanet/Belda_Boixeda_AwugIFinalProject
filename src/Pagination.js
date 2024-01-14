import React, { useEffect } from 'react';

const Pagination = ({ currentPage, onPageChange }) => {
  const [num, setNum] = React.useState(1);

  useEffect(() => {
    // Update the "num" state when the "currentPage" prop changes
    setNum(currentPage);
  }, [currentPage]);

  return (
    <div className="pagination">
      {[...Array(5)].map((_, index) => {
        let pageNumber = currentPage + index - 2;
        if (currentPage < 3) {
          pageNumber++;
        } else if (currentPage > 11) {
          pageNumber--;
        }

        if (pageNumber > 0 && pageNumber <= 13) {
          return (
            <button
              key={pageNumber}
              onClick={() => onPageChange(pageNumber)}
              className={pageNumber === currentPage ? 'active pagBut' : 'pagBut'}
            >
              {pageNumber}
            </button>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Pagination;
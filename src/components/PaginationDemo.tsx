import React from 'react';
import { usePagination } from '../hooks/usePagination';

const fakeItems = Array.from({ length: 123 }, (_, i) => `Item ${i + 1}`);

const PaginationDemo: React.FC = () => {
  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    nextPage,
    prevPage,
    setPage,
    canNextPage,
    canPrevPage,
  } = usePagination(fakeItems.length, 10);

  const currentItems = fakeItems.slice(startIndex, endIndex + 1);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Pagination Demo</h2>
      <div>
        {currentItems.map((item, idx) => (
          <div key={idx}>{item}</div>
        ))}
      </div>
      <p>
        Showing items {startIndex + 1} - {endIndex + 1} (Total on this page: {itemsOnCurrentPage})
      </p>
      <button disabled={!canPrevPage} onClick={prevPage}>Previous</button>
      <span style={{ margin: '0 12px' }}>
        Page {currentPage} of {totalPages}
      </span>
      <button disabled={!canNextPage} onClick={nextPage}>Next</button>
      <div style={{ marginTop: 10 }}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => setPage(i + 1)} style={{ margin: '0 4px' }}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaginationDemo;

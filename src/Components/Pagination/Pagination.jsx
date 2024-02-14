import React from 'react'
import '../Pagination/Pagination.css'

export const Pagination = ({ pages, page, onPageChange }) => {
  return (
    <nav>
      <ul className="pagination">
        {/* ... Previous button logic remains the same ... */}
        {Array.from({ length: pages }, (_, index) => (
          <li key={index + 1} className={page === index + 1 ? 'active' : ''}>
            <button onClick={() => onPageChange(index + 1)}>{index + 1}</button>
          </li>
        ))}
        {/* Conditionally render the Next button */}
        {page !== pages && (
          <li className={page === pages ? 'disabled' : ''}>
            <button onClick={() => onPageChange(page + 1)}>Next</button>
          </li>
        )}
      </ul>
    </nav>
  )
}

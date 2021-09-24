import React from 'react'

const GraphicSortDirection = ({ sortDirection }) => {
  return (
    <>
      {sortDirection === 'asc' ? <span>▲</span> : <span>▼</span>}
    </>
  )
}

export default GraphicSortDirection
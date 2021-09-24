import React from 'react'
import GraphicSortDirection from './GraphicSortDirection'
import styles from './Table.module.css'

const HeaderTable = ({ onSort, sortDirection }) => {
  return (
    <tr className={styles.row}>
      <th onClick={onSort.bind(null, 'id')}>id <GraphicSortDirection sortDirection={sortDirection} /></th>
      <th onClick={onSort.bind(null, 'firstName')}>First name <GraphicSortDirection sortDirection={sortDirection} /></th>
      <th onClick={onSort.bind(null, 'lastName')}>Last name <GraphicSortDirection sortDirection={sortDirection} /></th>
      <th onClick={onSort.bind(null, 'email')}>Email <GraphicSortDirection sortDirection={sortDirection} /></th>
      <th onClick={onSort.bind(null, 'phone')}>Phone <GraphicSortDirection sortDirection={sortDirection} /></th>
      <th onClick={onSort.bind(null, 'adress.state')}>State <GraphicSortDirection sortDirection={sortDirection} /></th>
    </tr>
  )
}

export default HeaderTable
import React from 'react'
import ContentTable from './ContentTable'
import HeaderTable from './HeaderTable'
import styles from './Table.module.css'

const Table = (props) => {
  return (
    <table className={styles.container}>
      <thead>
        <HeaderTable onSort={props.onSort} sortDirection={props.sortDirection} />
      </thead>
      <tbody>
        <ContentTable data={props.data} onRowSelect={props.onRowSelect} />
      </tbody>
    </table>
  )
}

export default Table
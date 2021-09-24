import './App.css'
import React, { useEffect, useState } from 'react'
import Table from './components/Table'
// eslint-disable-next-line no-unused-vars
import _ from 'lodash'
import ProfileInfo from './components/ProfileInfo'
import Paginator from './common/Paginator'
import TableSearch from './components/TableSearch'
import FilterState from './components/FilterState'
import Preloader from './common/Preloader'

function App() {
  const [data, setData] = useState([])
  const [sortField, setSortField] = useState('id')
  const [sortDirection, setSortDirection] = useState('asc')
  const [rowData, setRowData] = useState()
  const [totalItemsCount, setTotalItemsCount] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState()
  const [filterSearch, setFilterSearch] = useState()

  const portionSize = 20

  let filteredData = getFilteredData()
  let displayData = _.chunk(filteredData, portionSize)[currentPage - 1]

  useEffect(() => {
    fetch('https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json').then(response => response.json()).then(result => {
      setData(_.orderBy(result, sortField, sortDirection))
      setTotalItemsCount(result.length)
    })
  }, [])

  let onSort = (sortField) => {
    const copyData = [...data]
    const sortType = sortDirection === 'asc' ? 'desc' : 'asc'
    const orderedData = _.orderBy(copyData, sortField, sortType)
    setData(orderedData)
    setSortDirection(sortType)
    setSortField(sortField)
  }

  let onRowSelect = (row) => {
    setRowData(row)
  }

  let onPageChanged = (numberPage) => {
    setCurrentPage(numberPage)
  }

  let searchHandler = (e) => {
    if (e.key === 'Enter') {
      setSearch(e.target.value)
      setCurrentPage(1)
    }
  }

  let filterStateHandler = (e) => {
    setFilterSearch(e.target.value)
  }

  function getFilteredData() {
    if (!search && !filterSearch) {
      return data
    }

    return data.filter(item => {
      if (search && filterSearch) {
        return (item['firstName'].includes(search) || item['lastName'].includes(search)) && item['adress']['state'].includes(filterSearch)
      } else if (search) {
        return item['firstName'].includes(search) || item['lastName'].includes(search)
      }
      return item['adress']['state'].includes(filterSearch)
    })
  }

  if (filteredData.length !== totalItemsCount) {
    setTotalItemsCount(filteredData.length)
    if (filteredData.length <= 20) {
      setCurrentPage(1)
    }
  }

  return (
    <div>
      {data.length === 0 ? <Preloader /> : (
        <>
          <TableSearch searchHandler={searchHandler} />
          <FilterState filterStateHandler={filterStateHandler} />
          {filteredData.length > 0 ? <Table data={displayData} onSort={onSort} onRowSelect={onRowSelect} sortDirection={sortDirection} /> : <div className='nothingFound'>Nothing Found</div>}
          <Paginator totalItemsCount={totalItemsCount} currentPage={currentPage} onPageChanged={onPageChanged} portionSize={portionSize} setCurrentPage={setCurrentPage} />
          {rowData && filteredData.length > 0 ? <ProfileInfo rowData={rowData} /> : null}
        </>
      )}
    </div>
  )
}

export default App

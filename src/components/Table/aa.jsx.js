aa
import { Fragment, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { useNavigate, Link } from 'react-router-dom'

// ** Third Party Components
// import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import moment from 'moment'

import { selectProductList, setProductsList } from '../../redux/slices/productsSlice';

const TablePage = () => {

  // const dispatch = useDispatch()
  const [isLoading, setLoading] = useState(false)
  const Listing = useSelector(selectProductList)

  useEffect(() => {
    setLoading(false)
    // dispatch(setProductsList(products))
    const timeoutId = setTimeout(() => 3000)
    return function cleanup() {
      clearTimeout(timeoutId)
    }
  }, [])

  console.log('Azad', Listing)

  const columns = [
    // {
    //     name: 'Sr. No.',
    //     cell: (row, index) => pageCount > 1 ? ((pageCount - 1) * rowsPerPage) + index + 1 : index + 1,
    //     minWidth: "70px",
    // },
    {
      name: 'Name',
      selector: (row) => row.name ? <span style={{ whiteSpace: 'break-spaces', marginTop: '6px', marginBlock: '6px' }}
      >{row.name}</span> : '--',
      minWidth: '200px'
    },

    {
      name: 'Description',
      selector: (row) => row.description ? <span style={{ whiteSpace: 'break-spaces', marginTop: '6px', marginBlock: '6px' }}
      >{row.description}</span> : '--',
      className: 'onlyCapitalized',
      minWidth: '300px'
    },
    {
      name: 'Price',
      selector: (row) => row.price ? <span style={{ whiteSpace: 'break-spaces', marginTop: '6px', marginBlock: '6px' }}
      >{row.price}</span> : '--',
      className: 'onlyCapitalized',
      minWidth: '200px'
    },
    {
      name: 'Category',
      selector: (row) => row.category ? <span style={{ whiteSpace: 'break-spaces', marginTop: '6px', marginBlock: '6px' }}
      >{row.category}</span> : '--',
      minWidth: '200px'
    },
    {
      name: 'Created Date',
      selector: (row) => moment(row.created_at).format("DD-MM-YYYY"),
      minWidth: '150px'
    },

  ]

  if (isLoading) {
    return (
      <>
        <Fragment>
          <div>
            <div className='parent'>
              <div className='myHeight'>
                {/* <Spinner color='success' /> */}
                <h5>Loading</h5>
              </div>
            </div>
          </div>
        </Fragment>
      </>
    )
  }

  return (

    <Fragment>

      <div className="container mx-auto">
        <div className="grid grid-flow-row auto-rows-max">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>

        <div className="w-full m-8 page-color">
          <div className="p-3 shadow-xl card bg-base-100">
            {/* <div className="grid grid-cols-12 gap-4">
            <div>01</div>
          </div> */}

            <h1 className='text-center'>Welcome</h1>

            <div className="grid grid-cols-1">
              <div>
                <div className='w-auto'>
                  <DataTable
                    noHeader
                    columns={columns}
                    // customStyles={Listing.length <= 2 ? customStyles : ''}
                    className={Listing.length <= 3 ? 'custom-table' : 'react-dataTable'}
                    // sortIcon={<ChevronDown size={10} />}
                    data={Listing}
                    key={Listing?.id}
                    // pagination
                    // paginationServer
                    // paginationTotalRows={totalEntry}
                    // paginationPerPage={countPerPage}
                    paginationComponentOptions={{ noRowsPerPage: true }}
                  // onChangePage={(page) => setPageCount(page)}
                  // paginationComponent={CustomPagination}
                  // paginationDefaultPage={currentPage + 1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>


  );
}

export default TablePage;
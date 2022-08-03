import { useEffect, useState } from "react"
import PizzaChart from "./sections/PizzaChart"
import TableProducts from "./sections/TableProducts"
import Pagination from 'react-bootstrap/Pagination'
import { getProducts } from "../../api"
import { setRange } from "../../utils/setRange"

const step = 10

const Main = () => {
  const [data, setData] = useState([])
  const [skip, setSkip] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    getProducts(skip).then((result) => {
      setTotal(result.total)
      setData(setRange(result.products))
    })
  }, [skip])

  const handlePrevButtonClick = () => {
    setSkip((prevState) => prevState - step)
  }
  const handleNextButtonClick = () => {
    setSkip((prevState) => prevState + step)
  }


  return (
    <div style={{padding: '30px 15px', display: 'flex', flexDirection: 'column'}}>
      <PizzaChart data={data} />
      <TableProducts data={data} skip={skip} />
      <Pagination style={{alignSelf: 'center'}}>
        <Pagination.Prev
          onClick={handlePrevButtonClick}
          disabled={skip === 0}
        />
        <Pagination.Next
          onClick={handleNextButtonClick}
          disabled={total === skip + step}
        />
      </Pagination>
    </div>
  )
}

export default Main
import { Table } from "react-bootstrap"

const TableProducts = ({
  data,
}) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Tile</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Category</th>
            <th>Thumbnail </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.brand}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td><img alt='thumbnail' src={item.thumbnail} style={{width: '100px'}}/></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default TableProducts
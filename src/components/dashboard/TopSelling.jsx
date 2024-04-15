import { TopSellingData } from "../../data/dummyData";

const columns = [
    { key: 'image', label: 'Image'},
    { key: 'product', label: 'Product'},
    { key: 'price', label: 'Price'},
    { key: 'sold', label: 'Sold'}
];
const TopSelling = () => {
  return (
    <table>
        <thead>
            <tr>
            {columns.map((column) => (
            <th key={column.key}>{column.label}</th>
          ))}
            </tr>
        </thead>
        <tbody>
        {TopSellingData.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td key={`${row.id}-${column.key}`}>{row[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TopSelling
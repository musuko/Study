import './App.css';
import { useTable } from "react-table";
import { columns, data } from "./pref_ranking";


function App() {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          React-table つかってみた。
        </p>
        <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}> 
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr  {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                )
              })}
            </tr>
          );
        })}
      </tbody>
    </table>

      </header>
    </div>
  );
}
export default App;
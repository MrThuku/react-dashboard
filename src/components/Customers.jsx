import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";

// const columns = [
//   {
//     id: "name",
//     label: "Name",
//     minWidth: 170,
//     format: (value) => `${value.firstName} ${value.lastName}`,
//   },
//   { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
//   {
//     id: "population",
//     label: "Population",
//     minWidth: 170,
//     align: "center",
//     format: (value) => value.toLocaleString("en-US"),
//   },
//   {
//     id: "size",
//     label: "Size\u00a0(km\u00b2)",
//     minWidth: 170,
//     align: "center",
//     format: (value) => value.toLocaleString("en-US"),
//   },
//   {
//     id: "density",
//     label: "Density",
//     minWidth: 170,
//     align: "center",
//     format: (value) => value.toFixed(2),
//   },
// ];

export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      setRows(data.users);
      // console.log(data.users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // console.log(rows);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden ", borderRadius:'1rem' }}>
      <div className=" p-3 font-bold text-3xl"> Customers</div>
      <TableContainer sx={{ maxHeight: 560 , maxWidth: '100%' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
            <TableCell>Name</TableCell>
            <TableCell> Gender </TableCell>
            <TableCell align="center">Age</TableCell>
            <TableCell align="center">Email </TableCell>
            <TableCell align="center"> Phone</TableCell>
            <TableCell align="center">Address</TableCell>      
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell>{`${row.firstName} ${row.lastName}`}</TableCell>
                    <TableCell>{row.gender.toUpperCase()}</TableCell>
                    <TableCell align="center">
                      {row.age.toLocaleString("en-US")}
                    </TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                    <TableCell align="center"> { row.phone}</TableCell>
                    <TableCell align="center">{row.address.city}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

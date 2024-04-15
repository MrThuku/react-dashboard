// import * as React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";

export default function BasicTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=10");
      const data = await res.json();
      setRows(data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    // <div className=" w-[70rem] m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">

    <TableContainer component={Paper} sx={{maxWidth: '100%', maxHeight: '100%'}}>
      <div className=" p-5 text-3xl font-bold ">Products</div>
    
      <Table sx={{minWidth:650}} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell sx={{ fontWeight:' bold'}}>Image</TableCell>
            <TableCell align="right" sx={{ fontWeight:' bold'}}>Item</TableCell>
            <TableCell align="center" sx={{ fontWeight:' bold'}}> Descption </TableCell>
            <TableCell align="right" sx={{ fontWeight:' bold'}}> Stock</TableCell>
            <TableCell align="right" sx={{ fontWeight:' bold'}}>Brand</TableCell>
            <TableCell align="right" sx={{ fontWeight:' bold'}}>Category</TableCell>

            <TableCell align="right" sx={{ fontWeight:' bold'}}>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img
                  className=" w-20  rounded-lg"
                  src={row.thumbnail}
                  alt="image"
                />
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">
                {row.description.length > 30
                  ? row.description.substring(0, 30) + "..."
                  : row.description}
              </TableCell>
              <TableCell align="right">{row.stock}</TableCell>
              <TableCell align="right">{row.brand}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">
                <span className=" text-green-600"> $</span> {row.price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    // </div>
  );
}

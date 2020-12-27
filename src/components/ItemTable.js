import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import "../App.css";
function ItemTable({
  Data,
  addItems,
  removeItems,
  removeWholeItem,
  ResetTable,
  totalQty,
}) {
  //   console.log(Data);
  return (
    <div className="ItemTable">
      <TableContainer component={Paper} elevation={5}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Items({totalQty})</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Discount</TableCell>
              <TableCell align="center">Type</TableCell>
              <TableCell align="center">Add</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Reduce</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Data.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  <img src={row.img_url} alt={row.img_url} />
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">{row.discount}</TableCell>
                <TableCell align="center">{row.type}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => addItems(row.id)}
                  >
                    +1
                  </Button>
                </TableCell>
                <TableCell align="center">{row.qty}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="default"
                    onClick={() => removeItems(row.id)}
                    disabled={row.qty === 0}
                  >
                    -1
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => removeWholeItem(row.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        color="primary"
        style={{ margin: "12px 0" }}
        onClick={ResetTable}
      >
        RESET TABLE
      </Button>
    </div>
  );
}

export default ItemTable;

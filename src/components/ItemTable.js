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
              <TableCell><b>Items({totalQty})</b></TableCell>
              <TableCell align="center"><b>Name</b></TableCell>
              <TableCell align="center"><b>Price</b></TableCell>
              <TableCell align="center"><b>Discount</b></TableCell>
              <TableCell align="center"><b>Type</b></TableCell>
              <TableCell align="center"><b>Add</b></TableCell>
              <TableCell align="center"><b>Quantity</b></TableCell>
              <TableCell align="center"><b>Reduce</b></TableCell>
              <TableCell align="center"><b>Delete</b></TableCell>
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
                    color="secondary"
                    onClick={() => removeItems(row.id)}
                    disabled={row.qty === 0}
                  >
                    -1
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
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
        color="secondary"
        style={{ margin: "12px 0" }}
        onClick={ResetTable}
      >
        RESET TABLE
      </Button>
    </div>
  );
}

export default ItemTable;

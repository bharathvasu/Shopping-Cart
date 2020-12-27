import React, { useState, useEffect } from "react";
import ItemTable from "./components/ItemTable";
import "./App.css";
import ItemCart from "./components/ItemCart";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
function App() {
  const classes = useStyles();

  const [totalPrice, SetTotalPrice] = useState(2760);
  const [discount, setDiscount] = useState(0);
  const [totalQty, setTotalQty] = useState(8);
  const [Data, setData] = useState([
    {
      id: 9090,
      name: "Item1",
      qty: 1,
      price: 200,
      discount: 10,
      type: "fiction",
      img_url: "https://place-hold.it/40.jpg",
    },
    {
      id: 9091,
      name: "Item2",
      qty: 1,
      price: 250,
      discount: 15,
      type: "literature",
      img_url: "https://place-hold.it/40.jpg",
    },
    {
      id: 9092,
      name: "Item3",
      qty: 1,
      price: 320,
      discount: 5,
      type: "literature",
      img_url: "https://place-hold.it/40.jpg",
    },
    {
      id: 9093,
      name: "Item4",
      qty: 1,
      price: 290,
      discount: 0,
      type: "thriller",
      img_url: "https://place-hold.it/40.jpg",
    },
    {
      id: 9094,
      name: "Item5",
      qty: 1,
      price: 500,
      discount: 25,
      type: "thriller",
      img_url: "https://place-hold.it/40.jpg",
    },
    {
      id: 9095,
      name: "Item6",
      qty: 1,
      price: 150,
      discount: 5,
      type: "literature",
      img_url: "https://place-hold.it/40.jpg",
    },
    {
      id: 9096,
      name: "Item7",
      qty: 1,
      price: 700,
      discount: 22,
      type: "literature",
      img_url: "https://place-hold.it/40.jpg",
    },
    {
      id: 9097,
      name: "Item8",
      qty: 1,
      price: 350,
      discount: 18,
      type: "fiction",
      img_url: "https://place-hold.it/40.jpg",
    },
  ]);

  useEffect(() => {
    const QTY = localStorage.getItem("totalQty");
    console.log(JSON.parse(localStorage.getItem("Items")));
    const ITEMS = JSON.parse(localStorage.getItem("Items"));
    if (ITEMS) {
      setData(ITEMS);
    }
    if (QTY) {
      setTotalQty(QTY);
    }
  }, []);

  const addItems = (id) => {
    const updatedItems = Data.map((item) => {
      if (item.id === id) {
        item.qty++;
        setTotalQty((prevItem) => prevItem + 1);
        SetTotalPrice((prevItem) => prevItem + item.price);
        // localStorage.setItem("totalQty", totalQty + 1);
      }
      return item;
    });
    console.log(updatedItems);
    setData(updatedItems);
    // localStorage.setItem("Items", JSON.stringify(Data));
  };

  const removeItems = (id) => {
    const updatedItems = Data.map((item) => {
      if (item.id === id) {
        item.qty--;
        setTotalQty((prevItem) => prevItem - 1);
        SetTotalPrice((prevItem) => prevItem - item.price);

        // localStorage.setItem("totalQty", totalQty - 1);
      }
      return item;
    });
    console.log(updatedItems);
    setData(updatedItems);
    // localStorage.setItem("Items", JSON.stringify(Data));
  };

  const removeWholeItem = (id) => {
    // console.log(id);
    const updatedItems = Data.filter((item) => {
      return item.id !== id;
    });
    const data = Data.find((item) => item.id === id);
    setTotalQty((prevItem) => prevItem - data.qty);
    SetTotalPrice((prevItem) => prevItem - data.price * data.qty);

    // localStorage.setItem("totalQty", totalQty - 1);

    // console.log(data);
    setData(updatedItems);
    // localStorage.setItem("Items", JSON.stringify(Data));
  };
  return (
    <div className={classes.root}>
      <Grid item xs={8}>
        <Paper className={classes.paper}>
          <ItemTable
            Data={Data}
            addItems={addItems}
            removeItems={removeItems}
            removeWholeItem={removeWholeItem}
          />
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          <ItemCart items={Data} totalQty={totalQty} totalPrice={totalPrice} />
        </Paper>
      </Grid>
    </div>
  );
}

export default App;

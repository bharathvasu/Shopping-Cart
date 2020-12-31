import React, { useState, useEffect } from "react";
import ItemTable from "./components/ItemTable";
import "./App.css";
import ItemCart from "./components/ItemCart";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
} from "@material-ui/core";

function App() {
  const [open, setOpen] = React.useState(false);
  const [totalPrice, SetTotalPrice] = useState(2760);
  const [discount, setDiscount] = useState(100);
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
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const QTY = localStorage.getItem("totalQty");
    const ITEMS = JSON.parse(localStorage.getItem("Items"));
    const PRICE = localStorage.getItem("totalPrice");
    const DISCOUNT = localStorage.getItem("discount");
    if (ITEMS) {
      setData(ITEMS);
    }
    if (QTY) {
      setTotalQty(parseInt(QTY));
    }
    if (PRICE) {
      SetTotalPrice(parseInt(PRICE));
    }
    if (DISCOUNT) {
      setDiscount(parseInt(DISCOUNT));
    }
  }, []);
  const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
  };

  const ResetTable = () => {
    localStorage.removeItem("Items");
    localStorage.removeItem("totalQty");
    localStorage.removeItem("totalPrice");
    localStorage.removeItem("discount");

    const DATA = [
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
    ];
    setData(DATA);
    SetTotalPrice(2760);
    setTotalQty(8);
    window.location.reload();
  };
  const addItems = async (id) => {
    const updatedItems = Data.map((item) => {
      if (item.id === id) {
        item.qty++;
        setLocalStorage("discount", discount + item.discount);
        setDiscount(discount + item.discount);
        setLocalStorage("totalQty", totalQty + 1);
        setTotalQty(totalQty + 1);
        setLocalStorage("totalPrice", totalPrice + item.price);
        SetTotalPrice(totalPrice + item.price);
      }
      return item;
    });

    console.log(updatedItems);
    setData(updatedItems);
    setLocalStorage("Items", JSON.stringify(Data));
  };

  const removeItems = (id) => {
    const updatedItems = Data.map((item) => {
      if (item.id === id) {
        item.qty--;
        setLocalStorage("discount", discount - item.discount);
        setDiscount(discount - item.discount);
        setLocalStorage("totalQty", totalQty - 1);
        setTotalQty(totalQty - 1);
        setLocalStorage("totalPrice", totalPrice - item.price);
        SetTotalPrice(totalPrice - item.price);
      }
      return item;
    });
    console.log(updatedItems);
    setData(updatedItems);
    localStorage.setItem("Items", JSON.stringify(Data));
  };

  const removeWholeItem = (id) => {
    // console.log(id);
    const updatedItems = Data.filter((item) => {
      return item.id !== id;
    });
    const data = Data.find((item) => item.id === id);
    setLocalStorage("discount", discount - data.discount * data.qty);
    setDiscount(discount - data.discount * data.qty);
    setLocalStorage("totalQty", totalQty - 1);
    setTotalQty(totalQty - data.qty);
    setLocalStorage("totalPrice", totalPrice - data.price * data.qty);
    SetTotalPrice(totalPrice - data.price * data.qty);
    console.log(updatedItems);
    setData(updatedItems);
    localStorage.setItem("Items", JSON.stringify(updatedItems));
    handleClickOpen();
  };
  return (
    <div className="container">
      <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete Item!</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            <b>CONFIRM</b>
          </Button>
        </DialogActions>
      </Dialog>
      <ItemTable
        Data={Data}
        addItems={addItems}
        removeItems={removeItems}
        removeWholeItem={removeWholeItem}
        totalQty={totalQty}
        totalPrice={totalPrice}
        setLocalStorage={setLocalStorage}
        ResetTable={ResetTable}
      />

      <ItemCart
        items={Data}
        totalQty={totalQty}
        totalPrice={totalPrice}
        setLocalStorage={setLocalStorage}
        discount={discount}
      />
    </div>
  );
}

export default App;

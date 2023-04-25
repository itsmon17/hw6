import "./App.css";
import { NewExpensw, useState } from "./components/newExpense/NewExpensw";
import { Expenses } from "./components/expenses/Expenses";

function App() {
  const [expenses, setExpenses] = useState([
    {
      title: "bag",
      price: 537,
      date: new Date(2023, 2, 19),
    },
    {
      title: "boots",
      price: 828,
      date: new Date(2023, 11, 21),
    },
    {
      title: "blazer",
      price: 935,
      date: new Date(2023, 8, 5),
    },
    {
      title: "straight leather trousers",
      price: 636,
      date: new Date(2022, 1, 17),
    },
    {
      title: "top",
      price: 151,
      date: new Date(2022, 8, 9),
    },
    {
      title: "Shoes",
      price: 780,
      date: new Date(2022, 1, 27),
    },
    {
      title: "shorts",
      price: 295,
      date: new Date(2021, 7, 14),
    },
    {
      title: "sneakers",
      price: 543,
      date: new Date(2021, 7, 31),
    },

    {
      title: "miniskirt",
      price: 1526,
      date: new Date(2021, 0, 16),
    },
    {
      title: "Hayworth leather",
      price: 170,
      date: new Date(2020, 7, 14),
    },
    {
      title: "houndstooth belted",
      price: 431,
      date: new Date(2020, 7, 31),
    },

    {
      title: "earrings",
      price: 349,
      date: new Date(2020, 0, 16),
    },






     {
      title: "sunglasses",
      price: 273,
      date: new Date(2023, 0, 1),
    },

    {
      title: "Compass-patch waistcoat",
      price: 1573,
      date: new Date(2023, 1, 16),
    },
    {
      title: "boots",
      price: 225,
      date: new Date(2023, 3, 14),
    },
    {
      title: "tote bag",
      price: 1081,
      date: new Date(2023, 4, 31),
    },

    {
      title: "minidress",
      price: 2000,
      date: new Date(2023, 5, 16),
    },



    {
      title: "cardigan",
      price: 1000,
      date: new Date(2023, 6, 1),
    },

    {
      title: "Compass-patch waistcoat",
      price: 1573,
      date: new Date(2023, 1, 16),
    },
    {
      title: "boots",
      price: 225,
      date: new Date(2023, 3, 14),
    },
    {
      title: "tote bag",
      price: 1081,
      date: new Date(2023, 4, 31),
    },

    {
      title: "minidress",
      price: 2000,
      date: new Date(2023, 5, 16),
    },
  ]);

  console.log(new Date().getMonth());

  const addNewExpenseHandler = (data) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.push(data);
    setExpenses(updatedExpenses);
  };

  return (
    <div className="App">
      <NewExpensw onNewExpenseAdd={addNewExpenseHandler} />

      <Expenses setExpenses={setExpenses} expenses={expenses} />
    </div>
  );
}

export default App;

import { useState } from "react";
import List from "./Projectone/components/List";
import Filter from "./Projectone/components/Filter";
import Form from "./Projectone/components/Form";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aa", amount: 10, category: "Utilities" },
    { id: 2, description: "aadd", amount: 10, category: "Utilities" },
    { id: 3, description: "apple", amount: 54, category: "Groceries" },
    { id: 4, description: "rice", amount: 5, category: "Groceries" },
  ]);
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <div>
      <div className="mb-5">
        <Form
          onSubmit={(newExpense) =>{
            //Error in input data in total amount in of string instead of integer need resolving by converting value to integer
            //otherwise bad data in total amount of grid will show up (do not touch camel)
            newExpense.amount = typeof(newExpense.amount) !== 'number'? parseInt(newExpense.amount.toString()) : newExpense.amount;
            //Bad way of string error handeling(dont be a camel)
            //newExpense.amount = parseInt(newExpense.amount.toString());
            setExpenses([
              ...expenses,
              {...newExpense, id: expenses.length + 1 },
            ]);
          console.log(expenses);}
          }
        ></Form>
      </div>
      <div className="mb-3">
        <Filter
          onSelectCategory={(category) => setSelectedCategory(category)}
        ></Filter>
      </div>
      <List
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></List>
    </div>
  );
}
export default App;

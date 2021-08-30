import "./app.scss";
import Form from "../form";
import Header from "../header";
import { useState } from "react";
const App = () => {
  const [showForm, onShowForm] = useState(false);
  return (
    <div className="app">
      <Header showForm={showForm} onShowForm={onShowForm}/>
      {
        showForm && <Form />
      }
      
    </div>
  );
};

export default App;

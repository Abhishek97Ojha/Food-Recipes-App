import { createContext, useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
export const MyContext = createContext();
function App() {
  const [value, setValue] = useState("mango");
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function api() {
      const response =
        await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${value}&app_id=e1574082&app_key=
      55471c94b3253f2b9b4daa6b5e578553`);
      const data = await response.json();
      setItems(data.hits);
    }
    api();
  }, [value]);
  return (
    <div className="App">
      <MyContext.Provider
        value={{
          value: value,
          setValue: setValue,
          items: items,
          setItems: setItems,
        }}
      >
        <Navbar />
        <Cards />
      </MyContext.Provider>
    </div>
  );
}

export default App;

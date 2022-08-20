import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

import { ToastContainer } from "react-toastify";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

/* steps for Redux:
1. Design Store
2. Define Actions
3. Create a Reducer
4. Setup the store */

function App() {
   return (
      <div>
         <Navbar />
         <ToastContainer position="bottom-center" autoClose={2000} />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddContact />} />
            <Route path="/edit/:id" element={<EditContact />} />
         </Routes>
      </div>
   );
}

export default App;

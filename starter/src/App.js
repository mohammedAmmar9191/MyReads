
import React from "react"; 
import "./App.css";
import { Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";
import BookProvider from "./components/BookContext";

const App =()=> {

  return (
    <div className="app">
    <BookProvider> 

    <Routes> 
    
     <Route exact path="/" element={
      <HomePage/>}/>
    <Route path="/search" element={<SearchPage/>}/>
    </Routes>
  
    </BookProvider>
    </div>
  );
}

export default App;

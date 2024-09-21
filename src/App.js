import React from "react";
import "./App.css";
import CustomTabs from "./CustomTabs";
import FilterBySkills from "./FilterSection";
import Header from "./Header";
import { CourseCard } from "./components/Card/Card";
import { CardList } from "./components/CardList/CardList";

function App() {
  return (
    <div className="App">
      <Header />
      <CustomTabs />
      <FilterBySkills />
    </div>
  );
}

export default App;

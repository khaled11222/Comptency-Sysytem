import React from 'react';
import ResponsiveCard from './ResponsiveCard';
import './App.css';
import CustomTabs from './CustomTabs';
import FilterBySkills from './FilterSection';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header/>
        <CustomTabs/>
        <FilterBySkills/>
        <ResponsiveCard />
    </div>
  );
}

export default App;

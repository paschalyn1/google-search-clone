import './App.css';
import "tailwindcss/tailwind.css"
import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Routes from "./Routes";

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false)
    return ( 
    <div className = {darkTheme ? 'dark' : ' '}>
        <div className="bg-gray-100 pl-10 dark:bg-gray-900 
        dark:text-gray-200 min-h-screen
        ">
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            <Routes />
            <Footer />
        </div>
    </div >
    );
}

export default App;
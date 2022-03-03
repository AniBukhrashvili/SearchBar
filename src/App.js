import React from "react"
import NavBar from "./components/NavBar"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import Account from "./components/Account"
import Button from "./components/Button"
import './style.css'

export default function App() {
    return (
        <div>
            <NavBar />
            <Header />
            <SearchBar />
            <Button />
            <Account />
        </div>
    )
}
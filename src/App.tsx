import { useState } from "react";

import Header from "./components/Header";
import Input from "./components/Input";
import Table from "./components/Table";
import Footer from "./components/Footer";

import "./App.css";

function App() {
    const [comments, setComments] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const getFilterComments = () => {
        return comments;
    };

    return (
        <div className="content">
            <Header contentValue={"This is a header"} />

            <Input labelName={"Search: "} input={inputValue} setInput={setInputValue} name={"Input Search"} />

            <Table data={getFilterComments()} />

            <Footer contentValue={"This is a footer"} />
        </div>
    );
}

export default App;

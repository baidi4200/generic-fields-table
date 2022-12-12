import React, { useState } from "react";
import TableData from "./table";
import columns from "./formjson.json";
import '../App.css';

const Form = () => {
    const [isFieldVisible, setisFieldVisible] = useState(false);
    const [formJson, setFormJson] = useState(columns.coloumed);
    const [data, setData] = useState({ name: "", age: "", desc: "" });
    const [storeData, setStoreData] = useState([]);
    const [fieldAdd, setfieldAdd] = useState([{ name: "" }]);
    const handleChange = (e) => {
        setData((data) => ({
            ...data,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setStoreData((storeData) => [...storeData, data]);
    };
    const handleAddField = () => {
        setisFieldVisible(true);
    };
    const handlevalueChange = (e) => {
        setfieldAdd(() => ({
            name: e.target.value,
        }));
    };
    const handleremoveField = (e) => {
        e.preventDefault();
        setData('');
    };


    const handlesubmitField = (e) => {
        e.preventDefault();
        formJson.push(fieldAdd);
        console.log(formJson);
        setisFieldVisible(false);
    };
    return (
        <div style={{ margin: "10px", marginBottom: "10px", textAlign: "center" }}>
            <form className="form-inline" onSubmit={handleSubmit}>
                {formJson.map((txt) => {
                    return (
                        <>
                            <label>{txt.name}</label>
                            <input
                                name={txt.name}
                                type="text"
                                onChange={handleChange}
                                value={data[txt.name] || ""}
                            />
                        </>
                    );
                })}
                <button
                    className="button submit"
                    type="submit"
                >
                    submit
                </button>
                <button
                    className=" button remove"
                    onClick={handleAddField}
                >
                    Add
                </button>
                <button
                    className=" button remove"
                    onClick={handleremoveField}
                >
                    clear
                </button>
            </form>
            <div style={{ marginTop: "10px" }}>
                <div>
                    {isFieldVisible && (
                        <>
                            <input
                                type="text"
                                name="descriptions"
                                onChange={handlevalueChange}
                                className="new-input"
                            ></input>
                            <button
                                onClick={handlesubmitField}
                                className="button add"
                            >
                                Add
                            </button>
                        </>
                    )}
                </div>
                <TableData onData={storeData} />
            </div>
        </div>
    );
};

export default Form;

import React from "react";
import columns from "./formjson.json";
import '../App.css'


const TableData = ({ onData }) => {
    return onData.length !== 0 ? (
        <div class="table-wrapper">
            <table class="fl-table">
                <thead>
                    <tr>
                        {columns.coloumed.map((column) => {
                            return (
                                <th scope="col" key={column.id}>
                                    {column.name}
                                </th>
                            );
                        })}

                    </tr>
                </thead>
                <tbody>
                    {onData.map((data, index) => (
                        <tr key={index}>
                            {columns.coloumed.map((column) => {
                                return <td>{data[column.name]}</td>;
                            })}

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    ) : (
        <h1>There is No Data</h1>
    );
};

export default TableData;



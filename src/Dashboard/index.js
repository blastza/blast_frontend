import React from "react";
import { useLocalState } from '../util/UseLocalStorage';

const Dashboard = () => {
    const[jwt, setJwt] = useLocalState("", "jwt");

    return (
        <div style={{ margin: "2em" }}>
            <button>Submit New Order</button>
        </div>
    );
};

export default Dashboard;
import React from 'react';
import Counter from '../components/Counter';

const DashboardPage = () => {

    console.log("Dash board render")
    return (
        <div>
            <h1>DashboardPage</h1>

        <Counter></Counter>

            <ul>
                <li>DashBorad 1</li>
                <li>DashBorad 2</li>
                <li>DashBorad 3</li>
            </ul>
        </div>
    );
};

export default DashboardPage;
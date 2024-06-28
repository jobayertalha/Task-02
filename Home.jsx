import React from 'react';
import List from './List';

const Home = () => {

    const items = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'];
    return (
        <div>
            <h1>
            The item showed in the list is:
            </h1>

            <List items={items}></List>
        </div>
    );
};

export default Home;
import React, { useState } from 'react';

const List = ({ items }) => {

    const clicked = (clickedItem) => {
        console.log(clickedItem);
    }


    return (
        <div>
            <ul>
                {
                    items.map((item, index) => <li onClick={() => clicked(item)} key={index}>Index: {index} - {item}</li>)
                }
            </ul>
        </div>
    );
};

export default List;
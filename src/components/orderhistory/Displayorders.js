import React from 'react';

const Displayorders = (props) => {
    let { orderdata } = props;
    return (
        <tr>
            <td>{orderdata.petName}</td>
            <td>{orderdata.petAge}</td>
            <td>{orderdata.petBreed}</td>
            <td>{orderdata.petCost}</td>
            <td>{orderdata.petDescription}</td>
            <td>{orderdata.petAddress}</td>
        </tr>
    )
}
export default Displayorders;
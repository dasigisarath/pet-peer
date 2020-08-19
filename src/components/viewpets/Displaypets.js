import React from 'react';

const DisplayPets = (props) => {
    let { petsdata } = props;
    return (
        <tr>
            <td>{petsdata.petName}</td>
            <td>{petsdata.petAge}</td>
            <td>{petsdata.petBreed}</td>
            <td>{petsdata.petCost}</td>
            <td>{petsdata.petDescription}</td>
            <td>{petsdata.petAddress}</td>
            <td><button onClick={() => props.handleBuy(petsdata)}>Buy</button></td>
            {/* <td><button onClick={() => addPet(petsdata)}>Buy Pet</button></td> */}
        </tr>
    )
}
export default DisplayPets;
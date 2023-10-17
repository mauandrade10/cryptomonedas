import React, { Fragment } from "react";
import StarCheckbox from './StarCheckbox';
import Table from 'react-bootstrap/Table';
import Graphics from './Graphics';


const TableCoins = ({coins, search }) => {

    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const filteredCoins = coins.filter((coin) => 
        coin.name.toLowerCase().includes(search.toLowerCase()) | 
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    );


    return (

    <>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Star</th>
                    <th>Symbol</th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Current Price</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {filteredCoins.map(coin => (


                <tr key={coin.name}>
                    <td className="">
                        <StarCheckbox />
                    </td>
                    <td className="text-uppercase"><img alt={coin.name} src={coin.image} width={"40px"} className="img-thumbnail"/> {coin.symbol}</td>
                    <td className="">{coin.id}</td>
                    <td className="">{coin.name}</td>
                    <td>
                        <div className='d-flex flex-row justify-content-end'>{USDollar.format(coin.current_price)}</div>
                    </td>
                    <td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
                        {coin.price_change_percentage_24h}
                    </td>
                    <td className="">{coin.total_volume}</td>
                    <td className=""><Graphics sparkline_in_7d={coin.sparkline_in_7d.price} /></td>
                    
                    
                </tr>
            ))}
          </tbody>
        </Table>
    </>
    )
};



export default TableCoins;


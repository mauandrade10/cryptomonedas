import {useEffect, useState} from 'react';
import './App.css';
import TableCoins from './components/TableCoins';
import axios from 'axios'

function App() {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    const getData = async () =>{
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&sparkline=true&page=1");

    setCoins(res.data);
  }

    useEffect(()=>{
    document.title = "Cryptocoin Henrry";
    getData()
  }, [])
  

  return (
      <div className='container'>
        <br/>
            <div>
                <h1 className='display1'>CryptoCoin</h1>
            </div>
        <br/>
        <input className='bg-light border-0 form-control' placeholder='Buscar una Moneda' onChange={coinsearch => setSearch(coinsearch.target.value)}/>
        <br/>
        <TableCoins coins={coins} search={search}/>  
      </div>
  );
}

export default App;

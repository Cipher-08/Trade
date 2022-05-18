import { fontSize } from "@mui/system";
import { axios } from "axios";
import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CoinInfo from './CoinInfo';
import { SingleCoin } from './config/api';
import { CryptoState } from './pages/CryptoContext';

const CoinPage = () => {
    const { id } = useParams();
    const [coin, setCoin] = useState();
    const { currency, symbol } = CryptoState();
    console.log(SingleCoin(id));

    const fetchCoin = async () => {
        const { data } = await axios.get('`https://api.coingecko.com/api/v3/coins/${id}`');
        console.log(data);


        setCoin(data);

    };

    console.log(coin);


    useEffect(() => {
        fetchCoin();
    }, [])
    return (
        <div className='Container'
            style={{
                display: 'flex',
                flexDirection: 'column',

            }}>
            {/* SideBar */}
            <div className='SideBar'
                style={{
                    width: '30%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 25,
                    borderRight: "2px solid grey",
                }}>
                <img
                    src={`https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579`}
                    alt='Bitcoin'
                    height="200"
                    style={{
                        marginBottom: 20
                    }}
                />
                <h2
                    style={{
                        fontWeight: "bold",
                        marginBottom: 20,
                        fontFamily: "Montserrat",
                    }}
                >BitCoin</h2>
                <h4 style={{
                    fontWeight:"lighter",
                    alignItems: 'center',
                    textAlign: 'center',

                }}>
                    Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project
                </h4>
                &nbsp;
                <div>
                    <span style={{
                        fontWeight: "bold",
                        textAlign:'left',
                        fontSize:30
                    }}>
                        Rank:1
                    </span>
                    &nbsp; &nbsp; &nbsp;
                    <span
                     style={{
                        fontWeight: "bold",
                        textAlign:'left',
                        fontSize:30
                    }}
                    >
                          Current Price : 	₹ 2314297.00
                       
                          Market Price : 440353714M
                    </span>
                </div>
            </div>


            {/* Chart */}
            <CoinInfo coin={coin} />
        </div>
    )
}

export default CoinPage
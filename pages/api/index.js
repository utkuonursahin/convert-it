import nc from 'next-connect';
import axios from "axios";
import currencyList from '../../src/data/currencies.json'
const handler = nc()
  .get(async (req, res) => {
    res.status(200).json({
      status:'success',
      currencyList
    });
  })
  .post(async (req, res) => {
    const {from,to,amount} = req.body;
    const {data} = await axios.get(`https://api.currencyscoop.com/v1/convert?api_key=${process.env.API_KEY}&from=${from}&amount=${amount}&to=${to}`);
    res.status(200).json({
      status:'success',
      ...data
    });
  })

export default handler;
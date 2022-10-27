import nc from 'next-connect';
import axios from "axios";
const handler = nc()
  .get(async (req, res) => {
    const {date,from,to} = req.query;
    const {data} = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${date}/currencies/${from.toLowerCase()}/${to.toLowerCase()}.json`)
    res.status(200).json({
      status:'success',
      ...data
    });
  })

export default handler;
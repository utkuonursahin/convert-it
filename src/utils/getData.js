import axios from "axios";

export default async function (url,method,params=[]){
  try{
    let response;
    if(method === 'GET'){
      response =  await axios({
        method:method,
        url:url
      })
    } else if(method === 'POST'){
      const [from,to,amount] = params
      response =  await axios({
        headers: {'Content-Type': 'application/json'},
        method:method,
        url:url,
        data: {from,to,amount}
      })
    }
    if(response.status !== 200) throw new Error('Something went wrong')
    return response;
  }catch (error){
    console.error(error)
  }
}
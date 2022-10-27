import {Line} from "react-chartjs-2";
import Chart from "chart.js/auto";
import {useOutput} from "../../context/OutputContext";
import {useInput} from "../../context/InputContext";

const Graph = () => {
  const {from,to} = useInput();
  const {historicalAmounts} = useOutput();
  if(historicalAmounts.length === 0) return null;
  const data = {
    labels: historicalAmounts.map((amount) => amount.date),
    datasets:[{
      label: `${from} / ${to}`,
      backgroundColor: "#22c55e",
      borderColor: "#15803d",
      color: "#d9f99d",
      data: historicalAmounts.map((amount) => amount.cur)
    }]
  }
  return (
    <div className="overflow-hidden">
      <Line data={data}/>
    </div>
  );
};

export default Graph;

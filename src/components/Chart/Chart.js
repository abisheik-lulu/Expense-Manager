import "./Chart.css";
import ChartBar from "./ChartBar.js";

const Chart = (props) => {
const dataPointValues=props.dataPoints.map(dataPoint=>dataPoint.value);
const maxiValue=Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxiValue}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;

import React, { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  YAxis,
  Area,
} from "recharts";
import "./Charts.css";
import { MainContext } from "../../../Configs/Context/mainContext";

const data4 = [
  {
    name: "Page A",
    uv: 5000,
    pv: 3400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 3500,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 3700,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3900,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 3700,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3500,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page A",
    uv: 5000,
    pv: 3400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 3500,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 3700,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3900,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 3700,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3500,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const data3= [
  {
    name: "Page C",
    uv: 2000,
    pv: 3700,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3900,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 3700,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3500,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page A",
    uv: 5000,
    pv: 3400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 3500,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 3700,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3900,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 3700,
    amt: 2181,
  },
];
const data2 = [
  {
    name: "Page D",
    uv: 2780,
    pv: 3900,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 3700,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3500,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page A",
    uv: 5000,
    pv: 3400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 3500,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 3700,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3900,
    amt: 2000,
  },
];
const data1 = [
  {
    name: "Page D",
    uv: 2780,
    pv: 3900,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 3700,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3500,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page A",
    uv: 5000,
    pv: 3400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 3500,
    amt: 2210,
  },
];

const Charts: React.FC = () => {
  const { state } = useContext(MainContext)!;

  return (
    <div className="card-container">
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={
              state!.cycleTab === 0
                ? data1
                : state!.cycleTab === 1
                ? data2
                : state!.cycleTab === 2
                ? data3
                : data4
            }
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#ffa500"
              fill="#ffa500"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="text-container">
        <div className="row">
          <div className="lower-text">
            <span className="redBlinker"></span>
            {"Lower: $4.895"}
          </div>
          <div className="higher-text">
            <span className="greenBlinker"></span>
            {"Higher: $6,857"}
          </div>
        </div>
        <div className="bottom-text">
          <span className="orangeBlinker"> </span>
          {"1 BTC = $5,483"}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Charts);

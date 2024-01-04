import React from 'react';
import { PieChart, Pie, Cell, Tooltip,Sector } from 'recharts';

const COLORS = ['#0F1035', '#365486', '#7FC7D9', '#DCF2F1'];

const data = [
 { name: 'In Progress', value: 5 },
 { name: 'To Do', value: 3 },
 { name: 'In Review', value: 1 },
 { name: 'Done', value: 7 },
];

const renderActiveShape = (props) => {
 const RADIAN = Math.PI / 180;
 const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
 } = props;

 const sin = Math.sin(-RADIAN * midAngle);
 const cos = Math.cos(-RADIAN * midAngle);
 const sx = cx + (outerRadius + 10) * cos;
 const sy = cy + (outerRadius + 10) * sin;
 const mx = cx + (outerRadius + 30) * cos;
 const my = cy + (outerRadius + 30) * sin;
 const ex = mx + (cos >= 0 ? 1 : -1) * 22;
 const ey = my;
 const textAnchor = cos >= 0 ? 'start' : 'end';

 return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        dx={20}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(${(percent * 100).toFixed(0)}%)`}
      </text>
    </g>
 );
};

const CustomTooltip = ({ active, payload }) => {
 if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].payload.name}: ${payload[0].value}`}</p>
      </div>
    );
 }
 return null;
};

const DonutChart = () => {
 return (
    <PieChart width={400} height={400}>
      <Pie
        activeIndex={1}
        activeShape={renderActiveShape}
        data={data}
        cx={200}
        cy={200}
        innerRadius={100}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip content={<CustomTooltip />} />
    </PieChart>
 );
};
export default DonutChart;
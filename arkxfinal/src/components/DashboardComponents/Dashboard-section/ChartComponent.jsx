import * as React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Week 1', value: 65 },
  { name: 'Week 2', value: 59 },
  { name: 'Week 3', value: 80 },
  { name: 'Week 4', value: 81 },
  // Add more weeks as needed
];

export default function ChartComponent() {
  return (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#afb42b" barSize={30} />
    </BarChart>
  );
}
import { useState, useEffect } from 'react';
import { BarChart } from '@mui/x-charts';

export default function GraficoDeBarras() {
  const [data, setData] = useState([4, 1, 6]);

  useEffect(() => {
    setData(data => [...data, 7]);
  }, []);

  return <BarChart
      series={[{ data }]}
      xAxis={[{ data, scaleType: 'band' }]}
      width={500}
      height={300}
    />;
}

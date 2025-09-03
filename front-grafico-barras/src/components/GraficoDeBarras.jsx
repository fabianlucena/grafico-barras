import { useState, useEffect } from 'react';
import { BarChart } from '@mui/x-charts';

export default function GraficoDeBarras() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/datos/grafico-barras')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return <BarChart
      series={[{ data }]}
      xAxis={[{ data, scaleType: 'band' }]}
      width={500}
      height={300}
    />;
}

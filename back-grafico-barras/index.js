import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get(
  '/datos/grafico-barras',
  (req, res) => res.send([14, 8, 23, 11, 6])
);

app.get(
  '/datos/grafico-barras-01',
  (req, res) => res.send([9, 12, 17, 5, 19])
);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

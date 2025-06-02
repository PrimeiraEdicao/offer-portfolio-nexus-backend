// src/server.ts
import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes'; // 1. IMPORTE AS ROTAS DE AUTENTICAÇÃO

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('<h1>Bem-vindo ao Backend do Offer Portfolio Nexus!</h1><p>Servidor está no ar.</p><p>Tente acessar <a href="/api/health">/api/health</a></p>');
});

app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'UP', message: 'Backend is running!' });
});

// 2. USE AS ROTAS DE AUTENTICAÇÃO COM UM PREFIXO
app.use('/api/auth', authRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado no servidor!');
});

app.listen(port, () => {
  console.log(`[server]: Backend rodando em http://localhost:${port}`);
});
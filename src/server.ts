// src/server.ts
import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Carrega variáveis de ambiente do arquivo .env
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001; // Use uma porta diferente da do seu frontend

// Middlewares
app.use(cors()); // Habilita CORS para todas as rotas
app.use(express.json()); // Para parsear o corpo de requisições JSON
app.use(express.urlencoded({ extended: true })); // Para parsear corpos de formulários URL-encoded

// Rota de Teste
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'UP', message: 'Backend is running!' });
});

// Exemplo de como você poderia adicionar suas rotas de autenticação
// import authRoutes from './routes/authRoutes';
// app.use('/api/auth', authRoutes);

// Middleware para tratamento de erros básico (opcional, mas bom para começar)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado no servidor!');
});

app.listen(port, () => {
  console.log(`[server]: Backend rodando em http://localhost:${port}`);
});
import { Router } from 'express';
import { solicitarRedefinicaoSenha } from '../controllers/authController'; // Importa a função do controller

const router = Router();

// Define a rota POST para solicitar redefinição de senha
// O caminho completo será /api/auth/solicitar-redefinicao-senha (devido ao prefixo em server.ts)
router.post('/solicitar-redefinicao-senha', solicitarRedefinicaoSenha);

// Você adicionará outras rotas de autenticação aqui
// Ex: router.post('/verificar-codigo', verificarCodigoController);
// Ex: router.post('/redefinir-senha', redefinirSenhaController);

export default router;
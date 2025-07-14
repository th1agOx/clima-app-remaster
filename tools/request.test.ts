/** 
*   Para testes de conexões HTTP em ambientes com autenticação por VPNs | Proxys | firewalls 
*  **Pressupõe-se que o certificado esteja salvo em uma variavel de sistemas ou no local de instalação do node 
*  **Salvar o certificado de autenticação em:  ..\src\config\env.ts
*/

import "dotenv/config"
import axios from "axios"

axios.get('https://registry.npmjs.org/').then( (response) => { 
    console.log('✅ Sucesso:', response.status)
}).catch( (err) => {
    console.error('❌ Erro de autenticação no SLL:', err.message)
});
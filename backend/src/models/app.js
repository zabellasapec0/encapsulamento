/*import {Usuario} from './models/Usuario.js';

const usuario = new Usuario(1,"Mariana","123");
console.log(usuario);
usuario.isAdmin = true;
usuario.id = 6;
console.log(usuario.isAdmin)
console.log(usuario); 
*/
import { Aluno } from './models/Aluno.js'; 

try{
const aluno = new Aluno(1, "Isabela", "123");
console.log(aluno.info())
aluno.senha = "1234"
    console.log(aluno.info())
}catch(e){
    console.log(e.message)

}

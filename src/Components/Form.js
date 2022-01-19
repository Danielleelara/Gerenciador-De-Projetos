import { useState } from "react";

const Form = () => {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Cadastrou Usuário`);
    }

    const [name, setName]= useState('');
    const [senha, setSenha]= useState();

    console.log(name, senha)
    return (  
        <div>       
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input 
                    type="text" 
                    id='name' 
                    name='name' 
                    placeholder='Digite o seu nome'
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input
                    id='password' 
                    name='password' 
                    type="password"
                    placeholder='Digite a sua senha' 
                    onChange={(e) => setSenha(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value='Cadastrar' />
                </div>
            </form>
        </div>
    );
}
 
export default Form;
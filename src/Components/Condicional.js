
import { useState } from "react";

const Condicional = () => {

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();
    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail(){
        setUserEmail('');
    }

    return ( 
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form >
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Digite o seu e-mail..."/>
                <button  type= "submit" onClick={enviarEmail}>Enviar e-mail</button>
                {userEmail && (
                    <div>
                        <p onClick={limparEmail}>O e-mail do usuário é: {userEmail}</p>
                        <button>Limpar e-mail</button>
                    </div>
                )}
            </form>
        </div>
     );
}
 
export default Condicional;
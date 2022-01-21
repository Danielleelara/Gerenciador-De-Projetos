const Saudacao = ({nome}) => {
    const gerarSaudacao = (algumNome) => {
        if(algumNome){
            return `Olá ${algumNome}, tudo bem?` }
        else{
            return 'Olá visitante, tudo bem?';
        }
    }

    return ( 
       <>
       {nome && <p>{gerarSaudacao(nome)} : "cachorro"</p>}
       </> 
     );
}
 
export default Saudacao;
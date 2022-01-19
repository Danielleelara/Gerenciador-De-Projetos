import Item from "./Item";

const List = () => {
    return ( 
        <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca = 'Ferrari' ano_lancamento={1985}/>
            <Item marca = 'Fiat' ano_lancamento={1964}/>
            <Item marca = 'Uno' ano_lancamento={2012}/>
        </ul>
        </>
     );
}
 
export default List;
import Item from "./Item";

const List = () => {
    return ( 
        <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca = 'Ferrari'/>
            <Item marca = 'Fiat'/>
            <Item marca = 'Uno'/>
        </ul>
        </>
     );
}
 
export default List;
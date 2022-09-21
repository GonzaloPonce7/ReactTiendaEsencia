const styles = {
    border: 'solid 2px',
    padding: '30px'
  }

const ItemListContainer = ( {greeting} ) => {
    return (
        <div style={ styles }>
            <h2>{greeting}</h2>
        </div>
    )
}
export default ItemListContainer
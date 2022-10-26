const Shelf = (props) => {
  return (
    <div>
      <h1>{props.aisle_data && props.aisle_data.aisle_number}</h1>
    </div>
  )
}

export default Shelf

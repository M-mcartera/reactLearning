import "./SpendItem.css";

function SpendItem(props) {
  return (
    <div className="spend-item">
      <div>{props.date.toISOString()}</div>
      <div className="spend-item__description">
        <h2>{props.title}</h2>
        <div className="spend-item__price">{props.pret} RON</div>
      </div>
    </div>
  );
}
export default SpendItem;

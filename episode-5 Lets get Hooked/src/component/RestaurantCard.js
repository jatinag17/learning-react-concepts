const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(props)
  return (
    <div className="res-card" /* style={styleCard}*/>
      <img
        className="res-logo"
        src="https://b.zmtcdn.com/data/pictures/chains/3/18875863/a7499d72024b4c6f7ef661ecf3cbc8c4_featured_v2.jpg?output-format=webp"
        alt="res-logo"
      />
      <h4>{resData.info.name}</h4>
      <h3>{resData.info.costForTwo}</h3>
      <h4>{resData.info.cuisines}</h4>
      <h4>{resData.info.sla.slaString}</h4>
    </div>
  );
};
export default RestaurantCard;
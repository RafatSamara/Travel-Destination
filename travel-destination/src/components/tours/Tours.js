import classes from "./Tours.css";

export default function Tours(propsHome) {
  let travelDestinations = propsHome.data.map((props) => {
    return (

      <tr key={props.id}>
        <td><h5>{props.id}</h5></td>
        <td><img id="img" src={props.image} alt={"Trip Image"} /></td>
        <td><h1>{props.name}</h1></td>
        <td><h3>{props.info}</h3></td>
        <td><h1>{props.price}</h1></td>
      </tr>
    );
  });
  return <table>
    <tr>
      <th>Trip ID</th>
      <th>Image</th>
      <th>Destination</th>
      <th>More Info</th>
      <th>Price / USD</th>
    </tr>
    {travelDestinations}
  </table>;
};

import { Link } from "react-router-dom";
import { If, Then } from 'react-if';
import { useState } from "react";

export default function Tour(props) {
  const [isShow, setShow] = useState(false);
  function ShowBtnHandle() { setShow(!isShow); }
  return (
    <tr key={props.tour.id}>
      <td>{props.tour.id}</td>
      <td><Link to={`/city/${props.tour.id}`}>{props.tour.name}</Link></td>
      <td><img src={props.tour.image} width="100px" height="100px"></img></td>
      <td>{ !isShow ? <button onClick={ShowBtnHandle}>Show More</button> : <button onClick={ShowBtnHandle}>Hide</button> }</td>
      <If condition={isShow}><Then><td>Description: {props.tour.info}</td></Then></If>
      <td>{props.tour.price}</td>
    </tr>
  );
}
import Tour from './tour/Tour'
import classes from "./Tours.css";

export default function ListData(props) {
    return (
    <>
        <table>
            <tr>
                <th>Trip ID</th>
                <th>Destination</th>
                <th>Image</th>
                <th>Info</th>
                <th>More Info</th>
                <th>Price / USD</th>
            </tr>
            {
                props.infoData.map(val => {return (<Tour tour = { val } />)})
            }
        </table>;
    </>
    );
}


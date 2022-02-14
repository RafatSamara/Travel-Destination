import Home from "./components/home/Home";
import data from "./data/db.json";

export default function App() {
  return <Home data = {data}></Home>;
}

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar/NavBar";
import BlocImages from "./Components/BlocImages/BlocImages";
import TableOne from "./Components/TableOne/TableOne";
import Forma from "./Components/Forma/Forma";

function App() {
    return (
        <div>
            <NavBar />
            <BlocImages />
            <TableOne />
            <Forma />
        </div>
    );
}

export default App;

import { BrowserRouter, Route, Switch} from 'react-router-dom';
import State from '../context/State';
import Data from "./Data"

const App = () => {
    return (
        <State>
            <Data />
        </State>
    );
}

export default App;
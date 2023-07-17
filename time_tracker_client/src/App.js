import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";
import AppRouter from "./components/AppRouter";
import { observer } from "mobx-react-lite";
const App = observer(() => {
  return (
    <BrowserRouter>
     <Menu/>
      <AppRouter/>
    </BrowserRouter>
  );
})

export default App;

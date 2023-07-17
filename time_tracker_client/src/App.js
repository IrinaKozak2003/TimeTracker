import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";
import AppRouter from "./components/AppRouter";
import { observer } from "mobx-react-lite";
import { check } from "./http/userApi";
import { useContext } from "react";
import { Context } from "./index";
import { useEffect } from "react";
const App = observer(() => {
  const { user } = useContext(Context);
  check().then(data => {
    user.setUser(data);
    user.setIsAuth(true);
  })
 
  return (
    <BrowserRouter>
     <Menu/>
      <AppRouter/>
    </BrowserRouter>
  );
})

export default App;

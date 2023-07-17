import React from 'react';
import { Routes, Route} from 'react-router-dom'
import { observer } from 'mobx-react'; 
import { publicRoutes } from '../routes';



const AppRouter = observer(() => {




    return (
        <Routes>
          
            {publicRoutes.map(({path, element}) =>
                <Route key={path} path={path} Component={element} exact/>
            )} 
            
          

       
        </Routes>
        
    );
});

export default AppRouter;
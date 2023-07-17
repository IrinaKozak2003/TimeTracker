import { observer } from "mobx-react-lite";
import React from "react";
import PackageList from "../components/PackageList";
import { Container } from "react-bootstrap";
const items = [
    
        { id: 1, title: 'First item', budget: 68, TotalTime: "2:51:21", owner: true },
        { id: 2, title: 'Second item', budget: 68, TotalTime: "2:51:21", owner: true },
        { id: 3, title: 'Third item', budget: 68, TotalTime: "2:51:21", owner: false },
        { id: 4, title: 'Fourth item', budget: 68, TotalTime: "2:51:21", owner: false },
        { id: 4, title: 'Fourth item', budget: 68, TotalTime: "2:51:21", owner: false },];
const Main = observer(()=>{
    return(
        //сделай надпись сверху по срередине my packages
       <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px', fontSize: '1.2rem' }}>
                My packages
            </div>
            <Container>
            <PackageList packages= {items}/>
            </Container>
        </div>
    );
});
export default Main;
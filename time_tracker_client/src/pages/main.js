import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { fetchPackages } from "../http/packageApi";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import PackageList from "../components/PackageList";

const Main = observer(() => {
  const { user, user_package} = useContext(Context);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
       await fetchPackages(user.user.id).then((data) => {
        user_package.setPackages(data);
       });
        

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    
  }, []);
  
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px', fontSize: '1.2rem' }}>
        My packages
      </div>
      <Container>
       
          <PackageList packages={user_package.packages} />
        
      </Container>
    </div>
  );
});

export default Main;

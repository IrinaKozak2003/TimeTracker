import React from 'react';
import PackageItem from './PackageItem';
import { Card, Col, Row } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import AddPackage from './AddPackage';


const PackageList = observer(({packages}) => {
    return(
      <Col>
        <Row className="d-flex" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap' }}>
        {packages.map(item => (
          <PackageItem  packageItem={item} />
        ))}
             <AddPackage />
      </Row>

      </Col>
      
      
    );      
});
export default PackageList;

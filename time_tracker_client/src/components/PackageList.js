import React from 'react';
import PackageItem from './PackageItem';
import { Card, Col, Row } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import AddPackage from './AddPackage';

const items = [
    { id: 1, title: 'First item', budget: 68, "TotalTime": "2:51:21" },
    { id: 2, title: 'Second item', budget: 68, "TotalTime": "2:51:21" },
    { id: 3, title: 'Third item', budget: 68, "TotalTime": "2:51:21" },
    { id: 4, title: 'Fourth item', budget: 68, "TotalTime": "2:51:21" }];
const PackageList = observer(({packages}) => {
    return(
      <Col>
        <Row className="d-flex" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap' }}>
        {packages.map(item => (
          <PackageItem key={item.id} packageItem={item} />
        ))}
             <AddPackage />
      </Row>

      </Col>
      
      
    );      
});
export default PackageList;

import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { ProgressBar } from 'react-bootstrap';


import { Link } from 'react-router-dom';

const PackageItem = observer(({ packageItem }) => (
  <Row className="d-flex" style={{ margin: '10px' }}>
    <Link to={`/package/${packageItem.id}`} style={{ textDecoration: 'none' }}>
      <Card key={packageItem.id} style={{ width: '320.5px', height: '150px', top: '10px', margin: '10px' }}>
        <Card.Body>
          <Card.Title>{packageItem.title}</Card.Title>
          <ProgressBar now={packageItem.budget} label={`${packageItem.budget}%`} visuallyHidden />
          <Card.Text> Total Time: {packageItem.TotalTime}</Card.Text>
          {packageItem.owner ? <Card.Text style={{ textAlign: 'right' }}>Owner</Card.Text> : null}
        </Card.Body>
      </Card>
    </Link>
  </Row>
));

export default PackageItem;

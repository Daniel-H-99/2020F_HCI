import React from 'react';
import Header from '../components/Header';
import {Button, Card, CardDeck} from 'react-bootstrap';
import Main from '../components/Main';
import { Route, Link } from 'react-router-dom';
const MainPage = props => {
   if (props.location.state != null){
  console.log(props.location.state.p)   	
   }

  return (
    <>
      <Header {...props}/>
      <Main>
        <h3>Hello! This is Roomtopia. Offer or Discover your Short-Term Rental House Quickly.</h3><br/><br/><br/>
        <div style={{width: '100%', margin: 'auto', paddingBottom: 10}}>
        <b style={{fontSize: '25px'}}>CURRENT OFFERS</b> 
        <Link to={{
        	pathname: '/RegisterRoom',
        	state: {
        		p : "passed"
        	}
        }}>
        <Button style={{float: 'right'}} variant="primary">+ Register Offer</Button>
        </Link>
        </div>
        <CardDeck style={{width: '50%'}}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={require('../images/Sample.png')} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>{' '}
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={require('../icons/menu.png')} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card/>
        </CardDeck>
      </Main>
    </>
  );
};

export default MainPage;

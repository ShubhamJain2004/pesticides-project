import React from 'react'
import './Services.css';
import { Card,Button } from 'react-bootstrap';
const Services = () => {
  return (
    <>
    <section className="s-wrapper">
      <div className="paddings innerWidth s-container">
        <div className="s-head flexColstart">
          <span className='Redtext'>Best Choices</span>
          <span className='primaryText'>Popular Services</span>
        </div>
        <hr/>
    <div className='flexCenter s-card ' >

    <Card className='Crd' style={{border:'none'}}>
    <Card.Img className="card-img" variant="top" src="./card1.jpg" />
    <Card.Body>
      <Card.Title>General Pest Control Service</Card.Title>
      <div className='vertical-center'>
        <Button className='button' > Book Now</Button>
      </div>
    </Card.Body>
  </Card>

  <Card className='Crd' style={{border:'none'}}>
    <Card.Img className="card-img" variant="top" src="./card2.jpg" />
    <Card.Body>
      <Card.Title>Termite Management Service</Card.Title>
      <div className='vertical-center'>
        <Button className='button' > Book Now</Button>
      </div>
    </Card.Body>
  </Card>

  <Card className='Crd' style={{border:'none'}}>
    <Card.Img className="card-img" variant="top" src="card3.jpg" />
    <Card.Body>
      <Card.Title> Cockroach Management Service</Card.Title>
      <div className='vertical-center'>
        <Button className='button' > Book Now</Button>
      </div>
    </Card.Body>
  </Card>
   
  <Card className='Crd' style={{border:'none'}}>
    <Card.Img className="card-img"  variant="top" src="card4.jpg" />
    <Card.Body>
      <Card.Title>Bird Netting Job Work</Card.Title>
      <div className='vertical-center'>
        <Button className='button' > Book Now</Button>
      </div>
    </Card.Body>
  </Card>

  <Card className='Crd'  style={{border:'none'}}>
    <Card.Img className="card-img" variant="top" src="card5.jpeg" />
    <Card.Body>
      <Card.Title>Bed Bugs Treatements</Card.Title>
      <div className='vertical-center'>
        <Button className='button' > Book Now</Button>
      </div>
    </Card.Body>
  </Card>

  <Card className='Crd' style={{border:'none' }}>
    <Card.Img className="card-img" variant="top" src="card6.jpg" />
    <Card.Body>
      <Card.Title >Rodent Control Service</Card.Title>
      <div className='vertical-center'>
        <Button href='' className='button' > Book Now</Button>
      </div>
    </Card.Body>
  </Card>
        </div>
        
      </div>
      <div className='flexCenter  paddings innerwidth flexCenter img'>
        <div>
          <img src='Residential.jpg 'width={450}/>
        <p style={{left:'16%'}} >Residential Services</p>
        </div>
        <div>
        <img src='Commercial.jpg' width={465} height={217}/>
        <p style={{right:'16%'}}>Commercial Services</p>
        </div>
          
      </div>
      <div className='flexColCenter' style={{marginLeft:'2rem'}} >
        <Button href='Mainservices' className='button' >More Services</Button>
      </div>
    </section>
    <hr/>
    </>
  )
}

export default Services
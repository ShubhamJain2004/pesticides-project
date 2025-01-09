import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure this is imported

const MainServices = () => {
  return (
    <>
      
      <section className="s-wrapper">

        <div className="paddings innerWidth s-container">
          <div className="s-head flexColstart">
            <span className='Redtext'>More Services</span>
            {/* <span className='primaryText'>Resedential Services</span> */}
            {/* <center className='primaryText' ><h2>Resedential Services</h2></center> */}
          </div>
          <center className='primaryText' ><h2>Resedential Services</h2></center>
          <hr />

          <div className='flexCenter s-card'>
            <Card className='Crd' style={{ border: 'none' }}>
              <Card.Img className="card-img" variant="top" src="./General Pest Control for Homes.jpeg" />
              <Card.Body>
                <Card.Title>General Pest Control for Homes</Card.Title>
                <div className='vertical-center'>
                  <Button className='button'>Book Now</Button>
                </div>
              </Card.Body>
            </Card>
            <Card className='Crd' style={{border:'none'}}>
                <Card.Img className="card-img" variant="top" src="./BedBugTreatment.jpeg" />
                <Card.Body>
                  <Card.Title>Bed Bug Treatment</Card.Title>
                  <div className='vertical-center'>
                    <Button className='button' > Book Now</Button>
                  </div>
                </Card.Body>
              </Card>
            <Card className='Crd' style={{border:'none'}}>
                <Card.Img className="card-img" variant="top" src="./TermiteControlandPrevention.jpeg" />
                <Card.Body>
                  <Card.Title>Termite Control and Prevention</Card.Title>
                  <div className='vertical-center'>
                    <Button className='button' > Book Now</Button>
                  </div>
                </Card.Body>
              </Card>
            <Card className='Crd' style={{border:'none'}}>
                <Card.Img className="card-img" variant="top" src="./CockroachManagementService.jpeg" />
                <Card.Body>
                  <Card.Title>Cockroach Management Service</Card.Title>
                  <div className='vertical-center'>
                    <Button className='button' > Book Now</Button>
                  </div>
                </Card.Body>
              </Card>
            <Card className='Crd' style={{border:'none'}}>
                <Card.Img className="card-img" variant="top" src="./Mosquito Control Services.jpeg" />
                <Card.Body>
                  <Card.Title>Mosquito Control Services</Card.Title>
                  <div className='vertical-center'>
                    <Button className='button' > Book Now</Button>
                  </div>
                </Card.Body>
              </Card>
            <Card className='Crd' style={{border:'none'}}>
                <Card.Img className="card-img" variant="top" src="./RodentControlforHomes.jpeg" />
                <Card.Body>
                  <Card.Title>Rodent Control for Homes</Card.Title>
                  <div className='vertical-center'>
                    <Button className='button' > Book Now</Button>
                  </div>
                </Card.Body>
              </Card>
            <Card className='Crd' style={{border:'none'}}>
                <Card.Img className="card-img" variant="top" src="./GardenPestControl.jpeg" />
                <Card.Body>
                  <Card.Title>Garden Pest Control</Card.Title>
                  <div className='vertical-center'>
                    <Button className='button' > Book Now</Button>
                  </div>
                </Card.Body>
              </Card>
            <Card className='Crd' style={{border:'none'}}>
                <Card.Img className="card-img" variant="top" src="./BirdNettingforResidentialBuildings.jpeg" />
                <Card.Body>
                  <Card.Title>Bird Netting for Residential Buildings</Card.Title>
                  <div className='vertical-center'>
                    <Button className='button' > Book Now</Button>
                  </div>
                </Card.Body>
              </Card>
            <Card className='Crd' style={{border:'none'}}>
                <Card.Img className="card-img" variant="top" src="./Anti-Termite Soil Treatment.jpeg" />
                <Card.Body>
                  <Card.Title>Anti-Termite Soil Treatment</Card.Title>
                  <div className='vertical-center'>
                    <Button className='button' > Book Now</Button>
                  </div>
                </Card.Body>
              </Card>
              
            {/* Add other cards here, ensuring images are correctly sourced */}
          </div>
          
        </div>



        <center  className='primaryText' ><h2>Commercial Services</h2></center>
        <hr />
        <div className='flexCenter s-card'>
            <Card className='Crd' style={{ border: 'none' }}>
              <Card.Img className="card-img" variant="top" src="./Office Pest Control.jpeg" />
              <Card.Body>
                <Card.Title>Office Pest Control</Card.Title>
                <div className='vertical-center'>
                  <Button className='button'>Book Now</Button>
                </div>
              </Card.Body>
            </Card>
            <Card className='Crd' style={{border:'none'}}>
                <Card.Img className="card-img" variant="top" src="./Warehouse Pest Management.jpeg" />
                <Card.Body>
                  <Card.Title>Warehouse Pest Management</Card.Title>
                  <div className='vertical-center'>
                    <Button className='button' > Book Now</Button>
                  </div>
                </Card.Body>
              </Card>
            <Card className='Crd' style={{border:'none'}}>
                <Card.Img className="card-img" variant="top" src="./Restaurant and Food Industry Pest Control.jpeg" />
                <Card.Body>
                  <Card.Title>Restaurant and Food Industry Pest Control</Card.Title>
                  <div className='vertical-center'>
                    <Button className='button' > Book Now</Button>
                  </div>
                </Card.Body>
              </Card>
            <Card className='Crd' style={{border:'none'}}>
                <Card.Img className="card-img" variant="top" src="./Shopping Mall Pest Control.jpeg" />
                <Card.Body>
                  <Card.Title>Shopping Mall Pest Control</Card.Title>
                  <div className='vertical-center'>
                    <Button className='button' > Book Now</Button>
                  </div>
                </Card.Body>
              </Card>
            <Card className='Crd' style={{border:'none'}}>
                <Card.Img className="card-img" variant="top" src="./Hospitality Pest Management.jpeg" />
                <Card.Body>
                  <Card.Title>Hospitality Pest Management</Card.Title>
                  <div className='vertical-center'>
                    <Button className='button' > Book Now</Button>
                  </div>
                </Card.Body>
              </Card>
            <Card className='Crd' style={{border:'none'}}>
                <Card.Img className="card-img" variant="top" src="./Industrial Pest Control.jpeg" />
                <Card.Body>
                  <Card.Title>Industrial Pest Control</Card.Title>
                  <div className='vertical-center'>
                    <Button className='button' > Book Now</Button>
                  </div>
                </Card.Body>
              </Card>
            <Card className='Crd' style={{border:'none'}}>
                <Card.Img className="card-img" variant="top" src="./Rodent Control for Commercial Spaces.jpeg" />
                <Card.Body>
                  <Card.Title>Rodent Control for Commercial Spaces</Card.Title>
                  <div className='vertical-center'>
                    <Button className='button' > Book Now</Button>
                  </div>
                </Card.Body>
              </Card>
            <Card className='Crd' style={{border:'none'}}>
                <Card.Img className="card-img" variant="top" src="./Termite Prevention for Commercial Buildings.jpeg" />
                <Card.Body>
                  <Card.Title>Termite Prevention for Commercial Buildings</Card.Title>
                  <div className='vertical-center'>
                    <Button className='button' > Book Now</Button>
                  </div>
                </Card.Body>
              </Card>
            <Card className='Crd' style={{border:'none'}}>
                <Card.Img className="card-img" variant="top" src="./Fumigation for Storage and Logistics.jpeg" />
                <Card.Body>
                  <Card.Title>Fumigation for Storage and Logistics</Card.Title>
                  <div className='vertical-center'>
                    <Button className='button' > Book Now</Button>
                  </div>
                </Card.Body>
              </Card>
              
            {/* Add other cards here, ensuring images are correctly sourced */}
          </div>
        

      </section>
      <hr />
    </>
  );
};

export default MainServices;

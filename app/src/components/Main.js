import React from 'react'
import image from '../images/headShot.png'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Main() {
    return (
        <Card className='card' style={{ width: '35%' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>Jacob Knight</Card.Title>
                <Card.Text>
                    FullStack Trainee
                </Card.Text>
                <div className='Contacts'>
                    <Button variant='primary' href='mailto: jacobknighj@gmail.com'>Email</Button>
                    <Button variant="primary" href='https://www.linkedin.com/in/jacob-knight-/' target='_blank'>LinkedIn</Button>
                </div>
                <Card.Title>About</Card.Title>
                <Card.Text>
                    Proficient in: C#, HTML, CSS, Ruby, Ruby on Rails and JavaScript with experience in using NODE.js/REACT and C. <br />
                    Lots of previous Team leader roles and experience working with groups and being able to organize and be time efficient. <br />
                    Really adaptable in the work space and full problem solving thought process to be able to solve any issues.
                </Card.Text>

            </Card.Body>
        </Card>
    )
}
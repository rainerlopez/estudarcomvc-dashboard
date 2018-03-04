import React, { Component } from 'react';
import {
    Button, Card, CardBody, CardImage, CardTitle, CardText
} from 'mdbreact';
class EcvcCardComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card narrow="true" className={`text-white animated fadeIn hoverable nounderline ${this.props.bg}`}>
                <a href="">
                    <CardImage className="img-fluid mx-auto d-block p-4" style={{ height: 160 }} src={this.props.imageSrc} />
                    <CardBody className="bg-white text-center text-secondary p-2"
                        style={{ height: '3.7rem' }}>
                        <CardTitle className="font-weight-bold" style={{ fontSize: '.8rem', marginBottom: 0 }}>{this.props.title}</CardTitle>
                        <CardText style={{ fontSize: '.8rem', marginBottom: 0 }}>{this.props.content}</CardText>
                        {/* <Button href="#">Button</Button> */}
                    </CardBody>
                </a>
            </Card>
        )
    }
}
export default EcvcCardComponent;
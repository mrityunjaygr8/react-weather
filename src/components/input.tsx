import React from "react";
import {Card, CardTitle, CardBody, Form, Label, FormGroup, Button, Input } from "reactstrap";

function InputElement({ city, handleSubmit, handleChange }: {city: string, handleSubmit: React.FormEventHandler<HTMLFormElement>, handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void}) {
  
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Search Weather by City</CardTitle>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="cityName">
              City Name
            </Label>
            <Input id="cityName" placeholder="Enter the city you want" value={city} onChange={handleChange} /> <br />
          </FormGroup>
          <Button color="primary">Search Weather</Button>
        </Form>
     </CardBody>
    </Card>
  )
}

export default InputElement

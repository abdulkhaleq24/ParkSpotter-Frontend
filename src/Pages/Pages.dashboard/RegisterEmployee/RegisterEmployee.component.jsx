import { useState } from "react"
import styled from "styled-components"

const FormContainer = styled.div`
  background-color: #fff;
  color: #202123;
  padding: 60px 80px;
  border-radius: 15px;
  max-width: 70%;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 20px;
    margin: 20px;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  text-align: center;
  font-size: 1.5em;
  color: coral;
  background-color: #fff;
  width: 30%;
  padding: 7px 10px;
  margin: 20px auto;
  border-radius: 55px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`

const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
`

const Input = styled.input`
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #333;
  color: #fff;
  font-size: 1em;

  &:focus {
    border-color: coral;
    outline: none;
  }

  &::placeholder {
    color: #bbb;
  }
`

const Button = styled.button`
  background-color: coral;
  color: #ffffff;
  padding: 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2em;
  margin-top: 40px;

  &:hover {
    background-color: green;
  }

  &:active {
    transform: scale(0.98);
  }
`

const EmployeeRegistrationForm = () => {
  const [formData, setFormData] = useState({
    mobile_no: "",
    username: "",
    confirm_password: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
    joined_date: "",
    qualification: "",
    nid_card_no: "",
    address: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // API call to submit the formData
    console.log(formData)
  }

  return (
    <>
      {" "}
      <Title>Register Employee</Title>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="mobile_no">Mobile No</Label>
          <Input
            type="text"
            id="mobile_no"
            name="mobile_no"
            value={formData.mobile_no}
            onChange={handleChange}
            placeholder="Enter your mobile number"
            required
          />

          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
          />

          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />

          <Label htmlFor="confirm_password">Confirm Password</Label>
          <Input
            type="password"
            id="confirm_password"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
          />

          <Label htmlFor="first_name">First Name</Label>
          <Input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="Enter your first name"
            required
          />

          <Label htmlFor="last_name">Last Name</Label>
          <Input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Enter your last name"
            required
          />

          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <Label htmlFor="joined_date">Joined Date</Label>
          <Input
            type="datetime-local"
            id="joined_date"
            name="joined_date"
            value={formData.joined_date}
            onChange={handleChange}
            required
          />

          <Label htmlFor="nid_card_no">NID Card No</Label>
          <Input
            type="text"
            id="nid_card_no"
            name="nid_card_no"
            value={formData.nid_card_no}
            onChange={handleChange}
            placeholder="Enter your NID card number"
          />

          <Label htmlFor="address">Address</Label>
          <Input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
          />

          <Button type="submit">Register</Button>
        </Form>
      </FormContainer>
    </>
  )
}

export default EmployeeRegistrationForm

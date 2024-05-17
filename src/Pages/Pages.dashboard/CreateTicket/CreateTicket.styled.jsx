import styled from "styled-components"

export const Container = styled.div`
  background-color: #202123;
  color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  width: 95%;
  margin: -10px auto;
`

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`

export const FormGroup = styled.div`
  margin-bottom: 20px;
`

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #ffffff;
`

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #ffffff;
`

export const Button = styled.button`
  width: contain;
  padding: 12px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;
  &:hover {
    background-color: #45a049;
  }
`

export const TotalAmount = styled.div`
  margin-top: 20px;
  font-size: 18px;
`

export const StaticParkingNumber = styled.div`
  margin-top: 20px;
  font-size: 18px;
`

export const WarningMessage = styled.div`
  margin-top: 20px;
  color: #ff0000;
`
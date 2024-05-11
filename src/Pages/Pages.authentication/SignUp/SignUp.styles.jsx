import styled from "styled-components";

export const FormContainer = styled.div`
  width: 50%;
  margin: auto;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
`;

export const FormHeader = styled.h1`
  text-align: center;
  margin-bottom: 10px;
`;

export const FormBody = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #CCCCCC;
  }

  input[type="submit"] {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #CCCCCC;
    cursor: pointer;
  }

  p[role="alert"] {
    color: red;
    border: 1px solid red;
    padding: 10px;
    background: #FDEDE8;
    border-radius: 5px;
  }
`;

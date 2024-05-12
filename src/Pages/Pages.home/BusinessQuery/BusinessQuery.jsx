import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 85%;
  margin: auto;
  background-image: url("https://parkplus.io/_next/image?url=%2Fimg%2Fcontact-patterns.png&w=1920&q=75");
  background-color: #f6f7fb;
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 70px;
  border-radius: 30px;
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 20px;
    padding-top: 40px;
  }
`;

const BusinessQueryBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BusinessQueryTitleBox = styled.div`
  width: 65%;

  h1 {
    font-size: 56px;
    line-height: 60px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  p {
    font-size: 18px;
    line-height: 26px;
    font-weight: 700;
    color: #a4a4a6;
  }

  @media (max-width: 768px) {
    width: 100%;

    h1 {
      font-size: 32px;
      line-height: 32px;
      font-weight: 700;
      margin-bottom: 15px;
    }
    p {
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
    }
  }
`;

const BusinessQueryInputBox = styled.div`
  width: 35%;

  input {
    width: 100%;
  }
  select {
    width: 100%;
  }
  textarea {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const BusinessQuery = () => {
  const [formData, setFormData] = useState({
    selectInput: "",
    textInput1: "",
    emailInput: "",
    numberInput: "",
    textInput2: "",
    selectInput2: "",
    textareaInput: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };
  return (
    <Container>
      <BusinessQueryBox>
        <BusinessQueryTitleBox>
          <h1>Got a business query?</h1>
          <p>
            Just leave your email with us and we’ll get back to you shortly!
          </p>
        </BusinessQueryTitleBox>
        <BusinessQueryInputBox>
          <form onSubmit={handleSubmit}>
            <select
              name="selectInput"
              value={formData.selectInput}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <input
              type="text"
              name="textInput1"
              value={formData.textInput1}
              onChange={handleChange}
            />
            <input
              type="email"
              name="emailInput"
              value={formData.emailInput}
              onChange={handleChange}
            />
            <input
              type="number"
              name="numberInput"
              value={formData.numberInput}
              onChange={handleChange}
            />
            <input
              type="text"
              name="textInput2"
              value={formData.textInput2}
              onChange={handleChange}
            />
            <select
              name="selectInput2"
              value={formData.selectInput2}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <textarea
              name="textareaInput"
              value={formData.textareaInput}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        </BusinessQueryInputBox>
      </BusinessQueryBox>
    </Container>
  );
};

export default BusinessQuery;

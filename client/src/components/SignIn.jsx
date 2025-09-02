import React from "react";
import styled from "styled-components";
import TextInput from "../components/TextInput.jsx"
import Button from "../components/Button.jsx"

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: "#404040";
  text-align: center;
`;

const Span = styled.div`
  color: "#4d4c4c";
  text-align: center;
`;

const SignIn = () => {
  return (
    <Container>
      <div>
        <Title>Welcome</Title>
        <Span>What do you want to train today</Span>
      </div>

      <div style={{
        display: "flex",
        gap: "20px",
        flexDirection: "column"
      }}>
        <TextInput
          label = "Email Address"
          placeholder = "Enter Email Address"
        />

        <TextInput
          label = "Password"
          placeholder = "Enter Password"
          password
        />
        <Button
          text = "Sign In"
        />
      </div>
    </Container>
  );
}

export default SignIn;
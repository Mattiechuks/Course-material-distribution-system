'use client';

import Circle from '../../components/Circle';
import Form from '../../components/Form';
import Heading from '../../components/Heading';
import Input from '../../components/Input';
import Select from '../../components/Select';
import FileUpload from '../../components/FileUpload';
import SaveButton from '../../components/SaveButton';
import styled from 'styled-components';

const SignUpPage = () => {
  return (
    <Container>
      <Circle />
      <Form>
        <Heading>STUDENT PROFILE REGISTRATION</Heading>
        <Input type="text" placeholder="FULL NAME" />
        <Input type="email" placeholder="EMAIL ADDRESS" />
        <Select>
          <option value="">GENDER</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </Select>
        <Input type="number" placeholder="AGE" />
        <Input type="text" placeholder="PROGRAM" />
        <Input type="text" placeholder="LEVEL" />
        <Input type="text" placeholder="SEMESTER" />
        <Input type="tel" placeholder="PHONE NUMBER" />
        <FileUpload />
        <SaveButton>SAVE AND CONTINUE</SaveButton>
      </Form>
    </Container>
  );
};

export default SignUpPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
  position: relative;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

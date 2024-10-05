'use client';

import Circle from '@/components/Circle';
import Form from '@/components/Form';
import Heading from '@/components/Heading';
import Input from '@/components/Input';
import Select from '@/components/Select';
import DragDropUpload from '@/components/DragDropUpload';
import SaveButton from '@/components/SaveButton';
import styled from 'styled-components';

const LecturerPage = () => {
  return (
    <Container>
      <Circle />
      <Form>
        <Heading>LECTURER PROFILE REGISTRATION</Heading>
        <Input type="text" placeholder="FULL NAME" />
        <Input type="email" placeholder="EMAIL ADDRESS" />
        <Select>
          <option value="">GENDER</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </Select>
        <Input type="number" placeholder="AGE" />
        <Input type="text" placeholder="ACADEMIC QUALIFICATION" />
        <Input type="text" placeholder="COURSES TAUGHT" />
        <Input type="text" placeholder="DEPARTMENT" />
        <Input type="tel" placeholder="PHONE NUMBER" />
        <DragDropUpload>Drag & Drop to Upload Photo</DragDropUpload>
        <SaveButton>SAVE AND CONTINUE</SaveButton>
      </Form>
    </Container>
  );
};

export default LecturerPage;

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

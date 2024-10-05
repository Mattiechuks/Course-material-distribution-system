'use client';

import Circle from '@/components/Circle';
import Form from '@/components/Form';
import Heading from '@/components/Heading';
import Input from '@/components/Input';
import ForgotPassword from '@/components/ForgotPassword';
import SignInButton from '@/components/SignInButton';
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <Container>
      <Circle />
      <PageSpecificForm className="page-specific-form">
        <Heading>LOGIN ACCOUNT</Heading>
        <Input type="text" placeholder="USERNAME/EMAIL ADDRESS" />
        <Input type="password" placeholder="PASSWORD" />
        <ForgotPassword>Forgot Password?</ForgotPassword>
        <SignInButton>Sign in →</SignInButton>
      </PageSpecificForm>
    </Container>
  );
};

export default LoginPage;

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
const PageSpecificForm = styled(Form)`
  margin-top:0;
`;

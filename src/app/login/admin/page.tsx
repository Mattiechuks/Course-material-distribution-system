'use client';

import React from 'react';
import Form from '@/components/Form';
import Input from '@/components/Input';
import SignInButton from '@/components/SignInButton';
import Select from '@/components/Select';

const AdminLoginPage: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5' }}>
      <Form>
        <h2>ADMIN LOGIN ACCOUNT</h2>
        <Input type="text" placeholder="USERNAME/EMAIL ADDRESS" />
        <Input type="password" placeholder="PASSWORD" />
        <Input type="password" placeholder="CONFIRM PASSWORD" />
        <Select>
          <option value="">USER TYPE</option>
          <option value="admin">Admin</option>
          <option value="lecturer">Lecturer</option>
          <option value="student">Student</option>
        </Select>
        <SignInButton type="submit">Sign in</SignInButton>
      </Form>
    </div>
  );
};

export default AdminLoginPage;

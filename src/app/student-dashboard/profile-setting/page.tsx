'use client';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import SidebarItem from '@/components/SidebarItem';
import Form from '@/components/Form';
import Input from '@/components/Input';
import SaveButton from '@/components/SaveButton';
import ProfileIcon from '@/components/ProfileIcon';
import styled from 'styled-components';

const ProfileSettingPage = () => {
  return (
    <Container>
      <Sidebar>
        <ProfileIcon>👤</ProfileIcon>
        <Link href="/student-dashboard">
          <SidebarItem>Dashboard</SidebarItem>
        </Link>
        <Link href="/student-dashboard/my-materials">
          <SidebarItem>My Materials</SidebarItem>
        </Link>
        <Link href="/student-dashboard/course-materials">
          <SidebarItem>Course Materials</SidebarItem>
        </Link>
        <Link href="/student-dashboard/downloads">
          <SidebarItem>Downloads</SidebarItem>
        </Link>
        <Link href="/student-dashboard/comments">
          <SidebarItem>Comments</SidebarItem>
        </Link>
        <Link href="/student-dashboard/profile-setting">
          <SidebarItem>Profile Setting</SidebarItem>
        </Link>
        <Link href="/student-dashboard/settings">
          <SidebarItem>Settings</SidebarItem>
        </Link>
        <Link href="/login">
          <SidebarItem>Log Out</SidebarItem>
        </Link>
      </Sidebar>
      <MainContent>
        <SectionTitle>PROFILE SETTING</SectionTitle>
        <PageSpecificForm className="page-specific-form">
          <Input type="text" placeholder="FULL NAME" />
          <Input type="email" placeholder="EMAIL ADDRESS" />
          <Input type="text" placeholder="PROGRAM" />
          <Input type="text" placeholder="LEVEL" />
          <Input type="text" placeholder="SEMESTER" />
          <Input type="tel" placeholder="PHONE NUMBER" />
          <ButtonContainer>
            <SaveButton>SAVE</SaveButton>
            <CancelButton>CANCEL</CancelButton>
          </ButtonContainer>
        </PageSpecificForm>
      </MainContent>
    </Container>
  );
};

export default ProfileSettingPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color:#3A3756;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const PageSpecificForm = styled(Form)`
  margin-top:0;
`;

const MainContent = styled.div`
  margin-left: 0;
  padding: 20px;
  width: 100%;

  @media (min-width: 768px) {
    margin-left: 250px;
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 20px;
  color: #2c3e50;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const CancelButton = styled.button`
  padding: 12px 24px;
  background-color: #ccc;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

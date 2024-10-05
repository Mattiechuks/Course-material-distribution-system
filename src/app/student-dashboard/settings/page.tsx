'use client';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import SidebarItem from '@/components/SidebarItem';
import Form from '@/components/Form';
import Input from '@/components/Input';
import SaveButton from '@/components/SaveButton';
import ProfileIcon from '@/components/ProfileIcon';
import styled from 'styled-components';

const SettingsPage = () => {
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
        <SectionTitle>GENERAL SETTING</SectionTitle>
        <PageSpecificForm className="page-specific-form">
          <Input type="text" placeholder="USERNAME/EMAIL PREFERENCE" />
          <Input type="text" placeholder="Update Username/Email For Notification" />
          <Input type="text" placeholder="TWO FACTOR AUTHENTICATION" />
          <Input type="text" placeholder="EMAIL NOTIFICATIONS" />
          <Input type="text" placeholder="PUSH NOTIFICATIONS" />
          <Input type="text" placeholder="COURSE-SPECIFIC NOTIFICATIONS" />
          <Input type="text" placeholder="PRIVACY SETTING" />
          <Input type="text" placeholder="PUBLIC" />
          <Input type="text" placeholder="LECTURERS ONLY" />
          <Input type="text" placeholder="PRIVATE" />
          <Input type="text" placeholder="DATA SHARING" />
          <Input type="text" placeholder="DISABLE ACCOUNT" />
          <Input type="text" placeholder="LANGUAGE PREFERENCE" />
          <ButtonContainer>
            <SaveButton>SAVE</SaveButton>
            <CancelButton>CANCEL</CancelButton>
          </ButtonContainer>
        </PageSpecificForm>
      </MainContent>
    </Container>
  );
};

export default SettingsPage;

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

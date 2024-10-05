'use client';
import Link from 'next/link';
import Sidebar from '../../../components/Sidebar';
import SidebarItem from '../../../components/SidebarItem';
import DashboardSection from '../../../components/DashboardSection';
import ProfileIcon from '../../../components/ProfileIcon';
import styled from 'styled-components';

const CommentsPage = () => {
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
        <SectionTitle>COMMENT</SectionTitle>
        <DashboardSection>
          <SectionTitle>LECTURE-NAME</SectionTitle>
          <MessageButton>MESSAGE</MessageButton>
        </DashboardSection>
        <DashboardSection>
          <SectionTitle>LECTURE-NAME</SectionTitle>
          <MessageButton>MESSAGE</MessageButton>
        </DashboardSection>
        <DashboardSection>
          <SectionTitle>LECTURE-NAME</SectionTitle>
          <MessageButton>MESSAGE</MessageButton>
        </DashboardSection>
      </MainContent>
    </Container>
  );
};

export default CommentsPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color:#3A3756;

  @media (min-width: 768px) {
    flex-direction: row;
  }
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

const MessageButton = styled.button`
  padding: 10px 20px;
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

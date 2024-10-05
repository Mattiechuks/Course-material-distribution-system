'use client';
import Link from 'next/link';
import Sidebar from '../../../components/Sidebar';
import SidebarItem from '../../../components/SidebarItem';
import CourseMaterialsSection from '../../../components/CourseMaterialsSection';
import ProfileIcon from '../../../components/ProfileIcon';
import styled from 'styled-components';

const CourseMaterialsPage = () => {
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
        <CourseMaterialsSection>
          <SectionTitle>Current Course Materials</SectionTitle>
          <PlaceholderText>Placeholder for current course materials...</PlaceholderText>
        </CourseMaterialsSection>
        <CourseMaterialsSection>
          <SectionTitle>Recently Uploaded Materials</SectionTitle>
          <PlaceholderText>Placeholder for recently uploaded materials...</PlaceholderText>
        </CourseMaterialsSection>
      </MainContent>
    </Container>
  );
};

export default CourseMaterialsPage;

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

const PlaceholderText = styled.p`
  color: #7f8c8d;
`;

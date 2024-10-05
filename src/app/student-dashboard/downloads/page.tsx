'use client';
import Link from 'next/link';
import Sidebar from '../../../components/Sidebar';
import SidebarItem from '../../../components/SidebarItem';
import CourseMaterialsSection from '../../../components/CourseMaterialsSection';
import ProfileIcon from '../../../components/ProfileIcon';
import styled from 'styled-components';

const DownloadsPage = () => {
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
        <SectionTitle>DOWNLOADS</SectionTitle>
        <CourseMaterialsSection>
          <SectionTitle>Course Materials Available For Download</SectionTitle>
          <PlaceholderText>Placeholder for course materials available for download...</PlaceholderText>
        </CourseMaterialsSection>
        <CourseMaterialsSection>
          <SectionTitle>Recently Downloaded Materials</SectionTitle>
          <PlaceholderText>Placeholder for recently downloaded materials...</PlaceholderText>
        </CourseMaterialsSection>
      </MainContent>
    </Container>
  );
};

export default DownloadsPage;

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

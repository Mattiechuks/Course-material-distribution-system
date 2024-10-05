'use client';
import Link from 'next/link';
import Sidebar from '../../components/Sidebar';
import SidebarItem from '../../components/SidebarItem';
import DashboardSection from '../../components/DashboardSection';
import ProfileIcon from '../../components/ProfileIcon';
import AnalyticsSection from '../../components/AnalyticsSection';
import styled from 'styled-components';

const StudentDashboardPage = () => {
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
        <DashboardSection>
          <SectionTitle>Recent Uploads</SectionTitle>
          <PlaceholderText>Placeholder for recent uploads...</PlaceholderText>
        </DashboardSection>
        <DashboardSection>
          <SectionTitle>Students Comments</SectionTitle>
          <PlaceholderText>Placeholder for students comments...</PlaceholderText>
        </DashboardSection>
        <AnalyticsSection>
          <SectionTitle>Analytics</SectionTitle>
          <PlaceholderText>Placeholder for analytics...</PlaceholderText>
        </AnalyticsSection>
      </MainContent>
    </Container>
  );
};

export default StudentDashboardPage;

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

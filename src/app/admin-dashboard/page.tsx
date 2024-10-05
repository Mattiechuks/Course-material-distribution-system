'use client';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import SidebarItem from '@/components/SidebarItem';
import DashboardSection from '@/components/DashboardSection';
import ProfileIcon from '@/components/ProfileIcon';
import styled from 'styled-components';

const AdminDashboardPage = () => {
  return (
    <Container>
      <Sidebar>
        <ProfileIcon>👤</ProfileIcon>
        <Link href="/admin-dashboard">
          <SidebarItem>Dashboard</SidebarItem>
        </Link>
        <Link href="/admin-dashboard/user-management">
          <SidebarItem>User Management</SidebarItem>
        </Link>
        <Link href="/admin-dashboard/material-management">
          <SidebarItem>Material Management</SidebarItem>
        </Link>
        <Link href="/admin-dashboard/reports-statistics">
          <SidebarItem>Reports & Statistics</SidebarItem>
        </Link>
        <Link href="/admin-dashboard/switch-views">
          <SidebarItem>Switch Views</SidebarItem>
        </Link>
        <Link href="/admin-dashboard/settings">
          <SidebarItem>Settings</SidebarItem>
        </Link>
        <Link href="/login">
          <SidebarItem>Log Out</SidebarItem>
        </Link>
      </Sidebar>
      <MainContent>
        <DashboardSection>
          <SectionTitle>Overview Panel</SectionTitle>
          <PlaceholderText>Placeholder for overview panel...</PlaceholderText>
        </DashboardSection>
        <DashboardSection>
          <SectionTitle>Recent Activity</SectionTitle>
          <PlaceholderText>Placeholder for recent activity...</PlaceholderText>
        </DashboardSection>
        <DashboardSection>
          <SectionTitle>User Management</SectionTitle>
          <PlaceholderText>Placeholder for user management...</PlaceholderText>
        </DashboardSection>
        <DashboardSection>
          <SectionTitle>Material Management</SectionTitle>
          <PlaceholderText>Placeholder for material management...</PlaceholderText>
        </DashboardSection>
        <DashboardSection>
          <SectionTitle>Reports & Statistics</SectionTitle>
          <PlaceholderText>Placeholder for reports & statistics...</PlaceholderText>
        </DashboardSection>
        <DashboardSection>
          <SectionTitle>Switch Views</SectionTitle>
          <PlaceholderText>Placeholder for switch views...</PlaceholderText>
        </DashboardSection>
        <DashboardSection>
          <SectionTitle>Settings</SectionTitle>
          <PlaceholderText>Placeholder for settings...</PlaceholderText>
        </DashboardSection>
        <DashboardSection>
          <SectionTitle>Quick Actions</SectionTitle>
          <PlaceholderText>Placeholder for quick actions...</PlaceholderText>
        </DashboardSection>
      </MainContent>
    </Container>
  );
};

export default AdminDashboardPage;

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

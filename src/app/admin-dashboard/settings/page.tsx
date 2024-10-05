'use client';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import SidebarItem from '@/components/SidebarItem';
import ProfileIcon from '@/components/ProfileIcon';
import GeneralSettings from '@/components/GeneralSettings';
import UserRolePermissionTable from '@/components/UserRolePermissionTable';
import SecuritySettings from '@/components/SecuritySettings';
import styled from 'styled-components';

const SettingsPage = () => {
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
        <SectionTitle>Settings</SectionTitle>
        <GeneralSettings />
        <UserRolePermissionTable />
        <SecuritySettings />
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

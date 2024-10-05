'use client';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import SidebarItem from '@/components/SidebarItem';
import ProfileIcon from '@/components/ProfileIcon';
import styled from 'styled-components';

const MyMaterialsPage = () => {
  return (
    <Container>
      <Sidebar>
        <ProfileIcon>👤</ProfileIcon>
        <Link href="/lecturer-dashboard">
          <SidebarItem>Dashboard</SidebarItem>
        </Link>
        <Link href="/lecturer-dashboard/upload-materials">
          <SidebarItem>Upload Materials</SidebarItem>
        </Link>
        <Link href="/lecturer-dashboard/my-materials">
          <SidebarItem>My Materials</SidebarItem>
        </Link>
        <Link href="/lecturer-dashboard/comments">
          <SidebarItem>Comments</SidebarItem>
        </Link>
        <Link href="/lecturer-dashboard/profile-setting">
          <SidebarItem>Profile Setting</SidebarItem>
        </Link>
        <Link href="/lecturer-dashboard/settings">
          <SidebarItem>Settings</SidebarItem>
        </Link>
        <Link href="/login">
          <SidebarItem>Log Out</SidebarItem>
        </Link>
      </Sidebar>
      <MainContent>
        <SectionTitle>MY MATERIALS</SectionTitle>
        <MaterialsGrid>
          <MaterialThumbnail>
            <MaterialIcon>📄</MaterialIcon>
            <MaterialActions>
              <ActionButton>View</ActionButton>
              <ActionButton>Edit</ActionButton>
            </MaterialActions>
          </MaterialThumbnail>
          <MaterialThumbnail>
            <MaterialIcon>📄</MaterialIcon>
            <MaterialActions>
              <ActionButton>View</ActionButton>
              <ActionButton>Edit</ActionButton>
            </MaterialActions>
          </MaterialThumbnail>
          <MaterialThumbnail>
            <MaterialIcon>📄</MaterialIcon>
            <MaterialActions>
              <ActionButton>View</ActionButton>
              <ActionButton>Edit</ActionButton>
            </MaterialActions>
          </MaterialThumbnail>
        </MaterialsGrid>
      </MainContent>
    </Container>
  );
};

export default MyMaterialsPage;

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

const MaterialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const MaterialThumbnail = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MaterialIcon = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
`;

const MaterialActions = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionButton = styled.button`
  padding: 8px 16px;
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
`;

'use client';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import SidebarItem from '@/components/SidebarItem';
import DragDropUpload from '@/components/DragDropUpload';
import ProfileIcon from '@/components/ProfileIcon';
import styled from 'styled-components';

const UploadMaterialsPage = () => {
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
        <SectionTitle>UPLOAD MATERIALS</SectionTitle>
        <DragDropUpload>
          <span>Browse file</span>
        </DragDropUpload>
        <UploadButton>UPLOAD</UploadButton>
      </MainContent>
    </Container>
  );
};

export default UploadMaterialsPage;

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

const UploadButton = styled.button`
  padding: 12px 24px;
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
`;

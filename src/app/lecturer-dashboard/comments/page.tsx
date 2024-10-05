'use client';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import SidebarItem from '@/components/SidebarItem';
import ProfileIcon from '@/components/ProfileIcon';
import styled from 'styled-components';

const CommentsPage = () => {
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
        <SectionTitle>COMMENT</SectionTitle>
        <CommentList>
          <CommentItem>
            <CommentHeader>STUDENT NAME</CommentHeader>
            <CommentBody>STUDENT REPLY</CommentBody>
            <ReplyButton>REPLY</ReplyButton>
          </CommentItem>
          <CommentItem>
            <CommentHeader>STUDENT NAME</CommentHeader>
            <CommentBody>STUDENT REPLY</CommentBody>
            <ReplyButton>REPLY</ReplyButton>
          </CommentItem>
          <CommentItem>
            <CommentHeader>STUDENT NAME</CommentHeader>
            <CommentBody>STUDENT REPLY</CommentBody>
            <ReplyButton>REPLY</ReplyButton>
          </CommentItem>
        </CommentList>
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

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CommentItem = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CommentHeader = styled.h3`
  font-size: 18px;
  color: #2c3e50;
`;

const CommentBody = styled.p`
  color: #7f8c8d;
`;

const ReplyButton = styled.button`
  padding: 10px 20px;
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

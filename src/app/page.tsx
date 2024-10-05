'use client';
import Link from "next/link";
import styled from "styled-components";
import Sidebar from "@/components/Sidebar";
import SidebarItem from "@/components/SidebarItem";



export default function Home() {
  return (
    <Container>
      <Main>
        <Instructions>
          <li>
            Get started{" "}
          </li>
        </Instructions>
        <Sidebar>
        <Link href="/admin-dashboard">
          <SidebarItem>Admin Dashboard</SidebarItem>
        </Link>
        <Link href="/lecturer-dashboard">
          <SidebarItem>Lecturer Dashboard</SidebarItem>
        </Link>
        <Link href="/student-dashboard">
          <SidebarItem>Student Dashboard</SidebarItem>
        </Link>
        <Link href="/signup">
          <SidebarItem>Student Sign up</SidebarItem>
        </Link>
        <Link href="/signup/lecturer">
          <SidebarItem>Lecturer Sign Up</SidebarItem>
        </Link>
        <Link href="/login">
          <SidebarItem>Log Out</SidebarItem>
        </Link>
      </Sidebar>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 20px 1fr 20px;
  align-items: center;
  justify-items: center;
  min-height: 100vh;
  padding: 8px 20px;
  gap: 16px;
  font-family: var(--font-geist-sans);

  @media (max-width: 768px) {
    padding: 8px 10px;
    gap: 8px;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 4px;
  }
`;

const Instructions = styled.ol`
  list-style: decimal inside;
  text-align: center;
  font-family: var(--font-geist-mono);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

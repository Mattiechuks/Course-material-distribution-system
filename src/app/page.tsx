'use client';

import Image from "next/image";
import styled from "styled-components";
import LoginPage from "./login/page";
import LecturerPage from "./signup/lecturer/page";
import SignUpPage from "./signup/page";
import AdminDashboardPage from "./admin-dashboard/page";
import LecturerDashboardPage from "./lecturer-dashboard/page";
import StudentDashboardPage from "./student-dashboard/page";



export default function Home() {
  return (
    <Container>
      <Main>
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Instructions>
          <li>
            Get started{" "}
            <LoginPage />
          </li>
          <li>Save and see your changes instantly.</li>
        </Instructions>
        <Links>
          <AdminDashboardPage />
          <LecturerDashboardPage />
          <SignUpPage />
          <StudentDashboardPage />
          <LecturerPage />
          
        </Links>
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

const Links = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    gap: 2px;
  }
`;
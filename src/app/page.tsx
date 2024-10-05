'use client';

import Image from "next/image";
import styled from "styled-components";

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
            Get started by editing{" "}
            <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </Instructions>
        <Links>
          <LinkButton href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app">
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </LinkButton>
          <LinkButton href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app">
            Read our docs
          </LinkButton>
        </Links>
      </Main>
      <Footer>
        <FooterLink href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app">
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </FooterLink>
        <FooterLink href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app">
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </FooterLink>
        <FooterLink href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app">
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </FooterLink>
      </Footer>
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

const LinkButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  background-color: var(--foreground);
  color: var(--background);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const Footer = styled.footer`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 4px;
  }
`;

const FooterLink = styled.a`
  display: flex;
  align-items: center;
  gap: 2px;
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

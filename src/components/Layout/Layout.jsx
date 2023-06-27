import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, SectionFull } from "./Layout.styled";

export const Layout = () => {
  return (
    <main>
      <SectionFull>
        <Container>
          <Suspense>
            <Outlet />
          </Suspense>
        </Container>
      </SectionFull>
    </main>
  );
};

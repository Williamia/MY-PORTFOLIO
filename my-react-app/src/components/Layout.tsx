import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
  openAcademicModal: () => void;
  openExperienceModal: () => void;
  openProjectsModal: () => void;
}

function Layout({ children, openAcademicModal, openExperienceModal, openProjectsModal }: LayoutProps) {
  return (
    <div className="layout-class">
      <Header />
      <main>{children}</main>
      <Footer
        openAcademicModal={openAcademicModal}
        openExperienceModal={openExperienceModal}
        openProjectsModal={openProjectsModal}
      />
    </div>
  );
}

export default Layout;

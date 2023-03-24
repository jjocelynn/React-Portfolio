import React, { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./Footer";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  // conditional rendering based on the value of currentPage. If none of them, return Contact
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Work") {
      return <Work />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <main>
        {/* we are passing two props to the navTab (currentPage variable and  handlePageChange function) */}
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        {/* calling the renderpage function*/}
        {renderPage()}
      </main>
      <Footer />
    </>
  );
}

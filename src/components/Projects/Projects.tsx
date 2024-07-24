import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Title } from "../ui";
import { Card } from "./components";
import { usePagination } from "./hooks/usePagination";
import { projects } from "./ProjectData";
import SectionContainer from "../ui/SectionContainer";

const getIsMobile = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth < 768;
  }
  return false;
};

export const Projects: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(getIsMobile());
  const pageSize = isMobile ? 1 : 4;
  const {
    currentPage,
    pages: pageNumbers,
    setPage,
    prevPage,
    nextPage,
    canPrevPage,
    canNextPage,
  } = usePagination({
    pageSize,
    totalCount: projects.length,
  });
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const projectsToShow = projects.slice(start, end);

  const MAX_PAGES = pageNumbers.length > 5 ? 5 : pageNumbers.length; // Maximum number of circles to display
  // Calculate the range of page numbers to show
  let startPage = currentPage - Math.floor(MAX_PAGES / 2);
  startPage = Math.max(startPage, 1);
  startPage = Math.min(startPage, pageNumbers.length - MAX_PAGES + 1);
  const endPage = startPage + MAX_PAGES - 1;

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(getIsMobile());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="flex flex-col items-center pt-10" id="Projects">
      <Title>Projects</Title>
      <SectionContainer>
        <div className="pt-2 pb-5">
          <div className="flex justify-center">
            <div className="relative flex flex-row justify-center gap-5 m-2 w-fit">
              {currentPage > Math.floor(MAX_PAGES / 2) + 1 && MAX_PAGES != 3 && (
                <div className="absolute left-[-20px] text-secondary">...</div>
              )}
              {Array.from({ length: endPage - startPage + 1 }).map((_, index) => {
                const pageNumber = startPage + index;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => setPage(pageNumber)}
                    disabled={currentPage === pageNumber}
                    className={`${
                      currentPage === pageNumber ? "border-primary text-primary" : "border-secondary text-secondary"
                    } border-[1px] rounded-full h-8 w-8 flex items-center justify-center`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
              {currentPage < pageNumbers.length - Math.floor(MAX_PAGES / 2) && MAX_PAGES != 3 && (
                <div className="absolute right-[-20px] text-secondary">...</div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-projectPagination">
            <div
              className={`h-full flex items-center rounded-md ml-1 ${
                !canPrevPage ? "text-secondary" : "text-primary hover:bg-slate-700/80 cursor-pointer"
              }`}
              onClick={prevPage}
            >
              <button disabled={!canPrevPage}>
                <IoIosArrowBack size={30} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-8 m-2 max-md:grid-cols-1">
              {projectsToShow.map((project, i) => (
                <Card key={`${project.title}_${i}`} project={project} />
              ))}
            </div>
            <div
              className={`h-full flex items-center mr-1 rounded-md ${
                !canNextPage ? "text-secondary" : "text-primary hover:bg-slate-700/80 cursor-pointer"
              }`}
              onClick={nextPage}
            >
              <button disabled={!canNextPage}>
                <IoIosArrowForward size={30} />
              </button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

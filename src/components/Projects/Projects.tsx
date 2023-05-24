import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Title } from "../ui";
import { Card } from "./components";
import { usePagination } from "./hooks/usePagination";
import { projects } from "./ProjectData";

export const Projects: React.FC = () => {
  const pageSize = 4;
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

  return (
    <section className="flex items-center flex-col pt-10" id="Projects">
      <Title>Projects</Title>
      <div className="bg-secondary pb-5 pt-2 rounded-lg w-[50%]">
        <div className="flex flex-row justify-center gap-5 m-2">
          {pageNumbers.map((pageNumber) => (
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
          ))}
        </div>
        <div className="grid grid-cols-projectPagination">
          <div className={`h-full flex items-center ${!canPrevPage ? "text-secondary" : "text-primary"}`}>
            <button onClick={prevPage} disabled={!canPrevPage}>
              <IoIosArrowBack size={30} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-8 m-2 min-h-[600px]">
            {projectsToShow.map((project, i) => (
              <Card key={`${project.title}_${i}`} project={project} />
            ))}
          </div>
          <div className={`h-full flex items-center ${!canNextPage ? "text-secondary" : "text-primary"}`}>
            <button onClick={nextPage} disabled={!canNextPage}>
              <IoIosArrowForward size={30} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

import { useState, useMemo } from "react";

interface UsePaginationOptions {
  pageSize: number;
  totalCount: number;
}

interface UsePaginationResult {
  currentPage: number;
  pages: number[];
  setPage: (page: number) => void;
  prevPage: () => void;
  nextPage: () => void;
  canPrevPage: boolean;
  canNextPage: boolean;
}

export function usePagination(options: UsePaginationOptions): UsePaginationResult {
  const { pageSize, totalCount } = options;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalCount / pageSize);
  const pages = useMemo(() => {
    const result = [];
    for (let i = 1; i <= totalPages; i++) {
      result.push(i);
    }
    return result;
  }, [totalPages]);

  const setPage = (page: number) => {
    if (page < 1 || page > totalPages) {
      return;
    }
    setCurrentPage(page);
  };

  const prevPage = () => setPage(currentPage - 1);
  const nextPage = () => setPage(currentPage + 1);

  const canPrevPage = currentPage > 1;
  const canNextPage = currentPage < totalPages;

  return {
    currentPage,
    pages,
    setPage,
    prevPage,
    nextPage,
    canPrevPage,
    canNextPage,
  };
}

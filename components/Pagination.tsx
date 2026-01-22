import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
};

export default function Pagination({
  currentPage = 1,
  totalPages = 3,
  onPageChange,
}: PaginationProps) {
  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  // Generate page numbers to display
  const getPageNumbers = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: number[] = [];
    
    // Always show first page
    pages.push(1);

    if (currentPage > 3) {
      pages.push(-1); // Ellipsis
    }

    // Show pages around current page
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push(-1); // Ellipsis
    }

    // Always show last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center mt-12">
      <nav className="flex items-center gap-2" aria-label="Pagination">
        {/* Previous */}
        <button
          type="button"
          className="size-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => onPageChange?.(currentPage - 1)}
          disabled={!canGoPrev}
          aria-label="Previous page"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Pages */}
        {pageNumbers.map((page, index) => 
          page === -1 ? (
            <span key={`ellipsis-${index}`} className="text-gray-400 px-2">
              ...
            </span>
          ) : (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange?.(page)}
              className={`size-10 flex items-center justify-center rounded-lg font-bold transition-colors
                ${
                  page === currentPage
                    ? "bg-primary-green text-white shadow-md shadow-primary-green/30"
                    : "border border-gray-200 text-gray-900 hover:bg-gray-50"
                }`}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </button>
          )
        )}

        {/* Next */}
        <button
          type="button"
          className="size-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => onPageChange?.(currentPage + 1)}
          disabled={!canGoNext}
          aria-label="Next page"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </nav>
    </div>
  );
}

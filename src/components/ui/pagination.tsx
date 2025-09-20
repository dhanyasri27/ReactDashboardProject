import { Button } from "@/components/ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage: number;
  totalItems: number;
  indexOfFirstItem: number;
  indexOfLastItem: number;
}

export const Pagination = ({ currentPage, totalPages, onPageChange, totalItems, indexOfFirstItem, indexOfLastItem }: PaginationProps) => {
  return (
    <div className="flex justify-between items-center mt-4">
      <div>
        <p className="text-sm text-muted-foreground">
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, totalItems)} of {totalItems} entries
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
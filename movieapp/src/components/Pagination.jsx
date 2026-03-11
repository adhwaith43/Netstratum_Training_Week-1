export default function Pagination({ page, setPage, totalPages }) {
  return (
    <div className="pagination">
      <button className="btn-primary" disabled={page <= 1} onClick={() => setPage(page - 1)}>Previous</button>
      <span>Page {page} of {totalPages}</span>
      <button className="btn-primary" disabled={page >= totalPages} onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}
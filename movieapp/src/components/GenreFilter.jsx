export default function GenreFilter({ genres, selectedGenre, onSelect }) {
  if (!genres || genres.length === 0) return null;
  
  return (
    <select 
      className="genre-select" 
      value={selectedGenre} 
      onChange={(e) => onSelect(e.target.value)}
    >
      <option value="">All Genres</option>
      {genres.map((g) => (
        <option key={g.id} value={g.id}>{g.name}</option>
      ))}
    </select>
  );
}
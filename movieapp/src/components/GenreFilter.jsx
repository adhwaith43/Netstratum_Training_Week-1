export default function GenreFilter({ genres, selectedGenre, onSelect }) {
  return (
    <select value={selectedGenre} onChange={(e) => onSelect(e.target.value)}>
      <option value="">All Genres</option>
      {genres.map((g) => <option key={g.id} value={g.id}>{g.name}</option>)}
    </select>
  );
}
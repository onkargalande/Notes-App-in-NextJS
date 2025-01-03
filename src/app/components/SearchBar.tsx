interface SearchBarProps {
    onSearch: (query: string) => void;
  }
  
  export default function SearchBar({ onSearch }: SearchBarProps) {
    return (
      <input
        type="text"
        placeholder="Search notes..."
        onChange={(e) => onSearch(e.target.value)}
      />
    );
  }
  
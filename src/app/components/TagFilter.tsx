interface TagFilterProps {
    tags: string[];
    onFilter: (tag: string) => void;
  }
  
  export default function TagFilter({ tags, onFilter }: TagFilterProps) {
    return (
      <select onChange={(e) => onFilter(e.target.value)}>
        <option value="">All Tags</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    );
  }
  
'use client';

import { useState } from 'react';

interface NoteFormProps {
  onSubmit: (note: { title: string; content: string; tags: string[] }) => void;
  tags: string[];
}

export default function NoteForm({ onSubmit, tags }: NoteFormProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, content, tags: selectedTags });
    setTitle('');
    setContent('');
    setSelectedTags([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <select
        multiple
        value={selectedTags}
        onChange={(e) =>
          setSelectedTags(Array.from(e.target.selectedOptions, (option) => option.value))
        }
      >
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
      <button type="submit">Add Note</button>
    </form>
  );
}

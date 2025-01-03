'use client';

import { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import SearchBar from './components/SearchBar';
import TagFilter from './components/TagFilter';
import { v4 as uuid } from 'uuid';

interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
}

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTag, setFilterTag] = useState('');
  const [tags] = useState(['Work', 'Personal', 'Urgent', 'Others']);

  const handleAddNote = (note: Omit<Note, 'id'>) => {
    setNotes([...notes, { ...note, id: uuid() }]);
  };

  const handleEditNote = (updatedNote: Note) => {
    setNotes(notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)));
  };

  const handleDeleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const filteredNotes = notes
    .filter((note) => note.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((note) => (filterTag ? note.tags.includes(filterTag) : true));

  return (
    <main>
      <h1>Notes App</h1>
      <NoteForm onSubmit={handleAddNote} tags={tags} />
      <SearchBar onSearch={setSearchQuery} />
      <TagFilter tags={tags} onFilter={setFilterTag} />
      <NoteList
        notes={filteredNotes}
        onEdit={handleEditNote}
        onDelete={handleDeleteNote}
      />
    </main>
  );
}

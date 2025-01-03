interface Note {
    id: string;
    title: string;
    content: string;
    tags: string[];
  }
  
  interface NoteListProps {
    notes: Note[];
    onEdit: (note: Note) => void;
    onDelete: (id: string) => void;
  }
  
  export default function NoteList({ notes, onEdit, onDelete }: NoteListProps) {
    return (
      <div>
        {notes.map((note) => (
          <div key={note.id} className="note-card">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <div className="tags">{note.tags.join(', ')}</div>
            <button onClick={() => onEdit(note)}>Edit</button>
            <button onClick={() => onDelete(note.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }
  
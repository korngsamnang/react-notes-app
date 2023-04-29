import NoteItem from "../components/NoteItem";
import Header from "../components/Header.jsx";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";

const Notes = ({ notes, setSearch }) => {
    return (
        <div>
            <Header setSearch={setSearch} />
            {notes.length ? (
                <div className="notes__container">
                    {notes.map(note => (
                        <NoteItem key={note.id} note={note} />
                    ))}
                </div>
            ) : (
                <p className="empty__notes">No Notes to display</p>
            )}
            <Link to="/create-note" className="btn add__btn">
                <BsPlusLg />
            </Link>
        </div>
    );
};

export default Notes;

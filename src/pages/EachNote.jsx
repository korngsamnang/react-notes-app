import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import PageNotFound from "./PageNotFound.jsx";
import { DataContext } from "../context/AppContext.jsx";

const EachNote = () => {
    const { notes, setNotes } = useContext(DataContext);

    const { id } = useParams();
    const note = notes.find(noteItem => noteItem.id.toString() === id);
    const [editTitle, setEditTitle] = useState("");
    const [editDetails, setEditDetails] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (note) {
            setEditTitle(note.title);
            setEditDetails(note.details);
        }
    }, [note]);

    const handleSave = event => {
        event.preventDefault();
        if (!editTitle || !editDetails) return;

        const editedNote = {
            ...note,
            title: editTitle,
            details: editDetails,
        };

        const updateNote = notes.map(n =>
            n.id.toString() === id ? editedNote : n
        );
        setNotes(updateNote);
        navigate("/");
    };

    const handleDelete = () => {
        const listNotes = notes.filter(n => n.id.toString() !== id);
        setNotes(listNotes);
        navigate("/");
    };

    return (
        <section>
            {note && (
                <>
                    <header className="create-note__header">
                        <Link to="/" className="btn">
                            <IoIosArrowBack />
                        </Link>
                        <button onClick={handleSave} className="btn lg primary">
                            Save
                        </button>
                        <button onClick={handleDelete} className="btn danger">
                            <RiDeleteBin6Line />
                        </button>
                    </header>
                    <form onSubmit={handleSave} className="create-note__form">
                        <input
                            type="text"
                            autoFocus
                            placeholder="Title"
                            value={editTitle}
                            onChange={event => setEditTitle(event.target.value)}
                        />
                        <textarea
                            rows="28"
                            placeholder="Note details..."
                            value={editDetails}
                            onChange={event =>
                                setEditDetails(event.target.value)
                            }
                        ></textarea>
                    </form>
                </>
            )}
            {!note && <PageNotFound />}
        </section>
    );
};

export default EachNote;

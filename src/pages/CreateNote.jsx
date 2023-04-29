import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { format } from "date-fns";
import { v4 as uuid } from "uuid";

const CreateNote = ({ notes, setNotes }) => {
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");

    const navigate = useNavigate();

    const handleSave = event => {
        event.preventDefault();
        if (!title || !details) return;

        const date = format(new Date(), "MMM dd,yyyy");
        const noteObj = {
            id: uuid(),
            title,
            details,
            date,
        };
        setNotes([noteObj, ...notes]);
        navigate("/");
    };
    return (
        <section>
            <header className="create-note__header">
                <Link to="/" className="btn">
                    <IoIosArrowBack />
                </Link>
                <button className="btn lg primary" onClick={handleSave}>
                    Save
                </button>
            </header>
            <form onSubmit={handleSave} className="create-note__form">
                <input
                    type="text"
                    autoFocus
                    placeholder="Title"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <textarea
                    rows="28"
                    placeholder="Note details..."
                    value={details}
                    onChange={event => setDetails(event.target.value)}
                ></textarea>
            </form>
        </section>
    );
};

export default CreateNote;

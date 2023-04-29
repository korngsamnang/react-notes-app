import { Link } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound.jsx";

const NoteItem = ({ note }) => {
    return (
        <>
            <Link to={`/note/${note.id}`} className="note">
                <h4>
                    {note.title.length <= 50
                        ? note.title
                        : note.title.slice(0, 50) + "..."}
                </h4>
                <p>{note.date}</p>
            </Link>
        </>
    );
};

export default NoteItem;

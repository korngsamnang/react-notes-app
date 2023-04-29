import { Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote";
import EachNote from "./pages/EachNote";
import PageNotFound from "./pages/PageNotFound";
import { useEffect, useState } from "react";

const App = () => {
    const [notes, setNotes] = useState(
        JSON.parse(localStorage.getItem("notes") || [])
    );
    const [search, setSearch] = useState("");

    const searchList = notes.filter(note =>
        note.title.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    return (
        <main id="app">
            <Routes>
                <Route
                    path="/"
                    element={<Notes notes={searchList} setSearch={setSearch} />}
                />
                <Route
                    path="/create-note"
                    element={<CreateNote notes={notes} setNotes={setNotes} />}
                />
                <Route
                    path="/note/:id"
                    element={<EachNote notes={notes} setNotes={setNotes} />}
                />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </main>
    );
};

export default App;

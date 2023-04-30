import { createContext, useEffect, useState } from "react";

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [notes, setNotes] = useState(
        JSON.parse(localStorage.getItem("notes")) || []
    );
    const [search, setSearch] = useState("");

    const searchList = notes.filter(note =>
        note.title.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    return (
        <DataContext.Provider
            value={{ notes, setNotes, setSearch, searchList }}
        >
            {children}
        </DataContext.Provider>
    );
};

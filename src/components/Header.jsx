import { CiSearch } from "react-icons/ci";
import { useContext, useState } from "react";
import { DataContext } from "../context/AppContext.jsx";

const Header = () => {
    const { setSearch } = useContext(DataContext);
    const [showSearch, setShowSearch] = useState(true);
    return (
        <header className="notes__header">
            {showSearch ? (
                <h2>My Notes</h2>
            ) : (
                <input
                    type="text"
                    autoFocus
                    placeholder="Keyword..."
                    onChange={event => setSearch(event.target.value)}
                />
            )}
            <button
                className="btn"
                onClick={() => setShowSearch(prevState => !prevState)}
            >
                <CiSearch />
            </button>
        </header>
    );
};

export default Header;

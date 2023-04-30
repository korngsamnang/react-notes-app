import { Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote";
import EachNote from "./pages/EachNote";
import PageNotFound from "./pages/PageNotFound";
import { DataProvider } from "./context/AppContext.jsx";

const App = () => {
    return (
        <main id="app">
            <DataProvider>
                <Routes>
                    <Route path="/" element={<Notes />} />
                    <Route path="/create-note" element={<CreateNote />} />
                    <Route path="/note/:id" element={<EachNote />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </DataProvider>
        </main>
    );
};

export default App;

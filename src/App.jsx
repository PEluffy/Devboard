import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/RouteComponents/Dashboard";
import Bookmark from "./components/RouteComponents/Bookmark";
import Note from "./components/RouteComponents/Note";
import Github from "./components/RouteComponents/Github";
import Help from "./components/RouteComponents/Help";
import Notification from "./components/RouteComponents/Notification";
import { SidebarProvider } from "./context/SideBarcontext";
import MainContent from "./components/MainContent";

function App() {
  return (
    <SidebarProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookmark" element={<Bookmark />} />
            <Route path="note" element={<Note />} />
            <Route path="github" element={<Github />} />
            <Route path="help" element={<Help />} />
            <Route path="notification" element={<Notification />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SidebarProvider>
  );
}

export default App;

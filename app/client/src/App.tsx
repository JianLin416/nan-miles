import { HashRouter as Router, Routes, Route } from "react-router"
import DashBoard from "./pages/dashboard"

export default function App() {
    document.documentElement.classList.add("dark")
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DashBoard />} />
            </Routes>
        </Router>
    )
}

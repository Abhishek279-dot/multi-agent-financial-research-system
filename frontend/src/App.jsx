import { useState } from "react";
import Sidebar from "./components/Sidebar";
import "./App.css";



function App() {

  const [activePage, setActivePage] = useState("Dashboard");

  return (
    <div className="app-layout">

      <Sidebar
        activePage={activePage}
        onNavigate={setActivePage}
      />

      <main className="main-content">

        <header className="top-navbar">
          <div>
            <h2>{activePage}</h2>
            <p>Welcome to your financial intelligence workspace.</p>
          </div>

          <div className="navbar-right">
            <span className="online-status">
              <span className="status-dot"></span>
              System Online
            </span>
          </div>
        </header>

        <section className="page-content">

          <div className="welcome-section">
            <div>
              <h1>Welcome to FinSight AI</h1>
              <p>
                Your intelligent financial research workspace.
              </p>
            </div>

            <button className="primary-button">
              + New Research
            </button>
          </div>

          <div className="coming-soon">
            <h2>{activePage}</h2>
            <p>
              Your financial intelligence dashboard is coming together.
            </p>
          </div>

        </section>

      </main>

    </div>
  );
}

export default App;

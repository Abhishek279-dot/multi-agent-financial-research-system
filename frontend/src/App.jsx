
import { useState } from "react";
import {
  FileText,
  Building2,
  AlertTriangle,
  FileCheck,
  ArrowUpRight,
  Clock3
} from "lucide-react";

import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {

  const [activePage, setActivePage] = useState("Dashboard");

  // Dashboard summary data
  const stats = [
    {
      title: "Total Documents",
      value: "12",
      icon: FileText,
      color: "blue"
    },
    {
      title: "Companies Analyzed",
      value: "05",
      icon: Building2,
      color: "green"
    },
    {
      title: "Red Flags Detected",
      value: "08",
      icon: AlertTriangle,
      color: "orange"
    },
    {
      title: "Reports Generated",
      value: "06",
      icon: FileCheck,
      color: "purple"
    }
  ];

  // Recent research demo data
  const recentResearch = [
    {
      company: "Reliance Industries",
      task: "Financial Analysis",
      date: "Today",
      status: "Completed"
    },
    {
      company: "Tata Motors",
      task: "Risk Assessment",
      date: "Yesterday",
      status: "Completed"
    },
    {
      company: "Infosys",
      task: "Company Comparison",
      date: "Yesterday",
      status: "Processing"
    }
  ];

  return (
    <div className="app-layout">

      <Sidebar
        activePage={activePage}
        onNavigate={setActivePage}
      />

      <main className="main-content">

        {/* Top Navbar */}
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

          {activePage === "Dashboard" ? (

            <>

              {/* Welcome Section */}
              <div className="welcome-section">
                <div>
                  <h1>Welcome to FinSight AI</h1>
                  <p>
                    Your intelligent financial research workspace.
                  </p>
                </div>

                <button
                  className="primary-button"
                  onClick={() => setActivePage("Research Workspace")}
                >
                  + New Research
                </button>
              </div>


              {/* Dashboard Statistics */}
              <div className="stats-grid">

                {stats.map((item) => {

                  const Icon = item.icon;

                  return (
                    <div className="stat-card" key={item.title}>

                      <div className={`stat-icon ${item.color}`}>
                        <Icon size={22} />
                      </div>

                      <div>
                        <p>{item.title}</p>
                        <h2>{item.value}</h2>
                      </div>

                      <ArrowUpRight
                        className="stat-arrow"
                        size={18}
                      />

                    </div>
                  );

                })}

              </div>


              {/* Recent Research */}
              <div className="activity-section">

                <div className="section-heading">
                  <div>
                    <h2>Recent Research Activity</h2>
                    <p>Track your latest financial research.</p>
                  </div>

                  <Clock3 size={21} />
                </div>


                <div className="activity-list">

                  {recentResearch.map((research) => (

                    <div
                      className="activity-item"
                      key={research.company}
                    >

                      <div className="activity-company">
                        <h3>{research.company}</h3>
                        <p>{research.task}</p>
                      </div>

                      <span className="activity-date">
                        {research.date}
                      </span>

                      <span
                        className={`activity-status ${
                          research.status === "Completed"
                            ? "completed"
                            : "processing"
                        }`}
                      >
                        {research.status}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </>

          ) : (

            <div className="coming-soon">
              <h2>{activePage}</h2>
              <p>
                Your {activePage} module is coming soon.
              </p>
            </div>

          )}

        </section>

      </main>

    </div>
  );
}

export default App;

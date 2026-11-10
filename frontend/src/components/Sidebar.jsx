import "./Sidebar.css";

import {
  LayoutDashboard,
  FolderOpen,
  ChartNoAxesCombined,
  ShieldAlert,
  GitCompareArrows,
  MessageSquareText,
  FileText,
  Settings,
  LogOut,
  BrainCircuit
} from "lucide-react";



function Sidebar({ activePage, onNavigate }) {

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard
    },
    {
      name: "Research Workspace",
      icon: BrainCircuit
    },
    {
      name: "Documents",
      icon: FolderOpen
    },
    {
      name: "Financial Analysis",
      icon: ChartNoAxesCombined
    },
    {
      name: "Red Flags",
      icon: ShieldAlert
    },
    {
      name: "Company Comparison",
      icon: GitCompareArrows
    },
    {
      name: "AI Research Assistant",
      icon: MessageSquareText
    },
    {
      name: "Reports",
      icon: FileText
    }
  ];    

  return (
    <aside className="sidebar">

      {/* Application Logo */}
      <div className="sidebar-logo">

        <div className="logo-icon">
          <BrainCircuit color="white" size={25} />
        </div>

        <div>
          <h2>FinSight<span> AI</span></h2>
          <p>Financial Intelligence</p>
        </div>

      </div>

      {/* Navigation */}
      <div className="sidebar-menu">

        <p className="menu-heading">MAIN MENU</p>

        {menuItems.map((item) => {      

          const Icon = item.icon;

          return (
            <button key={item.name} 
            className={`nav-item ${ activePage === item.name ? "active" : ""
              }`}
              onClick={() => onNavigate(item.name)}
            >
                
              <Icon size={19} />
              <span>{item.name}</span>
            </button>
          );
        })}

      </div>

      {/* Bottom Section */}
      <div className="sidebar-bottom">

        <button className="nav-item">
          <Settings size={19} />
          <span>Settings</span>
        </button>

        <div className="sidebar-user">
          <div className="user-avatar">AR</div>

          <div className="user-info">
            <h4>Admin Researcher</h4>
            <p>Research Workspace</p>
          </div>

          <LogOut size={17} />
        </div>

      </div>

    </aside>
  );
}

export default Sidebar;

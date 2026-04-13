import React from 'react';
import Todolist from './Todolist';
import "./admin.css";

function Admin() {
  return (
    <div className="admin-page">
   
      <div className="admin-main">
        <div className="admin-main-grid"  />
        
        <div className="admin-main-content">
          <div className="admin-hero-eyebrow">Admin • Task Control Panel</div>
          <h1 className="admin-main-title">Admin Dashboard</h1>
          <p className="admin-main-dis">
            Manage and track your tasks • Real-time updates
          </p>
        </div>
      </div>

    
    
        <div className="admin-container">
          <Todolist />
        </div>
        </div>
   
  );
}

export default Admin;
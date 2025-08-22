import { useNavigate } from "react-router-dom";
import "./header.css";
import React, { Component } from "react";

type HeaderProps = {
  //
};

function HeaderComponent() {
    
  const navigate = useNavigate();
    return (
      <div>
        <div>
          <div className="util-header">
              <span className="back-button" onClick={() => navigate('/')}>Back to Marketplace</span>
          </div>
        </div>
    </div>
    );
  }
// }

export default HeaderComponent;

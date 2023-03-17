import React from 'react';

export default function Header({ children }) {
  return (

    <header id="site-header" className="custom-header effect-three clr" role="banner">
      <div id="site-header-inner" className="clr">
        <div className="elementor elementor-8">
          <div className="elementor-section-wrap">
            {children}
          </div>
        </div>
      </div>
    </header>

  )
}

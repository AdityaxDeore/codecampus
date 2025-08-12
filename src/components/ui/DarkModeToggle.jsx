import React from 'react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import styled from 'styled-components';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <StyledWrapper>
      <div className="toggle-container">
        <input
          type="checkbox"
          id="darkmode-toggle"
          checked={isDarkMode}
          onChange={toggleDarkMode}
          className="toggle-input"
        />
        <label htmlFor="darkmode-toggle" className="toggle-label">
          <div className="toggle-slider">
            <div className="toggle-icon sun-icon">☀️</div>
            <div className="toggle-icon moon-icon">🌙</div>
          </div>
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .toggle-container {
    position: relative;
    display: inline-block;
  }

  .toggle-input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .toggle-label {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;
    background: linear-gradient(135deg, #fbbf24, #f59e0b);
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .toggle-input:checked + .toggle-label {
    background: linear-gradient(135deg, #1e293b, #0f172a);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }

  .toggle-slider {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 26px;
    height: 26px;
    background: white;
    border-radius: 50%;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }

  .toggle-input:checked + .toggle-label .toggle-slider {
    transform: translateX(30px);
    background: #0f172a;
  }

  .toggle-icon {
    font-size: 14px;
    position: absolute;
    transition: all 0.3s ease;
  }

  .sun-icon {
    opacity: 1;
    transform: scale(1);
  }

  .moon-icon {
    opacity: 0;
    transform: scale(0);
  }

  .toggle-input:checked + .toggle-label .sun-icon {
    opacity: 0;
    transform: scale(0);
  }

  .toggle-input:checked + .toggle-label .moon-icon {
    opacity: 1;
    transform: scale(1);
  }

  .toggle-label:hover {
    transform: scale(1.05);
  }
`;

export default DarkModeToggle;

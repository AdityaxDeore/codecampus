import React from 'react';
import styled from 'styled-components';

const StyledCard = ({ category, onClick, colorIndex }) => {
  return (
    <StyledWrapper colorIndex={colorIndex} onClick={onClick}>
      <div className="card">
        <div className="text">
          <span>{category.title}</span>
          <p className="subtitle">{category.description}</p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 370px;
    height: 250px;
    border-radius: 20px;
    background: ${props => {
      const colors = [
        'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)', // Blue
        'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)', // Green
        'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)'  // Yellow
      ];
      return colors[props.colorIndex % 3];
    }};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.4s ease;
    box-shadow: 0 8px 25px ${props => {
      const shadows = [
        'rgba(59, 130, 246, 0.15)',  // Blue shadow
        'rgba(34, 197, 94, 0.15)',   // Green shadow
        'rgba(245, 158, 11, 0.15)'   // Yellow shadow
      ];
      return shadows[props.colorIndex % 3];
    }};
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  /* Dark mode styles */
  .oled-dark & .card {
    background: ${props => {
      const darkColors = [
        'linear-gradient(135deg, rgba(30, 58, 138, 0.2) 0%, rgba(59, 130, 246, 0.1) 100%)', // Blue dark
        'linear-gradient(135deg, rgba(5, 150, 105, 0.2) 0%, rgba(34, 197, 94, 0.1) 100%)',   // Green dark
        'linear-gradient(135deg, rgba(217, 119, 6, 0.2) 0%, rgba(245, 158, 11, 0.1) 100%)'   // Yellow dark
      ];
      return darkColors[props.colorIndex % 3];
    }} !important;
    border: 1px solid ${props => {
      const darkBorders = [
        'rgba(59, 130, 246, 0.3)',  // Blue border
        'rgba(34, 197, 94, 0.3)',   // Green border
        'rgba(245, 158, 11, 0.3)'   // Yellow border
      ];
      return darkBorders[props.colorIndex % 3];
    }} !important;
    box-shadow: 0 8px 25px ${props => {
      const darkShadows = [
        'rgba(59, 130, 246, 0.3)',  // Blue glow
        'rgba(34, 197, 94, 0.3)',   // Green glow
        'rgba(245, 158, 11, 0.3)'   // Yellow glow
      ];
      return darkShadows[props.colorIndex % 3];
    }} !important;
  }

  .card::before {
    content: "";
    height: 140px;
    width: 140px;
    position: absolute;
    top: -30%;
    right: -15%;
    border-radius: 50%;
    background: ${props => {
      const gradients = [
        'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(147, 197, 253, 0.1) 100%)', // Blue
        'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, rgba(134, 239, 172, 0.1) 100%)',   // Green
        'radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, rgba(251, 191, 36, 0.1) 100%)'    // Yellow
      ];
      return gradients[props.colorIndex % 3];
    }};
    transition: all .6s ease;
    filter: blur(.2rem);
  }

  /* Dark mode decorative circle */
  .oled-dark & .card::before {
    background: ${props => {
      const darkGradients = [
        'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(147, 197, 253, 0.2) 100%)', // Blue bright
        'radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, rgba(134, 239, 172, 0.2) 100%)',   // Green bright
        'radial-gradient(circle, rgba(245, 158, 11, 0.4) 0%, rgba(251, 191, 36, 0.2) 100%)'    // Yellow bright
      ];
      return darkGradients[props.colorIndex % 3];
    }} !important;
  }

  .text {
    text-align: center;
    padding: 30px;
    display: flex;
    flex-direction: column;
    color: #1e293b;
    font-weight: 700;
    font-size: 1.5em;
    z-index: 2;
  }

  /* Dark mode text */
  .oled-dark & .text {
    color: #ffffff !important;
  }

  .subtitle {
    font-size: .65em;
    font-weight: 400;
    color: #475569;
    margin-top: 12px;
    line-height: 1.5;
    max-width: 280px;
  }

  /* Dark mode subtitle */
  .oled-dark & .subtitle {
    color: #e2e8f0 !important;
  }

  .card:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 25px 50px ${props => {
      const hoverShadows = [
        'rgba(59, 130, 246, 0.25)',  // Blue hover shadow
        'rgba(34, 197, 94, 0.25)',   // Green hover shadow
        'rgba(245, 158, 11, 0.25)'   // Yellow hover shadow
      ];
      return hoverShadows[props.colorIndex % 3];
    }};
    background: ${props => {
      const hoverColors = [
        'linear-gradient(135deg, #EFF6FF 0%, #BFDBFE 100%)', // Blue hover
        'linear-gradient(135deg, #ECFDF5 0%, #BBF7D0 100%)', // Green hover
        'linear-gradient(135deg, #FFFBEB 0%, #FDE68A 100%)'  // Yellow hover
      ];
      return hoverColors[props.colorIndex % 3];
    }};
  }

  /* Dark mode hover */
  .oled-dark & .card:hover {
    background: ${props => {
      const darkHoverColors = [
        'linear-gradient(135deg, rgba(30, 58, 138, 0.4) 0%, rgba(59, 130, 246, 0.2) 100%)', // Blue hover dark
        'linear-gradient(135deg, rgba(5, 150, 105, 0.4) 0%, rgba(34, 197, 94, 0.2) 100%)',   // Green hover dark
        'linear-gradient(135deg, rgba(217, 119, 6, 0.4) 0%, rgba(245, 158, 11, 0.2) 100%)'   // Yellow hover dark
      ];
      return darkHoverColors[props.colorIndex % 3];
    }} !important;
    box-shadow: 0 25px 50px ${props => {
      const darkHoverShadows = [
        'rgba(59, 130, 246, 0.5)',  // Blue intense glow
        'rgba(34, 197, 94, 0.5)',   // Green intense glow
        'rgba(245, 158, 11, 0.5)'   // Yellow intense glow
      ];
      return darkHoverShadows[props.colorIndex % 3];
    }} !important;
  }

  .card:hover::before {
    width: 200px;
    height: 200px;
    top: -20%;
    right: -10%;
    filter: blur(0rem);
    background: ${props => {
      const hoverGradients = [
        'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(147, 197, 253, 0.2) 100%)', // Blue hover
        'radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, rgba(134, 239, 172, 0.2) 100%)',   // Green hover
        'radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, rgba(251, 191, 36, 0.2) 100%)'    // Yellow hover
      ];
      return hoverGradients[props.colorIndex % 3];
    }};
  }

  /* Dark mode hover decorative circle */
  .oled-dark & .card:hover::before {
    background: ${props => {
      const darkHoverGradients = [
        'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(147, 197, 253, 0.3) 100%)', // Blue intense
        'radial-gradient(circle, rgba(34, 197, 94, 0.6) 0%, rgba(134, 239, 172, 0.3) 100%)',   // Green intense
        'radial-gradient(circle, rgba(245, 158, 11, 0.6) 0%, rgba(251, 191, 36, 0.3) 100%)'    // Yellow intense
      ];
      return darkHoverGradients[props.colorIndex % 3];
    }} !important;
  }

  .card:hover .text {
    color: #0f172a;
  }

  /* Dark mode hover text */
  .oled-dark & .card:hover .text {
    color: #ffffff !important;
  }

  .card:hover .subtitle {
    color: #334155;
  }

  /* Dark mode hover subtitle */
  .oled-dark & .card:hover .subtitle {
    color: #f1f5f9 !important;
  }
`;

export default StyledCard;

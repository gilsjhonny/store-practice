import React from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components/macro';
import animationData from '../../animations/wizard-loading.json';

const LoadingAnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #483988;
`;

const LoadingAnimation = ({ children }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <LoadingAnimationContainer>
      <Lottie options={defaultOptions} height={280} width={400} />
      <p>{children}</p>
    </LoadingAnimationContainer>
  );
};

export default LoadingAnimation;

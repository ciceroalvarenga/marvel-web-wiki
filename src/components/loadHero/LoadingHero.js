import React, { useCallback, useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import animationData from './animation.json';

export function LoadingHero() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <>
      <Lottie options={defaultOptions} height={400} width={400} />
    </>
  );
}

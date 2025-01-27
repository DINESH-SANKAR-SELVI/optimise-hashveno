// SkeletonLoader.js
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonLoader = () => {
  return (
    <div>
      <Skeleton style={{ height: '20vh',marginBottom: '10px' }} />
      <Skeleton count={3} style={{maxWidth: '50vw'}}/>
    </div>
  );
};

export default SkeletonLoader;
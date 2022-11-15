import React from 'react';
// import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Skeleton = () => {
  return (
    <>
      <div className="mt-5 w-auto animate-pulse flex-row items-center justify- space-x-1 rounded-xl border p-6 ">
        <div className="flex flex-col space-y-2" >
          <div className="h-6 w-11/12 rounded-md bg-gray-300 "></div>
          <div className="h-6 w-10/12 rounded-md bg-gray-300 "></div>
          <div className="h-6 w-9/12 rounded-md bg-gray-300 "></div>
          <div className="h-6 w-9/12 rounded-md bg-gray-300 "></div>
        </div>
      </div>
    </>
  );
};

const ArraySkeleto = () => [...Array(4)];

const SkeletonCard = () => (
  <div className="grid grid-cols-2 gap-4">
    {ArraySkeleto().map((_: any, i: any) => (
      <Skeleton key={i} />
    ))}
  </div>
);

export default SkeletonCard;

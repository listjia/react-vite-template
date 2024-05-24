import { Suspense } from "react";

const lazyLoad = (Component) => {
  return <Suspense fallback={<div>Loading...</div>}>{Component}</Suspense>;
};

export default lazyLoad;

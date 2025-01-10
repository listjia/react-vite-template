import React from 'react';
import { useGetPlaceTree } from './useLoadPlaceTree';

const AddAndEditContent = () => {
  const { treeList } = useGetPlaceTree();
  return <div>AddAndEditContent</div>;
};

export default AddAndEditContent;

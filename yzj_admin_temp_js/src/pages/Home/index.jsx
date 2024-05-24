import React from "react";
import useCounterStore from "@/stores/counter";

const Home = () => {
  const { counter, increase } = useCounterStore();

  return (
    <div>
      <button onClick={() => increase(1)}>添加</button>
      {counter}
    </div>
  );
};

export default Home;

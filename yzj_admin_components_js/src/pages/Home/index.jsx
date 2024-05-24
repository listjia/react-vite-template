import React from "react";
import useCounterStore from "@/stores/counter";
import MainHeader from "../../components/MainHeader";

const Home = () => {
  const { counter, increase } = useCounterStore();

  return (
    <div>
      <MainHeader />
      <div className=" pt-[60px]"></div>
      <button onClick={() => increase(1)}>添加</button>
      {counter}
    </div>
  );
};

export default Home;

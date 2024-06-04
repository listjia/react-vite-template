import React from "react";
import useCounterStore from "@/stores/counter";
import MainHeader from "../../components/MainHeader";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const Home = () => {
  const { counter, increase } = useCounterStore();

  return (
    <div>
      <MainHeader />
      <div className=" pt-[60px]"></div>
      <button onClick={() => increase(1)}>添加</button>
      {counter}

      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
  );
};

export default Home;

import "./App.css";
import { a } from "@/text";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { fetchLogin } from "./store/modules/user";
import "./test";

function App() {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log(values);
    //异步触发action fetchLogin
    dispatch(fetchLogin(values));
  };
  return (
    <>
      <div>This is The First page</div>
      <div>
        <Form
          onFinish={onFinish}
          initialValues={{ mobile: "13800000002", code: "246810" }}
        >
          <Form.Item name="mobile">
            <Input />
          </Form.Item>
          <Form.Item name="code">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
      {a}
    </>
  );
}

export default App;

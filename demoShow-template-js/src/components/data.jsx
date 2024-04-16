export const column = [
  {
    field: "province",
    name: "省份",
  },
  {
    field: "city",
    name: "城市",
  },
  {
    field: "type",
    name: "商品类别",
  },
  {
    field: "pro",
    name: "生产厂商",
  },
  {
    field: "address",
    name: "生产地址",
  },
  {
    field: "color",
    name: "颜色",
  },
  {
    field: "length",
    name: "长度",
  },
  {
    field: "shape",
    name: "形状",
  },
  {
    field: "isFav",
    name: "是否喜爱",
  },
  {
    field: "price",
    name: "价格",
  },
  {
    field: "type1",
    name: "类型1",
  },
  {
    field: "status",
    name: "状态",
  },
  {
    field: "cost",
    name: "成本",
  },
  {
    field: "action",
    name: "操作",
    render: (text, record, index) => (
      <div>
        <button onClick={() => handleEdit(record)}>编辑</button>
        <button onClick={() => handleDelete(record)}>删除</button>
      </div>
    )
  },
];

export const getList = () => {
  const data = [];
  for (let i = 0; i < 100000; i++) {
    data.push({
      province: `省份${i}`,
      city: `城市${i}`,
      type: `类型${i % 10}`,
      type1: `类型${i % 10}`,
      pro: `生产厂商${i % 5}`,
      address: `地址${i}`,
      color: ["红色", "白色", "蓝色", "绿色", "黄色"][i % 5],
      length: `${10 + (i % 5)}cm`, // 长度从10cm到14cm
      shape: ["圆形", "方形", "三角形"][i % 3],
      isFav: i % 2 === 0,
      price: 10 + (i % 11),
      status: ["在售", "售罄", "预售"][i % 3],
      cost: 5 + (i % 6),
      action: `操作${i}`,
    });
  }
  return data;
};

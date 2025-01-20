import service from './request';

// ---------------------------位置管理页面接口--------------------
// 新增位置
export async function addPosition(obj) {
  const url = `/System/AddLocation`;
  const data = await service.post(url, obj);
  return data;
}

// 编辑位置
export async function editPosition(obj) {
  const url = `/System/UpdateLocation`;
  const data = await service.post(url, obj);
  return data;
}

// 删除位置
export async function deletePosition(obj) {
  const url = `/System/DeleteLocation`;
  const data = await service.post(url, obj);
  return data;
}

// 获取位置树状数据
export async function getPlaceTree(obj) {
  const url = `/System/GetLocationList`;
  const data = await service.get(url, { params: obj });
  return data;
}

// 登录
export async function login(obj) {
  const url = `/Login/Authenticate`;
  const data = await service.post(url, obj);
  return data;
}

// ---------------------------检品管理页面接口--------------------
// 检品查询
export async function getInspections(obj) {
  // const url = `/System/GetProductList`;
  const url = `/System/GetInspectProductListTree`;
  const data = await service.get(url, { params: obj });
  return data;
}

// 新增产品
export async function addProduct(obj) {
  const url = `/System/AddInspectProduct`;
  const data = await service.post(url, obj);
  return data;
}

// 编辑产品
export async function editProduct(obj) {
  const url = `/System/UpdateInspectProduct`;
  const data = await service.post(url, obj);
  return data;
}

// 删除产品
export async function deleteProduct(obj) {
  const url = `/System/DeleteInspectProduct`;
  const data = await service.post(url, obj);
  return data;
}

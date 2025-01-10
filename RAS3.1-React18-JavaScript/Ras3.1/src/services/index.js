import service from './request';
// ---------------------------生成报告页面接口--------------------
// 查询报告模板
export async function GetReportTemp(obj) {
  const url = `/FileMgmt/GetReportTemp`;
  const data = await service.get(url, { params: obj });
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

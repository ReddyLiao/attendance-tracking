import request from "@/api/request";

export function signIn(params) {
  return request({
    url: `/user/getToken`,
    method: "get",
    params,
  });
}
export function userInfo(params) {
  return request({
    url: `/user/tokenInfo`,
    method: "get",
    params,
  });
}
export function attendanceList(params) {
  return request({
    url: `/attendance/?sort=key.date,desc`,
    method: "get",
    params,
  });
}
export function reportList(params) {
  return request({
    url: `/attendance/?sort=key.date,desc`,
    method: "get",
    params,
  });
}

export function punchTime(data) {
  return request({
    url: `/attendance/`,
    method: "post",
    data,
  });
}
export function todayStatus(data) {
  return request({
    url: `/attendance/todayStatus`,
    method: "post",
    data,
  });
}
export function dayOff(data) {
  return request({
    url: `/attendance/dayOff`,
    method: "post",
    data,
  });
}
export function setUserInfo(data) {
  return request({
    url: `/user/modify`,
    method: "post",
    data,
  });
}
export function updatePassword(data) {
  return request({
    url: `/user/updatePassword`,
    method: "post",
    data,
  });
}
export function register(data) {
  return request({
    url: `/user/register`,
    method: "post",
    data,
  });
}

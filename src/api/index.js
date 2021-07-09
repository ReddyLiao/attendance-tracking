import request from "@/api/request";

export function signIn(params) {
  return request({
    url: `/user/getToken`,
    method: "get",
    params,
  });
}
export function attendanceList(params) {
  return request({
    url: `/attendance/`,
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
export function register(data) {
  return request({
    url: `/user/register`,
    method: "post",
    data,
  });
}

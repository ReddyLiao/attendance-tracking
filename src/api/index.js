import request from "@/api/request";

export function signIn(params) {
  return request({
    url: `/user/getToken`,
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
export function register(data) {
  return request({
    url: ``,
    method: "post",
    data,
  });
}

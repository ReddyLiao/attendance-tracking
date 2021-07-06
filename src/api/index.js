import request from "@/api/request";

export function signIn(params) {
  return request({
    url: ``,
    method: "get",
    params,
  });
}

export function register(data) {
  return request({
    url: ``,
    method: "post",
    data,
  });
}

export function punchIn(data) {
  return request({
    url: ``,
    method: "post",
    data,
  });
}

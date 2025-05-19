import { api } from "../axios";
import { ApiError, ApiResponse } from "../error";
import { AxiosError, AxiosRequestConfig } from "axios";

type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: Record<string, string>;
  body?: any;
  timeout?: number;
};

export async function fetchApi<T>(
  url: string,
  options: RequestOptions = {}
): Promise<T> {
  const { method = "GET", headers = {}, body, timeout = 30000 } = options;

  try {
    const config: AxiosRequestConfig = {
      method,
      url,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      timeout,
      data: body instanceof FormData ? body : body,
    };

    if (body instanceof FormData) {
      delete config.headers?.["Content-Type"];
    }

    const response = await api(config);
    const data = response.data as ApiResponse<T>;

    if ("success" in data && data.success === false) {
      throw new ApiError(
        data.error.code,
        data.error.message,
        data.status,
        data.error.details
      );
    }

    if ("success" in data && data.success === true) {
      return data.data as T;
    }

    return data as T;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.code === "ECONNABORTED") {
      throw new ApiError("REQUEST_TIMEOUT", "Request timed out", 408);
    }

    throw new ApiError(
      (axiosError.response?.data as any)?.error?.code,
      (axiosError.response?.data as any)?.error?.message,
      (axiosError.response?.data as any)?.status,
      (axiosError.response?.data as any)?.error?.details
    );
  }
}

export function get<T>(
  url: string,
  options: Omit<RequestOptions, "method" | "body"> = {}
) {
  return fetchApi<T>(url, { ...options, method: "GET" });
}

export function post<T>(
  url: string,
  body?: any,
  options: Omit<RequestOptions, "method"> = {}
) {
  return fetchApi<T>(url, { ...options, method: "POST", body });
}

export function put<T>(
  url: string,
  body?: any,
  options: Omit<RequestOptions, "method"> = {}
) {
  return fetchApi<T>(url, { ...options, method: "PUT", body });
}

export function del<T>(
  url: string,
  options: Omit<RequestOptions, "method"> = {}
) {
  return fetchApi<T>(url, { ...options, method: "DELETE" });
}

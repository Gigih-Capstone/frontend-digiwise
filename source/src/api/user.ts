import axios, { AxiosResponse, AxiosError } from "axios";
import { BASE_URL } from "./config";

import { LoginData, RegisterData, AuthResponse } from "../types/User";

type ResponseOutput = {
  code?: number;
  level: number;
  token: string;
  username: string;
};

export const signIn = async (loginData: LoginData): Promise<ResponseOutput> => {
  try {
    const { data } = await axios.post<LoginData, AxiosResponse<AuthResponse>>(
      `${BASE_URL}/users/login`,
      loginData,
    );

    const response = {
      code: data.code,
      level: data.data.level,
      token: data.data.token,
      username: data.data.username,
    };
    return response;
  } catch (error) {
    const err = error as AxiosError;
    const response = {
      code: err.response?.status,
      level: 0,
      token: "",
      username: "",
    };
    return response;
  }
};

export const signUp = async (
  registerData: RegisterData,
): Promise<ResponseOutput> => {
  try {
    const { data } = await axios.post<
      RegisterData,
      AxiosResponse<AuthResponse>
    >(`${BASE_URL}/users/register`, registerData);

    const response = {
      code: data.code,
      level: data.data.level,
      token: data.data.token,
      username: data.data.username,
    };
    return response;
  } catch (error) {
    const err = error as AxiosError;

    const response = {
      code: err.response?.status,
      level: 0,
      token: "",
      username: "",
    };
    return response;
  }
};

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  name: string;
  token: string;
}

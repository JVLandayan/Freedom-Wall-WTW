export interface Login {
  username: string;
  password: string;
}

export interface ForgotPassword {
  email: string;
}

export interface ResetPassword {
  email: string;
  userId: number;
  password: string;
  confirmPassword: string;
  token: string;
}

export interface Session {
  userId: number;
  token: string;
}

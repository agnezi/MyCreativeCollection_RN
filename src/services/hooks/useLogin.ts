import {baseApi} from '@services/config';
import {useMutation} from '@tanstack/react-query';

interface AuthRequestBody {
  userLoginText: string;
  password: string;
}

interface AuthResponse {
  access_token: string;
}

export const useLogin = () => {
  const loginMutation = useMutation({
    mutationFn: (authRequestBody: AuthRequestBody) =>
      baseApi.post<AuthResponse>('/auth/login', authRequestBody),
  });

  return {loginMutation};
};

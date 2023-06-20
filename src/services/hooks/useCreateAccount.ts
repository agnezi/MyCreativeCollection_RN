import {baseApi} from '@services/config';
import {useMutation} from '@tanstack/react-query';

interface CreateAccountRequestBody {
  username: string;
  password: string;
  email: string;
  name: string;
}

export const useCreateAccount = () => {
  const createAccountMutation = useMutation({
    mutationFn: (createAccountRequestBody: CreateAccountRequestBody) =>
      baseApi.post('/users/create', createAccountRequestBody),
  });

  return {createAccountMutation};
};

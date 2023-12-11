import { useEffect } from 'react';
import { useAppDispatch } from '../store/store';
import { useNavigate } from 'react-router-dom';
import { loginAsync } from '../feature/authSlice';
import { links } from '../shared/links';
import { storageNames } from '../shared/storageNames';

const { dashboard } = links;
const { loginStorage } = storageNames;

export const Authorization = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const login = async (values: { username: string; password: string }) => {
    await dispatch(loginAsync(values));
    navigate(dashboard);
  };
  useEffect(() => {
    const localTokens = sessionStorage.getItem(loginStorage);
    if (localTokens) {
      login(JSON.parse(localTokens));
    }
  }, []);

  return null;
};

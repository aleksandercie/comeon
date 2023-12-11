import { useState } from 'react';
import InputWrapper from '../components/InputWrapper/InputWrapper';
import Layout from '../components/Layout/Layout';
import { loginAsync, selectAuth } from '../feature/authSlice';
import { useAppDispatch } from '../store/store';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { links } from '../shared/links';

type InputType = 'username' | 'password';

const { dashboard } = links;

const Homepage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error, loading } = useSelector(selectAuth);

  const [loginValues, setLoginValues] = useState({
    username: '',
    password: '',
  });

  const handleChange =
    (type: InputType) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setLoginValues((prev) => ({
        ...prev,
        [type]: value,
      }));
    };

  const isEmpty = loginValues.username === '' || loginValues.password === '';
  const disabled = isEmpty || loading;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isEmpty) {
      await dispatch(loginAsync(loginValues));
      navigate(dashboard);
    }
  };

  return (
    <Layout>
      <>
        <div className="login">
          {error && (
            <div className="ui centered error message">
              {error.toUpperCase()}
            </div>
          )}
          <div className="ui grid centered">
            <form onSubmit={onSubmit}>
              <div className="fields">
                <InputWrapper required>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={loginValues.username}
                    onChange={handleChange('username')}
                  />
                  <i className="user icon" />
                </InputWrapper>
                <InputWrapper required>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={loginValues.password}
                    onChange={handleChange('password')}
                  />
                  <i className="lock icon" />
                </InputWrapper>
                <div className="field">
                  <div className="ui icon input">
                    <input type="submit" value="Login" disabled={disabled} />
                    <i className="right chevron icon"></i>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Homepage;

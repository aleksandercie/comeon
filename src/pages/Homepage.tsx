import InputWrapper from '../components/InputWrapper/InputWrapper';
import Layout from '../components/Layout/Layout';

const Homepage = () => (
  <Layout>
    <div className="login">
      <div className="ui grid centered">
        <form>
          <div className="fields">
            <InputWrapper required>
              <input type="text" name="username" placeholder="Username" />
              <i className="user icon" />
            </InputWrapper>
            <InputWrapper required>
              <input type="password" name="password" placeholder="Password" />
              <i className="lock icon" />
            </InputWrapper>
            <div className="field">
              <div className="ui icon input">
                <input type="submit" value="Login" />
                <i className="right chevron icon"></i>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </Layout>
);

export default Homepage;

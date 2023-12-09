import Button from '../components/Button/Button';
import Categories from '../components/Categories/Categories';
import Games from '../components/Games/Games';
import Header from '../components/Header/Header';
import InputWrapper from '../components/InputWrapper/InputWrapper';
import Layout from '../components/Layout/Layout';
import Player from '../components/Player/Player';

const Dashboard = () => (
  <Layout>
    <>
      <div className="casino">
        <div className="ui grid centered">
          <div className="twelve wide column">
            <div className="ui list">
              <Player />
            </div>
            <Button
              float="left"
              type="button"
              icon={<i className="left chevron icon" />}
              name="Log Out"
              classname="logout"
            />
          </div>
          <div className="four wide column">
            <InputWrapper required={false}>
              <input type="text" placeholder="Search Game" />
              <i className="search icon" />
            </InputWrapper>
          </div>
        </div>
        <div className="ui grid">
          <div className="twelve wide column">
            <Header title="Games" />
            <Games />
          </div>
          <div className="four wide column">
            <Header title="Categories" />
            <Categories />
          </div>
        </div>
      </div>
      <div className="ingame">
        <div className="ui grid centered">
          <div className="three wide column">
            <Button
              float="left"
              type="button"
              icon={<i className="left chevron icon" />}
              name="Back"
            />
          </div>
          <div className="ten wide column">
            <div id="game-launch"></div>
          </div>
          <div className="three wide column"></div>
        </div>
      </div>
    </>
  </Layout>
);

export default Dashboard;

import { useState } from 'react';
import Layout from '../components/Layout/Layout';
import InGame from '../components/InGame/InGame';
import Casino from '../components/Casino/Casino';
import useWindowWidth from '../hooks/useWindowWidth';

const Dashboard = () => {
  const isMobile = useWindowWidth();
  const [isLaunchGame, setIsLaunchGame] = useState(false);

  return (
    <Layout>
      <>
        {isLaunchGame ? (
          <InGame
            isLaunchGame={isLaunchGame}
            isMobile={isMobile}
            setIsLaunchGame={setIsLaunchGame}
          />
        ) : (
          <Casino isMobile={isMobile} setIsLaunchGame={setIsLaunchGame} />
        )}
      </>
    </Layout>
  );
};

export default Dashboard;

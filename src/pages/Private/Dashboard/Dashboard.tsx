import { useNavigate } from 'react-router';
import { PrivateRoutes } from '../../../models';
export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2>Dashboard</h2>
 
      <button onClick={() => navigate(`/${PrivateRoutes.ADMIN}`)}>
        Only Admin
      </button> 
    </>
  );
};

// default export for lazy loading
export default Dashboard;

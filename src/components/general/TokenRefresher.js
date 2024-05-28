import { useRefreshAccessToken } from '../../utils';

const TokenRefresher = () => {
  useRefreshAccessToken();
  return null; // Component does not render anything
};

export default TokenRefresher;
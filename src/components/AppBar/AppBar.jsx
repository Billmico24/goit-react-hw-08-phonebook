import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { BarHeader } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <BarHeader >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </BarHeader>
  );
};
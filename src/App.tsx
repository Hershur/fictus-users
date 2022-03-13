import './App.scss';
import { UsersProvider } from './contexts/usersContext/UsersProvider';
import Users  from './pages/users/Users';

function App() {
  return (
    <div className="App">
      <UsersProvider>
        <Users />
      </UsersProvider>
    </div>
  );
}

export default App;

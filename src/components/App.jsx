import './App.css';
import Profile from './Profile/Profile';
import userData from '../userData.json';
import FriendList from './FriendList/FriendList';
import friends from '../friends.json';
import transactions from '../transactions.json';
import Transactions from './Transactions/Transactions';

function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
}
export default App;

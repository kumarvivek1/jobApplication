import './App.css';
import AppContainer from './AppContainer';
import AdminDashboard from './AdminDashboard';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <div className="App">
        <AppContainer />
      </div>
      <div className='admin'>
        <AdminDashboard />
      </div>
    </div>

  );
}

export default App;

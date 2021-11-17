import { Route, Routes  } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';

function App() {
  return (
    // <div>
      <Routes >
        <Route path='/' element={<AllMeetupsPage/>} >
          {/* <AllMeetupsPage /> */}
        </Route>
        <Route path='/new-meetup' element={<NewMeetupPage/>} >
          {/* <NewMeetupPage /> */}
        </Route>
        <Route path='/favorites' element={<FavoritesPage/>}>
          {/* <FavoritesPage /> */}
        </Route>
      </Routes >
    // </div>
  );
}

export default App;
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Search from './pages/search/Search';
import EditProfile from './pages/edit-profile/Editprofile';
import ReportPost from './pages/report/post/ReportPost';
import ReportUsers from './pages/report/users/ReportUsers';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import EditPost from './pages/edit-post/EditPost';
import Main from './pages/main/user/Main';
import Camera from './pages/camera/Camera';
import RecommendRecipe from './pages/recommend-recipe/RecommendRecipe';
import Profile from './pages/profile/Profile';
import AdminMain from './pages/main/admin/AdminMain';
import LoadPage from './pages/load-page/LoadPage';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/login">
          <Login/>
        </Route>

        <Route exact path="/">
          <Redirect to="/login"/>
        </Route>

        <Route exact path="/EditPost">
          <EditPost/>
        </Route>

        <Route exact path="/camera">
          <Camera/>
        </Route>

        <Route exact path="/register">
          <Register/>
        </Route>

        <Route exact path="/search_video">
          <Search/>
        </Route>

        <Route exact path="/report_user">
          <ReportUsers/>
        </Route>

        <Route exact path="/report_post">
          <ReportPost/>
        </Route>

        <Route exact path="/recomend_recipe">
          <RecommendRecipe/>
        </Route>
        
        <Route exact path="/user_profile">
          <Profile/>
        </Route>

        <Route exact path="/user-home">
          <Main/>
        </Route>

        <Route exact path="/admin_home">
          <AdminMain/>
        </Route>

        <Route exact path="/load_page">
          <LoadPage/>
        </Route>

        <Route exact path="/edit_profile">
          <EditProfile/>
        </Route>

        <Route exact path="/edit_post">
          <EditPost/>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

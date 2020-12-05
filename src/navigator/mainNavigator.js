import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging20182226Navigator from '../features/Messaging20182226/navigator';
import ArticleList182189Navigator from '../features/ArticleList182189/navigator';
import ArticleList182188Navigator from '../features/ArticleList182188/navigator';
import ArticleList182187Navigator from '../features/ArticleList182187/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Messaging20182226: { screen: Messaging20182226Navigator },
ArticleList182189: { screen: ArticleList182189Navigator },
ArticleList182188: { screen: ArticleList182188Navigator },
ArticleList182187: { screen: ArticleList182187Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

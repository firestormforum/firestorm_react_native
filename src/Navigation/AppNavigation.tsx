import CategoriesScreen from '../Screens/CategoriesScreen'
import ThreadsScreen from '../Screens/ThreadsScreen'
import { createStackNavigator } from 'react-navigation'
import PostsScreen from '../Screens/PostsScreen'
import CreatePostScreen from '../Screens/CreatePostScreen'
import CreateThreadScreen from '../Screens/CreateThreadScreen'
import LoginScreen from '../Screens/LoginScreen'

const AppNavigation = createStackNavigator(
  {
    Login: LoginScreen,
    Categories: CategoriesScreen,
    Threads: ThreadsScreen,
    Posts: PostsScreen,
    CreatePost: CreatePostScreen,
    CreateThread: CreateThreadScreen
  },
  {
    initialRouteKey: 'Login',
    headerMode: 'none'
  }
)

export default AppNavigation

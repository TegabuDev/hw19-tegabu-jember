import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ErrorPage from "./pages/error-page";
import SelectedTodo from "./pages/selected-todo";
import Root from "./pages/root";
import TodoApp from "./pages/todo-app";
import LoginPage from "./components/users/LoginPage";
import RegisterPage from "./components/users/RegisterPage";
import ProfilePage from "./components/users/ProfilePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Root />} errorElement={<ErrorPage />}>
      <Route element={<TodoApp />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<RegisterPage />} />
      <Route path="todo/:id" element={<SelectedTodo />} />
      <Route path="profile" element={<ProfilePage />} />
    </Route>
  )
);

export default router;

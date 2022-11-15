import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui";

const useDarkMode = () => {
  const { isDarkMode } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  const toggleDarkMode = () => {
    dispatch(uiActions.toggleDarkMode());
  };

  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;

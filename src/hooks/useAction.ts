import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodosActionCreator from "../redux/actions";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(TodosActionCreator, dispatch);
};

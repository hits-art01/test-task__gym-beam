import React, { FC, useState } from "react";
import "./edit-sector.scss";
import { TodoState } from "../../../types";
import { todoFetchEdit } from "../../../server/editTodo";
import { useDispatch } from "react-redux";
import { editTodo } from "../../../redux/actions";
import Button from "../../../UI/Button";

interface EditSectorProps {
  item: TodoState;
  close: () => void;
}

const EditSector: FC<EditSectorProps> = ({ item, close }) => {
  const [changeInputValue, setChangeInputValue] = useState<string>("");
  const [changeAreaValue, setChangeAreaValue] = useState<string>("");
  const dispatch = useDispatch();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangeInputValue(e.target.value);
  };
  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChangeAreaValue(e.target.value);
  };

  const handleEditTodo = () => {
    if (changeAreaValue && changeInputValue) {
      const updatedTodo = {
        id: item.id,
        title: changeInputValue,
        description: changeAreaValue,
        completed: item.completed,
      };

      dispatch(editTodo(updatedTodo));
      todoFetchEdit(item.id, updatedTodo);
      close();
    }
  };

  return (
    <div className="edit-sector">
      <h2 className="edit-sector__title">Edit todo {item.id}</h2>
      <div className="edit-sector__change-area">
        <div className="edit-sector__input">
          <h5 className="edit-sector__label">Title</h5>
          <input type="text" value={changeInputValue} onChange={handleInput} />
        </div>
        <div className="edit-sector__text-area">
          <h5 className="edit-sector__label">Description</h5>
          <textarea value={changeAreaValue} onChange={handleTextArea} />
        </div>
        <div className="edit-sector__btn">
          <h5 className="edit-sector__label">Save</h5>
          <Button onClick={handleEditTodo}>Edit</Button>
        </div>
      </div>
    </div>
  );
};

export default EditSector;

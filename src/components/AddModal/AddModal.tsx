import React, { FC, useEffect, useRef, useState } from "react";
import Button from "../../UI/Button";
import { todoFetchAdd } from "../../server/addTodo";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions";
import DatePicker from "react-datepicker";
import Aos from "aos";
import "aos/dist/aos.css";
import "react-datepicker/dist/react-datepicker.css";
import "./add-modal.scss";

interface ModalProps {
  close: () => void;
}

const AddModal: FC<ModalProps> = ({ close }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [areaValue, setAreaValue] = useState<string>("");
  const todos = useTypedSelector((state) => state.todos);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useDispatch();

  const handleChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAreaValue(e.target.value);
  };

  const addNewTodo = () => {
    if (inputValue && areaValue) {
      const newTodo = {
        id: +todos[todos.length - 1].id + 1,
        title: inputValue,
        description: areaValue,
        completed: false,
        date: selectedDate,
      };
      todoFetchAdd(newTodo);
      dispatch(addTodo(newTodo));
      close();
    } else {
      if (inputRef.current) {
        inputRef.current.style.borderColor = "red";
      }

      if (textareaRef.current) {
        textareaRef.current.style.borderColor = "red";
      }
    }
  };

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div
      data-aos="fade-left"
      className="add-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="add-modal__wrap">
        <header className="add-modal__header">
          <h3>ADD A NEW TODO</h3>
        </header>
        <div className="add-modal__main">
          <div className="add-modal__change-area">
            <div className="add-modal__input">
              <h5 className="add-modal__label">Title</h5>
              <input
                type="text"
                ref={inputRef}
                value={inputValue}
                onChange={handleInput}
              />
            </div>
            <div className="add-modal__textarea">
              <h5 className="add-modal__label">Description</h5>
              <textarea
                ref={textareaRef}
                value={areaValue}
                onChange={handleTextArea}
              />
            </div>
            <div className="edit-sector__date">
              <h5 className="add-modal__label">Date(optional)</h5>
              <DatePicker
                selected={selectedDate}
                onChange={handleChange}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select a date"
                className="datepicker-color"
              />
            </div>
          </div>
          <Button onClick={addNewTodo}>Save</Button>
        </div>
      </div>
    </div>
  );
};

export default AddModal;

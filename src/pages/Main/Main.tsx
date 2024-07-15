import React, { FC, useState } from "react";
import "./main.scss";
import TodosList from "../../components/Todos/TodosList";
import Button from "../../UI/Button";
import AddModal from "../../components/AddModal/AddModal";

const Main: FC = () => {
  const [isModal, setIsModal] = useState<boolean>(false);

  const closeModal = () => setIsModal(false);

  return (
    <div className="main">
      <div className="main__container _container">
        <header className="main__header">
          <h2 className="main__title">Todos List</h2>
          <nav className="main__menu">
            <Button onClick={() => setIsModal(!isModal)}>Add a new todo</Button>
          </nav>
          {isModal ? <AddModal close={closeModal} /> : null}
        </header>
        <TodosList />
      </div>
    </div>
  );
};

export default Main;

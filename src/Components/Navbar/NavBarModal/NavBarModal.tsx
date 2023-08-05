import React, { useContext, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { MainContext } from "../../../Configs/Context/mainContext";
import "./Modal.css";
import { FaRegEdit } from "react-icons/fa";
import { PiNotebook } from "react-icons/pi";
import { LuShare } from "react-icons/lu";
import { IoMdRemoveCircleOutline } from "react-icons/io";

const modalRoot = document.getElementById("modal-root");

interface ModalContent {
  name: string;
  component: JSX.Element;
}

const ModalContentArray: ModalContent[] = [
  { name: "Edit", component: <FaRegEdit /> },
  { name: "Courier Info", component: <PiNotebook /> },
  { name: "Share", component: <LuShare /> },
  { name: "Remove", component: <IoMdRemoveCircleOutline /> },
];

interface ModalItemProps {
  name: string;
  component: JSX.Element;
  onClick: () => void;
}

const ModalItem: React.FC<ModalItemProps> = React.memo(({ name, component, onClick }) => (
  <div className={`modalContainNer ${name === "Remove" && "redColor"}`}>
    <button onClick={onClick}>
      {name} {component}
    </button>
  </div>
));

const NavBarModal: React.FC = () => {
  const { state, handleNavbarModal } = useContext(MainContext)!;

  const handleCloseModal = useCallback(() => {
    handleNavbarModal(false);
  }, [handleNavbarModal]);

  const modalRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === modalRef.current) {
        handleCloseModal();
      }
    },
    [handleCloseModal]
  );

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [handleCloseModal]);

  useEffect(() => {
    const handleBodyClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleCloseModal();
      }
    };

    if (state!.navBarModal) {
      document.addEventListener("mousedown", handleBodyClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleBodyClick);
    };
  }, [handleCloseModal, state!.navBarModal]);

  useEffect(() => {
    // Additional useEffects related to your component

    // Make sure hooks are only called unconditionally
  }, []);

  const modalContent = (
    <div
      onClick={handleOverlayClick}
      ref={modalRef}
      className={`modal-container ${state!.navBarModal ? "modal-open" : ""}`}
    >
      {ModalContentArray.map((e, i) => (
        <ModalItem
          key={i}
          name={e.name}
          component={e.component}
          onClick={handleCloseModal}
        />
      ))}
    </div>
  );

  return createPortal(modalContent, modalRoot as HTMLElement);
};

export default React.memo(NavBarModal);

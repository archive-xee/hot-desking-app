"use client";
import { useEffect, useRef, useState } from "react";

type ModalProps = {
  trigger: React.ReactNode;
  title: string;
  content: React.ReactNode;
  actions?: React.ReactNode;
};

export const Modal = (props: ModalProps) => {
  const { trigger, title, content, actions } = props;
  const [showModal, setShowModal] = useState(false);
  const handleTriggerClicked = () => {
    setShowModal(!showModal);
  };
  const handleCloseClicked = () => {
    setShowModal(!showModal);
  };
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const closeModal = (e: MouseEvent) => {
      if (
        showModal &&
        modalRef.current &&
        !modalRef.current.contains(e.target as Node)
      ) {
        // 이벤트가 발생한 노드가 모달 컴포넌트 내부에 존재하지 않는다면 close
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", closeModal);

    return () => {
      document.removeEventListener("mousedown", closeModal);
    };
  }, [showModal]);

  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={handleTriggerClicked}>
        {trigger}
      </div>

      {showModal && (
        <div
          ref={modalRef}
          aria-hidden="true"
          className="fixed left-1/2 top-1/2 flex w-full max-w-sm -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-lg border border-black-100  bg-white-300 "
        >
          <div className="bg-white-500 py-2 text-center">
            <h2 className="font-bold">{title}</h2>
          </div>
          <div className="flex w-full flex-col gap-6 px-4 py-2">
            <div className="overflow-y-auto">{content}</div>
            <div className="flex flex-row justify-center gap-2">
              {actions}
              <button
                type="button"
                onClick={handleCloseClicked}
                className="rounded-lg border border-red-700 bg-white-100 px-5 py-2.5 text-sm font-medium hover:bg-red-300 hover:text-white-100 "
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

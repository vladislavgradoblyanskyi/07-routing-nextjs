"use client"
import { createPortal } from "react-dom";
// import { useEffect } from "react";
import css from "./Modal.module.css";
import { useRouter } from 'next/navigation';

interface ModalProps {
  children: React.ReactNode;
}


export default function Modal({ children}: ModalProps){
    const router = useRouter();
    const close = () => router.back();
    // useEffect(() => {
    //   const close = () => router.back();
    //    function handleEsc(evt: KeyboardEvent) {
    //      if (evt.key === "Escape") {
    //        close();
    //      }
    //    }

    //    window.addEventListener("keydown", handleEsc);
    //    return () => {window.removeEventListener("keydown", handleEsc)};
    //  },
    //  [close]
    // );

    return createPortal(
      <div className={css.backdrop} onClick={close} role="dialog" aria-modal="true">
        <div className={css.modal} onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>,
      document.body
    );
}
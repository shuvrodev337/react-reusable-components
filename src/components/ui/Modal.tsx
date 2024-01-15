import React, {
  Children,
  MouseEvent,
  ReactNode,
  createContext,
  useContext,
  useRef,
} from "react";
import cn from "../../utils/cn";
import { createPortal } from "react-dom";
const ModalContext = createContext<TModalContext | null>(null);

type TModalContext = {
  onClose: () => void;
};

type TModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};
type TCloseButtonProps = { children?: ReactNode };
type THeaderProps = TCloseButtonProps;

const Modal = ({ children, isOpen, onClose }: TModalProps) => {
  const containerRef = useRef<HTMLDivElement>(null); // white div tar jonno akta ref create
  const handleOutsideClose = (e: MouseEvent) => {
    //Purpose=> white div e click korle jano modal close na hoy,
    //Parent div tar moddhe onclick event set,
    // console.log(e.target);
    // e.target => jetar upore click korbo, sei target ta peye jabo.
    // white dive e click=> white div er vitorer content (ex:h1)
    // outside of white div e click=> parent div
    // console.log(containerRef.current);
    // target ta containerRef er vitere ache ki? seta dekha
    // jodi containerRef er moddhe  e.target ta k contain kore? => No action
    //jodi containerRef div(white)  e.target(whole parent div) ta contain Na kore? =>
    if (!containerRef.current?.contains(e.target as Node)) {
      onClose(); // modal close kore dao.
    }
  };
  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        className={cn(
          "fixed inset-0 bg-gray-500/70 invisible flex justify-center items-center",
          {
            visible: isOpen,
          }
        )}
        onClick={handleOutsideClose}
      >
        <div ref={containerRef} className="w-full max-w-sm bg-white p-4">
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById("portal") as Element
  );
};
const CloseButton = ({ children }: TCloseButtonProps) => {
  const { onClose } = useContext(ModalContext) as TModalContext;
  return (
    <button className="ml-auto" onClick={onClose}>
      {children ? (
        children
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 rounded-sm bg-red-500 p-0.5 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
};
const Header = ({ children }: THeaderProps) => {
  return (
    <div className="w-full flex justify-between items-center mb-4">
      {children}
    </div>
  );
};
Modal.CloseButton = CloseButton;
Modal.Header = Header;
export default Modal;

//  z index related issue solve korar uddesshe react portal er moddhe modal render better.
// createPortal gets two parameters 1.jsx component,2. portal div ta dhore ante hobe from index.html

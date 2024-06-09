// components/Modal.tsx
import { useEffect, FC, MouseEventHandler } from "react";

interface ModalProps {
  message: string;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ message, onClose }) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const whatsappLink =
    "https://wa.me/8147927299?text=Hello!%20I'm%20interested%20in%20your%20website%20improvements.";

  const handleClickOutside: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    onClose();
  };

  const handleContentClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-backdrop" onClick={handleClickOutside}>
      <div className="modal-content" onClick={handleContentClick}>
        <p>{message}</p>

        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" >
          Contact us on WhatsApp for any suggestions or to report any issue.
        </a>
        <button onClick={onClose}>Close</button>
      </div>
      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 100;
        }
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 5px;
          text-align: center;
        }
        button {
          margin-top: 10px;
          padding: 10px 20px;
        }
        a {
          display: block;
          margin-top: 10px;
          color: #25d366;
          background-color: transparent;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default Modal;

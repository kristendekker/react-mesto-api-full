import React from "react";

const Popup = ({ name, isOpen, onClose, children }) => {
    const handleEscapeClose = (event) => {
        if (event.key === 'Escape') {
            onClose();
        }
    };

    React.useEffect(() => {
        document.addEventListener("keydown", handleEscapeClose, false);

        return () => {
            document.removeEventListener("keydown", handleEscapeClose, false);
        };
        // eslint-disable-next-line
    }, [isOpen]);

    const handleOverlayClose = (event) => {
        if (event.target === event.currentTarget && isOpen) {
            onClose();
        }
    };

    const handleClassName = (name) => {
        if (name === "picture") {
            return "popup__container popup__img-container";
        } else if (name === "info") {
            return "popup__container popup__container_type_info";
        } else {
            return "popup__container";
        }
    }

    return (
        <section className={`${isOpen ? `popup popup_type_${name} popup_opened` : `popup popup_type_${name}`}`}
            onMouseUp={handleOverlayClose}>
            <div className={handleClassName(name)}>
                <button className={`${(name === "info") ? `popup__close popup__close_type_info` : `popup__close`}`}
                    type="button"
                    onClick={onClose} />
                {children}
            </div>
        </section>
    );
}

export default Popup;
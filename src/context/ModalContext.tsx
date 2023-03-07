import React, { createContext, useState, ReactElement } from "react"
import Modal from 'react-modal'

type ModalContextType = {
    openModal: (body: ReactElement) => void
    closeModal: () => void
}

export const ModalContext = createContext<ModalContextType>({
    closeModal: () => {},
    openModal: () => {}
})

export const ModalProvider = ({children}: React.PropsWithChildren) => {

    const [isOpen, setIsOpen] = useState(false)
    const [body, setBody] = useState<ReactElement | null>(null)

    const openModal = (body: ReactElement) => {
        setIsOpen(true)
        setBody(body)

        //hack to get rid of the scrollbar when modal is open
        document.body.style.overflow = 'hidden';
    }

    const closeModal = () => {
        setIsOpen(false)
        document.body.style.overflow = 'unset';
    }

    return (
        <ModalContext.Provider value={{openModal, closeModal}}>
            {children}
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                className="modal"
                overlayClassName="overlay"
                contentLabel="Example Modal"
            >
                <div className="w-[100%]">
                    {body}
                </div>
            </Modal>
        </ModalContext.Provider>)

}
import { motion } from "framer-motion";
import { TRANSITION_MODAL, VARIANTS_MODAL } from "../motion-animation";

interface ModalProps {
  close: () => void;
  children?: React.ReactNode
}

export const Modal = ({ close, children }: ModalProps) => {
  return (
    <div className="fixed top-0 left-0 w-full md:px-0 px-4 h-screen flex items-center justify-center z-50" onClick={close}>
      <motion.div 
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={VARIANTS_MODAL}
        transition={TRANSITION_MODAL}
        className="w-full md:max-w-90 rounded-xl border border-black bg-[#7CC0AB]" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pt-4.5 px-5 md:px-7 pb-3.5 flex flex-col gap-4">
          {children}
        </div>
      </motion.div>
    </div>
  )
}
 
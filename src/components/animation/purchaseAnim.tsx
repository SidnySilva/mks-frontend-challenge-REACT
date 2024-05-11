import { motion, AnimatePresence } from "framer-motion";

interface IProps {
  isOpen: Boolean;
  showText: Boolean;
}
const OverlayComponent = ({ isOpen, showText }: IProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 3, type: "spring", damping: 20 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "#0f52ba",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex:5
          }}>
          {showText && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                color: "#fff",
                textAlign: "center",
                fontWeight: 700,
                fontFamily: "montserrat",
                fontSize: "28px",
              }}>
              <h1>Parabéns pela compra!</h1>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OverlayComponent;

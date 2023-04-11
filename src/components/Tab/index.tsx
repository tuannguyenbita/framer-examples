import * as React from "react";
import { Ingredient } from "@/types/tab";
import { Reorder, motion } from "framer-motion";
import { CloseIcon } from "../Icons";

interface ITabProps {
  item: Ingredient;
  isSelected: boolean;
  onClickItem: () => void;
  onClose: (item: Ingredient) => void;
}

const Tab: React.FunctionComponent<ITabProps> = (props) => {
  const { item, isSelected, onClose, onClickItem } = props;
  return (
    <React.Fragment>
      <Reorder.Item
        as="li"
        layout
        value={item}
        whileDrag={{ backgroundColor: "#e3e3e3" }}
        className={isSelected ? "selected" : ""}
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          backgroundColor: isSelected ? "#f3f3f3" : "#fff",
          y: 0,
          transition: { duration: 0.15 },
        }}
        exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
        onClick={onClickItem}
      >
        <motion.span layout="position">{`${item.icon} ${item.label}`}</motion.span>
        <motion.div layout className="close">
          <motion.button
            onPointerDown={(event) => {
              event.stopPropagation();
              onClose(item);
            }}
            initial={false}
            animate={{ backgroundColor: isSelected ? "#e3e3e3" : "#fff" }}
          >
            <CloseIcon />
          </motion.button>
        </motion.div>
      </Reorder.Item>
    </React.Fragment>
  );
};

export default Tab;

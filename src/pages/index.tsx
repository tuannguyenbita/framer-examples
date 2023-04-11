import * as React from "react";
import { allIngredients, findNextIngredient, initialTabs } from "@/constants";
import { Reorder, AnimatePresence, motion } from "framer-motion";
import Tab from "@/components/Tab";
import { AddIcon } from "@/components/Icons";
import { Ingredient } from "@/types/tab";
import { findClosetItem } from "@/utils";
interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const [tabs, setTabs] = React.useState(initialTabs);
  const [selectedTab, setSelectedTab] = React.useState(tabs[0]);

  const addNewIngredient = () => {
    const newIngredient = findNextIngredient(tabs);
    if (newIngredient) {
      setTabs([...tabs, newIngredient]);
      setSelectedTab(newIngredient);
    }
  };

  const removeIngredient = (item: Ingredient) => {
    const closetItem = findClosetItem(allIngredients, item);
    if (closetItem) {
      setSelectedTab(closetItem);
    }
    setTabs(tabs.filter((tab) => tab.label !== item.label));
  };

  return (
    <React.Fragment>
      <section className="window">
        <nav>
          <Reorder.Group
            as="ul"
            axis="x"
            values={tabs}
            onReorder={setTabs}
            className="tabs"
          >
            <AnimatePresence>
              {tabs.map((tab) => {
                return (
                  <Tab
                    item={tab}
                    key={tab.label}
                    isSelected={selectedTab.label === tab.label}
                    onClose={removeIngredient}
                    onClickItem={() => setSelectedTab(tab)}
                  />
                );
              })}
            </AnimatePresence>
          </Reorder.Group>
          <motion.button
            className="add-item"
            onClick={addNewIngredient}
            disabled={tabs.length === allIngredients.length}
            whileTap={{
              scale: 0.9,
            }}
          >
            <AddIcon />
          </motion.button>
        </nav>
        <main></main>
      </section>
    </React.Fragment>
  );
};

export default Home;

import { useState } from "react";
import FaqItem from "../FaqItem/Faqitem";
import css from "./Faq.module.css";

const faqData = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet , in?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque commodi suscipit illum maxime veritatis quis",
  },
  {
    id: 2,
    question: "Lorem ipsum dolor sit amet , in?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque commodi suscipit illum maxime veritatis quis",
  },
  {
    id: 3,
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quidem?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, maxime.",
  },
  {
    id: 4,
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quidem?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, maxime.",
  },
  {
    id: 5,
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quidem?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, maxime.",
  },
  {
    id: 6,
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quidem?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, maxime.",
  },
];

const Faq = () => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className={css.section}>
      <div className={css.container}>
        <h2 className={css.faqTitle}>FAQ</h2>
        <ul className={css.faqAccordionContainer}>
          {faqData.map((item) => (
            <FaqItem
              key={item.id}
              item={item}
              isOpen={openItems.includes(item.id)}
              toggleItem={toggleItem}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Faq;

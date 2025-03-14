import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import css from "../Faq/Faq.module.css"

const FaqItem = ({ item, isOpen, toggleItem }) => {
    return (
        <li className={`${css.faqItem}`}>
            <h4 className={css.faqHeader} onClick={() => toggleItem(item.id)}>
                {item.question}
                <button type="button" className={css.faqBtn}>
                    {isOpen ? (<FaChevronUp className={css.faqArrowUp} />) : (<FaChevronDown className={css.faqArrowDown} />)}
                </button>
            </h4>
            <div className={`${css.faqContent} ${isOpen ? css.open : ""}`}>
                <p className={css.faqText}>{item.answer}</p>
            </div>
        </li>
    )
};

export default FaqItem;
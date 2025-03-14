// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import css from "./Reviews.module.css";
import SwiperComponent from "../SwiperComponent/SwiperComponent";
import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "../../redux/reviews/reviewsSlice";
import { useEffect } from "react";
import { fetchReviews } from "../../redux/reviews/reviews";

const Reviews = () => {
    const dispatch = useDispatch();

    const slides = useSelector(selectItems);

    useEffect(() => {
        dispatch(fetchReviews())
    }, [dispatch])

    return (
        <section className={css.section}>
            <div className={css.div}>
                <h2>Reviews</h2>
                <SwiperComponent slides={slides} />
            </div>
        </section>
    );
};

export default Reviews;
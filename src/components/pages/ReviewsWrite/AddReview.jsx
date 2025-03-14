import { Formik, Form, Field } from "formik"
import css from "./AddReview.module.css"
import { useDispatch } from "react-redux"
import { addReview } from "../../../redux/reviews/reviews";

const AddReview = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    review: "",
  }

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(addReview({name: values.name, review: values.review }))
    options.resetForm()
  }

  return (
    <div className={css.div}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <label className={css.label}>
            <span className={css.span}>Your name</span>
            <Field className={css.field} name="name" placeholder="Enter name"/>
          </label>
          <label className={css.label}>
            <span className={css.span}>Review</span>
            <Field className={css.field} name="review" as="textarea" placeholder="Enter your message"/>
          </label>
          <button type="submit">Send</button>
        </Form>
      </Formik>
    </div>
  )
}

export default AddReview;
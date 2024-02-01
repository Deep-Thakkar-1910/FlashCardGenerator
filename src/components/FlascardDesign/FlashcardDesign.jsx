import { Formik, Form } from "formik";
import * as Yup from "yup";
import TermCreation from "./TermCreation";

//Data initialization for term
const initialValues = {
  TermsData: [{ term: "", defination: "" }],
};

//Data submission for term
const onSubmit = (values) => {
  console.log("Form data", values);
};

const validationSchema = Yup.object({
  TermsData: Yup.array().of(
    Yup.object().shape({
      term: Yup.string().required("Text is required"),
      defination: Yup.string().required("Defination is required"),
    })
  ),
});

function FlashcardDesign() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values }) => (
        <Form className="">
          <section className="mb-10 flex flex-col gap-10">
            {/* Here i am using Termcreation component where my actualy code exist */}
            <TermCreation values={values} />
          </section>
          {/* this is submit button to submit the entire term form data  */}
          <button type="submit">submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FlashcardDesign;

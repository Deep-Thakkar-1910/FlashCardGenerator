import { Formik, Form } from "formik";
import * as Yup from "yup";
import TermCreation from "./TermCreation";
import Button from "./Button";

//Data initialization for term
const initialValues = {
  TermsData: [{ term: "", definition: ""}],
};

//Data submission for term
const onSubmit = (values) => {
  console.log("Form data", values);
};

const validationSchema = Yup.object({
  TermsData: Yup.array().of(
    Yup.object().shape({
      term: Yup.string().required("Text is required"),
      definition: Yup.string().required("Definition is required"),
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
      {({ values, setFieldValue }) => (
        <Form className="">
          <section className="mb-10 flex flex-col gap-10">
            {/* Here i am using Termcreation component where my actual code exist */}
            <TermCreation values={values} setFieldValue={setFieldValue} />
          </section>
          {/* this is submit button to submit the entire term form data  */}
          <div className="mx-auto text-center">
            {/* button for submiting the flashcard */}
            <Button
              data-testid="submit-form"
              // disabled={""}
              type="submit"
              btnclass={`font-semibold bg-red-600 rounded-md text-white text-xl px-14 py-4 `}
              text={"Create"}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default FlashcardDesign;

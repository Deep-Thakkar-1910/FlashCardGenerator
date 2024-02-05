import { Formik, Form } from "formik";
import TermCreation from "./TermCreation";
import GroupCreation from "./GroupCreation";
import Button from "./Button";
import * as Yup from "yup";
import shortid from "shortid";
import { useDispatch } from "react-redux";
import { updateFlashCards } from "../../Redux/Slices/AllFlashcards";
//Data initialization for term

const initialValues = {
  GroupData: { group: "", groupdesc: "", grpimage: null },
  TermsData: [{ term: "", definition: "", image: null }],
  id: "",
};

//Data submission for term

const validationSchema = Yup.object().shape({
  GroupData: Yup.object().shape({
    group: Yup.string()
      .min(2, "Minimum char len is 2")
      .max(20, "You have reached the max len")
      .required("Required"),
  }),

  TermsData: Yup.array(
    Yup.object().shape({
      term: Yup.string()
        .min(10, "Minimum char len is 10")
        .max(200, "You have reached the max len")
        .required("Required"),

      definition: Yup.string()
        .min(100, "Minimum char len is 100")
        .max(2000, "You have reached the max len")
        .required("Required"),
    }),
  ),
});

function GroupDetails() {
  const dispatch = useDispatch();
  const onSubmit = (values, { resetForm }) => {
    values.id = shortid.generate();
    console.log("Form data", values);
    const allFlashCardData =
      JSON.parse(localStorage.getItem("allFlashCardData")) || [];
    const finalValue = [...allFlashCardData, values];
    localStorage.setItem("allFlashCardData", JSON.stringify(finalValue));
    dispatch(updateFlashCards({ ...values }));
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form className="">
          <section className="mb-10 flex flex-col gap-10">
            {/* Here i am using GroupCreation component where my actualy code exist */}
            <GroupCreation values={values} setFieldValue={setFieldValue} />
            {/* Here i am using Termcreation component where my actualy code exist */}
            <TermCreation values={values} setFieldValue={setFieldValue} />
          </section>
          {/* this is submit button to submit the entire term form data  */}
          <div className="mx-auto text-center">
            {/* button for submiting the flashcard */}
            <Button
              data-testid="submit-form"
              type="submit"
              btnclass={`font-semibold rounded-md text-white text-xl px-14 py-4 bg-red-600 mb-10`}
              text={"Create"}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default GroupDetails;

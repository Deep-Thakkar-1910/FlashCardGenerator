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
      .min(2, "Group name should be minimum 2 Characters")
      .max(20, "Group name should be maximum 20 Characters")
      .required("Required"),
  }),

  TermsData: Yup.array(
    Yup.object().shape({
      term: Yup.string()
        .min(10, "Term name should be minimum 10 characters")
        .max(200, "Term name should be maximum 200 characters")
        .required("Required"),

      definition: Yup.string()
        .min(100, "Definition should be minimum 100 characters")
        .max(2000, "Definition can be maxium 1000 characters")
        .required("Required"),
    }),
  ),
});

function GroupDetails() {
  const dispatch = useDispatch();
  const onSubmit = (values, { resetForm }) => {
    // submit function to update local storage and redux store to show live updates for newly created flash cards
    values.id = shortid.generate();
    const allFlashCardData =
      JSON.parse(localStorage.getItem("allFlashCardData")) || []; // to get previous flash card data from local storage
    const finalValue = [...allFlashCardData, values];
    localStorage.setItem("allFlashCardData", JSON.stringify(finalValue)); // to set previous flash card data and aggregate it with newly created flash card data
    dispatch(updateFlashCards({ ...values })); // to update the redux store
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

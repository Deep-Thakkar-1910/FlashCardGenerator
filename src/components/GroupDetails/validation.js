import * as Yup from "yup";

export const validationschema = Yup.object().shape({
  GroupData: Yup.object().shape({
    group: Yup.string()
      .min(2, "Group name should be minimum 2 Characters")
      .max(20, "Group name should be maximum 20 Characters")
      .required("Required"),
  }),

  TermsData: Yup.array(
    Yup.object().shape({
      term: Yup.string()
        .min(10, "Term should be minimum 10 characters")
        .max(200, "Term should be maximum 200 characters")
        .required("Required"),

      definition: Yup.string()
        .min(100, "Definition should be minimum 100 characters")
        .max(1000, "Definition should be maximum 1000 characters")
        .required("Required"),
    })
  ),
});

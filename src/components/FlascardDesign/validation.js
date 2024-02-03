import * as Yup from "yup";

export const validationschema = Yup.object().shape({
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

      defination: Yup.string()
        .min(100, "Minimum char len is 100")
        .max(2000, "You have reached the max len")
        .required("Required"),
    })
  ),
});

/* eslint-disable react/prop-types */
import { FieldArray } from "formik";
import InputFieldCreation from "./InputFieldCreation";
import Button from "./Button";
const TermCreation = ({ values }) => {
  return (
    <div>
      <FieldArray
        name="TermsData"
        render={(fieldArrayProps) => (
          <ul className="bg-white md:p-10 rounded-md sm:p-5 p-5 shadow-md flex flex-col gap-8">
            {/* Using map to multiple Ui forms for the given add more option */}
            {values.TermsData.map((TermsData, index) => (
              <li
                key={index}
                className="flex gap-5 items-start md:flex-row flex-col sm:flex-col sm:w-full"
              >
                <span className="px-4 py-2 text-xl font-bold rounded-full bg-red-200">
                  {index + 1}
                </span>
                <div className="flex items-end flex-wrap gap-5 md:flex-row sm:flex-col flex-col w-full">
                  {/* this is child component from where UI is fetched */}
                  <InputFieldCreation
                    name={`TermsData.${index}.term`}
                    htmlFor={`term${index}`}
                    label={"Enter Term"}
                    id={`term${index}`}
                    placeholder={"Enter the term"}
                  />

                  <InputFieldCreation
                    name={`TermsData.${index}.defination`}
                    htmlFor={`defination${index}`}
                    label={"Enter Definition"}
                    id={`defination${index}`}
                    placeholder={"Enter the defination"}
                  />
                </div>

                {/* Here image part is left */}
              </li>
            ))}

            <li className="text-center md:text-left">
              <Button
                type="button"
                fn={() => fieldArrayProps.push("")}
                btnclass={"font-semibold text-blue-700 mt-5"}
                text={"+ Add more"}
              />
            </li>
          </ul>
        )}
      ></FieldArray>
    </div>
  );
};

export default TermCreation;

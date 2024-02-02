/* eslint-disable react/prop-types */
import { FieldArray } from "formik";
import InputFieldCreation from "./InputFieldCreation";
import Button from "./Button";
import { AiFillFileImage } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { TbTrashX } from "react-icons/tb";
const TermCreation = ({ values, setFieldValue }) => {
  return (
    <div>
      <FieldArray
        name="TermsData"
        render={(fieldArrayProps) => (
          <ul className="bg-white md:p-10 rounded-md sm:p-5 p-5 shadow-md flex flex-col gap-8 ">
            {/* Using map to multiple Ui forms for the given add more option */}
            {values.TermsData.map((item, index) => (
              <li
                key={index}
                className="flex gap-5 items-center md:flex-row flex-col sm:flex-col sm:w-full"
              >
                <span className="px-4 py-2 text-xl font-bold rounded-full bg-red-200 translate-y-[30%]">
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
                  {!item.image && (
                    <div>
                      <Button
                        type={"button"}
                        btnclass={
                          "border-2 rounded-md  min-w-max font-semibold text-lg px-6 py-2"
                        }
                        text={
                          <>
                            <label
                              htmlFor={`cardImage-${index}`}
                              className="flex items-center cursor-pointer"
                            >
                              <AiFillFileImage className="text-blue-700" />
                              Upload Image
                              <input
                                type="file"
                                id={`cardImage-${index}`}
                                hidden
                                accept="image/*"
                                onChange={(e) => {
                                  const file = e.target.files[0];
                                  const reader = new FileReader();
                                  reader.readAsDataURL(file);
                                  reader.onload = () => {
                                    const imageUrl = reader.result;
                                    fieldArrayProps.replace(index, {
                                      ...item,
                                      image: imageUrl,
                                    });
                                  };
                                }}
                              />
                            </label>
                          </>
                        }
                      />
                    </div>
                  )}
                  {item.image && (
                    <div className="flex items-center gap-5">
                      <div>
                        <img
                          className="w-20 aspect-square rounded-md"
                          src={item.image}
                          alt="term_image"
                          loading="lazy"
                        />
                      </div>

                      {
                        <div className="flex flex-col gap-5">
                          <Button
                            type={"button"}
                            text={
                              <TbTrashX className="text-3xl text-red-500 " />
                            }
                            fn={() =>
                              setFieldValue(`TermsData.${index}.image`, "")
                            }
                          />

                          <Button
                            type={"button"}
                            text={
                              <label
                                htmlFor={`cardImage-${index}`}
                                className="flex items-center cursor-pointer"
                              >
                                <BiEdit className="text-blue-700 text-3xl cursor-pointer" />
                                <input
                                  type="file"
                                  id={`cardImage-${index}`}
                                  hidden
                                  accept="image/*"
                                  onChange={(e) => {
                                    const file = e.target.files[0];
                                    const reader = new FileReader();
                                    reader.readAsDataURL(file);
                                    reader.onload = () => {
                                      const imageUrl = reader.result;
                                      fieldArrayProps.replace(index, {
                                        ...item,
                                        image: imageUrl,
                                      });
                                    };
                                  }}
                                />
                              </label>
                            }
                          />
                        </div>
                      }
                    </div>
                  )}
                  {index !== 0 && (
                    <div>
                      <Button
                        type="button"
                        btnclass={"font-semibold text-blue-700 mt-5"}
                        fn={() => fieldArrayProps.remove(index)}
                        text={"- Remove"}
                        list
                      />
                    </div>
                  )}
                </div>
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

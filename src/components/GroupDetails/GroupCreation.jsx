/* eslint-disable react/prop-types */
import InputFieldCreation from "./InputFieldCreation";
import { Field } from "formik";
import { AiFillFileImage } from "react-icons/ai";
import Button from "./Button";

const GroupCreation = ({ values, setFieldValue }) => {
  return (
    <div className="rounded-md bg-white p-5 shadow-md sm:p-5 md:p-10">
      <div
        className={`mb-5 flex flex-col flex-wrap items-end gap-14 sm:flex-row sm:gap-5`}
      >
        {/* Enter group input */}
        <InputFieldCreation
          name={`GroupData.group`}
          id={"group"}
          htmlFor={"group"}
          label={"Create Group"}
          placeholder={"Enter Group"}
        />

        <div>
          {/* Button for uploading Group image */}
          <Button
            type={"button"}
            btnclass={
              "border-2 rounded-md min-w-max font-semibold text-lg px-6 py-2"
            }
            text={
              <>
                <label
                  htmlFor="grpimage"
                  className="flex cursor-pointer items-center gap-1"
                >
                  <AiFillFileImage className="text-blue-700" />
                  {values.GroupData.grpimage ? "Change" : "Upload"} Image
                  <Field
                    type="file"
                    id="grpimage"
                    name={`GroupData.grpimage`}
                    hidden
                    value=""
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      const reader = new FileReader();
                      reader.readAsDataURL(file);

                      reader.onload = () => {
                        setFieldValue("GroupData.grpimage", reader.result);
                      };
                    }}
                  />
                </label>
              </>
            }
          />
        </div>

        {values.GroupData.grpimage && (
          <>
            <div className="flex items-center gap-5">
              <img
                className="aspect-square w-20 rounded-md"
                src={values.GroupData.grpimage}
                alt="card_profile"
                loading="lazy"
              />

              <Button
                type="button"
                btnclass={"font-semibold text-blue-700 mt-5"}
                fn={() => setFieldValue("GroupData.grpimage", null)}
                text={"- Remove"}
                list
              />
            </div>
          </>
        )}
      </div>
      {/* Group description */}
      <div className="relative flex flex-col gap-2">
        <label htmlFor="groupdesc" className="font-semibold text-gray-500">
          Add Description
        </label>

        <Field
          as="textarea"
          name={`GroupData.groupdesc`}
          id="groupdesc"
          maxLength="500"
          placeholder="Write your description here ( max length is 500 Characters )"
          className="h-36 resize-none rounded-md border-2 p-2 text-lg"
        />
      </div>
    </div>
  );
};

export default GroupCreation;

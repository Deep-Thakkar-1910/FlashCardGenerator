/* eslint-disable react/prop-types */
import InputFieldCreation from "./InputFieldCreation";
import { Field } from "formik";
import { AiFillFileImage } from "react-icons/ai";
import Button from "./Button";

const GroupCreation = ({ values, setFieldValue }) => {
  return (
    <div className="bg-white shadow-md md:p-10 p-5 rounded-md sm:p-5">
      <div
        className={`flex items-end gap-5 mb-5 sm:flex-row flex-col flex-wrap`}
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
                  className="flex items-center gap-1 cursor-pointer"
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
                className="w-20 aspect-square rounded-md"
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
      <div className="flex flex-col gap-2 relative">
        <label htmlFor="groupdesc" className="font-semibold text-gray-500">
          Add Description
        </label>

        <Field
          as="textarea"
          name={`GroupData.groupdesc`}
          id="groupdesc"
          maxLength="500"
          placeholder="Write your description here ( max length is 500 words )"
          className="p-2 text-lg border-2 rounded-md h-36 resize-none"
        />
      </div>
    </div>
  );
};

export default GroupCreation;
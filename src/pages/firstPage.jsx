import { Formik, Field, Form } from 'formik';


 export const FirstPage = () =>{
    return(
  <div>
    <Formik
      initialValues={{
     CreateField: '',
   AddDescription: '',
      }}
      onSubmit={(values) => {
      // await new Promise((r) => setTimeout(r, 500));
      //   alert(JSON.stringify(values, null, 2));
      }}
    >

      <Form>
<div className=   "box-border w-48 h-22"> </div>
    <label htmlFor=  "createField"   >
      Create Field</label>
        <Field id="createField"  name="createField" 

         /> 

<br>
</br><br/>

        <label htmlFor="addDescription" >AddDescription</label>

        <Field id="addDescription" name="addDescription"  />
        <button type="submit" bg-blue-400>Submit</button>
      </Form>
    </Formik>
  </div>
    )
 }


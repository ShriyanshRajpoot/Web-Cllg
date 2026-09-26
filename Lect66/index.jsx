import './App.css'
import { useForm } from "react-hook-form"

function App() {

  const{
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    // API call ko simulate krte h
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Submitting the form", data); 
  }


  return (
   <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label>First Name: </label>
      <input {...register('firstName',
      { 
        required: true,
         minLength:3 
        }
         )} />
    </div>
    <br />

    <div>
      <label>Middle Name: </label>
      <input {...register('middleName')}/>
    </div>
    <br />

    <div>
      <label>Last Name: </label>
      <input {...register('lastName')}/>
    </div>
    <br />
    <input type="submit" disabled={isSubmitting}
    value={isSubmitting ? "Submitting" : "Submit"} />
   </form>
   
  )
}

export default App

import { FieldValues, useForm } from "react-hook-form";


interface FormData {
  name: string;
  age: number;
}
function FormsSec() {
  const {
    register,
    handleSubmit,
    formState: { errors,isValid },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-lable">
          Description
        </label>
        <input
          {...register("description", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        ></input>
        {errors.name?.type === "required" && (
          <p className="text-danger">The description field is required!</p>
        )}

        {errors.name?.type === "minLength" && (
          <p className="text-danger">
            The Description should be at least 3 characters.
          </p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-lable">
          Age
        </label>
        <input
          {...register("age", { required: true, min:18 })}
          id="age"
          type="number"
          className="form-control"
        ></input>
        {errors.age?.type === "required" && (
          <p className="text-danger">The age field is required!</p>
        )}
        {errors.age?.type === "min" && (
          <p className="text-danger">The age should be at least 18!</p>
        )}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default FormsSec;

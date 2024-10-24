import { useForm } from "react-hook-form";
import categories from "./categories";
interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}
interface ExpenseFormData {
  description: string;
  amount: number;
  category: string;
}
function Form({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ExpenseFormData>();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-lable">
          Description
        </label>
        <input
          id="description"
          type="text"
          className="form-control"
          {...register("description", { required: true, minLength: 3 })}
        ></input>
        {errors.description?.type === "required" && (
          <p className="text-danger">The description field is required!</p>
        )}
        {errors.description?.type === "minLength" && (
          <p className="text-danger">
            The description should be at least 3 characters.
          </p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-lable">
          Amount
        </label>
        <input
          {...register("amount", { required: true, min: 1 })}
          id="amount"
          type="number"
          className="form-control"
        ></input>
        {errors.amount?.type === "required" && (
          <p className="text-danger">The field is required!</p>
        )}
        {errors.amount?.type === "min" && (
          <p className="text-danger">The amount should be at least 1!</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-lable">
          Category
        </label>
        <select
          {...register("category", { required: true })}
          id="category"
          className="form-select"
        >
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category?.type === "required" && (
          <p className="text-danger">The catogory is required.</p>
        )}
      </div>
      <button disabled={!isValid} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Form;

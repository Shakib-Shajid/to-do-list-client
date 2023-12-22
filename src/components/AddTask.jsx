import { useForm } from "react-hook-form"


const AddTask = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className="flex justify-center">
            <div className="w-2/4">
                <h3 className="text-lg my-5 md:text-2xl font-medium">This is add task </h3>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div>
                            <div className="form-control">
                                {/* register your input into the hook by invoking the "register" function */}
                                <input className="input input-bordered " placeholder="Title" {...register("example")} />
                            </div>
                            <br />

                            <div className="form-control ">
                                {/* include validation with required or other standard HTML validation rules */}
                                <input className="textarea textarea-bordered textarea-lg" placeholder="Description" {...register("exampleRequired", { required: true })} />
                            </div>
                            <br />
                            <div className="form-control ">
                                {/* register your input into the hook by invoking the "register" function */}
                                <input type="date" className="input  input-bordered " defaultValue="date" {...register("exampleRequired", { required: true })} />
                            </div>
                            <br />
                            <div className="form-control " >
                                <select className="select select-bordered" required>
                                    <option disabled selected>Priority</option>
                                    <option>Low</option>
                                    <option>Moderate</option>
                                    <option>High</option>
                                </select>
                            </div>
                            <br />


                            {/* errors will return when field validation fails  */}
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>

                        <input type="submit" className="btn btn-accent w-full" />
                    </form>

                </div>
            </div >
        </div>
    );
};

export default AddTask;
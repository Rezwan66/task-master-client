const AddTask = () => {
  const handleAddTask = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    console.log(name, description);
  };

  return (
    <div className="my-40 flex justify-center">
      <div className="relative flex flex-col rounded-xl bg-clip-border shadow-xl p-10">
        <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-center antialiased">
          Add Tasks Here
        </h4>
        <form
          onSubmit={handleAddTask}
          className="mt-6 mb-2 max-w-screen-lg sm:w-96"
        >
          <label className="label label-text text-primary dark:text-white">
            Type task name here:
          </label>
          <input
            className="input input-bordered w-full text-black"
            type="text"
            name="name"
            placeholder="Task Name"
            required
          />
          <label className="label label-text text-primary dark:text-white">
            Description here:
          </label>
          <textarea
            className="input h-32 input-bordered w-full text-black py-2"
            name="description"
            placeholder="description here..."
            required
          ></textarea>
          <input
            className="btn btn-primary btn-block mt-6"
            type="submit"
            value="Add Task"
          />
        </form>
      </div>
    </div>
  );
};
export default AddTask;

// import tasks from "./tasks";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1>THINGS TO DO:</h1>
      <hr />
      <p>Looks like you're absolutely free today</p>
      <hr />
      <p>DONE:</p>
      <form className="space-x-3">
        <input placeholder="Enter new task" className="input input-bordered" />
        <button type="submit" className="btn btn-neutral">Add Task</button>
      </form>
    </main>
  );
}

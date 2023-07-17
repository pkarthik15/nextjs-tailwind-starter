export default function SignUp() {
  return (
    <div className="flex h-96">
      <div className="m-auto w-3/6">
        <div className="flex flex-col p-10 m-24 border border-green-500 ">
          <input type="text" className="w-full mb-3 p-2" />
          <input type="text" className="w-full mb-3 p-2" />
          <button className="p-2 text-gray border border-green-500 hover:bg-green-500 text-white">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

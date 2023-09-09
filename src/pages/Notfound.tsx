
export default function PageNotFound() {

  return (
    <div>
      <h1 className="p-4">404</h1>
      <form action="/">
        <button id="backToHomeButton"
          type="submit"
          className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray"
        >
          Back to Home
        </button>
      </form>
    </div>
  );
}
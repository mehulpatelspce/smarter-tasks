
export default function PageNotFound() {

  return (
    <div>
      <h1>404 Page Not Found!</h1>
      <form action="/home">
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
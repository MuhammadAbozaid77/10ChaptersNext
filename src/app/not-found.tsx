import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section className="bg-white dark:bg-blue-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="text-blue-500 mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl dark:text-blue-500">
              404
            </h1>
            <Link
              href="/"
              className="inline-flex text-white font-semibold border bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900 my-4"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

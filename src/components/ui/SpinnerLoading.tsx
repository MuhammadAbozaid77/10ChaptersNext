export default function SpinnerLoading() {
  return (
    <>
      <div className="min-h-[300px] w-[100%] flex justify-center items-center flex-col">
        <span className="loader"></span>
        <span className="mt-2 font-semibold">Loading</span>
      </div>
    </>
  );
}

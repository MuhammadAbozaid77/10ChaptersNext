"use client";
export default function Error() {
  return (
    <>
      <div
        className="bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-3"
        role="alert"
      >
        <p className="font-bold">Informational message</p>
        <p className="text-sm">Some additional text to explain said message.</p>
      </div>
    </>
  );
}

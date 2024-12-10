import Link from "next/link";

export default function ArchivePage() {
  return (
    <>
      <div>ArchivePage</div>

      <div>
        <div>
          <ul>
            <li className=" mt-5">
              <Link
                className="bg-blue-300 p-2 border rounded-md "
                href={"/archive/22"}
              >
                Go TO
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

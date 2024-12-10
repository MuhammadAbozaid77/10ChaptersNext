// Props Type
interface layoutProps {
  archive: React.ReactNode;
  latest: React.ReactNode;
  children: React.ReactNode;
}

export default function NewsLayouts({
  archive,
  latest,
  children,
}: layoutProps) {
  return (
    <div>
      <div className="mb-5 font-bold text-[20px]"> NewsLayout </div>
      <div>
        <div className="bg-slate-400 h-[100px]"> {children} </div>
        <div className="min-h-[400px] border flex flex-col">
          <div className="h-[200px] bg-blue-100 p-5"> {archive} </div>
          <div className="h-[200px] bg-gray-100 p-5"> {latest} </div>
        </div>
      </div>
    </div>
  );
}

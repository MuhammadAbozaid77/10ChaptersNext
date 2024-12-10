import Header from "@/components/layouts/Header";

interface props {
  children: React.ReactNode;
}
export default function layout({ children }: props) {
  return (
    <>
      <div>
        <Header />
      </div>
      <div> {children}</div>
    </>
  );
}

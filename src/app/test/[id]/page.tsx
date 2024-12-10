interface paramsType {
  params: {
    id: string;
  };
}

// Dynamic MetaData
export async function generateMetadata({ params }) {
  return {
    title: params?.id,
    description: " Metadaaaa Dynamic  Desccc",
  };
}
export default async function GGGG({ params }: paramsType) {
  return (
    <>
      <div>{params?.id}</div>
    </>
  );
}

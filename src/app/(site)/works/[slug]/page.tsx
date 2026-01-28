type WorkDetailPageProps = {
  params: {
    slug: string;
  };
};

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-20">
      <h1 className="text-3xl font-bold">作品詳細</h1>
      <p className="mt-4 text-black/70">slug: {params.slug}</p>
      <p className="mt-2 text-black/70">詳細ページもこのあと作り込みます。</p>
    </section>
  );
}

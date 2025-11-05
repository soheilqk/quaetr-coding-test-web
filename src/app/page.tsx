async function getCompanies() {
  const res = await fetch("http://localhost:3000/api/companies", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch companies");
  }

  return res.json();
}

export default async function Home() {
  const { data: companies } = await getCompanies();

  return (
    <main>
      <h2>Quartr</h2>
      <p>Trending companies</p>
      <p>{JSON.stringify(companies)}</p>
    </main>
  );
}

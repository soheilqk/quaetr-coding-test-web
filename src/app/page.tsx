import { getCompanies } from "@/lib/api/companies";

export default async function Home() {
  const { data: companies } = await getCompanies();

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Quartr</h1>
          <p className="text-xl text-muted-foreground">Trending companies</p>
        </div>

        <div className="grid gap-4">
          {companies.map((company) => (
            <div
              key={company.companyId}
              className="rounded-lg border bg-card p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold">{company.displayName}</h3>
              <p className="text-sm text-muted-foreground">
                {company.companyTicker} • {company.companyCountry}
              </p>
              <p className="mt-2 text-sm">{company.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

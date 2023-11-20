import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useSearchParams } from "next/navigation";

import Search from "@/components/Search";

async function page() {
  const searchResults = await fetch(`https://www.jsonkeeper.com/b/5NPS`, {
    cache: "no-store",
    mode: "no-cors",
  }).then((res) => res.json());

  return (
    <div>
      <Search searchResults={searchResults} />
    </div>
  );
}

export default page;

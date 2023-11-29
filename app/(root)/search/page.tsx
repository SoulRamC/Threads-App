import ProfileHeader from "@/components/shared/ProfileHeader";
import { fetchUsers, fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect, useSearchParams } from "next/navigation";
import { profileTabs } from "@/constants";
import Image from "next/image";
import ThreadsTab from "@/components/shared/ThreadsTab";
import UserCard from "@/components/cards/UserCard";
import SearchBar from "@/components/shared/SearchBar";
async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] };
}) {
  const user = await currentUser();
  if (!user) return null;
  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  //Defines Params from Url:
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === "string" ? Number(searchParams.limit) : 25;

  const search =
    typeof searchParams.search === "string" ? searchParams.search : "";

  //fetch users.
  const result = await fetchUsers({
    userId: user.id,
    searchString: search,
    pageNumber: page,
    pageSize: limit,
  });
  return (
    <section>
      <h1 className="head-text mb-10">Search</h1>
      <SearchBar path={"/search"}></SearchBar>
      <div className="mt-14 flex flex-col gap-9">
        {result.users.length === 0 ? (
          <p className="no-result">No results</p>
        ) : (
          <>
            {result.users.map((person) => (
              <UserCard
                key={person.id}
                id={person.id}
                name={person.name}
                username={person.username}
                imgUrl={person.image}
                personType="User"
              />
            ))}
          </>
        )}
      </div>
    </section>
  );
}

export default Page;

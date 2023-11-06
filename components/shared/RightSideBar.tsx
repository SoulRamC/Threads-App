import { fetchCommunities } from "@/lib/actions/communiy.actions";
import React from "react";
import CommunityCard from "../cards/CommunityCard";
import { fetchUsers } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import UserCard from "../cards/UserCard";

async function RightSideBar() {
  const user = await currentUser();
  if (!user) return null;

  const result = await fetchCommunities({
    searchString: "",
    pageNumber: 1,
    pageSize: 5,
  });
  //fetch users.
  const resultUsers = await fetchUsers({
    userId: user.id,
    searchString: "",
    pageNumber: 1,
    pageSize: 25,
  });
  return (
    <section className="custom-scrollbar rightsidebar">
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1 pb-3">
          Suggested Communities
        </h3>
        <div className=" flex flex-col flex-1 gap-5">
          {result.communities.map((community) => (
            <CommunityCard
              key={community.id}
              id={community.id}
              name={community.name}
              username={community.username}
              imgUrl={community.image}
              bio={community.bio}
              members={community.members}
              mainpage={true}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1 pb-3">Suggested Users</h3>
        <div className="flex flex-1 flex-col gap-3">
        {resultUsers.users.map((person) => (
              <UserCard
                key={person.id}
                id={person.id}
                name={person.name}
                username={person.username}
                imgUrl={person.image}
                personType="User"
                mainPage={true}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default RightSideBar;

import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"


const page = async () => {
    const user = await currentUser()
    if (user) redirect(`/profile/${user.id}`)
  return (
    null
  )
}

export default page
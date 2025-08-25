import { ActionError, fetchUser, FetchUserResponse } from "./actions/fetch";

export default async function Home() {
  const response = await fetchUser();

  if (!(response as FetchUserResponse).user) {
    return <div>{(response as ActionError).message}</div>;
  }

  return <div>{JSON.stringify((response as FetchUserResponse).user)}</div>;
}

import { useSession } from "next-auth/react";

export default function MePage() {
  const { data } = useSession();

  return <div>{JSON.stringify(data)}</div>;
}

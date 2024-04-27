import { fetchProfile } from "@/api/profile";
import { useQuery } from "@tanstack/react-query";

export default function ProfilePage() {
  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: () => fetchProfile(),
  });

  return (
    <div>
      <h1>{JSON.stringify(data)}</h1>
    </div>
  );
}

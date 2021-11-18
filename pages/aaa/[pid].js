import { useRouter } from "next/router";

export default function FirstPost() {
  const router = useRouter();
  const { pid } = router.query;

  console.log(router.query);

  return <p>Post: {pid}</p>;
}

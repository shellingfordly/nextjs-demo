import Link from "next/link";
import Alert from "../../components/alert/alert";
import Image from "next/image";

const YourComponent = () => (
  <Image
    src="/images/react.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
);

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2 style={{ color: "red" }}>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Alert type="success">
        <h1>xxxxx</h1>
      </Alert>
      <YourComponent />
    </>
  );
}

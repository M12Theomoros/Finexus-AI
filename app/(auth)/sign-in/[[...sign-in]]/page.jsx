import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div
      style={{
        marginBottom: "100px", // Adjust this value to increase or decrease bottom spacing
      }}
    >
      <SignIn />
    </div>
  );
}

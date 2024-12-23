import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  const message = "Hello World";
  console.log(message);
  return json({ message });
}

export default function Index() {
  const { message } = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>{message}</h1>
      <p>Welcome to Remix!</p>
    </div>
  );
}
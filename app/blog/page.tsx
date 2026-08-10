import PageHeader from "@/components/PageHeader";
import BlogList from "./BlogList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Nitin Dogra",
  description: "Notes on engineering decisions from GetMeChai, LogoCraft AI, and this portfolio — written mostly for future me.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        index="05. Blog"
        title="Writing"
        subtitle="Notes on engineering decisions from GetMeChai, LogoCraft AI, and this portfolio — written mostly for future me."
      />
      <BlogList />
    </>
  );
}

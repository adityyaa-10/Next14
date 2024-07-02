import FirstCard from "../ui/FirstCard";
import Link from "next/link";
export const socialProofs = [
  {
    title: "Any leads or referrals please!",
    excerpt:
      "I recently graduated with an MS degree in Computer Science (USA). The market condition is very bad here and I am unable to get an interview chance or OA. It is very tough here and my ...",
    tags: "#masters #abroad #usa",
    comments: 12,
    date: "April, 24",
  },
  {
    title:
      "Freshers need to standout from the crowd...since everyone is doing the same thing.",
    excerpt:
      "Took interviews in a Tier 1 college... And everyone is doing the same thing... Like doing same questions on leetcode, mentioning similar kind of projects in their resume...",
    tags: "#freshers #skills",
    comments: 12,
    date: "December, 23",
  },
];

const SocialProofs = () => {
  return (
    <section className="mx-auto w-full max-w-[929px] bg-[#fafafa] px-0 py-4 sm:px-4 lg:px-0">
      {socialProofs.map((proof, index) => (
        <div className="pb-4" key={index}>
          <Link href={`/socialproofs/${proof.title.replace(/\s+/g, "-")}`}>
            <FirstCard
              title={proof.title}
              content={proof.excerpt}
              tags={proof.tags}
              comments={proof.comments}
              date={proof.date}
            />
          </Link>
        </div>
      ))}
    </section>
  );
};

export default SocialProofs;

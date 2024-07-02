import { socialProofs } from "../page";

const FullPagePost = ({ params }) => {
  const postTitle = params.title;
  const selectedProof = socialProofs.find(
    (proof) => proof.title.toString().replace(/\s+/g, "-") === postTitle,
  );

  return (
    <div className="mx-auto my-4 max-w-[929px] rounded-[10px] border border-[#d7d7d7] bg-white px-[21px] py-4">
      <div>
        <h2
          className="max-w-[850px] text-left text-xl font-medium leading-7 tracking-tight text-[#141417]"
          tabIndex="0"
          role="link"
        >
          {selectedProof.title}
        </h2>
      </div>
      <div className="max-w-[811px] py-3 text-left text-base font-normal leading-7 tracking-tight text-[#3F3F42]">
        <p>{selectedProof.excerpt}</p>
      </div>
      <div>
        <p className="text-base font-normal text-[#4A94FA]">
          {selectedProof.tags}
        </p>
      </div>
    </div>
  );
};

export default FullPagePost;

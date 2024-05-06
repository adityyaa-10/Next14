import { socialProofs } from '../page';

const FullPagePost = ({ params }) => {
    const postTitle = params.title;
    const selectedProof = socialProofs.find(proof => proof.title.toString().replace(/\s+/g, '-') === postTitle);


    return (
        <div className="pl-[21px] py-[25px] border border-[#d7d7d7] bg-white rounded-[10px] my-4 max-w-[929px] mx-auto">
            <div>
                <h2 className="text-xl font-medium leading-7 text-[#141417] text-left max-w-[850px] tracking-tight" tabIndex="0" role="link">
                    {selectedProof.title}
                </h2>
            </div>
            <div className="py-3">
                <p>{selectedProof.excerpt}</p>
            </div>
            <div className="py-4">
                <p className="text-[#4A94FA] text-base font-normal">
                    {selectedProof.tags}
                </p>
            </div>
        </div>
    );
};

export default FullPagePost;

import FullPageContent from "../ui/FullPageContent"
import FullPagePost from "../ui/FullPagePost"
import CommentsList from "../ui/comment/CommentsList"

const Jobs = () => {
    const comments = [
        {
            id: 1,
            content: 'They make you sign a document before placements starts. Which basically says that the placement team can do whatever the f they want and you agree to it because without it you are debarred from sitting for placements.Messed up system',

        },
        {
            id: 2,
            content: "So I know from very close sources that the folks who generally are asked to opt out are those who have been unable to get any placements even after 2-3 months of attending interviews. These are the last 30% students who cannot really get past the interviews due to skill mismatch or communication skills gap,  etc. So this kind of opt out message is not forced and is not a pressure tactic. It's the college saying I have tried my best to get companies to the college and give you enough opportunities to get through, but now even I can't help you since I cannot guarantee more companies in the future since it's already 2-3 months past the placement start date.",
        }
    ];
    return (
        <div className="py-4 max-w-[929px] mx-auto">
            <FullPagePost />
            <FullPageContent />
            <p className="py-6 ml-1 font-medium text-[#0066FF] tracking-[-1%] text-[16.5px] leading-5">
                It&apos;s time to understand & rethink by reading these comments
            </p>
            <CommentsList comments={comments} />
        </div>
    )
}

export default Jobs

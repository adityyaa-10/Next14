/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

const FullPagePost = () => {
    return (
        <div className="pl-[21px] py-[25px] border border-[#d7d7d7] bg-white rounded-[10px]">
            <div>
                <h2 className="text-xl font-medium leading-7 text-[#141417] text-left max-w-[850px] tracking-tight" tabIndex="0" role="link">
                    Freshers need to standout from the crowd...since everyone is doing the same thing.
                </h2>
            </div>
            <div className="py-3">
                <p className="py-2 text-base font-normal leading-[27.84px] tracking-[0.01em] text-[#2C2C2C]">Took interviews in a Tier 1 college... And everyone is doing the same thing... Like doing the same questions on leetcode, mentioning similar kind of projects in their resume... Like, a Todo app using MERN, a real-time chat using socket.io or a movie recommendation system.. You know the projects which you see on the first page of YouTube search.</p>

                <p className="py-2 text-base font-normal leading-[27.84px] tracking-[0.01em] text-[#2C2C2C]">And on top of it, everybody had only surface-level knowledge.. The one you get by following the tutorials blindly and doing it just for the sake of it.</p>

                <p className="py-2 text-base font-normal leading-[27.84px] tracking-[0.01em] text-[#2C2C2C]">Though it shows a self-starter attitude but it is not enough.. As you took one step forward but everyone else also took that one step.. So essentially you are still a part of the crowd!</p>

                <p className="py-2 text-base font-normal leading-[27.84px] tracking-[0.01em] text-[#2C2C2C]">So what to do? Be curious and do what no one is doing. Do a thing using multiple stacks. Expand the scope of the problem. Do one project and do it thoroughly.. Know its ins and outs.</p>

                <p className="py-2 text-base font-normal leading-[27.84px] tracking-[0.01em] text-[#2C2C2C]">Say for example.. Everyone is creating a todo app using MERN. What you can do:</p>

                <ul>
                    <li>Create it using Postgres as well.. Make DB schema.. Read about transactions, ACID. Use Java as BE language (since it is static and compiled). So create the same project in multiple variants:</li>
                    <ul>
                        <li>React + Node + Mongo (usual suspect)</li>
                        <li>React + Node + Postgres</li>
                        <li>React + Java + Postgres</li>
                    </ul>
                </ul>

                <p className="py-2 text-base font-normal leading-[27.84px] tracking-[0.01em] text-[#2C2C2C]">This way you will know pros and cons of these competing tech stacks and have a much better understanding of the choices you made.</p>

                <p className="py-2 text-base font-normal leading-[27.84px] tracking-[0.01em] text-[#2C2C2C]">To expand the scope of the problem.. You can add say... Undo, redo, attaching an alarm with each todo and sending notification at that time (think cron job). These things will create uniqueness in a rather generic project.</p>

                <p className="py-2 text-base font-normal leading-[27.84px] tracking-[0.01em] text-[#2C2C2C]">To take it a notch further, explore what is an in-memory DB, its pros and cons... use Redis...say to store alarms.</p>

                <p className="py-2 text-base font-normal leading-[27.84px] tracking-[0.01em] text-[#2C2C2C]">To take it even further, learn about Docker and create a Docker Compose file which will spin up all of your components (FE, BE, DB, Redis).</p>

                <p className="py-2 text-base font-normal leading-[27.84px] tracking-[0.01em] text-[#2C2C2C]">And for the "salary kitni loge" moment (3 idiots)... Have a look at Kubernetes and use Minikube.</p>

                <p className="py-2 text-base font-normal leading-[27.84px] tracking-[0.01em] text-[#2C2C2C]">I think all of this can be done diligently in a couple of months and it will make you truly stand out in the crowded job market.</p>

                <p className="py-2 text-base font-normal leading-[27.84px] tracking-[0.01em] text-[#2C2C2C]">Note: this is another random opinion in the sea of opinions on the internet.. So assess yourself before following it. But if you do and it doesn't work out (I'd be very surprised though) then don't hold it against me... And yeah... Send me your resume in that case.</p>

            </div>

            <div className="py-4">
                <p className="text-[#4A94FA] text-base font-normal">#freshers #skills</p>
            </div>
        </div>
    )
}

export default FullPagePost

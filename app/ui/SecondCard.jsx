/* eslint-disable @next/next/no-img-element */

const SecondCard = () => {
    return (
        <div className="px-4 lg:px-8 py-4 border border-[#d7d7d7] bg-white rounded-[10px] mx-auto max-w-screen-lg">
            <div>
                <h2 className="text-xl font-medium leading-[27.28px] text-[#141417]" tabIndex="0" role="link">
                    NMIMS Hyderabad asks unplaced students to “opt out” of placements....
                </h2>
            </div>

            <div className="py-4">
                <p className="text-[#4A94FA] text-base font-normal">#masters #abroad #usa</p>
            </div>

            <div className="flex justify-center pr-6 py-4"> {/* Centering the image horizontally */}
                <img
                    src="https://s3-alpha-sig.figma.com/img/2aa2/1058/8ee27452c0382e0cd65afd0afd920f12?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=meZPbKGRLp0V1szlop9W7V4tTQ315P9p5rTKLMrKfT8tMYBJe7BXQf8ZglT8Fb7YbkisVpdLWmzKm8spHid7FrrmrWdPs8MTHlQXvW6Xrk4foizh52Rnrw-EB7dH2C0vhq51UhCJhcZOxys0Q90Yrciyn5H88wVvbsHVdip~gI~6FRJhh8-g4E8CKQ-nnCXUKhSplXRM49cO0vtaVHAffx1iVVpltM4bOdkrctuv2WVXITFZpf2DbZALPmDP1rT0zqHnHUUrovbZ0cP8SoN65CaWLZv-EHJ5RvnhJEq~3oh2egMN7rk6dzks5IIhwQsnuZhP-MZn22F68ZhK~15R8Q__"
                    alt=""
                    className="max-w-full h-[351px] w-full object-cover rounded-[10px]" />
            </div>

            <div className="flex items-center mt-4"> {/* Add margin top for spacing */}
                {/* Comment Button */}
                <div className="flex items-center text-[#3F3F42] text-sm font-normal border border-[#D7D7D7] px-2 py-1 rounded">
                    <svg className="mr-2 w-4 h-4" viewBox="0 0 20 20" fill="#707680">
                        <path fillRule="evenodd" d="M2 4a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H7l-4 4V4z" clipRule="evenodd" />
                    </svg>
                    <span>12</span>
                </div>
                <div className="text-[#707680] font-medium text-sm ml-3 border border-[#D7D7D7] px-2 py-1 rounded">April, 24</div>
            </div>
        </div>
    );
};

export default SecondCard;

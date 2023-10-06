
import { AiOutlineGoogle, AiOutlineGithub } from 'react-icons/ai';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa6';


const RightSideNav = () => {
    return (
        <div>

            {/* login with */}
            <div className='p-4 mb-6'>
                <h2 className="text-lg font-semibold mb-1">Login With</h2>
                <button className="btn btn-outline btn-info w-full mb-2">
                    <AiOutlineGoogle></AiOutlineGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <AiOutlineGithub></AiOutlineGithub>
                    Login With Github
                </button>
            </div>

            {/* find us on */}
            <div className='p-4 mb-6'>
                <h2 className="text-lg font-semibold mb-1">Find Us On</h2>
                <div className='p-4 border border-zinc-600 rounded-t-md'>
                    <a className="flex items-center gap-2" href='' >
                        <FaFacebookF></FaFacebookF>
                        <p>Facebook</p>
                    </a>
                </div>
                <div className='p-4 border-x border-zinc-600'>
                    <a className="flex items-center gap-2" href='' >
                        <FaTwitter></FaTwitter>
                        <p>Twitter</p>
                    </a>
                </div>
                <div className='p-4 border border-zinc-600 rounded-b-md'>
                    <a className="flex items-center gap-2" href='' >
                        <FaInstagram></FaInstagram>
                        <p>Instagram</p>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default RightSideNav;
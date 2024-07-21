import Link from 'next/link'


export const Header = () => {
    return (
        <nav className='hd-color text-white p-6 fixed w-full'>
        <div className="container mx-auto flex justify-between items-center">
             <a className="text-2xl">
                    Rahel Joshi
            </a>
            <div className="flex gap-5 text-lg space-x-4">
                <Link className='link' href="/">Home</Link>   
                <Link className='link' href="/Rahel_Joshi_s_Resume_2024.pdf" target="_blank">Resume</Link>  
            </div>
        </div>
    </nav>
    );
}
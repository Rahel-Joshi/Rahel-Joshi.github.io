import Link from 'next/link'


export const Header = () => {
    return (
        <nav className='hd-color text-white p-4 fixed w-full'>
        <div className="container mx-auto flex justify-between items-center">
            <div className="flex gap-5 items-center ">
                <img 
                src="/img.png" 
                alt="Icon" 
                className="w-8 h-8" 
                />
                 <a className="text-2xl">
                    Rahel Joshi
                </a>
            </div>
            
            <div className="flex gap-3 sm:gap-5 text-lg">
                <Link className='link' href="/">Home</Link>   
                <Link className='link' href="#projects">Projects</Link>   
                <Link className='link' href="/Rahel_Joshi_Resume.pdf" target="_blank">Resume</Link>  
            </div>
        </div>
    </nav>
    );
}
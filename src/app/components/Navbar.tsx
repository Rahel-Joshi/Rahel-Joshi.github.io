import Link from 'next/link'


export const Navbar = () => {
    return (
        <nav className='hd-color text-white p-5 fixed w-full'>
            <div className="container mx-auto flex justify-between items-center">
                <a>
                    John Doe
                </a>
                <div className="space-x-4">
                    <Link href="/">Home</Link>   
                    <Link href="/">Resume</Link>   
                    <Link href="/">Experience</Link>
                    <Link href="/">Projects</Link>
                    <Link href="/">LinkedIn</Link>
                    <Link href="/">Github</Link>
                    <Link href="/">Email</Link>
                </div>
               
            </div>
        </nav>
    );
}

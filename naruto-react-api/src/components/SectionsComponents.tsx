import React from 'react'
import { Link } from 'react-router-dom';

const SectionsComponents = () => {
    
    const sections = [
        {
            id: 1,
            name: "Characters",
            img: "https://narutodb.xyz/cards/characters.jpg",
            route: "/characters",
        },
        {
            id: 2,
            name: "Clans",
            img: "https://preview.redd.it/ez24kq7wlctb1.jpg?width=640&crop=smart&auto=webp&s=b12fa4df6edc1d9e076284bccd0b9ab864cb1d9b",
            route: "/clans",
        },
        {
            id: 3,
            name: "Villages",
            img: "https://narutodb.xyz/cards/villages.webp",
            route: "/villages",
        },
        {
            id: 4,
            name: "Kekkei Genkai",
            img: "https://narutodb.xyz/cards/kekkeigenkai.avif",
            route: "/kekkei-genkai",
        },
        {
            id: 5,
            name: "Tailed Beasts",
            img: "https://narutodb.xyz/cards/tailedbeasts.webp",
            route: "/tailed-beasts",
        },
        {
            id: 6,
            name: "Teams",
            img: "https://narutodb.xyz/cards/teams.webp",
            route: "/teams",
        },
        {
            id: 7,
            name: "Kara",
            img: "https://narutodb.xyz/cards/kara.png",
            route: "/kara",
        },
        {
            id: 8,
            name: "Akatsuki",
            img: "https://narutodb.xyz/cards/akatsuki.jpg",
            route: "/akatsuki",
        },
    ];
  
    const HTMLSections = sections.map((section) => {
        return (
            <Link to={section.route && section.route != "" ? section.route : "/"} key={section.id}>
                <div className='bg-[#f97316] rounded-md flex flex-col justify-between hover:cursor-pointer hover:bg-[#c75b10]'>
                    <div className='overflow-hidden'>
                        <img className='object-cover w-full h-48 rounded-t-md' src={section.img} alt={section.name} />
                    </div>
                    <p className='text-white px-5 py-5 font-semibold'>{section.name} <span>&#8594;</span></p>
                </div>
            </Link>
        );
    });

    return (
        <section>
            <div className='max-w-[1440px] mx-auto px-5 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 py-[70px]'>
                {HTMLSections}
            </div>
        </section>
    );
}   

export default SectionsComponents

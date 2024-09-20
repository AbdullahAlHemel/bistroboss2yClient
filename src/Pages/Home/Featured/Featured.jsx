import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import img1 from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed '>
           <section>
             <SectionTitle
                 Heading={'on the discount'}
                 subHeading={'you can try on the count'}
             ></SectionTitle>
            <div className='md:flex gap-10 items-center justify-center py-12 px-20 bg-stone-500 bg-opacity-50'>
             <div>
                <img src={img1} alt="" />
             </div>
             <div>
                <h2 className='text-xl font-bold'>March 20,2023</h2>
                <h2 className='text-xl'>where can i get some</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In nostrum libero doloremque facere magnam. Earum quam libero repellendus magni quidem hic eius non culpa, similique nihil optio cupiditate aspernatur excepturi.
                Dignissimos aperiam culpa autem rerum accusamus officiis. Quaerat delectus veritatis molestiae quo laboriosam voluptate. Fuga reprehenderit, dicta libero ut, numquam magni architecto iste, sed omnis tenetur aut aliquam incidunt nemo?</p>
                <button className="btn btn-outline btn-info border-0 border-b-4"> More Info </button>
             </div>
            </div>
           </section>
        </div>
    );
};

export default Featured;
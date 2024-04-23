/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/exhaustive-deps */

import Accordionitem from "./Accordionitem";
const FAQ = () => {
    const faqData = [
        {
          question: 'What is the Sunflower Pantry app?',
          answer: 'Lorem ipsum dolor sit amet consectetur. Amet elementum orci vitae varius amet placerat volutpat. A viverra risus lectus pharetra fermentum cursus. Neque id ipsum vitae tincidunt felis pretium est aliquam leo. Tellus dictum tortor diam urna purus id amet amet vel. Interdum egestas faucibus eget enim augue nunc ultrices etiam. Quisque ullamcorper rutrum morbi ornare in. Neque semper hendrerit placerat mauris.'
        },
        {
          question: 'Is the Sunflower Pantry app free to use?',
          answer: 'Lorem ipsum dolor sit amet consectetur. Amet elementum orci vitae varius amet placerat volutpat. A viverra risus lectus pharetra fermentum cursus. Neque id ipsum vitae tincidunt felis pretium est aliquam leo. Tellus dictum tortor diam urna purus id amet amet vel. Interdum egestas faucibus eget enim augue nunc ultrices etiam. Quisque ullamcorper rutrum morbi ornare in. Neque semper hendrerit placerat mauris.'
        },
        {
          question: 'Can I create and manage shopping lists with the Sunflower Pantry app?',
          answer: 'Lorem ipsum dolor sit amet consectetur. Amet elementum orci vitae varius amet placerat volutpat. A viverra risus lectus pharetra fermentum cursus. Neque id ipsum vitae tincidunt felis pretium est aliquam leo. Tellus dictum tortor diam urna purus id amet amet vel. Interdum egestas faucibus eget enim augue nunc ultrices etiam. Quisque ullamcorper rutrum morbi ornare in. Neque semper hendrerit placerat mauris.'
        },
        {
          question: 'Is customer support available for the Sunflower Pantry app?',
          answer: 'Lorem ipsum dolor sit amet consectetur. Amet elementum orci vitae varius amet placerat volutpat. A viverra risus lectus pharetra fermentum cursus. Neque id ipsum vitae tincidunt felis pretium est aliquam leo. Tellus dictum tortor diam urna purus id amet amet vel. Interdum egestas faucibus eget enim augue nunc ultrices etiam. Quisque ullamcorper rutrum morbi ornare in. Neque semper hendrerit placerat mauris.'
        },
        {
          question: 'Does the Sunflower Pantry app offer personalized recipe recommendations?',
          answer: 'Yes, the Sunflower Pantry app utilizes algorithms to provide personalized recipe recommendations based on the ingredients users have on hand, as well as their dietary preferences and cooking habits.'
        }
    ];

    return (
        <>
        <section id="faqs" className="xui-py-3 xui-container xui-overflow-y-hidden xui-bg-white">
            <p className='xui-opacity-8 text-[80%]'>(05)</p>
            <p className='text-[100%] mt-[.5rem] font-[600]'>FAQs</p>
            <p className='text-[150%] mt-[.5rem] font-[600]'>Frequently Asked Questions</p>
                
            <div className="xui-overflow-y-hidden xui-bg-white xui-max-w-950 xui-w-fluid-100 xui-mx-auto">    
              <Accordionitem data={faqData}/>
            </div>
        </section>
        </>
    )
};

export default FAQ;
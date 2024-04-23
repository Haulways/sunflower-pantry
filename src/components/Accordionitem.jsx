import { Add, Subtract } from '@carbon/icons-react';
import { useState } from 'react';

const Accordionitem = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className=''>
      {data.map((item, index) => (
        <div className='xui-mt-1-half xui-cursor-pointer' key={index} onClick={() => toggleItem(index)}>
          <div className={'xui-d-flex xui-flex-ai-center xui-mt-2 grey-second xui-py-1-half xui-px-1 xui-pos-relative ' + (activeIndex === index ? 'orange-bg' : 'xui-bg-none')}>
            <p className='xui-lg-font-sz-120 xui-font-sz-100 xui-font-9' style={{"width": "calc(100% - 20px)"}}>{item.question}</p>
            {activeIndex !== index &&
            <Add size={20} color="currentColor" variant="Linear"/>
            
            }
            {activeIndex === index &&
              <Subtract size={20} color="currentColor" variant="Linear"/>
            }
        
          </div>
          {activeIndex === index &&
           <div className='xui-lg-p-2 xui-p-1 orange-bg xui-pos-relative'>
              <p className='xui-opacity-6 xui-font-sz-75 xui-w-fluid-100 xui-lg-w-fluid-90 xui-line-height-1-half'>{item.answer}</p>
           </div>
           }
        </div>
      ))}
    
    </div>
  );
};

export default Accordionitem;
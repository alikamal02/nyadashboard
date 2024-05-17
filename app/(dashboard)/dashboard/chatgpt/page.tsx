import React from 'react';
import BreadCrumb from "@/components/breadcrumb";
import { Heading } from "@/components/ui/heading";
import InstructionBoxTimer from '@/components/chatgpt/intstructionbox-timer';
import Ask from '@/components/chatgpt/ask';

const breadcrumbItems = [{ title: "Gpt", link: "/dashboard/chatgpt" }];

function Page() {




    
    
  return (
    
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 overflow-auto">
        <BreadCrumb items={breadcrumbItems} />
        <div className="flex flex-col items-start">
          <Heading title="Planering" description="För att maximera din effektivitet har vi lagt upp den här planen åt dig" />
            
          </div>
          <div className="flex flex-col items-start">
           <InstructionBoxTimer />
           </div>
          
          <div className="flex flex-col items-start">
            <Ask/>

          </div>
        {/* You might want to add more elements here as per your layout needs */}
      </div>
    
  );
}

export default Page;

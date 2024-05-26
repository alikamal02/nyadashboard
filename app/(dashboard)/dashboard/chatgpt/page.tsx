import React from 'react';
import BreadCrumb from "@/components/breadcrumb";
import { Heading } from "@/components/ui/heading";
import InstructionBoxTimer from '@/components/chatgpt/intstructionbox-timer';
import Ask from '@/components/chatgpt/ask';
import { ScrollArea } from "@/components/ui/scroll-area";

const breadcrumbItems = [{ title: "Uppgiftsfokus", link: "/dashboard/chatgpt" }];

function Page() {




    
    
  return (
    
        <ScrollArea className="h-full overflow-auto" >
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">

      
        <BreadCrumb items={breadcrumbItems} />
        <div className="flex flex-col items-start">
          <Heading title="Planering" description="För att maximera din effektivitet har vi lagt upp den här planen åt dig" />
            
          </div>
          <div className="flex flex-col items-center">
           <InstructionBoxTimer />
           </div>
          
          <div className="flex flex-col items-start mt-56">
            <Ask/>

          </div>
        


      </div>
        </ScrollArea>
    
  );
}

export default Page;

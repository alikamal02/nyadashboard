import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BreadCrumb from "@/components/breadcrumb";
import { Heading } from "@/components/ui/heading";
import InstructionBoxTimer from '@/components/chatgpt/intstructionbox-timer';
import Ask from '@/components/chatgpt/ask';
import { ScrollArea } from "@/components/ui/scroll-area";
import FileUpload from '@/components/file-upload'; // Import FileUpload

const breadcrumbItems = [{ title: "Uppgiftsfokus", link: "/dashboard/chatgpt" }];

function Page() {
  return (
    <>
      
      <ScrollArea className="h-full overflow-auto" >
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
          <BreadCrumb items={breadcrumbItems} />
          <div className="flex flex-col items-start">
            <Heading title="Planering" description="För att maximera din effektivitet har vi lagt upp den här planen åt dig" />
          </div>
          <div className="flex flex-col items-center">
            <InstructionBoxTimer />
          </div>
          <div className="flex flex-col items-start" style={{ width: '800px', marginTop: '2rem' }}>
            <h1 className=" bg-slate-700 text-white rounded-md">(Kommer snart!)</h1>
            <FileUpload /> {/* Use FileUpload without handlers */}
          </div>
          <Ask/>
        </div>
      </ScrollArea>
    </>
  );
}

export default Page;
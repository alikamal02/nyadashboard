import { CalendarDateRangePicker } from "@/components/date-range-picker";
//import { Overview } from "@/components/overview";
//import { RecentSales } from "@/components/recent-sales";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
/*
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
*/
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link  from "next/link";

export default function page() {
  return (
    


    <ScrollArea className="h-full overflow-auto">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Välkommen 👋
          </h2>
          <div className="hidden md:flex items-center space-x-2">
            <CalendarDateRangePicker />
            
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4" >
         
          <TabsContent value="overview" className="space-y-4 flex-col ">
          <div className="flex justify-center items-center flex-col ">
          <h1 style={{fontSize:'x-large', fontWeight:'bold'}} >Vad behöver du hjälp med?</h1>
           <Button style={{width: '50%', height: '100px', margin:'10px' }}>
            
          <div>
             <p style={{fontSize: 'large'}}>Studieplanering</p>
             <p style={{fontSize: 'small'}}>Få hjälp med att planera och organisera dina studier, samt förbättra din studieteknik för att maximera din inlärningseffektivite</p>
           </div>
</Button>
<Button style={{width: '50%', height: '100px', margin: '10px'}}>
            
            <div>
               <p style={{fontSize: 'large'}}>Språkhjälp</p>
               <p style={{fontSize: 'small'}}>Få stöd med att förbättra dina språkkunskaper, inklusive grammatik, läsning och skrivning</p>
             </div>
  </Button>
  <Button style={{width: '50%', height: '100px', margin: '10px'}}>
            
            <div>
               <p style={{fontSize: 'large'}}>Uppsatsskrivning</p>
               <p style={{fontSize: 'small'}}>Få hjälp med att strukturera, skriva och korrekturläsa dina uppsatser och andra skriftliga arbeten</p>
             </div>
  </Button>           
  <Button style={{width: '50%', height: '100px', margin:'10px'}}>
            
            <div>
               <p style={{fontSize: 'large'}}>Matematikhjälp</p>
               <p style={{fontSize: 'small'}}>Få stöd med att förstå och lösa matematiska problem, från grundläggande till avancerad nivå</p>
             </div>
  </Button>
  <Button style={{width: '50%', height: '100px', margin:'10px' }} type="button">
  <Link href="/dashboard/chatgpt">
      <div>
        <p style={{fontSize: 'large'}}>Individuell support</p>
        <p style={{fontSize: 'small'}}>Behöver du hjälp med något annat? Berätta för oss så hittar vi en lösning som passar dig</p>
      </div>
    
  </Link>
</Button>
          
           <div>
            
            <Input type="text" placeholder="Vad behöver du hjälp med?" /><Button>Sök</Button></div>
           
           </div> 
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  
  );
}

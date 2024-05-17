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
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Hi, Welcome back 👋
          </h2>
          <div className="hidden md:flex items-center space-x-2">
            <CalendarDateRangePicker />
            
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
         
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

           <Button style={{width: 'auto', height: '100px'}}>
            
          <div>
             <p style={{fontSize: 'large'}}>Plugga till ett prov</p>
             <p style={{fontSize: 'small'}}>Ladda upp kapitlena till oss så hjälper vi dig</p>
           </div>
</Button>
<Button style={{width: 'auto', height: '100px'}}>
            
            <div>
               <p style={{fontSize: 'large'}}>Hjälp med glosor</p>
               <p style={{fontSize: 'small'}}>Vi hjälper med glosorna, säg bara vilket språk och svårighetsgrad</p>
             </div>
  </Button>
  <Button style={{width: 'auto', height: '100px'}}>
            
            <div>
               <p style={{fontSize: 'large'}}>Essäskrivning</p>
               <p style={{fontSize: 'small'}}>Få tips och råd för att struktrurera och förbättra. Ladda upp din uppsatsplan</p>
             </div>
  </Button>           
  <Button style={{width: 'auto', height: '100px'}}>
            
            <div>
               <p style={{fontSize: 'large'}}>Matematikförståelse</p>
               <p style={{fontSize: 'small'}}>Bryt ner komplexa matematiska koncept till enklare steg.</p>
             </div>
  </Button>
  <Button style={{width: 'auto', height: '100px' }} type="button">
  <Link href="/dashboard/chatgpt">
      <div>
        <p style={{fontSize: 'large'}}>Något annat</p>
        <p style={{fontSize: 'small'}}>Skriv till Formd här</p>
      </div>
    
  </Link>
</Button>
           <div><Input type="text" placeholder="Vad behöver du hjälp med?" /><Button>Sök</Button></div>
           
           </div>
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
}

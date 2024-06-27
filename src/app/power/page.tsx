// Server Component
import StatusDisplayCard from "@/components/cards/StatusDisplayCard";

const UPS_API_URL = 'http://localhost:3000/api/upsstatus';

async function getUpsStatus() {
  //fetch data from ups API
  const res = await fetch(UPS_API_URL);
  const upsStatus = await res.json();
  return upsStatus;
}

// call the API and get the data every 2s
setInterval(getUpsStatus, 2000);

export default async function PowerMonitorPage() {
  const upsstatus = await getUpsStatus();

  if (!upsstatus) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className='layout relative flex min-h-screen flex-col py-12'>
        <h1 className="text-4xl font-semibold">Power Monitor</h1>
        <p className="text-lg text-left">
          CyberPower RM400
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-4'>
          <StatusDisplayCard title='Input' status={upsstatus.input} />
          <StatusDisplayCard title='Output' status={upsstatus.output} />
          <StatusDisplayCard title='Battery' status={upsstatus.battery} />
          <StatusDisplayCard title='System' status={upsstatus.system} />
        </div>
      </div>
    </>
  )
}
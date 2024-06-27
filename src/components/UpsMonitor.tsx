'use server';

import type { GetServerSideProps,InferGetServerSidePropsType } from 'next';

type UpsStatus = {
  input: {
    status: string
    voltage: number
    frequency: number
  },
  output: {
    status: string
    voltage: number
    frequency: number
    load: number
    current: number
  },
  battery: {
    status: string
    voltage: number
    capacity: number
    runtime: number
  },
  system: {
    status: string
  }
}

export const getServerSideProps = (async () => {
  //fetch data from ups API
  const res = await fetch('http://192.168.20.177:5000/api/upsstatus');
  const upsStatus: UpsStatus = await res.json();
  // pass data to page via props
  return { props: { upsStatus } };
}) satisfies GetServerSideProps<{ upsStatus: UpsStatus}>

export default function UpsMonitor({
  upsStatus,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 border rounded shadow">
          <h2 className="text-lg font-bold">Input</h2>
          <p>Status: {upsStatus.input.status}</p>
          <p>Voltage: {upsStatus.input.voltage}</p>
          <p>Frequency: {upsStatus.input.frequency}</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h2 className="text-lg font-bold">Output</h2>
          <p>Status: {upsStatus.output.status}</p>
          <p>Voltage: {upsStatus.output.voltage}</p>
          <p>Frequency: {upsStatus.output.frequency}</p>
          <p>Load: {upsStatus.output.load}</p>
          <p>Current: {upsStatus.output.current}</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h2 className="text-lg font-bold">Battery</h2>
          <p>Status: {upsStatus.battery.status}</p>
          <p>Capacity: {upsStatus.battery.capacity}</p>
          <p>Runtime: {upsStatus.battery.runtime}</p>
          <p>Voltage: {upsStatus.battery.voltage}</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h2 className="text-lg font-bold">System</h2>
          <p>Status: {upsStatus.system.status}</p>
        </div>
      </div>
    </>
  );
}
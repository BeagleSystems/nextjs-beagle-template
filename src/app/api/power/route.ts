import { NextResponse } from "next/server";

export default function GET() {
  return NextResponse.json({
    "input":	{
      "status":	"Normal",
      "voltage":	237.0,
      "freqency":	49.9
    },
    "output":	{
      "status":	"Normal",
      "voltage":	230.0,
      "freqency":	50.0,
      "load":	0,
      "current":	0.0
    },
    "battery":	{
      "status":	"Fully Charged",
      "capacity":	100,
      "runtime":	5640,
      "voltage":	81.5
    },
    "system":	{
      "status":	"Normal"
    }
  })
}

export async function POST() {
  return NextResponse.json({
    "accessresult":	"fail",
    "msg":	"You have to login at first"
  })
}

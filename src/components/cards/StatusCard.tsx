import Link from "next/link";
import React from "react";

const StatusCard = ({ 
  title, 
  children,
  href
}: {
  title: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link href={href}>
      <div className="w-64 h-32 p-4 border rounded shadow">
        <h2 className="text-lg font-bold">{title}</h2>
        <div>{children}</div>
      </div>
    </Link>
  );
}

export default StatusCard;
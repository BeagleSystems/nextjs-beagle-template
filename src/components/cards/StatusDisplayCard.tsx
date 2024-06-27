const StatusDisplayCard = ({ 
  title, 
  status,
}: {
  title: string;
  status: { [key: string]: string | number };
}) => {
  return (
    <div className="w-64 h-64 p-4 border rounded shadow">
      <h2 className="text-lg font-bold">{title}</h2>
      <ul>
        {Object.entries(status).map(([key, value]) => (
          <li key={key}>
            <strong>{key}</strong>: {value}
          </li>  
        ))}
      </ul>
    </div>
  );
}

export default StatusDisplayCard;
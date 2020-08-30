import { useEffect, useState } from 'react';
import { ResponsiveContainer, PieChart, Tooltip, Pie } from 'recharts';
import { format_to_gb, round } from '../../library/format'
import '../../styles/Admin/db.css'

export default function DB(props) {
  const [dbState, setDBState] = useState({});

  useEffect(()=>{
    fetch(process.env.NEXT_PUBLIC_MONITOR_DB).then(res => res.json())
    .then(db => {
      setDBState(db)
    })
  },[])
  return (
    <div className={`card-wrapper db-container ${props.className}`}>
      <p className="card-title">aaronbaeDB</p>
      {dbState && 
        <div>
          <ResponsiveContainer width="100%" height={150}>
            <PieChart>
              <Tooltip />
              <Pie 
                data={[
                  {name: "used", memory: format_to_gb(dbState.machine_memory_used, 2)}, 
                  {name: "free", memory: format_to_gb(dbState.machine_memory_total - dbState.machine_memory_used, 2)}]} 
                dataKey="memory" nameKey="name" 
                cx="50%" cy="50%" 
                outerRadius={60} fill="#ffa600" label>
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <p className="memory-used-label">Machine Memory Used (GB)</p>
          <div className="card-section-break" />
          <table className="db-table">
            <thead>
              <tr>
                <th>Collection</th>
                <th>Doc Count</th>
                <th>Memory (GB)</th>
              </tr>
            </thead>
            <tbody>
              {dbState.collections && dbState.collections.map((item, index)=>
                <tr key={index}>
                  <td>{item.name}</td>
                  <td className="db-table-values">{item.n}</td>
                  <td className="db-table-values">{format_to_gb(item.reserved, 4)}</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="card-section-break" />
          {dbState.collections && 
            <p className="history-count">
              <span>Average History Count:</span> 
              <span>{round(dbState.collections.filter(item=>"stocks"===Object.values(item)[0]).map(item=> item.keys)[0][1].average_count, 2)}</span>
            </p>
          }
        </div>
      }
    </div>
  )
}
import { useEffect, useState } from 'react';
import { ResponsiveContainer, PieChart, Tooltip, Pie } from 'recharts';
import { format_to_gb } from '../../library/format'
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
          {dbState.collections && 
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Tooltip />
                <Pie 
                  data={dbState.collections.map(item=>{
                    return {name: item.name, memory: format_to_gb(item.reserved, 4)}
                  })} 
                  dataKey="memory" nameKey="name" 
                  cx="50%" cy="50%" 
                  outerRadius={60} fill="#ffa600" label>
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          }
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
        </div>
      }
    </div>
  )
}
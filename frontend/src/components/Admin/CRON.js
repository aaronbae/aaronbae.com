import { useEffect, useState } from 'react';
import { snake_case_to_normal } from '../../library/format'
import '../../styles/Admin/cron.css'

export default function CRON(props) {
  const [cronState, setCronState] = useState({});

  useEffect(()=>{
    fetch("http://localhost:4000/api/monitor/cron").then(res => res.json())
    .then(cron => {
      cron.queue = cron.queue[0]
      setCronState(cron)
    })
  },[])

  return (
    <div className={`card-wrapper ${props.className}`}>
      <p className="card-title">CRON</p>
      <table className="cron-table">
        <tbody>
          {Object.keys(cronState).map((item, index)=>
            <tr key={index}>
              <td>{snake_case_to_normal(item)}</td>
              <td className="cron-table-values">{cronState[item] ?? "null"}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
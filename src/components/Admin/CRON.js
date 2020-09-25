import { useEffect, useState } from 'react';
import { snake_case_to_normal } from '../../library/format'
import '../../styles/Admin/cron.css'

export default function CRON(props) {
  const [cronState, setCronState] = useState({});

  const initiate_yahoo = ()=>{
    fetch(process.env.NEXT_PUBLIC_STOCKS_URL+"/initiate_fetch", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      return fetch(process.env.NEXT_PUBLIC_MONITOR_CRON)
    })
    .then(res => res.json())
    .then(cron => {
      cron.queue = cron.queue[0]
      setCronState(cron)
    })

  }
  const fetch_cron_info = ()=>{
    fetch(process.env.NEXT_PUBLIC_MONITOR_CRON).then(res => res.json())
    .then(cron => {
      cron.queue = cron.queue[0]
      setCronState(cron)
    })
  }
  useEffect(()=>{
    fetch_cron_info()
  },[])

  return (
    <div className={`card-wrapper ${props.className}`}>
      <p className="card-title cron-title">
        CRON
        <span className="cron-refresh cron-title-button" onClick={fetch_cron_info}>Refresh</span>
        <span className="cron-title-button" onClick={initiate_yahoo}>Yahoo</span>
      </p>
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
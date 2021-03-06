import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import DB from '../../components/Admin/DB'
import CRON from '../../components/Admin/CRON'
import '../../styles/Admin/index.css'

export default function Admin() {
  const router = useRouter()
  const logged_in = useSelector((state) => state.AdminReducer.logged_in)
  useEffect(()=>{
    if(!logged_in) {
      router.push('/login')
    }
  },[])

  if(logged_in){
    return (
      <div id="admin-index">
        <DB className="db-info"/>
        <CRON className="cron-info" />
      </div>
    )
  } else {
    return (
      <div className="admin-index"></div>
    )
  }
}
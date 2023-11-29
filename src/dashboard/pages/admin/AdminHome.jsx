
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import AdminStats from './components/AdminStats';
import OrderChart from './components/OrderChart';
import OrderPieChart from './components/OrderPieChart';



function AdminHome() {
  const [adminStats, setAdminStats] = useState([])
  const [chartData, setChartData] = useState([]);


  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get("/admin/stats").then(res => {
      console.log(res.data);
      setAdminStats(res.data);

      const stats = res.data;

      let initialValue = [];

      for (let key in stats) {
        const emptyObject = {};
        emptyObject.name = key;
        emptyObject.count = stats[key];

        initialValue.push(emptyObject);

      }
      console.log(initialValue)
      setChartData(initialValue)

    }).catch(err => {
      console.log(err)
    })
  }, [axiosSecure])
  return (
    <div className='w-full bg-white md:px-16 py-16'>
      <AdminStats adminStats={adminStats} />
      <div className="flex w-full flex-col items-center xl:flex-row gap-6">
        <OrderChart chartData={chartData} />
        <OrderPieChart chartData={chartData} />

      </div>
    </div>
  )
}

export default AdminHome
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import AddBudget from "../components/AddBudget";
import { ProgressBar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { downloadPackage, fetchPackageById } from "../http/packageApi";
import { fetchCycles } from "../http/cycleApi";
import { fetchUsersById } from "../http/userApi";


import { Context } from "../index";
import { Button } from "react-bootstrap";

//создай массив из пользователей


const Package = observer(()=>{
    const location = useLocation();
    const package_id = location.pathname.split('/')[2];
    const {user_package, user} = useContext(Context)
    let [loading, setLoading] = React.useState(true);
    let [userTime, setUserTime] = React.useState('00:00:00');
    let [selectedPeople, setSelectedPeople] = React.useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            await fetchPackageById(package_id).then((data) => {
              setLoading(false);
              Promise.all(
                data.userIds.map((user) =>
                  fetchUsersById(user).then((u) => ({
                    value: u,
                    label: u.userName,
                  }))
                )
              ).then((people) => setSelectedPeople(people));
              user_package.setSelectedPack(data);
            });
            await fetchCycles(package_id, user.user.id).then((data) => {
              setLoading(false);
              data.map((d) =>
                setUserTime((prevUserTime) => addTimeIntervals(prevUserTime, d.cycleTime))
              );
            });
      
            function addTimeIntervals(time1, time2) {
              console.log(time1, time2);
              const [time1Hours, time1Minutes] = time1.split(':').map(Number);
              const [time2Hours, time2Minutes] = time2.split(':').map(Number);
      
              const sumHours = time1Hours + time2Hours;
              const sumMinutes = time1Minutes + time2Minutes;
      
              const resultHours = sumHours + Math.floor(sumMinutes / 60);
              const resultMinutes = sumMinutes % 60;
      
              return `${resultHours.toString().padStart(2, '0')}:${resultMinutes.toString().padStart(2, '0')}`;
            }
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchData();
      }, [package_id, user.user.id, user_package]);
      const download =(async () => {
        try {
            await downloadPackage(user_package.selectedPack.id)
        } catch(e){
            console.error(e)
        }})

      
    if (loading) return 'Loading...';
    else
    return(<div>

        <h1>{ user_package.selectedPack.packageName}</h1>

        <h2>Budjet</h2>
        <div>{user_package.selectedPack.packageBudget}</div>
        <ProgressBar now={(user_package.selectedPack.usedPackageBudget/user_package.selectedPack.packageBudget)*100} />
        <h2>TotalTime</h2>
        <div>{user_package.selectedPack.totalTime}</div>
        <h2>Users</h2>
        {selectedPeople && selectedPeople.map((person) => (
            <div key={person.value.id}>{person.label}</div>
        ))}
        <Button onClick={download}>
            download 
        </Button>
  


     <div> Your Time</div>
    <div>{userTime}</div>
        <AddBudget />
        </div>
    )
})

export default Package;
import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode"
import FileSaver from 'file-saver';


export const createPackage = async (data) => {
    try {

      const token = localStorage.getItem('token');
      const response = await $authHost.post("/api/package/create", {
        PackageName: data.packageName,
        PackageBudget: data.packageBudget,
        Status: data.status,
        PackageDescription: data.packageDescription,
        Owner: data.owner,
        Users:data.users,
        UsedPackageBudget: data.usedPackageBudget
        },{
            headers: { "Authorization": `Bearer ${token}` }
        })
        
        return response.data;
    } catch (error) {
        console.error(error);
        // Handle any errors appropriately
        }
    };

    export const fetchPackages = async (id) => {
        var tocken = localStorage.getItem('token');
        const response = await $authHost.get("/api/package/user/"+id, {
            headers: { "Authorization": `Bearer ${tocken}` }
        });
        return response.data
    }
    export const fetchPackageById = async (id) => {
        const response = await $authHost.get("/api/package/"+id);
        return response.data
    }
    export const deletePackage = async (id) => {
        const response = await $authHost.delete("/api/package/"+id);
        return response
    }
    export const updatePackage = async (data) => {
        const response = await $authHost.put("/api/package/"+data.id, {
            Id: data.id,
            PackageName: data.packageName,
            PackageBudget: data.packageBudget,
            Status: data.status,
            PackageDescription: data.packageDescription,
            UserIds:data.users,
            UsedPackageBudget: data.usedPackageBudget
        },
        {
            headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
            });
        return response
    }
    export const downloadPackage = async (id) => {
        $authHost.get('/api/download/'+id, { responseType: 'blob' })
        .then(response => {
            const file = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            FileSaver.saveAs(file, 'packages.xlsx');
        })
        .catch(error => {
            console.error('Error exporting packages:', error);
        });
    }

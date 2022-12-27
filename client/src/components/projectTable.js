import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

export default function projectTable() {

    useEffect(() => {
        fetchProjectData();
      }, [])
    
      const fetchProjectData = async () => {
        try {
          await fetch("http://localhost:8080/api/project/all", {
            method: 'GET',
            headers:{"Content-Type": "application/json",
            Authorization: "bearer " + token.access_token,
        },
            redirect: 'follow'
          })
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));   
           
        } catch (error) {
          console.log("error", error);
        }
      };

      
 
    return (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      );

}
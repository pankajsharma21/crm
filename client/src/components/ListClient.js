import React from 'react';

const ListClient = ({ clients, deleteClient }) => {

  return (
    <ul>
      {
        clients &&
          clients.length > 0 ?
            (
              clients.map(client => {
                return (
                  <li key={client._id} onClick={() => deleteClient(client._id)}>{client.client_name}</li>
                  
                )
              })
            )
            :
            (
              <li>No record found</li>
            )
      }
    </ul>
  )
}

export default ListClient
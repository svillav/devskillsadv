import React from 'react';

const Table = ({ data }) => {
  const users = data.users;

  return (
    <table className='table-auto relative m-4 w-full text-white'>
      <thead className='bg-black'>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email Address</th>
          <th>SSN</th>
        </tr>
      </thead>
      <tbody className='border border-blue'>
        {
          users.map((user, index) => {
            return (
              <tr key={index} className='border border-black'>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.address}</td>
                <td>{user.ssn}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default Table;

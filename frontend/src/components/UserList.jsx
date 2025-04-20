import React from 'react';

const UserList = ({ users, currentUserId }) => {
  return (
    <div className="w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 p-4">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Online Users</h2>
      <div className="space-y-2">
        {users.map((user) => (
          <div
            key={user.id}
            className={`flex items-center space-x-2 p-2 rounded-lg ${
              user.id === currentUserId 
                ? 'bg-blue-50 dark:bg-blue-900/30' 
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-900 dark:text-gray-100">{user.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList; 
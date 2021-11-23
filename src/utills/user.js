export const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const setCurrentUser = (user) =>
  localStorage.setItem('user', JSON.stringify(user));

export const logoutUser = () => {
  localStorage.removeItem('user');
};

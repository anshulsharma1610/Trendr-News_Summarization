export const getTopNews = async () => {
  const response = await fetch("http://localhost:8000/api/trends?category=top&language=en");
  const data = await response.json();
  return data;
};


export const getAlluser = async () => {
  const response = await fetch("http://localhost:8000/api/users");
  const data = await response.json();
  return data;
};


export const getAllnews = async () => {
  const response = await fetch("http://localhost:8000/api/news");
  const data = await response.json();
  return data;
};

export const updateNewsById = async (id) => {
  const response = await fetch(`http://localhost:8000/api/fetchnews/${id}`);
  const data = await response.json();
  return data;
};

export const addNews = async (id) => {
  const response = await fetch(`http://localhost:8000/api/news`);
  const data = await response.json();
  return data;
};

export const addSubscription = async (id) => {
  const response = await fetch(`http://localhost:8000/api/subscriptions`);
  const data = await response.json();
  return data;
};
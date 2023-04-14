export const getTopNews = async () => {
  const response = await fetch("http://localhost:8000/api/trends?category=top&language=en");
  const data = await response.json();
  return data;
};
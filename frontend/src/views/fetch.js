export const getTopNews = async () => {
    const response = await fetch("https://newsdata.io/api/1/news?apikey=pub_20431b6fb48c01a5ae7cc60463fb47d7345c8&category=top&language=en");
    const data = await response.json();
    return data;
  };
  
export async function getDataFromAPI() {
    const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';
  
    try {
      const resp = await fetch(API_URL);
      
      if (!resp.ok) {
        throw new Error('Error al obtener los datos');
      }
  
      const data = await resp.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  }
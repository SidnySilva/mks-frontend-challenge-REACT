import { useQuery } from 'react-query';

// function MyComponent() {
//   const { isLoading, error, data } = useQuery('myData', async () => {
//     const response = await fetch('/api/data');
//     if (!response.ok) {
//       throw new Error('Erro ao buscar dados');
//     }
//     return response.json();
//   });

//   if (isLoading) return <div>Carregando...</div>;
//   if (error) return <div>Erro: {error.message}</div>;

//   return (
//     <div>
//       {data && data.map(item => (
//         <div key={item.id}>{item.name}</div>
//       ))}
//     </div>
//   );
// }
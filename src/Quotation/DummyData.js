// Function to generate dummy data
import datas from './data.json'
export const generateDummyData = (count) => {
  const data = [];
  for (let i = 1; i <= count; i++) {
    const projectType = i % 2 === 0 ? 'commercial' : 'residential';
    data.push({
      Item: `Item ${i}`,
      Quantity: `Quantity ${i}`,
      Amount: `Amount ${i}`,
    });
  }
  return datas;
};

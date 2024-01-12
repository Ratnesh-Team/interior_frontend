// Function to generate dummy data
import datas from './Dummy.json'
export const generateDummyData = (count) => {
  const data = [];
  for (let i = 1; i <= count; i++) {
    const projectType = i % 2 === 0 ? 'commercial' : 'residential';
    data.push({
      ProjectName: `Project ${i}`,
      Project_Type: projectType,
      Phase: `Phase ${i}`,
    });
  }
  return datas;
};

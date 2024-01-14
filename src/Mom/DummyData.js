// Function to generate dummy data
import datas from './data.json'
export const generateDummyData = (count) => {
  const data = [];
  for (let i = 1; i <= count; i++) {
    const projectType = i % 2 === 0 ? 'commercial' : 'residential';
    data.push({
      ProjectName: `Project ${i}`,
      Phase: `Phase ${i}`,
      ProjectType: `ProjectType ${i}`,
      Timeline: `Timeline ${i}`,
      Tag: `Tag ${i}`,
    });
  }
  return datas;
};

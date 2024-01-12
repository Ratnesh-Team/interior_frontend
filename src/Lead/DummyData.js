// Function to generate dummy data
import photo from '../Mom/sofa.png';
import datas from './data.json'

const predefinedData = [
  {
    ClientName: 'Devashish',
    LeadDate: 'January 11, 2024 1',
    Phone: 'Salary 1',
    EmailID: 'Timeline 1',
    Status: 'Supervisor',
  },
  {
    ClientName: 'Arvind',
    LeadDate: 'January 11, 2024 1',
    Phone: 'Salary 1',
    EmailID: 'Timeline 1',
    Status: 'Supervisor',
  },
  {
    ClientName: 'Ratnesh',
    LeadDate: 'January 11, 2024 1',
    Phone: 'Salary 1',
    EmailID: 'Timeline 1',
    Status: 'Supervisor',
  },
  {
    ClientName: 'Devashish',
    LeadDate: 'January 11, 2024 1',
    Phone: 'Salary 1',
    EmailID: 'Timeline 1',
    Status: 'Supervisor',
  },
  // Add more predefined data entries here...
];

export const generateDummyData = (count) => {
  // If count is greater than the predefined data length, use a loop to fill the remaining entries
  const data = count <= predefinedData.length ? predefinedData.slice(0, count) : [];

  const d = new Date();
  const da = d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  for (let i = data.length + 1; i <= count; i++) {
    let role;
    if (i % 3 === 0) {
      role = 'Designer';
    } else if (i % 3 === 1) {
      role = 'Supervisor';
    } else {
      role = 'Client';
    }
    data.push({
      ClientName: `Name ${i}`,
      LeadDate: `${da} ${i}`,
      Phone: `Salary ${i}`,
      EmailID: `Timeline ${i}`,
      Status: `${role}`,
    });
    console.log(data);
  }

  return datas;
};

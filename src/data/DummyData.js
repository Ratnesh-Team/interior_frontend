// Function to generate dummy data
export const generateDummyData = (count) => {
    const data = [];
    for (let i = 1; i <= count; i++) {
      data.push({
        ProjectName: `Project ${i}`,
        Project_Type: `Project Type ${i}`,
        Phase: `Phase ${i}`,
        Manage: `Manage ${i}`,
        Timeline: `Timeline ${i}`,
        Tag: `Tag ${i}`,
      });
    }
    return data;
  };
  
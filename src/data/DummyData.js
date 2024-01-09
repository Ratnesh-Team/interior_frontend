// Function to generate dummy data
export const generateDummyData = (count) => {
    const data = [];
    for (let i = 1; i <= count; i++) {
      data.push({
        projectName: `Project ${i}`,
        phase: `Phase ${i}`,
        manage: `Manage ${i}`,
      });
    }
    return data;
  };
  
import React, { useEffect } from 'react';
import Papa from 'papaparse';

const YourComponent = () => {
  useEffect(() => {
    // Your JSON data
    const jsonData = [
        {
          "id": "829cabc6-5236-523a-9943-44197b758aab",
          "Name": "Lloyd Page",
          "Website": "http://wa.sz/zelip",
          "Rating": 3,
          "Email": "pilugvo@wodo.be",
          "Phone": "(658) 593-4906",
          "Username": "@ro",
          "City": "Vizofo",
          "Country": "Lao People's Democratic Republic",
          "Company": "Eastman Kodak Company",
          "Position": "Communications Affairs Director",
          "Updated on": "1/8/2024, 4:06:26 PM",
          "Created on": "11/21/2023",
          "Is admin?": "yes",
          "Salary": "47,021$"
        },
        {
          "id": "1773cfc2-d3b4-5d80-8d3d-f4dae64f4c63",
          "Name": "Dorothy Baldwin",
          "Website": "http://patefri.sm/voc",
          "Rating": 3,
          "Email": "dik@le.at",
          "Phone": "(621) 476-1996",
          "Username": "@se",
          "City": "Vodlocuk",
          "Country": "Lao People's Democratic Republic",
          "Company": "Hawaiian Electric Industries Inc.",
          "Position": "Real Estate Broker",
          "Updated on": "1/9/2024, 12:31:01 PM",
          "Created on": "2/3/2023",
          "Is admin?": "no",
          "Salary": "45,041$"
        },
        {
          "id": "701c6829-1134-5511-b5d4-f58fe84cf806",
          "Name": "Devin Wise",
          "Website": "http://zekolvi.pe/pu",
          "Rating": 3,
          "Email": "ikhap@zotgaj.se",
          "Phone": "(775) 651-8934",
          "Username": "@uwipofci",
          "City": "Zaibpu",
          "Country": "Cameroon",
          "Company": "Bank One Corporation",
          "Position": "Real Estate Broker",
          "Updated on": "1/9/2024, 8:05:33 AM",
          "Created on": "1/5/2024",
          "Is admin?": "yes",
          "Salary": "51,965$"
        },
        {
          "id": "388e0071-a60b-566c-bb0a-fbe80cf82836",
          "Name": "Maggie Larson",
          "Website": "http://ladkof.cf/kar",
          "Rating": 2,
          "Email": "abi@havjov.ar",
          "Phone": "(444) 947-3897",
          "Username": "@dovioje",
          "City": "Vokvimi",
          "Country": "Lithuania",
          "Company": "General Dynamics Corporation",
          "Position": "Outplacement Specialist",
          "Updated on": "1/9/2024, 10:23:16 AM",
          "Created on": "5/6/2023",
          "Is admin?": "no",
          "Salary": "62,268$"
        },
        {
          "id": "4fea8166-b24e-5c32-a513-a19cfc9990bd",
          "Name": "Marcus Adkins",
          "Website": "http://zulelid.hk/hiumo",
          "Rating": 1,
          "Email": "winocpi@funem.pn",
          "Phone": "(473) 815-2802",
          "Username": "@foazozad",
          "City": "Ceevije",
          "Country": "Svalbard and Jan Mayen",
          "Company": "DURA Automotive Systems Inc.",
          "Position": "Desktop Publisher",
          "Updated on": "1/9/2024, 6:52:08 AM",
          "Created on": "11/1/2023",
          "Is admin?": "no",
          "Salary": "30,410$"
        },
        {
          "id": "fbf2a4b8-a71b-532c-ac89-84ca2cf05307",
          "Name": "Hallie Murphy",
          "Website": "http://jutugo.tr/li",
          "Rating": 4,
          "Email": "coonula@rankig.gy",
          "Phone": "(364) 288-9405",
          "Username": "@fe",
          "City": "Guwsoh",
          "Country": "Malta",
          "Company": "W.R. Berkley Corporation",
          "Position": "Language Interpreter",
          "Updated on": "1/8/2024, 6:03:25 PM",
          "Created on": "6/11/2023",
          "Is admin?": "yes",
          "Salary": "34,586$"
        }
      ]
      ;

    // Convert JSON to CSV
    const csvData = convertJsonToCsv(jsonData);

    // Use the CSV data as needed (e.g., save to a file or display in your application)
    console.log(csvData);
  }, []);

  return (
    // Your component JSX
    <div>Your React Component</div>
  );
};

export default YourComponent;
function convertJsonToCsv(jsonData) {
    const csv = Papa.unparse(jsonData);
    return csv;
  }

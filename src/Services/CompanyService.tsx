import Company from '../Models/Company';

//import { Endpoint } from '../Common/Types';
//import axios from 'axios';

// const API_ROOT_URL: string = process.env.REACT_APP_API_ROOT_URL!;
// const API_ENDPOINT: Endpoint =
// {
//     COMPANY: `${API_ROOT_URL}/company`
// };
const rootUrl:string = 'https://localhost:32443/api';

const CompanyService = {
    getCompanies:  async (): Promise<Array<Company>>  => {
        console.log('calling API /company');

        // const result = await axios(
        //    API_ENDPOINT.COMPANY
        // );
        const response = await fetch(
            `${rootUrl}/company`
         );

         const data = await response.json();
        return data as Array<Company>;  
    }  
};

export default CompanyService;
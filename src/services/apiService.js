import axios from "axios";

// const SERVER_URL = "http://localhost:8383";
// const SERVER_URL = "http://172.16.1.201:8383";
const SERVER_URL = "http://85.133.185.78:9191";

// @asc Get All Services
// @route GET api/service/
export const getAllServices = () => {
    const url = `${SERVER_URL}/api/service/`;
    return axios.get(url);
};

// @asc Get All Category
// @route GET api/category/
export const getAllCategory = () => {
    const url = `${SERVER_URL}/api/category/`;
    return axios.get(url);
};

// @asc Get All Category with service_id
// @route GET api/service/service_id/:service_id
export const getCategoryByServiceId = (service_id) => {
    const url = `${SERVER_URL}/api/category/service_id/${service_id}`;
    return axios.get(url);
};

// @desc  add category
// @route POST api/category/add/
export const addCategory = (category) => {
    const url = `${SERVER_URL}/api/category/`;

    return axios.post(url, category, {
        headers: {
            'Content-Type': 'multipart/form-data',
            accept: 'application/json', // If you receieve JSON response.
        }
    });
};


// @asc Get All Article
// @route GET api/article/
export const getAllArticle = () => {
    const url = `${SERVER_URL}/api/article/`;
    return axios.get(url);
};

// @asc Get Article that should show
// @route GET api/article/show/
export const getShowArticle = () => {
    const url = `${SERVER_URL}/api/article/show/`;
    return axios.get(url);
};

// // @desc Get Api With Api ID
// // @route GET http://localhost:9090/api/get_api_key/<id_in>/
// export const getAPI = (apiId) => {
//     const url = `${SERVER_URL}/api/get_api_key/${apiId}`;
//     return axios.get(url);
// };
//
// // @desc  Update Api
// // @route POST http://localhost:9000/api/get_api_key/edit/<id_in>/
// export const updateAPI = (api, apiId) => {
//     const url = `${SERVER_URL}/api/get_api_key/edit/${apiId}/`;
//     return axios.post(url, api, {
//         headers: {
//             'Content-Type': 'multipart/form-data',
//             accept: 'application/json', // If you receieve JSON response.
//         }
//     });
// };
//
// // @desc  add Api
// // @route POST http://localhost:9000/api/get_api_key/add/
// export const addAPI = (api) => {
//     const url = `${SERVER_URL}/api/get_api_key/add/`;
//
//     return axios.post(url, api, {
//         headers: {
//             'Content-Type': 'multipart/form-data',
//             accept: 'application/json', // If you receieve JSON response.
//         }
//     });
// };
// // @desc  add Api file
// // @route POST http://localhost:9000/api/get_api_key/add_files/
// export const addAPIFile = (api) => {
//     const url = `${SERVER_URL}/api/get_api_key/add_files/`;
//     console.log(api)
//     return axios.post(url, api, {
//         headers: {
//             'Content-Type': 'multipart/form-data',
//             accept: 'application/json', // If you receieve JSON response.
//         }
//     });
// };
// // @desc  update All Api
// // @route POST http://localhost:9000/api/get_api_key/add_files/
// export const updateAllAPI = () => {
//     const url = `${SERVER_URL}/api/get_api_key/check_all/`;
//     return axios.get(url);
// };
//
// // @desc  Get All Groups
// // @route GET http://localhost:9000/groups
// export const getAllGroups = () => {
//     const url = `${SERVER_URL}/groups`;
//     return axios.get(url);
// };
//
// // @desc  Get Group Name With Group ID
// // @route GET http://localhost:9000/groups/:groupId
// export const getGroup = (groupId) => {
//     const url = `${SERVER_URL}/groups/${groupId}`;
//     return axios.get(url);
// };
//
// // @desc  Create New Contact
// // @route POST http://localhost:9000/contacts
// export const createContact = (contact) => {
//     const url = `${SERVER_URL}/contacts`;
//     return axios.post(url, contact);
// };
//
// // @desc  Update Contact
// // @route PUT http://localhost:9000/contacts/:contactId
// export const updateContact = (contact, contactId) => {
//     const url = `${SERVER_URL}/contacts/${contactId}`;
//     return axios.put(url, contact);
// };
//
// // @desc  Delete Contact
// // @route DELETE http://localhost:9000/contacts/:contactId
// export const deleteContact = (contactId) => {
//     const url = `${SERVER_URL}/contacts/${contactId}`;
//     return axios.delete(url);
// };
//
// // @desc  get_image_url
// // @route get http://localhost:9000/api/get_image_url/:file_name
// export const getImageUrl = (file_name) => {
//     const url = `${SERVER_URL}/api/get_image_url/${file_name}`;
//     return axios.get(url);
// };
//
// // @desc  GenerateImage
// // @route POST http://localhost:9000/api/generate_image/
// export const GenerateImage = (data) => {
//     let headers = {}
//
//     if (typeof(data) === 'string') {
//         headers = {
//             headers: {
//                 Accept: "application/json",
//                 'Content-Type': 'application/json'
//             }
//         }
//     }else {
//         headers = {
//             headers: {'Content-Type': 'multipart/form-data'}
//         }
//     }
//
//     const url = `${SERVER_URL}/api/generate_image/`;
//     return axios.post(url, data, headers);
// };

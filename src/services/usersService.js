import axios from 'axios'

const baseUrl = process.env.REACT_APP_APP_API_ENDPOINT
// &page=${1}&perPage=${countPerPage}
export const userListService = ({ countPerPage, page, token }) => axios.get(`${baseUrl}/user/manage/users?getAll=${false}&page=${page}&limit=${countPerPage}&filter=`, {
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json'
  }
})

export const getSingleDataService = ({ id, token }) => axios.get(`${baseUrl}/admin/customer/single/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  });

export const userSearchListService = ({ searchValue, countPerPage, page, token }) => axios.get(`${baseUrl}/user/manage/users?getAll=${false}&page=${1}&limit=${countPerPage}&filter=&search=${searchValue}`, {
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json'
  }
})

export const exportListService = ({ token, startDate, endDate }) => axios.get(`${baseUrl}/user/manage/users?getAll=${true}&startDate=${startDate}&endDate=${endDate}&filter=`, {
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json'
  }
})

export const addUserService = ({ token }, formData) => axios.post(
  `${baseUrl}/admin/customer/store`, formData,
  {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'multipart/form-data'
      // 'application/json',
    }
  }
)

export const userStatusChange = ({ id, token }, input) => axios.post(
  `${baseUrl}/user/manage/status`, input,
  {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json'
    }
  }
)


export const userUpdateData = (
  { token },
  formData
  // const id = formData.get('id')
) => axios.post(
  `${baseUrl}/admin/customer/update/${formData.get('id')}`,
  formData,
  {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'multipart/form-data',
      "Content-Type": "multipart/form-data"
    }
  }
)

export const userDelete = ({ id, token }) => axios.delete(
    `${baseUrl}/admin/customer/delete/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
      }
    }
  )


export const FileUploadService = (data, id, token) => axios.post(`${baseUrl}/healthTips/manage/file?id=${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json'
    }
  })
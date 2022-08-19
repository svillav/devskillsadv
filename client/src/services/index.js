import axios from 'axios';

export const getToken = async (setError) => {
  let token
  let tokenObj = JSON.parse(sessionStorage.getItem('token'))
  if (tokenObj !== null) {
    return JSON.parse(sessionStorage.getItem('token')).value
  } else {
    await axios.post('http://localhost:8081/auth', {
      username: 'sarah',
      password: 'connor'
    })
      .catch(() => {
        setError('Failed to fetch token')
      })
      .then((response) => {
        token = response.data.token
        sessionStorage.setItem('token', JSON.stringify({
          value: token,
          exp: response.data.exp
        }))
        return token
      })
  }
}

export const postData = async (initialState, data, setData, form, setForm, setError) => {
  axios.post('http://localhost:8081/api/members', form, {
    headers: { Authorization: `Bearer ${await getToken(setError)}` }
  })
    .then((res) => {
      setData({ ...data, users: [...data.users, res.data] })
      setForm(initialState)
    })
    .catch((error) => {
      setError(error.response.data.message)
    })
}

export const getData = async (data, setData, setError) => {
  try {
    setData({ users: data.users, isFetching: true })
    let token = await getToken()
    const response = await axios.get('http://localhost:8081/api/members', {
      headers: { Authorization: `Bearer ${token}` }
    })
    setData({ users: response.data, isFetching: false })
  } catch (error) {
    setError('Failed to fetch users')
    setData({ users: data.users, isFetching: false })
  }
}

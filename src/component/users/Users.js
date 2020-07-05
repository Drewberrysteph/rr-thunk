import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { loadUsers } from "../../redux/actions/usersActions"

const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)

  useEffect(() => {
    dispatch(loadUsers())
  }, [])
  return (
    <div>
      {!users.loading ? users.data.map(user => user.name) : "loading..."}
    </div>
  )
}

export default Users

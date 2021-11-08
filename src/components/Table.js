import React from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Title</th>
        <th>Content</th>
      </tr>
    </thead>
  )
}
const TableBody = (props) => {  
  const rows = props.posts.map((row, idx) => {
    return (
      <tr key={idx}>
        <td>{row.title}</td>
        <td>{row.content}</td>
        <td>
          <button onClick={() => props.removePost(idx)}>Delete</button>
        </td>
      </tr>
    )
  })
  return (
    <tbody>{rows}</tbody>
  )
}

const Table = (props) => {
  const {posts, removePost} = props
  return (
      <table>
        <TableHeader />
        <TableBody posts={posts} removePost={removePost}/>
      </table>
  )
}

export default Table
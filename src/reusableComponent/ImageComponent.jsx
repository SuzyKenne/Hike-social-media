
function ImageComponent() {
  const users = [
    {
      id: 1,
      imageLink: "https://media.istockphoto.com/id/1309250045/es/foto/retrato-de-estilo-de-vida-de-atractiva-mujer-morena-con-taza-de-caf%C3%A9-caminando-por-la-calle.jpg?s=2048x2048&w=is&k=20&c=7TQmIJCyaTsc7w7Ls5hBxPazjB3A_rdvOuENvrZTSqk="
    },
    {
      id: 2,
      imageLink: "https://images.unsplash.com/photo-1611558709798-e009c8fd7706?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
    },
    {
      id: 3,
      imageLink: "https://images.unsplash.com/flagged/photo-1577126606314-699b9127fd44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
    },
    {
      id: 4,
      imageLink: "https://images.unsplash.com/photo-1611747581637-a4c0993020ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU5fHx8ZW58MHx8fHx8"
    }
  ]
  return (
    <>
      {users.map((user) => (
          <img
          key={user.id}
          className="inline-block h-6 w-6 rounded-full ring-1 ring-darkSecondary"
          src={user.imageLink}
          alt=""
        />
      ))}
    </>
    
  )
}

export default ImageComponent

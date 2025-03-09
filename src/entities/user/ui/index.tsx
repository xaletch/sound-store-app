interface UserData {
  avatar: string;
  name: string;
}

export const User = ({ avatar, name }: UserData) => {
  return (
    <div className="min-w-9 w-9 h-9 bg-green-800 rounded-full overflow-hidden">
      <img className="w-full h-full" src={avatar} alt={name} />
    </div>
  )
}

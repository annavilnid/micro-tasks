type HeaderType = {
  title: string
}

export const Header = (props: HeaderType) => {
  return (
    <h2>{props.title}</h2>
  )
}
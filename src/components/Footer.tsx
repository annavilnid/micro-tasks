type FooterType = {
  title: string
}

export const Footer = (props: FooterType) => {
  return (
    <h2>{props.title}</h2>
  )
}

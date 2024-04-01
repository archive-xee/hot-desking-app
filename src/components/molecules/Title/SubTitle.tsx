type SubTitleProps = {
  text: string
}

function SubTitle(props: SubTitleProps) {
  const { text } = props
  return <h3 className="text-center">{text}</h3>
}

export default SubTitle

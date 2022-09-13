export default function Text ({ block }) {
  return <div dangerouslySetInnerHTML={{
    __html: block.text
  }} />
}

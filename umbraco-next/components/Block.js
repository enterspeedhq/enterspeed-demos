import { Text, Hero } from './blocks'

const blocks = {
  blockHero: Hero,
  blockText: Text
}

export default function Block ({ block }) {
  const Container = blocks[block.alias]

  return <Container block={block} />
}

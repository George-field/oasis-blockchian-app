import { Avatar, TagLabel, Tag as Tg } from "@chakra-ui/react";

interface TagProps {
  label: string;
}

const Tag = ({ label }: TagProps) => (
  <Tg size='lg' colorScheme='blue' borderRadius='full'>
    <Avatar
      src='https://avatars.githubusercontent.com/u/36199014?v=4'
      size='xs'
      name='Segun Adebayo'
      ml={-1}
      mr={2}
    />
    <TagLabel>{label}</TagLabel>
  </Tg>
)

export default Tag;
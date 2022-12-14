import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Text,
} from '@chakra-ui/react';
import { urlForImage } from '../../../lib/studio';
import { PostProps } from '../../../lib/studio/types';

/**
 * Card component containing the author's information.
 */
const _BlogPageAuthorCard = (props: Pick<PostProps, 'author'>) => {
  const { author } = props;
  return (
    <Card h="fit-content">
      <CardHeader>
        <Flex flexDirection="column" alignItems="center" gap={4}>
          <Avatar src={urlForImage(author.avatar).url()} name={author.name} />
          <Text
            fontSize="lg"
            fontWeight="semibold"
            textTransform="uppercase"
            letterSpacing="wider"
          >
            {author.name}
          </Text>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{author.bio}</Text>
      </CardBody>
      <CardFooter>{/* <Text>Placeholder for social links</Text> */}</CardFooter>
    </Card>
  );
};

export default _BlogPageAuthorCard;

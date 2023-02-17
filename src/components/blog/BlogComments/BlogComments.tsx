import { Stack, StackDivider, Text } from '@chakra-ui/react';
import { format } from 'date-fns';
import { CommentProps } from '../../../studio/types';

const BlogComments = (props: { comments: CommentProps[] }) => {
  console.log(props);

  if (!props.comments.length) {
    return <Text>Be the first to comment!</Text>;
  }

  return (
    <Stack
      divider={<StackDivider borderColor="whiteAlpha.600" />}
      spacing={8}
      w="full"
      maxW="2xl"
    >
      {props.comments.map((comment) => (
        <Stack key={comment._key}>
          <Text fontWeight="bold" color="whiteAlpha.600">
            {comment.name}
          </Text>
          <Text color="whiteAlpha.900">{comment.body}</Text>
          <Text color="whiteAlpha.600" fontSize="sm">
            {format(new Date(comment.datePosted), 'MMM. do, yyyy - HH:mm a')}
          </Text>
        </Stack>
      ))}
    </Stack>
  );
};

export default BlogComments;

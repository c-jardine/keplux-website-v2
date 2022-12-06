import { FaReadme } from '@react-icons/all-files/fa/FaReadme';
import { ListItemBuilder, StructureBuilder } from 'sanity/desk';

const BlogPostsViewerStructure = (S: StructureBuilder): ListItemBuilder => {
  return S.listItem()
    .title('Browse Blog Posts')
    .icon(FaReadme)
    .child(
      S.list()
        .title('Filter By')
        .items([
          S.listItem()
            .title('All')
            .showIcon(false)
            .child(
              S.documentList().title('All Blog Posts').filter('_type == "post"')
            ),
          S.listItem()
            .title('Series')
            .showIcon(false)
            .child(
              S.documentList()
                .title('Series')
                .showIcons(false)
                .filter('_type == "series"')
                .child((id) =>
                  S.documentList()
                    .title('Posts in series')
                    .filter('_type == "post" && postSeries._ref == $id')
                    .params({ id })
                )
            ),
          S.listItem()
            .title('Tag')
            .showIcon(false)
            .child(
              S.documentList()
                .title('Tags')
                .filter('_type == "tag"')
                .child((id) =>
                  S.documentList()
                    .title('Tagged posts')
                    .filter('_type == "post" && references($id)')
                    .params({ id })
                )
            ),
        ])
    );
};

export default BlogPostsViewerStructure;

/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FaPenFancy } from '@react-icons/all-files/fa/FaPenFancy';
import { ListItemBuilder, StructureBuilder } from 'sanity/desk';
import { Tag } from '../../components/core';
import { SanityPreviewLayout } from '../../components/layouts';
import { author, post, series, tag } from '../schemas/documents';

const BlogStructure = (S: StructureBuilder): ListItemBuilder => {
  return S.listItem()
    .title('Blog')
    .icon(FaPenFancy)
    .child(
      S.list()
        .title('Blog')
        .items([
          S.listItem()
            .title('Posts')
            .icon(post.icon)
            .child(
              S.documentTypeList('post')
                .title('Posts')
                .child(S.document().schemaType('post'))
            ),
          S.listItem()
            .title('Series')
            .icon(series.icon)
            .child(
              S.documentTypeList('series').child(
                S.document().schemaType('series')
              )
            ),
          S.listItem()
            .title('Tags')
            .icon(tag.icon)
            .child(
              S.documentTypeList('tag')
                .title('Tags')
                .child((id) =>
                  S.document()
                    .schemaType('tag')
                    .documentId(id)
                    .views([
                      // Show the editor pane.
                      S.view.form(),
                      // Show a preview of the tag.
                      S.view
                        .component(({ document }) => (
                          <SanityPreviewLayout>
                            {/* TODO: Fix ts errors */}
                            {/* @ts-ignore */}
                            <Tag
                              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                              label={document.displayed?.label as string}
                              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                              color={document.displayed?.color?.hex}
                            />
                          </SanityPreviewLayout>
                        ))
                        .title('Preview'),
                    ])
                )
            ),
          S.listItem()
            .title('Authors')
            .icon(author.icon)
            .child(
              S.documentTypeList('author')
                .title('Authors')
                .child(S.document().schemaType('author'))
            ),
        ])
    );
};

export default BlogStructure;

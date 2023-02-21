/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ListItemBuilder, StructureBuilder } from 'sanity/desk';
import { project } from '../schemas/documents';

const ProjectStructure = (S: StructureBuilder): ListItemBuilder => {
  return S.listItem()
    .title('Projects')
    .icon(project.icon)
    .child(
      S.documentTypeList('project')
        .title('Projects')
        .child(S.document().schemaType('project'))
    );
};

export default ProjectStructure;

/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ListItemBuilder, StructureBuilder } from 'sanity/desk';
import { projectType } from '../schemas/documents';

const ProjectStructure = (S: StructureBuilder): ListItemBuilder => {
  return S.listItem()
    .title('Projects')
    .icon(projectType.icon)
    .child(
      S.documentTypeList('project')
        .title('Projects')
        .child(S.document().schemaType('project'))
    );
};

export default ProjectStructure;

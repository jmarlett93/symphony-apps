import { createProjectGraphAsync } from '@nx/devkit';

const allowedScopes = new Set([
  'scope:frontend',
  'scope:backend',
  'scope:shared',
]);
const allowedTypes = new Set([
  'type:app',
  'type:feature',
  'type:data-access',
  'type:util',
  'type:model',
]);

const selectTags = (tags, prefix) =>
  tags.filter((tag) => tag.startsWith(`${prefix}:`));

const validateProject = ([name, node]) => {
  const tags = node.data.tags ?? [];
  const scopes = selectTags(tags, 'scope');
  const types = selectTags(tags, 'type');
  const errors = [];

  if (scopes.length !== 1 || !allowedScopes.has(scopes[0])) {
    errors.push(
      `expected one valid scope tag, received [${scopes.join(', ')}]`,
    );
  }

  if (types.length !== 1 || !allowedTypes.has(types[0])) {
    errors.push(`expected one valid type tag, received [${types.join(', ')}]`);
  }

  if (types[0] === 'type:app' && !node.data.root.startsWith('apps/')) {
    errors.push('type:app projects must live under apps/');
  }

  return errors.map((error) => `${name}: ${error}`);
};

const graph = await createProjectGraphAsync();
const errors = Object.entries(graph.nodes).flatMap(validateProject);

if (errors.length > 0) {
  console.error(['Invalid Nx project taxonomy:', ...errors].join('\n- '));
  process.exitCode = 1;
} else {
  console.log(
    `Validated tags for ${Object.keys(graph.nodes).length} projects.`,
  );
}

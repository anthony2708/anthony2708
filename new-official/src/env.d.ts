/// <reference types="astro/client" />

declare module '*.mdx' {
  // Define the shape of your common frontmatter properties here for better type safety
  interface Frontmatter {
    title: string;
    description?: string;
    // Add any other properties you expect in your MDX frontmatter
    [key: string]: any; // Allows for any other properties not explicitly defined
  }

  // Type for the Content component itself
  const Content: (props: { components?: Record<string, any> }) => JSX.Element;

  // Export Content and Frontmatter for named imports
  export { Content, Frontmatter };

  // Define the shape of the default export when you `import MyMdxFile from './file.mdx'`
  export default interface MDXModule {
    Content: typeof Content;
    frontmatter: Frontmatter;
  }
}
// getStaticPaths.js
import fs from 'fs';
import path from 'path';

export async function getStaticPaths() {
  // Read paths from a pre-generated JSON file
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  return {
    paths: data.posts.map((post) => ({
      params: { id: post.id },
    })),
    fallback: false,
  };
}

//getStaticProps.js
import fs from 'fs';
import path from 'path';
export async function getStaticProps({ params }) {
  // Read post data from a pre-generated JSON file
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const post = data.posts.find((p) => p.id === params.id);

  return { props: { post } };
}

// Create a dummy posts.json file for demonstration
//This must be added for the solution to work, it emulates the process of having consistent data across builds.
//It represents data that is independently generated and does not depend on external requests.
const posts = [
  { id: '1', title: 'Post 1' },
  { id: '2', title: 'Post 2' },
];
fs.writeFileSync(path.join(process.cwd(), 'data', 'posts.json'), JSON.stringify({ posts }, null, 2));
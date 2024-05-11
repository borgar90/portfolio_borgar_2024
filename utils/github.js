const fetchGitHubStats = async () => {
  const response = await fetch("https://api.github.com/users/borgar90", {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub data");
  }

  return await response.json();
};

export const fetchGitHubRepos = async () => {
  const response = await fetch("https://api.github.com/users/borgar90/repos", {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub repositories");
  }

  return await response.json(); // This will return an array of repositories
};

export default fetchGitHubStats;

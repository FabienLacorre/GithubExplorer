const RequestRepositories = async (value: string) => {
  let error = "";
  const req = await fetch(
    `https://api.github.com/search/repositories?q=${value}`
  );
  if (req.status == 403) {
    error = "Too mutch requests... please retry later";
  }
  if (req.status == 404) {
    error = "Not found";
  }
  const newData = await req.json();
  if (newData?.items?.length == 0 || req.status == 422) {
    error = "Sorry, no results for your query";
  }
  return {
    response: newData,
    error: error,
  };
};

const formatIssuesRequest = (owner: string, repo: string, state: string) => {
  const options = {
    since: {
      date: "2020-01-01",
      time: "00:00:00",
    },
  };
  return `https://api.github.com/repos/${owner}/${repo}/issues?state=${state}&per_page=100&since=${options["since"]["date"]}T${options["since"]["time"]}Z&sort=updated`;
};

const RequestIssues = async (context: any) => {
  const { owner, repo, description } = context.query;

  const promises = [];
  const PromiseJson = [];

  if (owner && repo) {
    promises.push(fetch(formatIssuesRequest(owner, repo, "open")));
    promises.push(fetch(formatIssuesRequest(owner, repo, "closed")));

    const resPromises = await Promise.all(promises);
    const req = resPromises[0];
    const closeReq = resPromises[1];

    PromiseJson.push(req.json());
    PromiseJson.push(closeReq.json());

    const resPromisesJson = await Promise.all(PromiseJson);
    const openedIssues = resPromisesJson[0];
    const closedIssues = resPromisesJson[1];

    return {
      props: {
        openedIssues,
        owner,
        repo,
        description: description == null ? "" : description,
        closedIssues,
      },
    };
  } else {
    return {
      props: {
        openedIssues: [],
        owner: "",
        repo: "",
        description: "",
        closedIssues: [],
      },
    };
  }
};

export { RequestRepositories, RequestIssues };

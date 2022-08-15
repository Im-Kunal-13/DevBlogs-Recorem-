import axios from "axios";

const base = process.env.NEXT_PUBLIC_API_ENDPOINT || "http://localhost:4000";

const userBase = `${base}/api/users`;
const authBase = `${base}/api/auth`;
const postBase = `${base}/api/post`;

// User
export function registerUser(payload: {
  username: string;
  password: string;
  email: string;
  confirmPassword: string;
  pic: string;
}) {
  return axios.post(userBase, payload).then((res) => res.data);
}

export function getUser(userId: string) {
  return axios
    .get(userBase + `/${userId}`, {
      withCredentials: true,
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

// Authentication
export function login(payload: { email: string; password: string }) {
  return axios
    .post(authBase, payload, {
      withCredentials: true,
    })
    .then((res) => res.data.user);
}

// Blog
export function createBlog(payload: {
  title: string;
  description: string;
  coverImage: string;
  categories: string[];
}) {
  return axios
    .post(postBase + "/createPost", payload, {
      withCredentials: true,
    })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
}

export function getAllBlogs() {
  return axios
    .get(postBase + "/allposts", {
      withCredentials: true,
    })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
}

export function getUserBlogs(userId: string) {
  return axios
    .get(postBase + `/userposts/${userId}`, {
      withCredentials: true,
    })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
}

export function getBlog(blogId: string) {
  return axios
    .get(postBase + `/${blogId}`, {
      withCredentials: true,
    })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
}

export function likePost(blogId: string) {
  return axios
    .put(
      postBase + `/like/${blogId}`,
      {},
      {
        withCredentials: true,
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function unlikePost(blogId: string) {
  return axios
    .put(
      postBase + `/unlike/${blogId}`,
      {},
      {
        withCredentials: true,
      }
    )
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
}

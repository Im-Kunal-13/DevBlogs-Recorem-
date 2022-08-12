import { useRouter } from "next/router";
import React from "react";
import HomeNav from "../../components/Home/HomeNav";
import LogoutModal from "../../components/LogoutModal";
import BlogPost from "../../containers/Blog/BlogPost";
import ThemeLayout from "../../layout/themeLayout";

const Blog = () => {
  const router = useRouter();
  const { blogId } = router.query;

  return (
    <ThemeLayout>
      <HomeNav />
      <LogoutModal />
      <BlogPost />
    </ThemeLayout>
  );
};

export default Blog;

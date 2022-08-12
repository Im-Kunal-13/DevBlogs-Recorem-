import HomeNav from "../components/Home/HomeNav";
import CreatePost from "../components/Blog/CreatePost";
import ThemeLayout from "../layout/themeLayout";
import LogoutModal from "../components/LogoutModal";

type Props = {};

const Home = (props: Props) => {
  return (
    <ThemeLayout>
      <HomeNav />
      <LogoutModal />
      <CreatePost />
    </ThemeLayout>
  );
};

export default Home;

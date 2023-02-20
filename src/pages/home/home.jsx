import Posts from "../../components/posts/posts";
import Stories from "../../components/stories/stories";
import Share from "../../components/share/Share";
import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <Stories />
      <Share />
      <Posts />
    </div>
  );
}

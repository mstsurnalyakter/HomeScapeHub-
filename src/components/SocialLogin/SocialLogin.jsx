import { FcGoogle } from "react-icons/fc";
import { BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import useContextData from '../../hooks/useContextData';
import { useLocation, useNavigate } from "react-router";

const SocialLogin = () => {
  const { googleLogin, githubLogin, twitterLogin } = useContextData();

  // navigate user
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state || "/";

  const handleSocialLogin = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        navigate(from);
      }
    });
  };

  return (
    <>
      <div className="card-body space-y-1">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn text-lg"
        >
          <FcGoogle />
          Google
        </button>
        <button
          onClick={() => handleSocialLogin(githubLogin)}
          className="btn text-lg text-white bg-[#c04ddd] hover:bg-[#c04ddd]"
        >
          <FaGithub className="text-[bg-[#77228C]]" />
          GitHub
        </button>
        <button
          onClick={() => handleSocialLogin(twitterLogin)}
          className="btn bg-[#00ACED] hover:bg-[#00ACED] text-lg text-white"
        >
          <BsTwitter />
          Twitter
        </button>
      </div>
    </>
  );
}



export default SocialLogin
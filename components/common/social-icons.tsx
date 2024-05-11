import { FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

function SocialMediaIcons() {
  return (
    <div>
      {/* Define SVG filter */}
      <svg width="0" height="0">
        <defs>
          <filter id="icon-shadow" height="130%">
            <feDropShadow
              dx="1"
              dy="2"
              stdDeviation="1"
              floodColor="rgba(0,0,0,0.4)"
            />
          </filter>
        </defs>
      </svg>

      <div className="flex flex-row gap-3 mt-5">
        <FaTwitter
          size={35}
          className="hover:scale-110 transition-transform cursor-pointer"
          style={{ color: "#1DA1F2", filter: "url(#icon-shadow)" }}
        />
        <FaFacebook
          size={35}
          style={{ color: "#1877F2", filter: "url(#icon-shadow)" }}
          className="hover:scale-110 transition-transform cursor-pointer"
        />
        <FaLinkedin
          size={35}
          style={{ color: "#0077b5", filter: "url(#icon-shadow)" }}
          className="hover:scale-110 transition-transform cursor-pointer"
        />
        <FaYoutube
          size={35}
          style={{ color: "#FF0000", filter: "url(#icon-shadow)" }}
          className="hover:scale-110 transition-transform cursor-pointer"
        />
      </div>
    </div>
  );
}

export default SocialMediaIcons;

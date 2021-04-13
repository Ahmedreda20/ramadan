const linksContainer = document.querySelector(".great_controls");
const userContent = document.querySelector(".user_name");

function CheckUsers() {
  let user = localStorage.getItem("name");
  let searchPrams = new URLSearchParams(window.location.search);
  if (user && searchPrams.has("name")) {
    SetUserInfo(user, searchPrams.get("name"));
  } else {
    window.open("./", "_self");
  }
}

CheckUsers();

function SetUserInfo(name, params) {
  userContent.innerHTML = name || params;
  linksContainer.innerHTML += ` <a
          href="${`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            window.location.href
          )}&text=احصل على بطاقة رمضانية وشاركها مع اصدقاءك للحصول على واحدة اخرى وكل عام وانتم بخير ❤✨`}"
          target="_blank"
          rel="noopener noreferrer"
          class="social_link social_twitter"
        >
          <i class="fab fa-twitter"></i>
        </a>
        <a
          href="${`https://www.facebook.com/sharer.php?u=${encodeURIComponent(
            window.location.href
          )}`}"
          target="_blank"
          rel="noopener noreferrer"
          class="social_link social_face"
        >
          <i class="fab fa-facebook"></i>
        </a>
        <a
          href="${`whatsapp://send?text=${encodeURIComponent(
            window.location.href
          )}&title=احصل على بطاقة رمضانية وشاركها مع اصدقاءك للحصول على واحدة اخرى وكل عام وانتم بخير ❤✨`}"
          target="_blank"
          rel="noopener noreferrer"
          class="social_link social_whats"
        >
          <i class="fab fa-whatsapp"></i>
        </a>
        <a
          href="javascript:CopyToClipBoard(0)"
          class="social_link social_clip"
        >
          <i class="fas fa-link"></i>
        </a>`;
}

function CopyToClipBoard() {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(
      window.location.href +
        "\n احصل على بطاقة رمضانية وشاركها مع اصدقاءك للحصول على واحدة اخرى وكل عام وانتم بخير ❤✨"
    );
  }
}

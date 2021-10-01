import logo from './logo.svg';
import './App.css';
import header from './components/header';
import nav from './components/nav';
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt=""/>
          <div class="App-header-left__input">
            {/* <span class="material-icons"> search </span> */}
            <input type="text" placeholder="Tìm kiếm trên Facebook"/>
          </div>
        </div>

        <div className="App-header-mid">
          <div class="header__icon active">
          <img class="user__avatar" src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png" alt=""/>
          </div>
          <div class="header__icon">
            <img class="user__avatar" src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png" alt=""/>
          </div>
          <div class="header__icon">
            <img class="user__avatar" src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png" alt=""/>
          </div>
          <div class="header__icon">
            <img class="user__avatar" src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png" alt=""/>
          </div>
          <div class="header__icon">
            <img class="user__avatar" src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png" alt=""/>
          </div>
        </div>
        <div className="App-header-right">
          <div class="header__info">
            <img
              class="user__avatar"
              src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/241356511_2043080132507152_7090660308191457937_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=iVWra1Xke3sAX8P3Gpm&_nc_ht=scontent.fhan2-4.fna&oh=6106256a931cbe3612043313b4414ec9&oe=61735342" alt=""/>
            <h4>Thảo</h4>
          </div>
          <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png"
                alt=""
              />
          <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png"
                alt=""
              />
          <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png"
                alt=""
              />
          <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png"
                alt=""
              />
        </div>
      </header>

      <div className="body">
        <div class="sidebar">
          <div class="sidebar__row">
            <img class="user__avatar" src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/241356511_2043080132507152_7090660308191457937_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=iVWra1Xke3sAX8P3Gpm&_nc_ht=scontent.fhan2-4.fna&oh=6106256a931cbe3612043313b4414ec9&oe=61735342" alt=""/>
            <h4>Đỗ Thị Thu Thảo</h4>
          </div>
          <div class="sidebar__row">
            <img class="user__avatar" src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png" alt=""/>
            <h4>Bạn bè</h4>
          </div>
          <div class="sidebar__row">
            <img class="user__avatar" src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png" alt=""/>
            <h4>Trang</h4>
          </div>
          <div class="sidebar__row">
            <img class="user__avatar" src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/AYj2837MmgX.png" alt=""/>
            <h4>Kỷ niệm</h4>
          </div>
          <div class="sidebar__row">
            <img class="user__avatar" src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png" alt=""/>
            <h4>Đã lưu</h4>
          </div>
          <div class="sidebar__row">
            <img class="user__avatar" src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png" alt=""/>
            <h4>Nhóm</h4>
          </div>
        </div>

        <div className="newfeed">
          <div className="message-today">
            <div class="message-today__top">
              <img
                class="user__avatar"
                src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/241356511_2043080132507152_7090660308191457937_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=iVWra1Xke3sAX8P3Gpm&_nc_ht=scontent.fhan2-4.fna&oh=6106256a931cbe3612043313b4414ec9&oe=61735342"
                alt=""
              />
              <form>
                <input class="messageSender__input" placeholder="Thảo ơi, bạn đang nghĩ gì thế?" type="text" />
              </form>
            </div>

            <div class="message-today__bottom">
              <div class="message-today__bottom-icon">
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png"
                alt=""
              />
                <h3>Video trực tiếp</h3>
              </div>
              
              <div class="message-today__bottom-icon">
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png"
                alt=""
              />
                <h3>Ảnh/Video</h3>
             </div>

              <div class="message-today__bottom-icon">
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png"
                alt=""
              />
                <h3>Cảm xúc/Hoạt động</h3>
              </div>
            </div>
          </div>
        
          <div className="post">
            <div class="post__top">
              <img
                class="user__avatar post__avatar"
                src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/241356511_2043080132507152_7090660308191457937_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=iVWra1Xke3sAX8P3Gpm&_nc_ht=scontent.fhan2-4.fna&oh=6106256a931cbe3612043313b4414ec9&oe=61735342"
              alt=""/>
              <div class="post__topInfo">
                <h3>Đỗ Thị Thu Thảo</h3>
                <p>20:30 30/4</p>
              </div>
            </div>

            <div class="post__content">
              <p>Làng văn hóa</p>
            </div>

            <div class="post__image">
              <img
                src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/s1080x2048/242212455_4432532193504211_3589988222554559365_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=jYp85QlqGXQAX9N2j7T&tn=lQb5xe7TNSj7Mi31&_nc_ht=scontent.fhan2-4.fna&oh=90d1de1468eab509c64790979124df24&oe=6173D283"
                alt=""
              />
            </div>

            <div class="post__options">
              <div class="post__option">
                <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png"
                alt=""
              />
                <p>Like</p>
              </div>

              <div class="post__option">
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png"
                alt=""
              />
                <p>Comment</p>
              </div>

              <div class="post__option">
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png"
                alt=""
              />
                <p>Share</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

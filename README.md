<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>假 YouTube 频道</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            background-color: #f9f9f9;
        }
        .header {
            color: black;
            padding: 10px 20px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            position: relative;
            background-color: #fff;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .logo {
            height: 100px;
            margin-right: 20px;
            position: absolute;
            top: 0;
            left: 0;
        }
        .menu-icon {
            width: 15px;
            height: 15px;
            margin-right: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            cursor: pointer;
            z-index: 1;
        }
        .menu-icon div {
            height: 2px;
            background-color: black;
            border-radius: 2px;
        }
        .search-bar {
            margin: 10px auto;
            max-width: 600px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .search-bar input[type="text"] {
            width: 80%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
        }
        .search-bar button {
            padding: 10px;
            background-color: #ccc;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            margin-left: 10px;
        }
        .search-bar button:hover {
            background-color: #bbb;
        }
        .channel-background {
            background-color: #eee;
            padding: 20px;
        }
        .channel-info {
            display: flex;
            align-items: center;
            padding: 20px;
            background-color: white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .channel-info img {
            border-radius: 50%;
            width: 100px;
            height: 100px;
            margin-right: 20px;
        }
        .channel-title {
            font-size: 28px;
            font-weight: 300;
        }
        .channel-stats {
            margin-top: 5px;
            color: gray;
            font-size: 12px;
        }
        .channel-description {
            padding: 10px 20px;
            background-color: white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            margin: 20px;
            font-size: 14px;
        }
        .nav-buttons {
            display: flex;
            justify-content: center;
            margin: 20px 0;
        }
        .nav-buttons button {
            background-color: #eee;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            margin: 0 10px;
            border-radius: 4px;
        }
        .nav-buttons button:hover {
            background-color: #ddd;
        }
        .video-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            padding: 20px;
        }
        .video-card {
            background-color: white;
            border-radius: 5px;
            overflow: hidden;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .video-card img {
            width: 100%;
        }
        .video-title {
            padding: 10px;
            font-size: 16px;
            font-weight: bold;
        }
        .video-views, .video-time {
            padding: 0 10px 10px;
            color: gray;
            font-size: 14px;
        }
        .menu {
            display: none;
            position: absolute;
            top: 50px;
            left: 0;
            background-color: white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            width: 200px;
            z-index: 2;
        }
        .menu a {
            display: block;
            padding: 10px 20px;
            text-decoration: none;
            color: black;
        }
        .menu a:hover {
            background-color: #f0f0f0;
        }
        a {
            text-decoration: none;
            color: inherit;
        }
        a:hover, a:focus, a:visited {
            text-decoration: none;
            color: inherit;
        }
    </style>
    <script>
        let menuVisible = false;

        function toggleMenu() {
            menuVisible = !menuVisible;
            document.getElementById("menu").style.display = menuVisible ? "block" : "none";
        }

        function searchChannel() {
            const query = document.getElementById("channelSearchInput").value;
            if (query) {
                alert("搜索内容: " + query);
            } else {
                alert("请输入搜索内容");
            }
        }
    </script>
</head>
<body>

    <div class="header">
        <div class="menu-icon" onclick="toggleMenu()">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <img src="my-logo.png" alt="自定义 Logo" class="logo">
        <div id="menu" class="menu">
            <a href="#">主页</a>
            <a href="#">视频</a>
            <a href="#">播放列表</a>
            <a href="#">社区</a>
        </div>
    </div>
    
    <div class="search-bar">
        <input type="text" placeholder="搜索...">
        <button onclick="searchChannel()">搜索</button>
    </div>

    <div class="channel-background" style="background-image: url('your-background-image.jpg'); background-size: cover; background-position: center;">
        <h2>Lks在法国</h2>
    </div>

    <div class="channel-info">
        <img src="channel-avatar.jpg" alt="频道头像">
        <div>
            <div class="channel-title">Lks在法国</div>
            <div class="channel-stats">@nerdzun • 549万位订阅者 • 593 个视频</div>
        </div>
    </div>

    <div class="channel-description">
        欢迎来到我们的游戏频道！在这里，我们将分享各种有趣和搞笑的视频内容，包括挑战、游戏、旅行和更多。请与我一起享受欢乐时光！
    </div>

    <div class="nav-buttons">
        <button onclick="alert('跳转到主页')">主页</button>
        <button onclick="alert('跳转到视频')">视频</button>
        <button onclick="alert('跳转到播放列表')">播放列表</button>
        <button onclick="alert('跳转到社区')">社区</button>
    </div>

    <div class="video-grid">
        <div class="video-card">
            <a href="video1.html" target="_blank">
                <img src="video-thumbnail1.jpg" alt="视频缩略图">
                <div class="video-title">只狼初体验！</div>
                <div class="video-views">观看次数: 221万</div>
                <div class="video-time">时长: 01:27:54</div>
            </a>
        </div>
        <div class="video-card">
            <a href="video2.html" target="_blank">
                <img src="video-thumbnail2.jpg" alt="视频缩略图">
                <div class="video-title">视频标题 2</div>
                <div class="video-views">观看次数: 465万</div>
                <div class="video-time">时长: 01:24:15</div>
            </a>
        </div>
        <div class="video-card">
            <a href="video3.html" target="_blank">
                <img src="video-thumbnail3.jpg" alt="视频缩略图">
                <div class="video-title">视频标题 3</div>
                <div class="video-views">观看次数: 193万</div>
                <div class="video-time">时长: 01:16:14</div>
            </a>
        </div>
        <div class="video-card">
            <a href="video4.html" target="_blank">
                <img src="video-thumbnail4.jpg" alt="视频缩略图">
                <div class="video-title">我来助你！</div>
                <div class="video-views">观看次数: 241万</div>
                <div class="video-time">时长: 01:32:25</div>
            </a>
        </div>
   <div class="video-card">
            <a href="video4.html" target="_blank">
                <img src="video-thumbnail5.jpg" alt="视频缩略图">
                <div class="video-title">黑神话:悟空 启动！</div>
                <div class="video-views">观看次数: 347万</div>
                <div class="video-time">时长: 01:17:43</div>
            </a>
        </div>
 </div>
   <div class="video-card">
            <a href="video4.html" target="_blank">
                <img src="video-thumbnail6.jpg" alt="视频缩略图">
                <div class="video-title">视频标题 6</div>
                <div class="video-views">观看次数: 4,567</div>
                <div class="video-time">时长: 5:00</div>
            </a>
        </div>
</div>
   <div class="video-card">
            <a href="video4.html" target="_blank">
                <img src="video-thumbnail7.jpg" alt="视频缩略图">
                <div class="video-title">视频标题 7</div>
                <div class="video-views">观看次数: 4,567</div>
                <div class="video-time">时长: 5:00</div>
            </a>
        </div>
    </div>

</body>
</html>

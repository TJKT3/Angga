<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="pragma" content="no-cache" />
    <meta http-equiv="expires" content="-1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Selamat Datang di Hotspot Angga</title>
    <style>
        /* Reset sederhana */
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Comic Sans MS', sans-serif; }
        body, html { height: 100%; overflow: hidden; background: #87ceeb; }
        .dino-bg { position: absolute; width: 200%; height: 200%; background-image: url('https://i.ibb.co/vZCwY2r/dino-bg.png'); background-repeat: repeat; animation: moveDino 30s linear infinite; z-index: -1; }
        @keyframes moveDino { 0% { transform: translateX(0) translateY(0); } 50% { transform: translateX(-25%) translateY(-5%); } 100% { transform: translateX(0) translateY(0); } }
        .main { display: flex; justify-content: center; align-items: center; height: 100%; color: #fff; }
        .wrap { display: flex; flex-direction: column; justify-content: center; align-items: center; width: 90%; max-width: 400px; background: rgba(0,0,0,0.5); padding: 20px; border-radius: 15px; text-align: center; }
        h1 { font-size: 2rem; margin-bottom: 15px; text-shadow: 2px 2px #000; }
        form input[type="text"], form input[type="password"] { width: 100%; padding: 15px; margin: 10px 0; border: none; border-radius: 10px; font-size: 1rem; }
        form input[type="submit"] { padding: 15px; margin-top: 15px; border: none; border-radius: 10px; background: #ff6f00; color: #fff; font-size: 1.2rem; cursor: pointer; transition: 0.3s; }
        form input[type="submit"]:hover { background: #ffa500; }
        p.info { margin-top: 15px; font-size: 0.9rem; }
        p.bt { font-size: 0.8rem; color: #ccc; margin-top: 10px; }
    </style>

    <!-- Load MD5 library -->
    <script src="/md5.js"></script>
    <script>
        // Fungsi login CHAP
        function doLogin() {
            if(document.sendin) {
                document.sendin.username.value = document.login.username.value;
                document.sendin.password.value = hexMD5('$(chap-id)' + document.login.password.value + '$(chap-challenge)');
                document.sendin.submit();
            }
            return false;
        }
    </script>
</head>

<body>
    <div class="dino-bg"></div>

    <!-- Hidden CHAP form -->
    <form name="sendin" action="$(link-login-only)" method="post" style="display:none">
        <input type="hidden" name="username" />
        <input type="hidden" name="password" />
        <input type="hidden" name="dst" value="$(link-orig)" />
        <input type="hidden" name="popup" value="true" />
    </form>

    <div class="main">
        <div class="wrap">
            <h1>Selamat Datang di Hotspot Angga</h1>
            <!-- Form login -->
            <form name="login" action="$(link-login-only)" method="post" onsubmit="return doLogin()">
                <input type="hidden" name="dst" value="$(link-orig)" />
                <input type="hidden" name="popup" value="true" />
                <input name="username" type="text" value="$(username)" placeholder="Username" required />
                <input name="password" type="password" placeholder="Password" required />
                <input type="submit" value="Connect" />
            </form>
            <p class="info">
                Nikmati akses WiFi cepat dengan tema dinosaurus! 🦖
            </p>
            <p class="info bt">Powered by MikroTik RouterOS</p>
        </div>
    </div>
</body>

</html>
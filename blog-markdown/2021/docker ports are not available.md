# docker: Error response from daemon: Ports are not available: listen tcp 0.0.0.0:xxxx: bind: An attempt was made to access a socket in a way forbidden by its access permissions.

每次新人報到，詭異的事件也會出現。

我新同事表示他把 container 砍了又建立，砍了又建立... (不知道怎麼弄的)，然後突然就出現下面這個錯誤:

**_docker: Error response from daemon: Ports are not available: listen tcp 0.0.0.0:xxxx: bind: An attempt was made to access a socket in a way forbidden by its access permissions._**

我自己環境沒有辦法重現這個錯誤。

然後新同事表示只要重新 docker run -p xxxx:aaaa 使用到 xxxx Port 號，就會出現這個問題。

docker run 執行下去後，container 有被建立，但是 Stutus 是 Created 不是 Up ，完全就是一個不能動的狀態。

新同事試著重開機、重新啟動 docker 、重新安裝 docker 都無解。

而我也用 netstat - ano 去查看 xxxx 是否被占住了，但是沒有發現任何 xxxx Port 號。

<br>

最後是另外一同事在 stackoverflow 找到一篇

[Ports are not available: listen tcp 0.0.0.0/50070: bind: An attempt was made to access a socket in a way forbidden by its access permissions](https://stackoverflow.com/questions/65272764/ports-are-not-available-listen-tcp-0-0-0-0-50070-bind-an-attempt-was-made-to)

```
net stop winnat
docker start ...
net start winnat
```

然後用管理員權限去執行就解決了。

這段主要是先暫時停止 winnat (Windows NAT Driver) ，然後啟動 container ，最後在開啟 winnat 。

<br>

哀~又一篇 It works.... ，why?

![](https://lh3.googleusercontent.com/-EXzrexcozX4/YVyJaVOK4kI/AAAAAAAACw8/22G8MHv4G5MMNyBN82e6cUNPJ8bGvXPxQCLcBGAsYHQ/w312-h400/DWu-97EXUAAv7WQ%2B799%25C3%25971024.jpg)

## 參考

- [Docker error "Ports are not available" on Windows 10](http://www.herlitz.nu/2020/12/01/docker-error-ports-are-not-available-on-windows-10/)
- [Ports are not available: listen tcp 0.0.0.0/50070: bind: An attempt was made to access a socket in a way forbidden by its access permissions](https://stackoverflow.com/questions/65272764/ports-are-not-available-listen-tcp-0-0-0-0-50070-bind-an-attempt-was-made-to)
- [Windows NAT Driver](http://batcmd.com/windows/10/services/winnat/)

<!--https://www.peterchang.tw/2021/10/docker-error-response-from-daemon-ports.html-->

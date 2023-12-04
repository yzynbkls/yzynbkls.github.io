var posts=["2023/11/28/BGP路由反射器/","2023/11/28/BGP实验/","2023/11/28/BGP路由优选/","2023/11/30/FTP实验/","2023/11/25/DHCP基础配置/","2023/11/29/VRRP基础实验/","2023/11/25/nat实验/","2023/12/02/telnet/","2023/11/24/vlan间通信/","2023/11/26/路由策略/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
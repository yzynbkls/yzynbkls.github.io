var posts=["2023/11/28/BGP实验/","2024/05/11/BGP总结/","2023/11/28/BGP路由优选/","2023/11/28/BGP路由反射器/","2023/11/25/DHCP基础配置/","2023/11/30/FTP实验/","2023/12/05/Hybrid接口/","2024/06/21/IA综合实验/","2024/04/20/IS-IS总结/","2024/07/01/MPLSVPN实验/","2024/05/02/PPP-PPPoE/","2024/05/22/SSH/","2024/05/29/STP-RSTP-MSTP总结/","2024/05/08/STP拓扑变更机制/","2023/12/08/USG5500防火墙基础实验/","2024/06/23/VRF/","2024/05/25/VRRP/","2023/11/29/VRRP基础实验/","2023/12/20/WLAN基础配置（ap上线）/","2024/06/29/ip综合实验/","2023/12/05/mpls实验/","2023/11/25/nat实验/","2024/04/18/opsf总结/","2023/12/07/rstp和mstp/","2023/12/02/telnet/","2023/11/24/vlan间通信/","2024/03/30/交换机工作原理/","2024/05/26/大型WLAN技术(1)/","2024/03/24/子网划分/","2024/07/08/数据通信基础/","2024/05/10/组播/","2023/11/26/路由策略/","2023/12/07/链路聚合/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
function hobby(icon,title,summary) {
  this.icon = icon;
  this.title = title;
  this.summary = summary;
}

const HOBBIES = [
  new hobby(
    "fa-solid fa-4x fa-computer",
    "Computers",
    "I've fell in love with computers for as long as I can remember.<br> \
    It started out with simply playing video games and wanting to create my own, as well as make my own Flash cartoons when I discovered Newgrounds in my Secondary School years.<br><br> \
    \
    It wasn't until College that I properly began developing skills in Adobe Creative Suite and, in the prime time of my manga-drawing hobby, spent a lot of time on Clip Studio Paint with my Wacom Cintiq 13HD tablet.<br><br> \
    \
    When I started University, I was given a Toshiba Satellite Pro L870-13U laptop as part of a student support program. During my studies at Southampton Solent, I was surrounded myself with Cyberpunk and Dystopian works like Neuromancer, Bladerunner, Ghost in the Shell and Nineteen-Eighty Four which piqued my interest in hacking, mass surveillance and online privacy.<br><br>\
    \
    I wasn't interested in web design or programming, having been overwhelmed by the apparent complexity of it all, until I was prompted to study it in preparation for my Postgraduate studies. Around that time, my Toshiba was wearing down with age so I sought to revive it and was introduced to installing Linux as one of several solutions. \
    \
    While I still, mainly, use Windows, I have since pursued information Linux and BSD operating systems and use MX Linux in a virtual machine for the majority of my online activities. <br><br> \
    \
    Now, while studying web design, I am interested in learning Python and ethical hacking."
  ),
  new hobby(
    "fa-brands fa-4x fa-linux",
    "Linux&nbsp;/&nbsp;BSD",
    "When I started delving into the world of Linux during my Postgraduate days, my first distro was Linux Mint. Even while I used it as my laptops daily driver (and Windows on my desktop for study and work), I chased up information for the best distro to use and discovered a lot there is to know about open-source software.<br><br> \
    \
    It's thanks to that I rely on a lot of FOSS apps like KeePassXC, VeraCrypt and VirtualBox. I now do most of my browsing, emails and such on a virtual machine running MX Linux, a popular Debian-based distro without systemD - a popular but controversial init software for potential security flaws.<br><br>\
    \
    Now I'm eager to learn how to use more advanced operating systems like QubesOS, Gentoo, Void Linux and OpenBSD."
  ),
  new hobby(
    "fa-solid fa-4x fa-terminal",
    "Hacking",
    "My interest in hacking or penetration testing was influenced from the Cyberpunk works I immersed myself in like Ghost in the Shell and William Gibson's Sprawl trilogy in which their protagonists project their minds into cyberspace to break into computer systems a la Tron.<br><br> \
    \
    As I played around with Linux, my discovery of pentesting distros like Kali Linux and Parrot OS inspired to want to study hacking for real. \
    \
    Among the games I play are hacking simulators like Uplink, Hacknet and NITE Team 4 - the latter two being more grounded in real-life hacking techniques.<br><br> \
    \
    <i>(Please don't arrest me)</i>"
  ),
  new hobby(
    "fa-solid fa-4x fa-photo-film",
    "Anime&nbsp;/&nbsp;Manga (and drawing)",
    "Like many people in my generation, I was introduced to Anime and Manga by the likes of Pokèmon and Yu-Gi-Oh! (which proved to me to be an expensive hobby!).<br><br> \
    \
    Ever since Secondary School, I nurtured a hobby of drawing my own manga characters and used the manga I bought for references. \
    \
    Right now, my favorite kind of anime are Slice of Life shows like K-On!, Aria, Hakumei & Mikochi and Studio Ghibli films like When Marnie Was There to simply unwind after a day of work.<br><br> \
    \
    Also, I prefer subtitles over English dubs (with few exceptions)."
  ),
  new hobby(
    "fa-solid fa-4x fa-camera-retro",
    "Photography",
    "I enjoy taking photographs whenver I travel abroad and take over hundreds of RAW photos to practise editing and retouching.<br><br>\
    \
    Among the places I've visited and photographed are Japan, America, Sicily and Bulgaria."
  ),
  new hobby(
    "fa-solid fa-4x fa-gamepad",
    "Video Games",
    "I used to own a Sony Playstation, Nintendo Gamecube and Xbox 360.<br> \
    But now I own a Nintendo Wii and a disassembled slim Playstation 2 (Don't ask). <br>But I mostly play games on my PC and I strictly prefer retro and indie games.<br><br> \
    \
    My favorites include <a href='https://store.steampowered.com/app/70/HalfLife/'>Half-Life</a>, <a href='https://store.steampowered.com/app/19830/Tom_Clancys_Rainbow_Six_3_Gold/'>Rainbow Six 3: Raven Shield</a>, <a href='https://www.gog.com/game/deus_ex'>Deus Ex</a>, <a href='http://www.openarena.ws/'>OpenArena</a>, <a href='https://xonotic.org/'>Xonotic</a>, <a href='https://www.moddb.com/mods/brutal-doom'>Brutal Doom</a>, <a href='https://www.gog.com/game/system_shock_2'>System Shock 2</a>, <a href='https://www.minecraft.net/'>Minecraft</a>,<a href='http://waifubartending.com/'>VA-11 Hall-A: Cyberpunk Bartender Action</a>, <a href='https://www.hacknet-os.com/'>Hacknet</a> and <a href='https://www.niteteam4.com/'>NITE Team 4</a>"
  )
];

export default HOBBIES;

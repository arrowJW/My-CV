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
    It started out with simply playing video games and wanting to create my own, as well as make my own Flash cartoons when I discovered <a href='https://www.newgrounds.com/' target='_blank'>Newgrounds</a> in my Secondary School years.<br><br> \
    \
    It wasn't until College that I properly began developing skills in Adobe Creative Suite and, in the prime time of my manga-drawing hobby, spent a lot of time on <a href='https://www.clipstudio.net/en/' target='_blank'>Clip Studio Paint</a> with my Wacom Cintiq 13HD tablet.<br><br> \
    \
    When I started University, I was given a Toshiba Satellite Pro L870-13U laptop as part of a student support program. During my studies at Southampton Solent, I was surrounded myself with Cyberpunk and Dystopian works like <a href='https://wikiless.org/wiki/Neuromancer' target='_blank'>Neuromancer</a>, <a href='https://wikiless.org/wiki/Blade_Runner' target='_blank'>Blade Runner</a>, <a href='https://wikiless.org/wiki/Ghost_in_the_Shell_(1995_film)' target='_blank'>Ghost in the Shell</a> and <A href='https://wikiless.org/wiki/Nineteen_Eighty-Four' target='_blank'>Nineteen-Eighty Four</a> which piqued my interest in hacking, mass surveillance and online privacy.<br><br>\
    \
    I wasn't interested in web design or programming, having been overwhelmed by the apparent complexity of it all, until I was prompted to study it in preparation for my Postgraduate studies. Around that time, my Toshiba was wearing down with age so I sought to revive it and was introduced to installing Linux as one of several solutions. \
    \
    While I still, mainly, use <a href='https://wikiless.org/wiki/Microsoft_Windows' target='_blank'>Windows</a>, I have since pursued information <a href='https://wikiless.org/wiki/Linux' traget='_blank'>Linux</a> and <a href='https://wikiless.org/wiki/Berkeley_Software_Distribution' target='_blank'>BSD</a> operating systems and use <a href='https://mxlinux.org/' target='_blank'>MX Linux</a> in a virtual machine for the majority of my online activities. <br><br> \
    \
    Now, while studying web design, I am interested in learning Python and ethical hacking."
  ),
  new hobby(
    "fa-brands fa-4x fa-linux",
    "Linux&nbsp;/&nbsp;BSD",
    "When I started delving into the world of Linux during my Postgraduate days, my first distro was <a href='https://linuxmint.com/'>Linux Mint</a>. Even while I used it as my laptops daily driver (and Windows on my desktop for study and work), I chased up information for the best distro to use and discovered a lot there is to know about <a href='https://wikiless.org/wiki/Free_and_open-source_software' target='_blank'>Free and Open-Source Software.</a><br><br> \
    \
    It's thanks to that I rely on a lot of FOSS apps like <a href='https://keepassxc.org/' target='_blank'>KeePassXC</a>, <a href='https://www.veracrypt.fr/code/VeraCrypt/' target='_blank'>VeraCrypt</a> and <a href='https://www.virtualbox.org/' target='_blank'>VirtualBox</a>. I now do most of my browsing, emails and such on a virtual machine running MX Linux, a popular <a href='https://www.debian.org/' target='_blank'>Debian-based</a> distro without <a href='https://nosystemd.org/' target='_blank'>systemd</a> - a popular but controversial init software for potential security flaws.<br><br>\
    \
    Now I'm eager to learn how to use more advanced operating systems like <a href='https://www.qubes-os.org/' target='_blank'>QubesOS</a> and <a href='https://www.openbsd.org/' target='_blank'>OpenBSD</a>."
  ),
  new hobby(
    "fa-solid fa-4x fa-terminal",
    "Hacking",
    "My interest in hacking or penetration testing was influenced from the <a href='https://wikiless.org/wiki/Cyberpunk' target='_blank'>Cyberpunk</a> works I immersed myself in like Ghost in the Shell and William Gibson's Sprawl trilogy in which their protagonists project their minds into cyberspace to break into computer systems a la Tron.<br><br> \
    \
    As I played around with Linux, my discovery of pentesting distros like <a href='https://www.kali.org/' target='_blank'>Kali Linux</a> and <a href='https://www.parrotsec.org/' target='_blank'>Parrot OS</a> inspired to want to study hacking for real. \
    </i>"
  ),
  new hobby(
    "fa-solid fa-4x fa-photo-film",
    "Anime&nbsp;/&nbsp;Manga (and drawing)",
    "Like many people in my generation, I was introduced to Anime and Manga by the likes of <a href='https://wikiless.org/wiki/Pok%C3%A9mon_(TV_series)' target='_blank'>Pokèmon</a> and <a href='https://wikiless.org/wiki/Yu-Gi-Oh!' target='_blank'>Yu-Gi-Oh!</a> (which proved to me to be an <a href='https://wikiless.org/wiki/Yu-Gi-Oh!_Trading_Card_Game' target='_blank'>expensive hobby!</a>).<br><br> \
    \
    Ever since Secondary School, I nurtured a hobby of drawing my own manga characters and used the manga I bought for references. \
    \
    Right now, my favorite kind of anime are <a href='https://wikiless.org/wiki/Slice_of_life#Anime_and_manga' target='_blank'>Slice of Life</a> shows like <a href='https://wikiless.org/wiki/K-On!' target='_blank'>K-On!</a>, <a href='https://wikiless.org/wiki/Aria_(manga)' target='_blank'>Aria</a>, <a href='https://wikiless.org/wiki/Hakumei_and_Mikochi' target='_blank'>Hakumei & Mikochi</a> and <a href='https://wikiless.org/wiki/Studio_Ghibli' target='_blank'>Studio Ghibli</a> films like <a href='https://wikiless.org/wiki/When_Marnie_Was_There' target='_blank'>When Marnie Was There</a> to simply unwind after a day of work.<br><br> \
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
    My favorites include <a href='https://store.steampowered.com/app/70/HalfLife/' target='_blank'>Half-Life</a>, <a href='https://store.steampowered.com/app/19830/Tom_Clancys_Rainbow_Six_3_Gold/' target='_blank'>Rainbow Six 3: Raven Shield</a>, <a href='https://www.gog.com/game/deus_ex' target='_blank'>Deus Ex</a>, <a href='http://www.openarena.ws/' target='_blank'>OpenArena</a>, <a href='https://xonotic.org/' target='_blank'>Xonotic</a>, <a href='https://www.moddb.com/mods/brutal-doom' target='_blank'>Brutal Doom</a>, <a href='https://www.gog.com/game/system_shock_2' target='_blank'>System Shock 2</a>, <a href='https://www.minecraft.net/' target='_blank'>Minecraft</a> and <a href='http://waifubartending.com/' target='_blank'>VA-11 Hall-A: Cyberpunk Bartender Action</a>"
  )
];

export default HOBBIES;

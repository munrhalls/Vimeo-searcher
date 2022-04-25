import React, { useEffect, useState } from "react";
import { Video } from "./Video";

function Videos() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const LOCAL_STORAGE_LATEST_QUERY = "LOCAL_STORAGE_LATEST_QUERY";
  // localStorage.setItem(
  //   LOCAL_STORAGE_LATEST_QUERY,
  //   JSON.stringify({
  //     kind: "youtube#videoListResponse",
  //     etag: "gnuPROWqpIncskjZsjPFemJceWM",
  //     items: [
  //       {
  //         kind: "youtube#video",
  //         etag: "5TvVvrij0qPpAXXMk4vSu0hWa4w",
  //         id: "QO7e_RiMVQg",
  //         snippet: {
  //           publishedAt: "2022-04-24T17:00:22Z",
  //           channelId: "UCIPPMRA040LQr5QPyJEbmXA",
  //           title: "Insane $100,000 Challenge!",
  //           description:
  //             "Thanks to Rec Room for sponsoring this video! Download today for free at https://recroom.sng.link/Da56h/c2bz\n\nSUBSCRIBE OR YOU'LL HAVE BAD LUCK\n\nNew Merch - https://shopmrbeast.com\nJoin our discord server for your chance to compete in future Minecraft challenges!\nhttps://discord.gg/mrbeastgaming\n----------------------------------------------------------------\nfollow all of these or i will kick you\n• Facebook - https://www.facebook.com/MrBeast6000/\n• Twitter - https://twitter.com/MrBeast\n•  Instagram - https://www.instagram.com/mrbeast\n--------------------------------------------------------------------",
  //           thumbnails: {
  //             default: {
  //               url: "https://i.ytimg.com/vi/QO7e_RiMVQg/default.jpg",
  //               width: 120,
  //               height: 90,
  //             },
  //             medium: {
  //               url: "https://i.ytimg.com/vi/QO7e_RiMVQg/mqdefault.jpg",
  //               width: 320,
  //               height: 180,
  //             },
  //             high: {
  //               url: "https://i.ytimg.com/vi/QO7e_RiMVQg/hqdefault.jpg",
  //               width: 480,
  //               height: 360,
  //             },
  //             standard: {
  //               url: "https://i.ytimg.com/vi/QO7e_RiMVQg/sddefault.jpg",
  //               width: 640,
  //               height: 480,
  //             },
  //             maxres: {
  //               url: "https://i.ytimg.com/vi/QO7e_RiMVQg/maxresdefault.jpg",
  //               width: 1280,
  //               height: 720,
  //             },
  //           },
  //           channelTitle: "MrBeast Gaming",
  //           categoryId: "20",
  //           liveBroadcastContent: "none",
  //           localized: {
  //             title: "Insane $100,000 Challenge!",
  //             description:
  //               "Thanks to Rec Room for sponsoring this video! Download today for free at https://recroom.sng.link/Da56h/c2bz\n\nSUBSCRIBE OR YOU'LL HAVE BAD LUCK\n\nNew Merch - https://shopmrbeast.com\nJoin our discord server for your chance to compete in future Minecraft challenges!\nhttps://discord.gg/mrbeastgaming\n----------------------------------------------------------------\nfollow all of these or i will kick you\n• Facebook - https://www.facebook.com/MrBeast6000/\n• Twitter - https://twitter.com/MrBeast\n•  Instagram - https://www.instagram.com/mrbeast\n--------------------------------------------------------------------",
  //           },
  //         },
  //         contentDetails: {
  //           duration: "PT9M46S",
  //           dimension: "2d",
  //           definition: "hd",
  //           caption: "false",
  //           licensedContent: true,
  //           contentRating: {},
  //           projection: "rectangular",
  //         },
  //         statistics: {
  //           viewCount: "4790595",
  //           likeCount: "324173",
  //           favoriteCount: "0",
  //           commentCount: "14930",
  //         },
  //       },
  //       {
  //         kind: "youtube#video",
  //         etag: "ze1smf2H31Ws1p7_NurL4XN7AFY",
  //         id: "98fnuas8HdQ",
  //         snippet: {
  //           publishedAt: "2022-04-24T14:00:03Z",
  //           channelId: "UCXg4rJUbDP1IP3TmZ9KDpJg",
  //           title: "BUSTING 50 MYTHS in 50 HOURS!",
  //           description:
  //             "BUSTING 50 MYTHS in 50 HOURS! with Brianna 👊\n\n👕 MERCH - http://www.brimerch.com \n\n👀 FOLLOW ME HERE!\n🡆 Instagram - https://instagram.com/briarsement\n🡆 Twitter - https://twitter.com/BriArsement\n🡆 BriannaShorts - https://bit.ly/2VFB6Jv\n\n🡆 FaZe Rug - A Terrifying Night at the Haunted Tunnel.. (ft. Sam & Colby)\nhttps://www.youtube.com/watch?v=MRzVdv2joHE\n\n🡆Matthew Beem - I Built Karl Jacobs A Giant Minecraft Sword!\nhttps://www.youtube.com/watch?v=0WgYO1J2EwE\n\n🡆Chad Wild Clay - LAST TO LEAVE TESLA WINS $10,000 - 24 HOUR OVERNIGHT CHALLENGE AT 3AM\nhttps://www.youtube.com/watch?v=Gc19lBo3Jcs\n\n------------------------------\n\nAdditional music provided by Epidemic Sound\nClick here for a free trial! 🡆 http://share.epidemicsound.com/TBNR",
  //           thumbnails: {
  //             default: {
  //               url: "https://i.ytimg.com/vi/98fnuas8HdQ/default.jpg",
  //               width: 120,
  //               height: 90,
  //             },
  //             medium: {
  //               url: "https://i.ytimg.com/vi/98fnuas8HdQ/mqdefault.jpg",
  //               width: 320,
  //               height: 180,
  //             },
  //             high: {
  //               url: "https://i.ytimg.com/vi/98fnuas8HdQ/hqdefault.jpg",
  //               width: 480,
  //               height: 360,
  //             },
  //           },
  //           channelTitle: "Brianna",
  //           tags: [
  //             "funny",
  //             "comedy",
  //             "challenge",
  //             "family",
  //             "brianna",
  //             "preston",
  //           ],
  //           categoryId: "24",
  //           liveBroadcastContent: "none",
  //           defaultLanguage: "en",
  //           localized: {
  //             title: "BUSTING 50 MYTHS in 50 HOURS!",
  //             description:
  //               "BUSTING 50 MYTHS in 50 HOURS! with Brianna 👊\n\n👕 MERCH - http://www.brimerch.com \n\n👀 FOLLOW ME HERE!\n🡆 Instagram - https://instagram.com/briarsement\n🡆 Twitter - https://twitter.com/BriArsement\n🡆 BriannaShorts - https://bit.ly/2VFB6Jv\n\n🡆 FaZe Rug - A Terrifying Night at the Haunted Tunnel.. (ft. Sam & Colby)\nhttps://www.youtube.com/watch?v=MRzVdv2joHE\n\n🡆Matthew Beem - I Built Karl Jacobs A Giant Minecraft Sword!\nhttps://www.youtube.com/watch?v=0WgYO1J2EwE\n\n🡆Chad Wild Clay - LAST TO LEAVE TESLA WINS $10,000 - 24 HOUR OVERNIGHT CHALLENGE AT 3AM\nhttps://www.youtube.com/watch?v=Gc19lBo3Jcs\n\n------------------------------\n\nAdditional music provided by Epidemic Sound\nClick here for a free trial! 🡆 http://share.epidemicsound.com/TBNR",
  //           },
  //           defaultAudioLanguage: "en",
  //         },
  //         contentDetails: {
  //           duration: "PT8M14S",
  //           dimension: "2d",
  //           definition: "hd",
  //           caption: "false",
  //           licensedContent: true,
  //           contentRating: {},
  //           projection: "rectangular",
  //         },
  //         statistics: {
  //           viewCount: "846180",
  //           likeCount: "26423",
  //           favoriteCount: "0",
  //           commentCount: "1710",
  //         },
  //       },
  //       {
  //         kind: "youtube#video",
  //         etag: "4P9g-LXj7RKKyUrBX2NsUe4bn24",
  //         id: "e7VOQ1l20eo",
  //         snippet: {
  //           publishedAt: "2022-04-24T16:55:45Z",
  //           channelId: "UC8CX0LD98EDXl4UYX1MDCXg",
  //           title: "İYİ GECELER - Fade Agent Trailer // VALORANT",
  //           description:
  //             "Good night, VALORANT Protocol.\n\nFade, VALORANT’s new Turkish Initiator Agent, steps out of the shadows to stalk her prey with equal parts terror and tactics. \n\nVideo made in partnership with Lightfarm Studios.\n\nOriginal track “Karanlığın” by Helin and ARB4.\nLISTEN NOW: https://found.ee/karanligin\n\nFollow Helin\nYouTube: https://www.youtube.com/channel/UCqO8Dr2pMJFexZRikL55Phg\nInstagram: https://www.instagram.com/helinsenturk/\nTwitter: https://twitter.com/helinnsenturk\n\nFollow ARB4\nTwitter: https://twitter.com/ARB4MUSIC\n\n—\nJoin the Discord server: https://riot.com/3n1xltZ\nPlay VALORANT: https://riot.com/3idlntG\n\nFollow us:\nTwitter: https://riot.com/2HIv1s1\nInstagram: https://riot.com/2S8uTnm\n\n\n#VALORANT #FADE #RIOTGAMES",
  //           thumbnails: {
  //             default: {
  //               url: "https://i.ytimg.com/vi/e7VOQ1l20eo/default.jpg",
  //               width: 120,
  //               height: 90,
  //             },
  //             medium: {
  //               url: "https://i.ytimg.com/vi/e7VOQ1l20eo/mqdefault.jpg",
  //               width: 320,
  //               height: 180,
  //             },
  //             high: {
  //               url: "https://i.ytimg.com/vi/e7VOQ1l20eo/hqdefault.jpg",
  //               width: 480,
  //               height: 360,
  //             },
  //             standard: {
  //               url: "https://i.ytimg.com/vi/e7VOQ1l20eo/sddefault.jpg",
  //               width: 640,
  //               height: 480,
  //             },
  //             maxres: {
  //               url: "https://i.ytimg.com/vi/e7VOQ1l20eo/maxresdefault.jpg",
  //               width: 1280,
  //               height: 720,
  //             },
  //           },
  //           channelTitle: "VALORANT",
  //           tags: [
  //             "FADE",
  //             "New Agent",
  //             "Bounty Hunter",
  //             "VALORANT Episode 4",
  //             "Episode IV",
  //             "VALORANT trailer",
  //             "VALORANT",
  //             "VALORANT game",
  //             "valorant act III",
  //             "VALORANT act 3",
  //             "fps",
  //             "shooters",
  //             "tactical FPS",
  //             "launch",
  //             "VALORANT agent",
  //             "AGENT",
  //             "agent",
  //             "Initiator",
  //             "Turkey",
  //           ],
  //           categoryId: "20",
  //           liveBroadcastContent: "none",
  //           localized: {
  //             title: "İYİ GECELER - Fade Agent Trailer // VALORANT",
  //             description:
  //               "Good night, VALORANT Protocol.\n\nFade, VALORANT’s new Turkish Initiator Agent, steps out of the shadows to stalk her prey with equal parts terror and tactics. \n\nVideo made in partnership with Lightfarm Studios.\n\nOriginal track “Karanlığın” by Helin and ARB4.\nLISTEN NOW: https://found.ee/karanligin\n\nFollow Helin\nYouTube: https://www.youtube.com/channel/UCqO8Dr2pMJFexZRikL55Phg\nInstagram: https://www.instagram.com/helinsenturk/\nTwitter: https://twitter.com/helinnsenturk\n\nFollow ARB4\nTwitter: https://twitter.com/ARB4MUSIC\n\n—\nJoin the Discord server: https://riot.com/3n1xltZ\nPlay VALORANT: https://riot.com/3idlntG\n\nFollow us:\nTwitter: https://riot.com/2HIv1s1\nInstagram: https://riot.com/2S8uTnm\n\n\n#VALORANT #FADE #RIOTGAMES",
  //           },
  //           defaultAudioLanguage: "en-US",
  //         },
  //         contentDetails: {
  //           duration: "PT1M56S",
  //           dimension: "2d",
  //           definition: "hd",
  //           caption: "true",
  //           licensedContent: true,
  //           contentRating: {},
  //           projection: "rectangular",
  //         },
  //         statistics: {
  //           viewCount: "2047787",
  //           likeCount: "163957",
  //           favoriteCount: "0",
  //           commentCount: "7283",
  //         },
  //       },
  //       {
  //         kind: "youtube#video",
  //         etag: "2TbYLwDBXd63oN3eprcXUcw9Gt8",
  //         id: "Z9b0Hj-BfaM",
  //         snippet: {
  //           publishedAt: "2022-04-24T14:00:11Z",
  //           channelId: "UCx_IoWPI_v4jI230YSvAHWQ",
  //           title:
  //             "[MV] 지민(Jimin) X 하성운(Ha Sung-Woon) - With you | 우리들의 블루스(Our Blues) OST Part 4",
  //           description:
  //             "방탄소년단 지민X하성운, 특급 컬래버 OST 완성! 오늘(24일) 'With you' 발매 \n\n그룹 방탄소년단 지민과 가수 하성운이 호흡을 맞춘 OST가 베일을 벗는다. \n\n'With you'는 사랑하는 사람들의 곁에 있고 싶다는 내용을 담은 곡으로, 어쿠스틱 기타와 피아노의 조화로움이 따뜻함을 불어넣었다. 특히 지민의 감미로운 음색과 하성운의 매력적인 마성의 보이스가 아름다운 하모니를 이뤘고, 화음이 돋보이는 곡을 완성했다. \n\n연예계 절친으로도 유명한 지민과 하성운은 '우리들의 블루스'를 통해 컬래버레이션이 성사됐고, 지민은 처음으로 OST에 참여한 만큼 극의 흐름과 어우러지는 OST로 드라마에 활력을 불어넣을 것으로 기대되고 있다.\n\n'우리들의 블루스'는 삶의 끝자락, 절정 혹은 시작에 서 있는 모든 사람들의 달고도 쓴 인생을 응원하는 드라마다. '그 겨울, 바람이 분다', '괜찮아, 사랑이야', '디어 마이 프렌즈', '라이브(Live)' 등 많은 이들에게 인생작이 된 드라마를 집필한 노희경 작가와 웰메이드 드라마들을 탄생시키며 최고의 호흡을 보여준 김규태 감독이 연출을 맡았으며, 이병헌, 신민아, 차승원, 이정은, 한지민, 김우빈, 김혜자, 고두심, 엄정화 등 대한민국 최정상 배우들이 출연해 열연을 펼치고 있다. \n\ntvN 토일드라마 '우리들의 블루스'는 매주 토, 일요일 밤 9시 10분 방송된다.\n\n#우리들의블루스ost #지민하성운 #Withyou\n\n\n[Credit]\n\nPRODUCER 송동운\n\nLyrics by 지훈 \nComposed by 로코베리\nArranged by 로코베리 \n\nPiano by 안영민\nGuitar by 박신원\nBass by 이재성\nStrings by 로코\nChorus by 배진영\n\nTranslation by COIN\n\nVocal arrangement by Pdogg\nDigital editing by Pdogg\nRecording engineer Pdogg @ Dogg Bounce\n\nRecorded by 권유진 민성수\nMixed by 김현곤 at doobdoob Studio\nMastered by 최효영 at SOUNO\n\nEXECUTIVE PRODUCER (주)냠냠엔터테인먼트 YAMYAM Entertainment",
  //           thumbnails: {
  //             default: {
  //               url: "https://i.ytimg.com/vi/Z9b0Hj-BfaM/default.jpg",
  //               width: 120,
  //               height: 90,
  //             },
  //             medium: {
  //               url: "https://i.ytimg.com/vi/Z9b0Hj-BfaM/mqdefault.jpg",
  //               width: 320,
  //               height: 180,
  //             },
  //             high: {
  //               url: "https://i.ytimg.com/vi/Z9b0Hj-BfaM/hqdefault.jpg",
  //               width: 480,
  //               height: 360,
  //             },
  //           },
  //           channelTitle: "냠냠엔터테인먼트 YAMYAM ENTERTAINMENT",
  //           tags: [
  //             "우리들의 블루스 ost",
  //             "지민",
  //             "하성운",
  //             "With you",
  //             "Jimin",
  //             "Ha Sung-Woon",
  //             "Our Blues",
  //             "MV",
  //             "With you MV",
  //             "뮤직비디오",
  //             "방탄소년단",
  //             "BTS",
  //           ],
  //           categoryId: "10",
  //           liveBroadcastContent: "none",
  //           localized: {
  //             title:
  //               "[MV] 지민(Jimin) X 하성운(Ha Sung-Woon) - With you | 우리들의 블루스(Our Blues) OST Part 4",
  //             description:
  //               "방탄소년단 지민X하성운, 특급 컬래버 OST 완성! 오늘(24일) 'With you' 발매 \n\n그룹 방탄소년단 지민과 가수 하성운이 호흡을 맞춘 OST가 베일을 벗는다. \n\n'With you'는 사랑하는 사람들의 곁에 있고 싶다는 내용을 담은 곡으로, 어쿠스틱 기타와 피아노의 조화로움이 따뜻함을 불어넣었다. 특히 지민의 감미로운 음색과 하성운의 매력적인 마성의 보이스가 아름다운 하모니를 이뤘고, 화음이 돋보이는 곡을 완성했다. \n\n연예계 절친으로도 유명한 지민과 하성운은 '우리들의 블루스'를 통해 컬래버레이션이 성사됐고, 지민은 처음으로 OST에 참여한 만큼 극의 흐름과 어우러지는 OST로 드라마에 활력을 불어넣을 것으로 기대되고 있다.\n\n'우리들의 블루스'는 삶의 끝자락, 절정 혹은 시작에 서 있는 모든 사람들의 달고도 쓴 인생을 응원하는 드라마다. '그 겨울, 바람이 분다', '괜찮아, 사랑이야', '디어 마이 프렌즈', '라이브(Live)' 등 많은 이들에게 인생작이 된 드라마를 집필한 노희경 작가와 웰메이드 드라마들을 탄생시키며 최고의 호흡을 보여준 김규태 감독이 연출을 맡았으며, 이병헌, 신민아, 차승원, 이정은, 한지민, 김우빈, 김혜자, 고두심, 엄정화 등 대한민국 최정상 배우들이 출연해 열연을 펼치고 있다. \n\ntvN 토일드라마 '우리들의 블루스'는 매주 토, 일요일 밤 9시 10분 방송된다.\n\n#우리들의블루스ost #지민하성운 #Withyou\n\n\n[Credit]\n\nPRODUCER 송동운\n\nLyrics by 지훈 \nComposed by 로코베리\nArranged by 로코베리 \n\nPiano by 안영민\nGuitar by 박신원\nBass by 이재성\nStrings by 로코\nChorus by 배진영\n\nTranslation by COIN\n\nVocal arrangement by Pdogg\nDigital editing by Pdogg\nRecording engineer Pdogg @ Dogg Bounce\n\nRecorded by 권유진 민성수\nMixed by 김현곤 at doobdoob Studio\nMastered by 최효영 at SOUNO\n\nEXECUTIVE PRODUCER (주)냠냠엔터테인먼트 YAMYAM Entertainment",
  //           },
  //           defaultAudioLanguage: "zxx",
  //         },
  //         contentDetails: {
  //           duration: "PT3M24S",
  //           dimension: "2d",
  //           definition: "hd",
  //           caption: "false",
  //           licensedContent: true,
  //           contentRating: {},
  //           projection: "rectangular",
  //         },
  //         statistics: {
  //           viewCount: "3914099",
  //           likeCount: "702785",
  //           favoriteCount: "0",
  //           commentCount: "74479",
  //         },
  //       },
  //       {
  //         kind: "youtube#video",
  //         etag: "_5zEpXYrDwgpaARr6oZ1C6Njt8k",
  //         id: "7L4U77mJtl8",
  //         snippet: {
  //           publishedAt: "2022-04-24T11:51:34Z",
  //           channelId: "UC0L1suV8pVgO4pCAIBNGx5w",
  //           title:
  //             "Johnny Depp vs Amber Heard: Who will win Hollywood’s biggest drama? | 60 Minutes Australia",
  //           description:
  //             "Subscribe here: http://9Soci.al/chmP50wA97J Full Episodes: https://9now.app.link/uNP4qBkmN6 | In Too Depp (2022)\n\nIf ever proof was needed that when two stars collide there’s a massive explosion, just look at the court case of Johnny Depp versus his former wife Amber Heard. After only a few days, the trial is already a blockbuster and the critics are raving - mostly in disbelief. Why is the pair exposing the grubby details of their failed marriage? Johnny says his career has been destroyed by a newspaper article Amber wrote about domestic violence, and he’s demanding millions in damages. Amber, not surprisingly, is counter-suing for millions more. But the truth is, in this star war they’ll both pay dearly.\n\nWATCH more of 60 Minutes Australia: https://www.60minutes.com.au \nLIKE 60 Minutes Australia on Facebook: https://www.facebook.com/60Minutes9 \nFOLLOW 60 Minutes Australia on Twitter: https://twitter.com/60Mins \nFOLLOW 60 Minutes Australia on Instagram: https://www.instagram.com/60minutes9\n\nFor forty years, 60 Minutes have been telling Australians the world’s greatest stories. Tales that changed history, our nation and our lives. Reporters Liz Hayes, Tom Steinfort, Tara Brown, Liam Bartlett and Sarah Abo look past the headlines because there is always a bigger picture. Sundays are for 60 Minutes.\n\n#60MinutesAustralia",
  //           thumbnails: {
  //             default: {
  //               url: "https://i.ytimg.com/vi/7L4U77mJtl8/default.jpg",
  //               width: 120,
  //               height: 90,
  //             },
  //             medium: {
  //               url: "https://i.ytimg.com/vi/7L4U77mJtl8/mqdefault.jpg",
  //               width: 320,
  //               height: 180,
  //             },
  //             high: {
  //               url: "https://i.ytimg.com/vi/7L4U77mJtl8/hqdefault.jpg",
  //               width: 480,
  //               height: 360,
  //             },
  //           },
  //           channelTitle: "60 Minutes Australia",
  //           tags: [
  //             "60 Minutes",
  //             "60 Minutes Australia",
  //             "Liz Hayes",
  //             "Tara Brown",
  //             "Liam Bartlett",
  //             "Tom Steinfort",
  //             "Sarah Abo",
  //             "karl stefanovic",
  //             "60Mins",
  //             "#60Mins",
  //             "johnny depp",
  //             "amber heard",
  //             "hollywood",
  //             "pirates of the caribbean",
  //             "jack sparrow",
  //             "movies",
  //             "court",
  //             "drama",
  //             "celebrity",
  //             "gossip",
  //             "abuse",
  //             "law and order",
  //             "rum diaries",
  //             "defamation",
  //           ],
  //           categoryId: "25",
  //           liveBroadcastContent: "none",
  //           localized: {
  //             title:
  //               "Johnny Depp vs Amber Heard: Who will win Hollywood’s biggest drama? | 60 Minutes Australia",
  //             description:
  //               "Subscribe here: http://9Soci.al/chmP50wA97J Full Episodes: https://9now.app.link/uNP4qBkmN6 | In Too Depp (2022)\n\nIf ever proof was needed that when two stars collide there’s a massive explosion, just look at the court case of Johnny Depp versus his former wife Amber Heard. After only a few days, the trial is already a blockbuster and the critics are raving - mostly in disbelief. Why is the pair exposing the grubby details of their failed marriage? Johnny says his career has been destroyed by a newspaper article Amber wrote about domestic violence, and he’s demanding millions in damages. Amber, not surprisingly, is counter-suing for millions more. But the truth is, in this star war they’ll both pay dearly.\n\nWATCH more of 60 Minutes Australia: https://www.60minutes.com.au \nLIKE 60 Minutes Australia on Facebook: https://www.facebook.com/60Minutes9 \nFOLLOW 60 Minutes Australia on Twitter: https://twitter.com/60Mins \nFOLLOW 60 Minutes Australia on Instagram: https://www.instagram.com/60minutes9\n\nFor forty years, 60 Minutes have been telling Australians the world’s greatest stories. Tales that changed history, our nation and our lives. Reporters Liz Hayes, Tom Steinfort, Tara Brown, Liam Bartlett and Sarah Abo look past the headlines because there is always a bigger picture. Sundays are for 60 Minutes.\n\n#60MinutesAustralia",
  //           },
  //           defaultAudioLanguage: "en",
  //         },
  //         contentDetails: {
  //           duration: "PT16M15S",
  //           dimension: "2d",
  //           definition: "hd",
  //           caption: "false",
  //           licensedContent: true,
  //           regionRestriction: {
  //             blocked: ["AU"],
  //           },
  //           contentRating: {},
  //           projection: "rectangular",
  //         },
  //         statistics: {
  //           viewCount: "527738",
  //           likeCount: "7802",
  //           favoriteCount: "0",
  //         },
  //       },
  //     ],
  //     nextPageToken: "CAUQAA",
  //     pageInfo: {
  //       totalResults: 200,
  //       resultsPerPage: 5,
  //     },
  //   })
  // );

  useEffect(() => {
    if (!localStorage.getItem(LOCAL_STORAGE_LATEST_QUERY)) {
      fetch(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyCeQZ_MjmHNlaK67QI5thMNWGhQQHvTK48"
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            console.log("ALERT ANOTHER REQUEST!!!!");
            const resJSON = JSON.stringify(result);
            console.log(result.body, " and ", resJSON);
            setItems(resJSON);
            localStorage.setItem(LOCAL_STORAGE_LATEST_QUERY, resJSON);
          },

          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
    if (localStorage.getItem(LOCAL_STORAGE_LATEST_QUERY)) {
      console.log("RUNNING FROM LOCAL STORAGE INSTEAD OF FETCH");
      setItems(localStorage.getItem(LOCAL_STORAGE_LATEST_QUERY));
      setIsLoaded(true);
    }
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {/* {items.map((item) => (
          <li key={item.id}>
            {item.name} {item.price}
          </li>
        ))} */}
        <>
          {items.items.map((item, i) => {
            // console.log(items);
            return <Video key={item.id.videoId} videoId={item.id} />;
          })}
        </>
      </ul>
    );
  }
}

export default Videos;

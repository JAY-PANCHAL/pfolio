'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "06e8069186a1d970b56d1191755a1b84",
"version.json": "db8990b8a733cdd52065ba1549ba9aa5",
"index.html": "a106b7f7317a1a1b83b4853ab67c2619",
"/": "a106b7f7317a1a1b83b4853ab67c2619",
"main.dart.js": "473170eb948478626fa55b6e61fb93be",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"style.css": "ffba23ff301032bec9a3922e763ddcca",
"manifest.json": "6cbe41637e331ef626d9a50c26f95fc1",
".git/config": "7a6070c3366822ba98a2486ca72243a9",
".git/objects/61/a4406b4509786c4b8e363a4766df786639f511": "0d6bcc17eeffbdfbc07b4765169f5bc3",
".git/objects/0d/a69cc4419e1d04b46cafa74e52156799c74c2c": "47a18a1a8b9cf1ad63fb9313a8332563",
".git/objects/0d/308718ab731c9fdbc5569fd49821e364f1ee89": "a6e140affca14cbbb17e963b6c172285",
".git/objects/3e/068413e1234eb0e4a4f2e74321ba7aa37fd765": "72927d3c8494f83032e5d42375b9c52d",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/3b/dc44fe72e90697772b0c852946ed22a4005d2a": "6420e1469c482d3c1069cb1dbd8fb3cf",
".git/objects/6a/53784e6691f3d7419cd79fcea2995abad577c2": "ab907e7f717e9a4a47e7efdae23e0d76",
".git/objects/6a/a8b0feaca204b59c22cda048d8beeed12e5140": "1f85aec321654eb0c3c8a1458db088a6",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/f5798ee4e4156cedba60e23c4bfe491d294e9f": "f598e47bb4edfbad741bcd2c502d73a3",
".git/objects/69/9f6d0aec1b3a11af730f4d93e181a4aecffebb": "2ed0ee5988c52cb17577b777b947b9ca",
".git/objects/69/0aefba28c529347f7c77c09163e3f39219275b": "0d8b9456dd75fb09ee33f224164f53d6",
".git/objects/51/8cda6b0f1b9ca86b6a53c0d5bcbe69a2558fec": "96741705b01f8489f588de315bbf0b40",
".git/objects/94/9fb2c4eb0269dc81c8541f1493bb2bd38b4616": "c97da158bd17e6fad1da9991010a5bff",
".git/objects/34/833c27dd2c24011235e9cc306c45b8cc5f16bc": "f2e84eace13d987ee1d9c3bff63fd67a",
".git/objects/05/7bbbe0e175a004ab3dec11f0208601a1f54793": "1121167ba82e71762ae8c8057fa5878d",
".git/objects/9d/7a4bc940eb8a36865c1c7dcdc7902be52ca39d": "a842a3dc33e96cf8bb1568b9424df464",
".git/objects/a4/b9a3ec84c6e574d28a1cf1c88e034bd43131d6": "83883ae93e04ba65a2c1c3be76fd4393",
".git/objects/a3/530288a6b4197d39d491c581a9e5720758d613": "ae25ffa6fe28da05d40b6de8bf069f3f",
".git/objects/ac/93ec409566c4585977f7a7645e40741dc5bc5a": "c821506ed2614bebb4b337c893fdf2a6",
".git/objects/d7/5e68c944e982a2d70b995a553b22b4efbca20f": "ebb13f87045d730dcf56e9b81276330c",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/be/a73150dc4cb715ca697e24ce4613934ca849a0": "19aa7877274efcfe6f014e8843beb241",
".git/objects/b3/1a5f1e70491b129d7394da2d805326b3b2e31d": "a46471f0dd3e68a9857481c17ef48f12",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/da/e59c04bbca794f5f2e6c88fab7c31617e6f647": "462b868abee486caa1ad90d6eb2e1388",
".git/objects/bd/789dc4bb3b5fca5c6a9b1e6bcfa734f5c3bc99": "1f7cbca3ee43e3f122beaff6c4c6a944",
".git/objects/d6/5a91d5e5210c1c5655e0ae069928ff7d76cb91": "f580a71072307b717b0f610e071ccea5",
".git/objects/d6/5c1f0cd8273b06bde61e0ab1115e05a7af9928": "ed246b6e21935506a2b2f7991de970fc",
".git/objects/e2/445d7908865994421c0437c1743707fa2b197d": "6937b44d06e05ac80dcf3b033e9372b4",
".git/objects/f3/878270cf03ca69b6d1b7347669a427d53a352a": "1b2749f38b40f0dedd2436bb10d11982",
".git/objects/c7/434efd3b9c1ccf69de72c5cd2c0e53fe15d47f": "92fb2f19ff863788f0081286555523ba",
".git/objects/c7/84f465759a7d98666894d0f85dd900a9649a1f": "75ada33db27ba4bc2823310ed3b129a2",
".git/objects/ee/04e0052e19b2ce03d58c39da9c19ca3b3865e7": "3e203cc0b9d2993e84fbdee614f9fc27",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/253e0e31b58af30a0b134f9d2ebc8e8ab0de1b": "8b688fbf92149e38468b8cbd0329ed01",
".git/objects/cf/5c6053a56840bf1f1e5b80aaae010170cd6047": "f227b5e3557bffc550cb782d7b3473b0",
".git/objects/e4/dbbf390f90a0cf5c7375fd46ce93905ccd3274": "d537d3941eea7563b2febb6b52f68e6d",
".git/objects/fe/474f5624f4d5a2eafa796f8448abba80064827": "7f823d1658ecc467185f520bbfd17931",
".git/objects/c8/59e152f93cb351e3bbdd8c8e1678b150aa8de9": "019a4607a23dcda0952b3a8f5421797d",
".git/objects/4e/693066e41c7a2a955b4ea688ec8316b582ae66": "d835dcabd608989e1593a241fd027d3f",
".git/objects/27/575e843491ba7edd40846cca2aaab9d8538770": "4f0ce122ad133454fccbe504afa5a051",
".git/objects/27/0254f9b7601dc2fe0506c11add062c26444035": "ce96c284081d5cf7f584a329b30aa42f",
".git/objects/29/9c0c7edfb936d2aeb99963a7ef864bb679d3a9": "7dc492fef71414ae0471c5fcdf165e64",
".git/objects/7c/290126e1ea3fa95932801f8333fb48e61a8ce3": "272b19597064ef7e4869bcfa801e7403",
".git/objects/42/2b7d0351ff080207effed8dff31197d17c4d54": "e0e16e2ba787249bb81f5f0fa4e66acb",
".git/objects/42/9dc745a76846763e6c967539a53bbd00128440": "74c3beba25977a2d372f8b253efe5114",
".git/objects/89/1a11ea3a6733e3122e7ddedcbe0e8de83f36c3": "ff56b565eab0fded341e42c281cfcbc4",
".git/objects/45/c471a1b932f97568077b130426a75e2eee3b74": "7c6868ce5ac5dc7e1e386dd5391b6d83",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/74/20deea863b7f231122bc93ad49999bc6209bfa": "980717e24affc79e883dbb6fca7bc0c7",
".git/objects/28/d8ff9db392c4952e0df56bb89d82471ff6c249": "9cd9805ea54af8eebbbc7617a4b94ea4",
".git/objects/28/f54df7c9bf5a78b7c13ed9f711aa690f971bfb": "74483adb55b65cf3f095709df82c92bf",
".git/objects/17/56bad461cf8d0648b79541eb61b3e396d96fed": "5920442ed26c247359244faf0bccb071",
".git/objects/8f/1f43598ac66665c3c225a95cef177c73010459": "ad017d63bd82eae28d262e89b5c17899",
".git/objects/8a/11c16f728225e49f82ac531d8ed44f8e21146d": "4ea806932c1d9f77dd4d8b2f2bef3007",
".git/objects/21/8a0af48101d5fb3c187636faaea97a506f7635": "24334d4997a1159bf2359afb4090b0f5",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/38/3e5a25104f9f66e6906e86de4c294a463df77a": "37e836e68a864580605ebdac083b6401",
".git/objects/00/6d6f84999fb2e0ca200c570aa9f6579ce44350": "e7b4e1953876fc2abfdfbdc8b8c13594",
".git/objects/00/d73c1f3db0708f12ad5616e15c0417937270cb": "01ec802ef44a94ee588179d5ae4aa404",
".git/objects/6e/42cf7a20da43799537e245f1bf7247757cc8bf": "45409723b139c53bcabdb8b88f704eea",
".git/objects/6e/079f6984098cc53f68a24390936a73a6dcd944": "9860083b26475cb02af305975737a70b",
".git/objects/09/23be25797efe7eec138e57ab5d59a5bbbc297e": "0305b920475a938266850fa6020d96ad",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/30/a2c8aa4d7ff2ffb0ffc4111427227ea825bee6": "c8f8ebbcd746a00ad9224a51534d1eaa",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/39/1fec9fde3eb5394ec7b6c6f14204043c0226bb": "355c3cb0a3afabfa73da1b7763b02595",
".git/objects/99/c2a8e59c92c066009f0ce857ec4f56869fea04": "966cbf48a40ceda883ad4d604866c15b",
".git/objects/52/6be56c0354e6a353ba6d31ddfa137e45b33830": "61c984a861c15358085f29ef04eda254",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/d5/80e92f4de2a59e0040139be3ac2be098e76edd": "fb508ca632d9e573e377c85456faf961",
".git/objects/d2/687dec811932258404c3d4e8008d4bb7dcdd20": "727ccc27dde7c7fd4cb55cbd1b48b3af",
".git/objects/d2/0752ff1368688ff9fa3a6c6ac267b29ccfc4e7": "e1768561565c408fda31c58c0345fdb1",
".git/objects/aa/2ecced38b15e8e5a575778cd98aafee4d96bbf": "fc7384ef8ebdaf062db19df731338185",
".git/objects/b7/4e5891bae9917bd67974bad8e7aa321f1f301f": "045032060c62c15c4b04e90eb33fb962",
".git/objects/b7/edbefc5278eae2dfe2cd3cc0fa83c6c0c447a6": "abfa9120dc9a9d7d0edd70d99d262c5a",
".git/objects/db/ea81209f761246041b1761bce1f60941c8868a": "cfb4e1be6f711da63717ed2a5164b5ef",
".git/objects/a8/94d125caab775939f76d1e4ee12c0d7d2e8e7a": "3e5f0c22c0bbfaca75937c8816ab1e44",
".git/objects/c4/277d2225c8a77a25731b91488878492eb5cfb0": "609da826e04ba04319b4a2644112fd7c",
".git/objects/ea/d57ef283679729612c4a5891c2624cad0ff15f": "c8dd111d60d2d996d97fb8dc20632b1a",
".git/objects/e1/5713b5597e41b588a156ab30a4e78317c98480": "17f1bdc641520402b1cbad7054ffe109",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f7/3205abb64998bccf8d46047ebc362186d531a3": "c71f018d1e77016610f47a957940b7f3",
".git/objects/ff/af01441b71743c340dc73076dedd50cf562bb3": "de04a8fbccaf045c8eee4c55f3b1c23d",
".git/objects/f1/dec2067750d9742fb6ba48422639f8bc542d88": "7b8f2e1e91b9f544efee5e3781d6bdf6",
".git/objects/cb/5e71aad7430b53ef35934f3ad90578f58ca462": "6606508b2f173441dec92f5df8b92411",
".git/objects/ce/59179e66d617e69b72ed932e9f007ebf933c76": "a35583a0eda44b296238e1b3fe37808e",
".git/objects/2c/14dd7555f5de27614afc1781817f104bfb1707": "3416a5ea3eb27fbd140fcac37a2f16a2",
".git/objects/79/7cedbd4e68d622ae4dd8538002f68eeafb3501": "353bf62e774d4bd9a68874e66ddb184d",
".git/objects/41/28e1d019071b0e465a63578b707892017c3000": "ceec4e2ed9288c4445c950b1a9451d70",
".git/objects/1b/0edfa134bff1b978db9c867deb2566ec309bcb": "9630197ccf22bbf9cac955fc33c549af",
".git/objects/48/2cba064f2b84709764e9156a698464d087910a": "71d573d11fff00ab875eb2e83e6d56e5",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/8d/b42df00eace87047cf1b766741ebe59b3d7bf2": "586a6e0a5c9f1e51a833d1d4ca3ee4ba",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/76/2fc9d986c42cf51a90729cd579c455680180b8": "8ab48c82e348431f15505d3d0bff2a2f",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/2b/8b658355da59697e17ce72946d1f9bb1642631": "2f99c7ac4029a658db41e0ccc9a6346b",
".git/objects/78/749644f89409d30a7dbb22b476ab4e485a4625": "b88627d442c92ae5b7cfd48bc9068d88",
".git/objects/8b/6b1a11515abd7a15e24ce4823e776d2012c6ae": "52de3d71929db662133321cb064f405f",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "61c7d533a8798abb5df744fa4844def9",
".git/logs/refs/heads/main": "ce5f8c3ef40fe22c197fdd65c5fb596d",
".git/logs/refs/remotes/origin/main": "04a25fda4581d38f0bd3eadbb1181aaf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "49a1f0b0b1dd19d9b640d27ad8aed896",
".git/refs/remotes/origin/main": "49a1f0b0b1dd19d9b640d27ad8aed896",
".git/index": "894c2962ec5d4bba6852c2f5b8a8eec8",
".git/COMMIT_EDITMSG": "2796bf48df1007486e9868334b816545",
"assets/AssetManifest.json": "38f28e9735e2f67e35554c888be23df6",
"assets/NOTICES": "6cb1b9f63dcb267a2b6e513f680dd00f",
"assets/FontManifest.json": "f0f4be009d67b49f6afb66286f706923",
"assets/AssetManifest.bin.json": "a98d7755a5ec4842e5a6588fd626be09",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ea5fe44237c0d626944eb27271a689f8",
"assets/fonts/MaterialIcons-Regular.otf": "26ece5be8a8d6a5a31d2504092e10d51",
"assets/assets/experience/GDSC.png": "a144476dba333629f9a232e8c7cd64bf",
"assets/assets/experience/coding-ninjas.png": "5b94a7d8ef90a9b60a3967745e044778",
"assets/assets/experience/ekko.png": "465a59cd0ceb084c32ff599c728168b1",
"assets/assets/experience/constant/experience.png": "8f6a768aa1f3a803088eff838313f7b0",
"assets/assets/experience/rcctechz.png": "40de2922a15538d96a1210fd9eb8457c",
"assets/assets/experience/opensource.png": "997db9ffb7f57a2c0ef1323c6056c44b",
"assets/assets/experience/credanic.png": "27b5605cf2f3291e4cfe71f4f97daaf2",
"assets/assets/portfolio.json": "902d12f4d67caef92912e0b70820257b",
"assets/assets/home/constant/email.png": "b4ac60cde3dabbe4bc1b8b7c88dc4585",
"assets/assets/home/constant/link.png": "6bd16f15b5c2d30c08557a84b776f3a6",
"assets/assets/home/constant/instagram.png": "6a5e75ccceace8a900c3ca017bb5933b",
"assets/assets/home/constant/github.png": "9b1ceae0aa31486938531880614681a3",
"assets/assets/home/constant/medium.png": "5a77eaa1f4fc98e76a2129c5ebaa119a",
"assets/assets/home/constant/leetcode.png": "b76f662706530971dccaf8281a0acc45",
"assets/assets/home/constant/twitter.png": "babebb599190a8bd5bb5417e4f7fdcad",
"assets/assets/home/constant/linkedin.png": "f23f5409fa61de28d92d02527411c140",
"assets/assets/home/constant/stackoverflow.png": "c9fe76704b498db68c7d263216b9e680",
"assets/assets/home/constant/facebook.png": "9c8bf990645fc6189df6caedab34628c",
"assets/assets/projects/constant/forks.png": "84f1baf0bcf3b4cf3ea5edb36548e069",
"assets/assets/projects/constant/stars.png": "449614124a2ef5910c35e1e9d62aec5e",
"assets/assets/education/kssbm.png": "fd46728e937f7c80500e4bc33e3cb551",
"assets/assets/education/gitaram.png": "e0c528ff1e67d954a6039ce204c38c8f",
"assets/assets/education/rcciit.png": "e549f157d5783656caeb1f605259b897",
"assets/assets/education/constant/education.png": "1ebc9c3cdde631ddd2f356001c79eceb",
"assets/assets/education/stxaviers.png": "54936ceae932c0337c5c4096d2bf6037",
"assets/assets/what_i_do/git.png": "2f2db226d2f03acc82b77c7fe652fd3b",
"assets/assets/what_i_do/python.png": "d464079775fdeabf0ffb1323b2a02d2c",
"assets/assets/what_i_do/flutter.png": "5b26614dbdbcf4b3ecb80bed00ad3702",
"assets/assets/what_i_do/cpp.png": "efeec8be519a45426ed24cd91b86fc53",
"assets/assets/what_i_do/bash.png": "8aec2de4c0634c93202ec36d7ac4a5de",
"assets/assets/what_i_do/firebase.png": "5b634ec4dba0bb8b6372c0bf45d73ff3",
"assets/assets/what_i_do/java.png": "53b82a97cf4e13fac807691e7b0be082",
"assets/assets/what_i_do/android.png": "34342746c0a2cccffc89218f7b072596",
"assets/assets/what_i_do/linux.png": "0dda41d21f571add8b3a558c9914c8ff",
"assets/assets/what_i_do/constant/checklist-light.png": "c6a80a3ff27e7db249fb88159383f74d",
"assets/assets/what_i_do/constant/checklist.png": "bce0e7781492fe752297f8369c666494",
"assets/assets/what_i_do/c.png": "9f6665a404d1b2384b4a90419ad08fd2",
"assets/assets/fonts/SourceCodePro-SemiBold.ttf": "420d3580f5b6e63ba1eabb8555b5f6cf",
"assets/assets/fonts/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/assets/fonts/FjallaOne-Regular.ttf": "4fa3683005fa20dd058f47b9cfd411df",
"assets/assets/contact_me/constant/location-dark.png": "08a65e7c79b85fbcb40e8fce00953e47",
"assets/assets/contact_me/constant/location.png": "dbc10b089546daaee5c45d9bb754f989",
"assets/assets/contact_me/constant/picture.png": "1a817a95a42d8c43031378d122a05ffe",
"assets/assets/contact_me/picture.png": "13a4b677d9fa726efd9e771189222bf5",
"assets/assets/contact_me/profile1.png": "97478606e8ee45ae2a00ccd8f0a1eb04",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

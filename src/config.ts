import { LinkGroup } from "./components/LinkBox";
import { SearchEngine } from "./components/SearchBox";
import { ShortcutProps } from "./components/Shortcut";

// 搜素引擎
export const SEARCH_ENGINES:SearchEngine[] = [
    {
        label: 'Google',
        action: (text:string) => {
            window.open(`https://www.google.com/search?q=${encodeURIComponent(text)}`);
        }
    },

    {
        label: 'Bing',
        action: (text:string) => {
            window.open(`https://www.bing.com/search?q=${encodeURIComponent(text)}`)
        }
    },
]

// 快捷方式
export const SHORTCUTS:ShortcutProps[] = [
    {
        label: "GitHub",
        url: "https://github.com",
        icon: '/logo/github.svg',
    },

    {
        label: "Qt Theme",
        url: "https://xplanc.org/QtTheme",
        icon: 'https://xplanc.org/QtTheme/icon.svg',
    },

    {
        label: "Primers",
        url: "https://xplanc.org/primers",
        icon: 'https://xplanc.org/primers/icon.svg',
    },

    {
        label: "Shift",
        url: "https://xplanc.org/shift",
        icon: 'https://xplanc.org/shift/favicon.svg',
    },
]

// 推荐链接
export const LINKS:LinkGroup[] = [
    {
        label: '知识',
        items: [
            {
                label: 'Wiki',
                url: 'https://www.wikipedia.org/'
            },

            {
                label: 'WolframAlpha',
                url: 'https://www.wolframalpha.com/'
            },

            {
                label: 'Stack Overflow',
                url: 'https://stackoverflow.com/'
            },

            {
                label: '知乎',
                url: 'https://www.zhihu.com/'
            }
        ]
    },

    {
        label: '开源',
        items: [
            {
                label: 'GitHub',
                url: 'https://github.com'
            },

            {
                label: 'Freedesktop',
                url: 'https://gitlab.freedesktop.org/'
            },
        ]
    },

    {
        label: '文档',
        items: [
            {
                label: 'MDN',
                url: 'https://developer.mozilla.org/'
            },

            {
                label: 'Rust',
                url: 'https://doc.rust-lang.org/stable/',
                color: 'coral'
            },

            {
                label: 'C++',
                url: 'https://en.cppreference.com/w/'
            },

            {
                label: 'Python',
                url: 'https://docs.python.org/',
                color: 'cornflowerblue'
            },

            {
                label: 'Go',
                url: 'https://go.dev/doc/',
            },

            {
                label: 'Kotlin',
                url: 'https://kotlinlang.org/docs/home.html'
            }
        ]
    },

    {
        label: '教程',
        items: [
            {
                label: 'Python',
                url: 'https://xplanc.org/primers/document/zh/02.Python',
                color: 'cornflowerblue'
            },
        ]
    },

    {
        label: '练习',
        items: [
            {
                label: 'Leet Code',
                url: 'https://leetcode.com/',
            },

            {
                label: 'Shift',
                url: 'http://xplanc.org/shift',
                color: 'deepskyblue'
            },

            {
                label: 'Kaggle',
                url: 'https://www.kaggle.com/',
            },
        ]
    },

    {
        label: 'AI',
        items: [
            {
                label: 'ChatGPT',
                url: 'https://chatgpt.com/'
            },

            {
                label: 'DeepSeek',
                url: 'https://www.deepseek.com/'
            },
        ]
    },

    {
        label: '视频',
        items: [
            {
                label: '哔哩哔哩',
                url: 'https://www.bilibili.com/'
            },

            {
                label: 'AcFun',
                url: 'https://www.acfun.cn/'
            },
        ]
    },

    {
        label: '游戏',
        items: [
            {
                label: 'Steam',
                url: 'https://store.steampowered.com/'
            },

            {
                label: 'EPIC',
                url: 'https://store.epicgames.com/',
            },

            {
                label: '4399',
                url: 'https://www.4399.com/'
            },

            {
                label: '7k7k',
                url: 'https://www.7k7k.com/'
            }
        ]
    },

    {
        label: '网盘',
        items: [
            {
                label: 'Google Drive',
                url: 'https://drive.google.com/'
            },

            {
                label: '百度网盘',
                url: 'https://pan.baidu.com'
            },

            {
                label: 'Filemail',
                url: 'https://www.filemail.com/'
            }
        ]
    },
]
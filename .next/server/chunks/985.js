exports.id = 985;
exports.ids = [985];
exports.modules = {

/***/ 2603:
/***/ ((module) => {

// Exports
module.exports = {
	"cardGrid": "Service_cardGrid__R46It",
	"card": "Service_card__tBoBP",
	"cardInner": "Service_cardInner__4rTWj",
	"cardFront": "Service_cardFront__8cS84",
	"cardBack": "Service_cardBack__iH8qk",
	"title": "Service_title__iMEV_",
	"role": "Service_role__QzrKJ",
	"date": "Service_date__v7Dif",
	"backTitle": "Service_backTitle__AMPDQ",
	"points": "Service_points__3TJLW",
	"bg1": "Service_bg1__of50p",
	"bg2": "Service_bg2__B0s0G",
	"bg3": "Service_bg3__gdmae",
	"bg4": "Service_bg4__nGJw2"
};


/***/ }),

/***/ 3986:
/***/ ((module) => {

// Exports
module.exports = {
	"skillsSection": "Skills_skillsSection__649pq",
	"fadeIn": "Skills_fadeIn__7OnZX",
	"container": "Skills_container__tgRmu",
	"sectionTitle": "Skills_sectionTitle__zqzFY",
	"sectionDesc": "Skills_sectionDesc__N2IiM",
	"skillsGrid": "Skills_skillsGrid__QdukL",
	"skillsCol": "Skills_skillsCol__sQE0U",
	"skillBar": "Skills_skillBar__QpWrA",
	"slideInUp": "Skills_slideInUp__LFtMi",
	"label": "Skills_label__6hv5s",
	"percent": "Skills_percent__R_VBc",
	"barWrapper": "Skills_barWrapper__sTC7f",
	"bar": "Skills_bar__y2BK2"
};


/***/ }),

/***/ 4644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const aboutData = {
    designation: "Senior Data Engineer ",
    title: "AI-Driven Data Solutions Architect",
    text: [
        "I\u2019m a data engineer with 4+ years of experience designing scalable pipelines, lakehouses, and analytics platforms across AWS, Azure, and Snowflake.",
        "I specialize in integrating AI (OpenAI, Flask) to automate workflows, drive intelligent reporting, and reduce manual overhead.",
        "From real-time IoT analytics to regulatory dashboards, I build data products that deliver actionable insights and operational efficiency.", 
    ]
};
const About = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "devman_tm_section",
        id: "about",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "devman_tm_about",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "about_inner",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "left",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "image_wrap",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/img/about/8.png",
                                    alt: "About",
                                    style: {
                                        display: "block",
                                        width: "100%",
                                        height: "auto",
                                        position: "relative",
                                        zIndex: 2,
                                        opacity: 1,
                                        borderRadius: "12px"
                                    }
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "right",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "title",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            children: [
                                                `I'm`,
                                                " a ",
                                                aboutData.designation
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            children: aboutData.title
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text",
                                    children: aboutData.text.map((text, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: text
                                        }, i))
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "devman_tm_button",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "anchor",
                                        href: "#portfolio",
                                        children: "View Portfolio"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);


/***/ }),

/***/ 2392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Blog)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/popup/Popup.js
var popup_Popup = __webpack_require__(9780);
;// CONCATENATED MODULE: ./src/components/popup/BlogPopup.js


const BlogPopup = ({ data , open , close  })=>{
    return /*#__PURE__*/ _jsx(Popup, {
        open: open,
        close: close,
        children: /*#__PURE__*/ _jsxs("div", {
            className: "news_popup_informations",
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: "image",
                    children: [
                        /*#__PURE__*/ _jsx("img", {
                            src: "img/thumbs/4-2.jpg",
                            alt: ""
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "main",
                            "data-img-url": data.img,
                            style: {
                                backgroundImage: `url(${data.img})`
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "details",
                    children: [
                        /*#__PURE__*/ _jsx("h3", {
                            children: data.title
                        }),
                        /*#__PURE__*/ _jsx("span", {
                            children: /*#__PURE__*/ _jsx("a", {
                                href: "#",
                                children: data.category
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {})
                    ]
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "text",
                    children: data && data.description && data.description.map((des, i)=>/*#__PURE__*/ _jsx("p", {
                            children: des
                        }, i))
                })
            ]
        })
    });
};
/* harmony default export */ const popup_BlogPopup = ((/* unused pure expression or super */ null && (BlogPopup)));

;// CONCATENATED MODULE: ./src/components/Blog.js


const blogData = [
    {
        title: "Jim Morisson Says when the musics over turn off the light",
        category: "Web Development",
        date: "02 June, 2022",
        author: "John Smith",
        img: "img/news/1.jpg",
        description: [
            "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
            "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line.",
            "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Orido, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.", 
        ]
    },
    {
        title: "Jim Morisson Says when the musics over turn off the light",
        category: "Web Development",
        date: "02 June, 2022",
        author: "John Smith",
        img: "img/news/2.jpg",
        description: [
            "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
            "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line.",
            "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Orido, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.", 
        ]
    },
    {
        title: "Jim Morisson Says when the musics over turn off the light",
        category: "Web Development",
        date: "02 June, 2022",
        author: "John Smith",
        img: "img/news/3.jpg",
        description: [
            "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
            "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line.",
            "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Orido, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.", 
        ]
    }, 
];
const Blog = ()=>{
    const { 0: activeData , 1: setActiveData  } = (0,external_react_.useState)({});
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(false);
    const onClick = (e, blog)=>{
        e.preventDefault();
        setOpen(true);
        setActiveData(blog);
    };
};
/* harmony default export */ const components_Blog = (Blog);


/***/ }),

/***/ 8504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8655);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Contact = ()=>{
    const { 0: mailData , 1: setMailData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        name: "",
        email: "",
        message: ""
    });
    const { name , email , message  } = mailData;
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const onChange = (e)=>setMailData({
            ...mailData,
            [e.target.name]: e.target.value
        });
    const onSubmit = (e)=>{
        e.preventDefault();
        if (name.length === 0 || email.length === 0 || message.length === 0) {
            setError(true);
            clearError();
        } else {
            emailjs_com__WEBPACK_IMPORTED_MODULE_1___default().send("", "", mailData, "" // user ID
            ).then(()=>{
                setError(false);
                clearError();
                setMailData({
                    name: "",
                    email: "",
                    message: ""
                });
            }, (err)=>console.log(err.text));
        }
    };
    const clearError = ()=>{
        setTimeout(()=>{
            setError(null);
        }, 2000);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "devman_tm_section",
        id: "contact",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "two_panel_contact",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "contact_info",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: "Contact Info"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "icon-location orangeText"
                                            }),
                                            "Tampa, FL"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "icon-mail-1 greenText"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "mailto:bharathwazkalamsetti@gmail.com",
                                                children: "bharathwazkalamsetti@gmail.com"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "icon-phone purpleText"
                                            }),
                                            "+1 716-939-6955"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "contact_form_wrapper",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: "Drop Me a Line"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                onSubmit: onSubmit,
                                className: "contact_form",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: error ? "empty_notice" : "returnmessage",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: error ? "Please Fill Required Fields" : "Your message has been received, We will contact you soon."
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        name: "name",
                                        placeholder: "Name",
                                        onChange: onChange,
                                        value: name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "email",
                                        name: "email",
                                        placeholder: "Email",
                                        onChange: onChange,
                                        value: email
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                        name: "message",
                                        placeholder: "Your message",
                                        onChange: onChange,
                                        value: message
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "submit",
                                        value: "Send Message"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);


/***/ }),

/***/ 2105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Copyright = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "devman_tm_section",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "devman_tm_copyright",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "inner",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "left wow fadeInLeft",
                            "data-wow-duration": "1s",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "Developed with love by",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://themeforest.net/user/codeefly",
                                        rel: "noreferrer",
                                        target: "_blank",
                                        children: "bharathwazkalamsetti"
                                    }),
                                    " ",
                                    "\xa9 ",
                                    new Date().getFullYear()
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "right wow fadeInRight",
                            "data-wow-duration": "1s",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#",
                                            children: "Terms & Condition"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#",
                                            children: "Privacy Policy"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Copyright);


/***/ }),

/***/ 6774:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(609);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6882);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__);



const Counter = ({ end , decimals  })=>{
    return /*#__PURE__*/ _jsx(CountUp, {
        end: end,
        duration: 2,
        decimals: decimals || 0,
        children: ({ countUpRef , start  })=>/*#__PURE__*/ _jsx(ReactVisibilitySensor, {
                onChange: start,
                delayedCall: true,
                children: /*#__PURE__*/ _jsx("span", {
                    ref: countUpRef
                })
            })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Counter)));


/***/ }),

/***/ 4567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1917);
/* harmony import */ var _Counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6774);


const counterData = [
    {
        smallVlaue: true,
        value: 120,
        name: "Digital\nProducts"
    },
    {
        smallVlaue: true,
        value: 40,
        name: "Open Source\nProjects"
    },
    {
        smallVlaue: false,
        value: 10,
        name: "Lines of \nCode"
    }, 
];
const CounterSection = ()=>{};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CounterSection);


/***/ }),

/***/ 751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Features = ()=>{
    const features_list = [
        {
            title: "Dedication",
            icon: "img/svg/design.svg",
            text: "Committed to delivering reliable, scalable data solutions that drive real-world impact through automation, accuracy, and intelligent design."
        },
        {
            title: "Smart Work",
            icon: "img/svg/development.svg",
            text: "I focus on automation, AI integration, and optimized data pipelines to reduce manual effort and boost efficiency\u2014working smarter to deliver faster, more impactful results."
        },
        {
            title: "Intelligence",
            icon: "img/svg/landing.svg",
            text: "I design data systems that not only process information but also enable smart insights, powering informed decisions through AI, analytics, and automation."
        }, 
    ];
    const { 0: activeIndex , 1: setActiveIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const interval = setInterval(()=>{
            setActiveIndex((prev)=>(prev + 1) % features_list.length);
        }, 2000);
        return ()=>clearInterval(interval);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "devman_tm_section",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "devman_tm_features",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "features_carousel_wrapper",
                    children: [
                        features_list.map((feature, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `carousel_card ${i === activeIndex ? "active" : "inactive"}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "short",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "carousel_title",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    children: feature.title
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "carousel_icon",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "svg",
                                                    src: feature.icon,
                                                    alt: feature.title
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "carousel_text",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: feature.text
                                        })
                                    })
                                ]
                            }, i)),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "carousel_dots",
                            children: features_list.map((_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: `dot ${i === activeIndex ? "active" : ""}`,
                                    onClick: ()=>setActiveIndex(i)
                                }, i))
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Features);


/***/ }),

/***/ 3791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6774);


const homeData = {
    firstName: "Bharathwaz",
    lastName: "Kalamsetti",
    designation: "Senior Data Engineer",
    address: "Tampa, FL ",
    img: "img/hero/6.png",
    bio: "Experienced Data Engineer specializing in scalable cloud pipelines, AI automation, and data visualization for actionable business insights.",
    numberOfProject: 9,
    numberofyear: 4
};
const Home = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "devman_tm_section",
        id: "home",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "devman_tm_hero",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "background",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "image",
                        "data-img-url": "img/hero/5.PNG"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "content",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "left",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "inner",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "hello"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                className: "name gradient-name",
                                                children: [
                                                    homeData.firstName,
                                                    " ",
                                                    homeData.lastName
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                className: "job",
                                                children: [
                                                    homeData.designation,
                                                    " from ",
                                                    homeData.address
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text",
                                                children: homeData.bio
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "buttons",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "devman_tm_button",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "img/cv/RESUME_BHARATHWAZKALAMSETTI_DE.pdf",
                                                            download: true,
                                                            children: "Download Cv"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "simple_button",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            className: "anchor",
                                                            href: "#about",
                                                            children: "About Me"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "stroke_1",
                                        children: homeData.firstName
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "stroke_2",
                                        children: homeData.lastName
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "right",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "profile-image-wrapper",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: homeData.img,
                                        alt: "Profile"
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ }),

/***/ 4739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Partners = ({ dark  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "devman_tm_section",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "devman_tm_partners",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "partners_inner",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "list_inner",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://www.arceriecounty.org",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "devman_tm_full_link",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "wow fadeIn",
                                            "data-wow-duration": "1s",
                                            src: `img/partners/${dark ? "light" : "dark"}/arc.png`,
                                            alt: "Arc Erie County Logo"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "list_inner",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://www.hcltech.com",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "devman_tm_full_link",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "wow fadeIn",
                                            "data-wow-duration": "1s",
                                            "data-wow-delay": "0.2s",
                                            src: `img/partners/${dark ? "light" : "dark"}/hcl.png`,
                                            alt: "HCL Technologies Logo"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "list_inner",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://www.softtek.com",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "devman_tm_full_link",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "wow fadeIn",
                                            "data-wow-duration": "1s",
                                            "data-wow-delay": "0.4s",
                                            src: `img/partners/${dark ? "light" : "dark"}/Softtek.JPEG`,
                                            alt: "Softtek Logo"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "list_inner",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://www.buffalo.edu",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "devman_tm_full_link",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "wow fadeIn",
                                            "data-wow-duration": "1s",
                                            "data-wow-delay": "0.6s",
                                            src: `img/partners/${dark ? "light" : "dark"}/buffalo.png`,
                                            alt: "University at Buffalo Logo"
                                        })
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Partners);


/***/ }),

/***/ 2280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Portfolio)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/popup/Popup.js
var Popup = __webpack_require__(9780);
;// CONCATENATED MODULE: ./src/components/popup/DetailsPopup.js


const DetailsPopup = ({ open , close  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Popup/* default */.Z, {
        open: open,
        close: close,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "popup_details",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "top_image",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "img/thumbs/4-2.jpg",
                            alt: ""
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "main",
                            "data-img-url": "img/portfolio/4.jpg",
                            style: {
                                backgroundImage: 'url("img/portfolio/4.jpg")'
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "portfolio_main_title",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Mockup Phone"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                onClick: (e)=>e.preventDefault(),
                                children: "Details"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "main_details",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "textbox",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "Mockups are useful both for the creative phase of the project - for instance when ",
                                        `you're`,
                                        " trying to figure out your user flows or the proper visual hierarchy - and the production phase when they phase when they will represent the target product. Building mockups strikes the ideal balance ease of modification."
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "detailbox",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "first",
                                                children: "Client"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Alvaro Morata"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "first",
                                                children: "Category"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: "Detail"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "first",
                                                children: "Date"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "April 22, 2022"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "additional_images",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "list_inner",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "my_image",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "img/thumbs/4-2.jpg",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "main",
                                                "data-img-url": "img/service/1.jpg"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "list_inner",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "my_image",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "img/thumbs/4-2.jpg",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "main",
                                                "data-img-url": "img/service/2.jpg"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "list_inner",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "my_image",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "img/thumbs/4-2.jpg",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "main",
                                                "data-img-url": "img/service/3.jpg"
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const popup_DetailsPopup = (DetailsPopup);

;// CONCATENATED MODULE: ./src/components/Portfolio.js



const Portfolio = ()=>{
    const { 0: popup , 1: setPopup  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(popup_DetailsPopup, {
                open: popup,
                close: ()=>setPopup(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "devman_tm_section",
                id: "portfolio",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "devman_tm_portfolio",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "devman_tm_main_title",
                                "data-text-align": "center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        style: {
                                            color: "#f97316",
                                            fontWeight: "600",
                                            marginBottom: "40px"
                                        },
                                        children: "Projects"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        style: {
                                            fontSize: "36px",
                                            fontWeight: "700",
                                            margin: "10px 0"
                                        },
                                        children: "My Amazing Works"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        style: {
                                            color: "#444",
                                            maxWidth: "800px",
                                            margin: "0 auto",
                                            fontSize: "16px",
                                            lineHeight: "1.6"
                                        },
                                        children: "My projects showcase end-to-end data engineering solutions featuring cloud-native pipelines, real-time processing, and AI-powered automation. Built with tools like Apache Spark, AWS Glue, Power BI, and Python, they highlight my ability to transform raw data into insights and support impactful decision-making."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "portfolio_list",
                                style: {
                                    marginTop: "60px"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "40px"
                                        },
                                        children: [
                                            {
                                                title: "AI-Powered Document Summarization & Workflow Automation",
                                                tools: [
                                                    "Python",
                                                    "OpenAI API",
                                                    "Flask",
                                                    "Azure Blob",
                                                    "SharePoint",
                                                    "Power BI"
                                                ],
                                                description: "Built a microservice with OpenAI and Flask to auto-summarize documents, integrate SharePoint and Azure storage, and track adoption via Power BI dashboards.",
                                                image: "/img/portfolio/8.png"
                                            },
                                            {
                                                title: "Enterprise Data Intelligence Portal with Power BI",
                                                tools: [
                                                    "Power BI",
                                                    "SQL Server",
                                                    "Azure Synapse",
                                                    "DAX",
                                                    "Excel"
                                                ],
                                                description: "Consolidated HR, finance, and operations data into Azure Synapse and built 30+ interactive Power BI dashboards for department-specific insights and leadership reporting.",
                                                image: "/img/portfolio/14.png"
                                            }, 
                                        ].map((project, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "wow fadeInUp",
                                                "data-wow-duration": "1s",
                                                style: {
                                                    backgroundColor: "#1e1e2f",
                                                    borderRadius: "16px",
                                                    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                                                    overflow: "hidden",
                                                    transition: "transform 0.3s ease"
                                                },
                                                onMouseEnter: (e)=>e.currentTarget.style.transform = "scale(1.02)",
                                                onMouseLeave: (e)=>e.currentTarget.style.transform = "scale(1)",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "list_inner",
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "column"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "background_image",
                                                            style: {
                                                                height: "260px",
                                                                backgroundSize: "cover",
                                                                backgroundPosition: "center",
                                                                backgroundImage: `url(${project.image})`
                                                            }
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "content",
                                                            style: {
                                                                padding: "24px"
                                                            },
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "details",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                        className: "title",
                                                                        style: {
                                                                            fontSize: "24px",
                                                                            fontWeight: "700",
                                                                            color: "#f59e0b",
                                                                            marginBottom: "20px"
                                                                        },
                                                                        children: project.title
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            flexWrap: "wrap",
                                                                            gap: "10px",
                                                                            marginBottom: "20px"
                                                                        },
                                                                        children: project.tools.map((tool, i)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                style: {
                                                                                    backgroundColor: "#ffffff22",
                                                                                    color: "#fff",
                                                                                    padding: "6px 16px",
                                                                                    borderRadius: "20px",
                                                                                    fontSize: "14px",
                                                                                    fontWeight: "500",
                                                                                    backdropFilter: "blur(4px)"
                                                                                },
                                                                                children: tool
                                                                            }, i))
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "project-description",
                                                                        style: {
                                                                            fontSize: "15px",
                                                                            lineHeight: "1.6",
                                                                            color: "#ddd"
                                                                        },
                                                                        children: project.description
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            }, index))
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "shape_1 moving_effect",
                                        "data-direction": "y",
                                        "data-reverse": "yes"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "shape_2 moving_effect",
                                        "data-direction": "y",
                                        "data-reverse": "yes"
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const components_Portfolio = (Portfolio);


/***/ }),

/***/ 4015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Process)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Accordion.js


const accordionData = [
    {
        title: "Work Strategy",
        details: "I design scalable, AI-integrated data pipelines with a focus on automation, accuracy, and compliance\u2014enabling fast, intelligent decision-making through clean, reliable data."
    },
    {
        title: "The Process of Our Work",
        details: "We follow a streamlined, automation-first approach to build scalable, reliable, and insight-driven data solutions."
    },
    {
        title: "Core Value of Development",
        details: "I value clean architecture, automation, and data integrity\u2014building solutions that are scalable, efficient, and aligned with real business goals."
    },
    {
        title: "Desire to Work Hard",
        details: "Driven by curiosity and purpose, I consistently push beyond expectations\u2014committed to solving complex problems with precision, persistence, and pride in every line of code."
    }, 
];
const Accordion = ()=>{
    const { 0: active , 1: setActive  } = (0,external_react_.useState)(null);
    const contentEl = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        setActive(0);
    }, [
        contentEl.current
    ]);
    const onClick = (value)=>value === active ? setActive(null) : setActive(value);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "devman_tm_accordion",
            "data-active": 1,
            "data-type": "accordion",
            style: {
                marginTop: "60px"
            },
            children: accordionData.map((accordion, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `accordion_in ${active == i ? "acc_active" : ""}`,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "acc_head",
                            onClick: ()=>onClick(i),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "plus"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: accordion.title
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `acc_content d-block`,
                            ref: contentEl,
                            style: active === i ? {
                                height: contentEl.current && contentEl.current.scrollHeight
                            } : {
                                height: "0px"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "acc_content_in",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: accordion.details
                                })
                            })
                        })
                    ]
                }, i))
        })
    });
};
/* harmony default export */ const components_Accordion = (Accordion);

;// CONCATENATED MODULE: ./src/components/Process.js


const Process = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "devman_tm_section",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "devman_tm_process",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "process_inner",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "left",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "devman_tm_main_title",
                                "data-text-align": "left",
                                style: {
                                    marginTop: "60px"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Turning Data Into Decisions"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Passion for Building Intelligent, Scalable Solutions"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "With a strong foundation in data engineering, cloud platforms, and AI integration, I create automated, high-impact systems that streamline workflows, enhance reporting, and drive smarter business outcomes."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "right",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "acc_holder",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_Accordion, {})
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const components_Process = (Process);


/***/ }),

/***/ 3046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Service_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2603);
/* harmony import */ var _Service_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Service_module_css__WEBPACK_IMPORTED_MODULE_1__);


const serviceData = [
    {
        name: "Arc Erie County, Buffalo, NY",
        role: "Senior Data Engineer",
        year: "Jan 2025 \u2013 Present",
        highlights: [
            "Built AWS pipelines improving accuracy to 99.7%",
            "Automated ETL with Airflow, reduced reporting time by 50%", 
        ]
    },
    {
        name: "HCL Technologies - Remote",
        role: "Data Engineer",
        year: "Jan 2024 - Dec 2024",
        highlights: [
            "Migrated 40+ ETL jobs to AWS Glue and Spark",
            "Built Power BI dashboards, reduced compute costs by 30%", 
        ]
    },
    {
        name: "Softtek, Bangalore, India",
        role: "Data Engineer",
        year: "Aug 2020 \u2013 Dec 2023",
        highlights: [
            "Processed 6TB+ daily healthcare data with Spark",
            "Integrated into Snowflake, reduced ETL runtime by 40%", 
        ]
    },
    {
        name: "Education",
        role: "",
        year: "",
        highlights: [
            "M.S. in Data Science \u2013 University at Buffalo, SUNY",
            "B.Tech \u2013 Chennai Institute of Technology, India", 
        ]
    }, 
];
const Service = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "service",
        className: "devman_tm_section",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "devman_tm_main_title",
                    "data-text-align": "center",
                    style: {
                        marginBottom: 50
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            style: {
                                fontSize: 30,
                                fontWeight: 600
                            },
                            children: "Experience"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: "Projects, Roles & Education That Shaped My Career"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "From AI-driven pipelines to automating ETL and improving compliance \u2014 here\u2019s how I build scalable, impactful data solutions."
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_1___default().cardGrid),
                    children: serviceData.map((item, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_1___default().cardInner),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `${(_Service_module_css__WEBPACK_IMPORTED_MODULE_1___default().cardFront)} ${(_Service_module_css__WEBPACK_IMPORTED_MODULE_1___default())["bg" + (idx + 1)]}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_1___default().title),
                                                children: item.name
                                            }),
                                            item.role && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_1___default().role),
                                                children: item.role
                                            }),
                                            item.year && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_1___default().date),
                                                children: item.year
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_1___default().cardBack),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_1___default().backTitle),
                                                children: "Highlights"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_1___default().points),
                                                children: item.highlights.map((point, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: point
                                                    }, i))
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, idx))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Service);


/***/ }),

/***/ 2318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Skills_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3986);
/* harmony import */ var _Skills_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Skills_module_css__WEBPACK_IMPORTED_MODULE_1__);


const skillsLeft = [
    {
        label: "Apache Spark",
        percent: 95
    },
    {
        label: "Python",
        percent: 90
    },
    {
        label: "AWS (Glue, Redshift, S3)",
        percent: 90
    },
    {
        label: "Power BI",
        percent: 85
    },
    {
        label: "SQL",
        percent: 85
    }, 
];
const skillsRight = [
    {
        label: "Airflow",
        percent: 80
    },
    {
        label: "Delta Lake",
        percent: 80
    },
    {
        label: "Snowflake",
        percent: 75
    },
    {
        label: "Azure Synapse & Data Factory",
        percent: 75
    },
    {
        label: "Data Governance & Compliance",
        percent: 70
    }, 
];
const SkillBar = ({ label , percent  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Skills_module_css__WEBPACK_IMPORTED_MODULE_1___default().skillBar),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Skills_module_css__WEBPACK_IMPORTED_MODULE_1___default().label),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: label
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: (_Skills_module_css__WEBPACK_IMPORTED_MODULE_1___default().percent),
                        children: [
                            percent,
                            "%"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Skills_module_css__WEBPACK_IMPORTED_MODULE_1___default().barWrapper),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_Skills_module_css__WEBPACK_IMPORTED_MODULE_1___default().bar),
                    style: {
                        width: `${percent}%`
                    }
                })
            })
        ]
    });
};
const Skills = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: (_Skills_module_css__WEBPACK_IMPORTED_MODULE_1___default().skillsSection),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_Skills_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: (_Skills_module_css__WEBPACK_IMPORTED_MODULE_1___default().sectionTitle),
                    children: "My Skills"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: (_Skills_module_css__WEBPACK_IMPORTED_MODULE_1___default().sectionDesc),
                    children: "I specialize in scalable data pipelines, cloud infrastructure, and modern analytics platforms with automation."
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_Skills_module_css__WEBPACK_IMPORTED_MODULE_1___default().skillsGrid),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_Skills_module_css__WEBPACK_IMPORTED_MODULE_1___default().skillsCol),
                            children: skillsLeft.map((skill)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SkillBar, {
                                    ...skill
                                }, skill.label))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_Skills_module_css__WEBPACK_IMPORTED_MODULE_1___default().skillsCol),
                            children: skillsRight.map((skill)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SkillBar, {
                                    ...skill
                                }, skill.label))
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skills);


/***/ }),

/***/ 9780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useClickOutside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8332);


const Popup = ({ open , close , children  })=>{
    let domNode = (0,_useClickOutside__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(()=>{
        close();
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `devman_tm_modalbox ${open ? "opened" : ""}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "box_inner",
            ref: domNode,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "close",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "c-pointer",
                        onClick: ()=>close(),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "icon-cancel"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "description_wrap",
                    children: children
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);


/***/ }),

/***/ 2591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1917);



const Header = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener("scroll", _utilits__WEBPACK_IMPORTED_MODULE_2__/* .stickyNav */ .h4);
        window.addEventListener("scroll", _utilits__WEBPACK_IMPORTED_MODULE_2__/* .scrollSection */ .L7);
        const navLinks = document.querySelectorAll(".anchor_nav li a");
        navLinks.forEach((link)=>{
            link.addEventListener("click", ()=>{
                navLinks.forEach((el)=>el.parentElement.classList.remove("active"));
                link.parentElement.classList.add("active");
            });
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "devman_tm_header",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "header_inner",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "logo",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "light",
                                href: "#",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "img/logo/logo2.png",
                                    alt: "logo"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "dark",
                                href: "#",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "img/logo/logo2.png",
                                    alt: "logo"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "menu",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "anchor_nav",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "current",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#home",
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#about",
                                        children: "About"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#portfolio",
                                        children: "Portfolio"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#service",
                                        children: "Experience"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#contact",
                                        children: "Contact"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "download_cv",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "img/cv/RESUME_BHARATHWAZKALAMSETTI_DE.pdf",
                                        download: true,
                                        children: "Download CV"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 6162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const MobileHeader = ()=>{
    const { 0: toggle , 1: setToggle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "devman_tm_mobile_menu",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mobile_menu_inner",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mobile_in",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "logo",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "img/logo/logo2.png",
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "trigger",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `hamburger hamburger--slider ${toggle ? "is-active" : ""}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "hamburger-box",
                                    onClick: ()=>setToggle(!toggle),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "hamburger-inner"
                                    })
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "dropdown",
                style: {
                    display: toggle ? "block" : "none"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "dropdown_inner",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "anchor_nav",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#home",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#about",
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#portfolio",
                                    children: "Portfolio"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#service",
                                    children: "Experience"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#contact",
                                    children: "Contact"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "download_cv",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "img/cv/Resume_Bharathwaz_HDA.pdf",
                                    download: true,
                                    children: "Download CV"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileHeader);


/***/ }),

/***/ 4108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ScrollTop = ()=>{
    const { 0: visible , 1: setVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleScroll = ()=>{
        if (window.scrollY > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `progressbar ${visible ? "visible" : ""}`,
        onClick: scrollToTop,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "text",
                children: "To Top"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "line"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollTop);


/***/ })

};
;
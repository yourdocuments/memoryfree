/* =========================================================
   SNK IT INSTITUTE — SCRIPT.JS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const chatbot = document.getElementById("chatbot");

    const ushaFloating = document.getElementById("ushaFloating");

    const closeChat = document.getElementById("closeChat");

    const openUshaBanner =
        document.getElementById("openUshaBanner");

    const navUsha =
        document.getElementById("navUsha");

    const year =
        document.getElementById("year");


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* =====================================================
       OPEN USHA CHATBOT
    ===================================================== */

    function openUsha() {

        if (!chatbot) return;

        chatbot.classList.add("active");

        chatbot.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "chat-open"
        );

    }


    /* =====================================================
       CLOSE USHA CHATBOT
    ===================================================== */

    function closeUsha() {

        if (!chatbot) return;

        chatbot.classList.remove("active");

        chatbot.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "chat-open"
        );

    }


    /* =====================================================
       FLOATING USHA BUTTON
    ===================================================== */

    if (ushaFloating) {

        ushaFloating.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                if (
                    chatbot &&
                    chatbot.classList.contains("active")
                ) {

                    closeUsha();

                } else {

                    openUsha();

                }

            }
        );

    }


    /* =====================================================
       USHA BANNER BUTTON
    ===================================================== */

    if (openUshaBanner) {

        openUshaBanner.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                openUsha();

            }
        );

    }


    /* =====================================================
       NAV USHA BUTTON
    ===================================================== */

    if (navUsha) {

        navUsha.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                openUsha();

            }
        );

    }


    /* =====================================================
       CLOSE BUTTON
    ===================================================== */

    if (closeChat) {

        closeChat.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                closeUsha();

            }
        );

    }


    /* =====================================================
       ESC KEY CLOSE
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                chatbot &&
                chatbot.classList.contains("active")
            ) {

                closeUsha();

            }

        }
    );


    /* =====================================================
       CLICK OUTSIDE CHAT
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            if (
                !chatbot ||
                !chatbot.classList.contains("active")
            ) {
                return;
            }


            const clickedInsideChat =
                chatbot.contains(event.target);


            const clickedFloating =
                ushaFloating &&
                ushaFloating.contains(event.target);


            const clickedBanner =
                openUshaBanner &&
                openUshaBanner.contains(event.target);


            const clickedNav =
                navUsha &&
                navUsha.contains(event.target);


            if (
                !clickedInsideChat &&
                !clickedFloating &&
                !clickedBanner &&
                !clickedNav
            ) {

                closeUsha();

            }

        }
    );


    /* =====================================================
       SMOOTH INTERNAL LINKS
    ===================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute("href");


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    const header =
                        document.querySelector(
                            ".site-header"
                        );


                    const promo =
                        document.querySelector(
                            ".promo-bar"
                        );


                    const banner =
                        document.querySelector(
                            ".usha-banner"
                        );


                    let offset = 20;


                    if (header) {
                        offset +=
                            header.offsetHeight;
                    }


                    if (
                        window.innerWidth <= 720 &&
                        promo
                    ) {

                        offset +=
                            promo.offsetHeight;

                    }


                    if (banner) {

                        offset +=
                            banner.offsetHeight;

                    }


                    const targetPosition =
                        target.getBoundingClientRect()
                            .top
                        +
                        window.pageYOffset
                        -
                        offset;


                    window.scrollTo({

                        top: targetPosition,

                        behavior: "smooth"

                    });

                }
            );

        }
    );


    /* =====================================================
       EXTERNAL LINKS
       Keep links working normally.
    ===================================================== */

    const externalLinks =
        document.querySelectorAll(
            'a[target="_blank"]'
        );


    externalLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    this.setAttribute(
                        "rel",
                        "noopener noreferrer"
                    );

                }
            );

        }
    );


    /* =====================================================
       PREVENT DOUBLE CLICK / DOUBLE TAP
       ON BUTTONS
    ===================================================== */

    const actionButtons =
        document.querySelectorAll(
            ".btn, .quick-link, .class-button, .recorded-button, .whatsapp-button, .join-now-btn"
        );


    actionButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    this.classList.add(
                        "clicked"
                    );


                    setTimeout(
                        () => {

                            this.classList.remove(
                                "clicked"
                            );

                        },
                        300
                    );

                }
            );

        }
    );


    /* =====================================================
       PROMO BAR CLICK EFFECT
    ===================================================== */

    const promo =
        document.querySelector(
            ".promo-inner"
        );


    if (promo) {

        promo.addEventListener(
            "click",
            function () {

                promo.classList.add(
                    "promo-clicked"
                );


                setTimeout(
                    function () {

                        promo.classList.remove(
                            "promo-clicked"
                        );

                    },
                    400
                );

            }
        );

    }


    /* =====================================================
       IMAGE ERROR HANDLING
       If an SVG/logo fails to load, keep layout stable.
    ===================================================== */

    const images =
        document.querySelectorAll(
            "img"
        );


    images.forEach(
        function (img) {

            img.addEventListener(
                "error",
                function () {

                    this.classList.add(
                        "image-error"
                    );

                }
            );

        }
    );


    /* =====================================================
       CHATBOT SCROLL
       Keep chat body at top when opened.
    ===================================================== */

    if (chatbot) {

        const chatBody =
            chatbot.querySelector(
                ".chat-body"
            );


        const observer =
            new MutationObserver(
                function () {

                    if (
                        chatbot.classList.contains(
                            "active"
                        ) &&
                        chatBody
                    ) {

                        chatBody.scrollTop = 0;

                    }

                }
            );


        observer.observe(
            chatbot,
            {
                attributes: true,
                attributeFilter: [
                    "class"
                ]
            }
        );

    }


    /* =====================================================
       CONSOLE CHECK
    ===================================================== */

    console.log(
        "SNK IT Institute website loaded successfully."
    );

    console.log(
        "USHA chatbot ready."
    );

    console.log(
        "Shopping Mela:",
        "https://yourdocuments.github.io/shopingmela/"
    );

});
